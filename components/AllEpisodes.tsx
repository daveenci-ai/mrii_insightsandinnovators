
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EpisodeCard from './EpisodeCard';
import { EPISODES } from '../constants';

const TOPICS = ['All', 'AI', 'Leadership', 'Storytelling', 'Innovation', 'Career'] as const;
const PER_PAGE_OPTIONS = [10, 50, 100] as const;

const AllEpisodes: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTopic = TOPICS.includes(searchParams.get('topic') as typeof TOPICS[number])
    ? searchParams.get('topic')!
    : 'All';
  const [activeTopic, setActiveTopic] = useState<string>(initialTopic);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState<number>(10);

  const filteredEpisodes = useMemo(() => {
    let episodes = activeTopic === 'All'
      ? [...EPISODES]
      : EPISODES.filter(ep => ep.topic === activeTopic);

    episodes.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return episodes;
  }, [activeTopic, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filteredEpisodes.length / perPage));
  const paginatedEpisodes = filteredEpisodes.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleTopicChange = (topic: string) => {
    setActiveTopic(topic);
    setCurrentPage(1);
    if (topic === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ topic });
    }
  };

  const handlePerPageChange = (value: number) => {
    setPerPage(value);
    setCurrentPage(1);
  };

  return (
    <section className="py-24 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-primary/10 text-primary font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-4"
          >
            Episode Archive
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Explore All Episodes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Browse the complete archive of Insights & Innovators conversations.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12"
        >
          {/* Topic Pills */}
          <div className="flex flex-wrap gap-2">
            {TOPICS.map(topic => (
              <button
                key={topic}
                onClick={() => handleTopicChange(topic)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTopic === topic
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Sort + Per Page */}
          <div className="flex items-center gap-4">
            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value as 'newest' | 'oldest')}
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>

            <select
              value={perPage}
              onChange={e => handlePerPageChange(Number(e.target.value))}
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              {PER_PAGE_OPTIONS.map(n => (
                <option key={n} value={n}>{n} per page</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Episode Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {paginatedEpisodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <EpisodeCard episode={episode} />
            </motion.div>
          ))}
        </div>

        {paginatedEpisodes.length === 0 && (
          <div className="text-center py-20 text-gray-400 text-lg font-medium">
            No episodes found for this topic.
          </div>
        )}

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center items-center gap-2"
        >
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-600 hover:border-primary/30 hover:text-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} /> Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                currentPage === page
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-600 hover:border-primary/30 hover:text-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next <ChevronRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AllEpisodes;
