
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Lock } from 'lucide-react';

const LeadMagnetForm: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100"
        >
          {/* Visual Side */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" 
              alt="AI and Data Connectivity" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent flex items-center p-12">
              <div className="max-w-xs">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-primary/40">
                  <Download size={32} />
                </div>
                <h3 className="text-3xl font-black text-white leading-tight mb-4">
                  2nd Annual <br/><span className="text-primary">Global AI Study</span>
                </h3>
                <p className="text-gray-200 text-sm font-medium leading-relaxed">
                  Get the latest insights on how your peers are integrating Gen-AI into their research workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                <span className="text-primary">AI in Focus:</span> How Market Researchers are Embracing and Adapting to Generative AI
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                MRII’s 2nd annual global study of market research professionals’ attitudes, usage, expectations and predictions regarding AI in their jobs and companies.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-700">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-xl outline-none transition-all"
                    placeholder="Enter first name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-700">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-xl outline-none transition-all"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-xl outline-none transition-all"
                  placeholder="name@company.com"
                />
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full lg:w-auto bg-primary hover:bg-[#d11d2e] text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3"
                >
                  DOWNLOAD THE REPORT
                </motion.button>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-xs mt-6">
                <Lock size={12} />
                <span>Your information is secure and will never be shared.</span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetForm;
