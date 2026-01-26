
import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, TrendingUp, Rocket } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Mic2 size={32} strokeWidth={2.5} />,
      title: "Expert Interviews",
      description: "Gain exclusive insights from the world's most innovative research leaders and insights executives.",
    },
    {
      icon: <TrendingUp size={32} strokeWidth={2.5} />,
      title: "Future Trends",
      description: "Stay ahead with deep dives into AI, predictive modeling, and the next generation of data analytics.",
    },
    {
      icon: <Rocket size={32} strokeWidth={2.5} />,
      title: "Career Growth",
      description: "Practical advice and educational resources to help you lead your insights team to new heights.",
    }
  ];

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-primary">
      {/* Wave Divider - Concave Gray Overlay creating a Convex Red Hill effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] fill-gray-50"
        >
          <path d="M0,0 L0,100 Q720,20 1440,100 L1440,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Why Tune In?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            We bridge the gap between academic theory and practical application in the world of market research.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
