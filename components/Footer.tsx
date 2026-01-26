
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { FOOTER_COLUMNS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-lg font-bold mb-8 relative inline-block">
                {col.title}
                <span className="absolute bottom-[-8px] left-0 w-8 h-[3px] bg-primary"></span>
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Connect With Us
              <span className="absolute bottom-[-8px] left-0 w-8 h-[3px] bg-primary"></span>
            </h4>
            <p className="text-gray-400 text-sm font-medium mb-6 leading-relaxed">
              Market Research Institute International. <br/>
              Leading the pulse of global innovation.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, href: '#' },
                { icon: <Instagram size={20} />, href: '#' },
                { icon: <Linkedin size={20} />, href: '#' },
                { icon: <Twitter size={20} />, href: '#' },
                { icon: <Youtube size={20} />, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-bold text-white">M</div>
            <span className="font-bold text-sm tracking-widest text-gray-500 uppercase">MRII Institute</span>
          </div>
          <div className="text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Market Research Institute International. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
