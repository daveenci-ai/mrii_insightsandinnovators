
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Star, ArrowRight } from 'lucide-react';

const CertificationRoadmap: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="text-primary" size={24} />
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Academic Excellence</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                From Podcast Listener to <br/>
                <span className="text-primary">Certified Insights Leader</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Insights & Innovators isn't just a show—it's a companion to the 
                <strong> Principles of Market Research</strong> program. Bridge the gap between 
                industry trends and foundational excellence with the University of Georgia collaborative courses.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  "Principles of Data Insights",
                  "Qualitative Research Methods",
                  "Global Insights Leadership"
                ].map((course, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="text-primary" size={14} fill="currentColor" />
                    </div>
                    <span className="font-bold text-gray-700">{course}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-primary transition-all group">
                Explore Certification Paths
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white rounded-[2rem] shadow-2xl p-10 relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center">
                    <BookOpen size={32} className="text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-gray-900 leading-none">96%</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Completion Rate</div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">Curriculum Alignment</h4>
                <div className="space-y-4">
                  {[
                    { label: "AI Ethics", value: 85 },
                    { label: "Data Visualization", value: 92 },
                    { label: "Statistical Significance", value: 78 }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs font-bold text-gray-500 uppercase mb-1">
                        <span>{stat.label}</span>
                        <span>{stat.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-xs text-gray-400 font-medium italic">
                  *Curriculum data based on 2024 MRII Professional Development Survey.
                </p>
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[80px] -z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationRoadmap;
