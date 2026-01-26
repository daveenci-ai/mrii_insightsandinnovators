
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20 transition-all">
          <div className="flex items-center">
            {/* Logo Placeholder */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg">M</div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg lg:text-xl tracking-tighter leading-none">MRII</span>
                <span className="text-[8px] lg:text-[10px] font-medium tracking-widest text-gray-500 uppercase">Institute</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#" className="text-xs lg:text-sm font-semibold text-gray-600 hover:text-primary transition-colors">Episodes</a>
            <a href="#" className="text-xs lg:text-sm font-semibold text-gray-600 hover:text-primary transition-colors">Resources</a>
            <a href="#" className="text-xs lg:text-sm font-semibold text-gray-600 hover:text-primary transition-colors">About</a>
            <button className="bg-primary hover:bg-[#d11d2e] text-white px-6 py-2 lg:px-8 lg:py-3 rounded-full font-bold text-xs lg:text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
              Subscribe Now
            </button>
          </div>

          <div className="md:hidden">
            <button className="text-primary p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
