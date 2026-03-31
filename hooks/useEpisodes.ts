import { useState, useEffect } from 'react';
import { Episode } from '../types';

const WP_API_URL = 'https://mrii.org/wp-json/wp/v2/podcast';

interface WPPodcast {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

function mapWPToEpisode(post: WPPodcast): Episode {
  const thumbnail =
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80';

  return {
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    date: post.date,
    link: post.link,
    thumbnail,
  };
}

export function useEpisodes(perPage: number = 100) {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchEpisodes() {
      try {
        const res = await fetch(
          `${WP_API_URL}?_embed&per_page=${perPage}&orderby=date&order=desc`
        );
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data: WPPodcast[] = await res.json();
        if (!cancelled) {
          setEpisodes(data.map(mapWPToEpisode));
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to fetch episodes');
          setLoading(false);
        }
      }
    }

    fetchEpisodes();
    return () => { cancelled = true; };
  }, [perPage]);

  return { episodes, loading, error };
}
