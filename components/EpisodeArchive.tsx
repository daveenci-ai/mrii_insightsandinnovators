
import React, { useState } from 'react';
import { Search, ChevronRight, Filter } from 'lucide-react';
import { EPISODES } from '../constants';

const EpisodeArchive: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEpisodes = EPISODES.filter(ep => 
    ep.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    ep.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Episode Archive</h2>
            <p className="text-gray-500">Binge our library of insights from the past two years.</p>
          </div>
          
          <div className="relative group max-w-sm w-full">
            <input
              type="text"
              placeholder="Search episodes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-2xl outline-none transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary" size={20} />
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredEpisodes.length > 0 ? (
            filteredEpisodes.map((ep) => (
              <div
                key={ep.id}
                className="group flex items-center justify-between p-4 sm:p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 sm:gap-6 flex-1">
                  <div className="hidden sm:flex w-12 h-12 bg-gray-50 rounded-lg items-center justify-center text-primary font-bold text-xs">
                    {ep.number.replace('EP ', '')}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                      {ep.title}
                    </h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-gray-400">{ep.date}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{ep.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="ml-4 p-2 bg-gray-50 group-hover:bg-primary group-hover:text-white rounded-full transition-all">
                  <ChevronRight size={20} />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <Filter className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-500 font-medium text-lg">No episodes match your search.</p>
              <button onClick={() => setSearchTerm('')} className="text-primary font-bold mt-2 hover:underline">Clear search</button>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition-all transform hover:scale-105">
            Load More Episodes
          </button>
        </div>
      </div>
    </section>
  );
};

export default EpisodeArchive;
