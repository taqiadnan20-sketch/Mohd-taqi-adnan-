import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC<{ scrollToSection: (id: string) => void }> = ({ scrollToSection }) => {
  return (
    <section id="about" className="min-h-[80vh] flex items-center justify-center py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-200 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-4xl w-full relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wider mb-6">
          PORTFOLIO
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Hello, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            {PERSONAL_INFO.name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
          {PERSONAL_INFO.headline}
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 mb-10">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">About Me</h3>
            <p className="text-slate-600 leading-relaxed">
                {PERSONAL_INFO.about}
            </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Get in touch <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-lg font-semibold hover:bg-gray-50 transition-all"
          >
            View Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
