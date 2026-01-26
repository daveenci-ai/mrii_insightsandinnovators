
import React from 'react';
import { motion } from 'framer-motion';

interface VisualizerProps {
  count?: number;
  className?: string;
  active?: boolean;
}

const Visualizer: React.FC<VisualizerProps> = ({ count = 5, className = "", active = true }) => {
  return (
    <div className={`flex items-end gap-1 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-primary rounded-t-full"
          animate={active ? {
            height: [
              Math.random() * 20 + 5,
              Math.random() * 20 + 15,
              Math.random() * 20 + 5
            ]
          } : { height: 4 }}
          transition={{
            duration: 0.6 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default Visualizer;
