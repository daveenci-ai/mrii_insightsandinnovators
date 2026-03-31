
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Globe,
  Radio,
  Heart,
  Share2,
  Youtube,
  Headphones,
  Music,
} from 'lucide-react';
import { useEpisodes } from '../hooks/useEpisodes';

const PLATFORM_LINKS = [
  {
    name: 'Spotify',
    icon: <Music size={18} />,
    color: '#1DB954',
    url: 'https://open.spotify.com/show/4EyJeQzhfWNJaRJDU8i8Cm',
  },
  {
    name: 'Apple Podcasts',
    icon: <Headphones size={18} />,
    color: '#9933CC',
    url: 'https://podcasts.apple.com/us/podcast/insights-innovators-podcast-from-mrii/id1765372856',
  },
  {
    name: 'YouTube',
    icon: <Youtube size={18} />,
    color: '#FF0000',
    url: 'https://www.youtube.com/watch?v=oyg0YR93koQ&list=PL9ZbKlSKSGAWsggyyom2NRoQO1V1_UstK',
  },
  {
    name: 'Amazon Music',
    icon: <Music size={18} />,
    color: '#00A8E1',
    url: 'https://music.amazon.com/podcasts/312fed45-d03e-4553-89c8-12cfb9bab3a2/insights-innovators-podcast-from-mrii',
  },
  {
    name: 'iHeart Radio',
    icon: <Heart size={18} />,
    color: '#C6002B',
    url: 'https://www.iheart.com/podcast/1323-insights-innovators-podca-212284235/',
  },
  {
    name: 'Player FM',
    icon: <Radio size={18} />,
    color: '#F39C12',
    url: 'https://player.fm/series/3597609',
  },
  {
    name: 'Podchaser',
    icon: <Share2 size={18} />,
    color: '#B244D7',
    url: 'https://www.podchaser.com/podcasts/insights-innovators-podcast-fr-5826762',
  },
  {
    name: 'Greenbook Network',
    icon: <Globe size={18} />,
    color: '#1A4A5E',
    url: 'https://www.greenbook.org/podcast-network/insights-innovators-podcast',
  },
];

const EpisodePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { episodes, loading, error } = useEpisodes(100);

  const episode = episodes.find(ep => ep.slug === slug);

  const formattedDate = episode
    ? new Date(episode.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  if (loading) {
    return (
      <section className="py-24 min-h-screen bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 text-gray-400 text-lg font-medium">
          Loading episode...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 min-h-screen bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 text-red-400 text-lg font-medium">
          Unable to load episode. Please try again later.
        </div>
      </section>
    );
  }

  if (!episode) {
    return (
      <section className="py-24 min-h-screen bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Episode Not Found</h1>
          <p className="text-gray-600 mb-8">The episode you're looking for doesn't exist.</p>
          <Link
            to="/allepisodes"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            <ArrowLeft size={18} /> Browse All Episodes
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50/50">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.05] rounded-full" />
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120Z" fill="rgb(249 250 251 / 0.5)" />
            <path d="M0,90 C300,110 600,60 900,90 C1100,105 1300,95 1440,90 L1440,120 L0,120Z" fill="rgb(249 250 251)" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/allepisodes"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold text-sm transition-colors"
            >
              <ArrowLeft size={16} /> All Episodes
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Episode
            </span>
            <span className="flex items-center gap-1.5 text-white/70 text-sm">
              <Calendar size={14} />
              {formattedDate}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-3xl"
          >
            {episode.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-sm font-medium"
          >
            Insights & Innovators Podcast from MRII
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-24">
        {/* Spotify Embed Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden mb-8"
        >
          <div className="p-6 md:p-8">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/show/4EyJeQzhfWNJaRJDU8i8Cm?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
            />
          </div>
        </motion.div>

        {/* Show Notes + Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-gray-100">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 mb-2">Show Notes & Transcript</h2>
              <p className="text-gray-500 text-sm">
                Full episode details, transcript, and resources on the MRII website.
              </p>
            </div>
            <a
              href={episode.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 shrink-0"
            >
              <ExternalLink size={18} />
              View Full Show Notes
            </a>
          </div>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
            Listen & Subscribe
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PLATFORM_LINKS.map(platform => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold text-gray-700 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group"
              >
                <span
                  className="w-7 h-7 rounded-md flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: platform.color }}
                >
                  {React.cloneElement(platform.icon, { size: 14 })}
                </span>
                <span className="group-hover:text-gray-900 transition-colors text-xs">
                  {platform.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* More Episodes */}
        {episodes.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-extrabold text-gray-900">More Episodes</h2>
              <Link
                to="/allepisodes"
                className="text-primary font-bold text-sm hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {episodes
                .filter(ep => ep.id !== episode.id)
                .slice(0, 3)
                .map((ep, index) => (
                  <motion.div
                    key={ep.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Link to={`/episode/${ep.slug}`} className="block group">
                      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={ep.thumbnail}
                            alt={ep.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-gray-900 line-clamp-2 text-sm group-hover:text-primary transition-colors">
                            {ep.title}
                          </h3>
                          <p className="text-xs text-gray-400 mt-2">
                            {new Date(ep.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EpisodePage;
