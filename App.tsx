import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll spy to update active navigation state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.addEventListener('scroll', handleScroll);
    }
    // Fallback for mobile window scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
        if (mainContent) mainContent.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
        {/* Mobile Header Toggle */}
        <div className="lg:hidden fixed top-0 left-0 w-full bg-slate-900 z-50 px-4 py-3 flex justify-between items-center text-white shadow-md">
            <span className="font-bold text-lg">M.T. Adnan</span>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Sidebar Navigation */}
        <div className={`
            fixed lg:static inset-y-0 left-0 z-40 transform 
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
            lg:translate-x-0 transition-transform duration-300 ease-in-out
            w-80 shadow-2xl lg:shadow-none h-full
        `}>
            <Sidebar activeSection={activeSection} scrollToSection={scrollToSection} />
        </div>
        
        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
            <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
            ></div>
        )}

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 h-full overflow-y-auto w-full pt-14 lg:pt-0 scroll-smooth">
            <Hero scrollToSection={scrollToSection} />
            <Education />
            <Skills />
            <Contact />
            
            {/* Footer */}
            <footer className="py-8 text-center text-slate-400 text-sm bg-slate-50 border-t border-slate-200">
                <p>&copy; {new Date().getFullYear()} Mohd Taqi Adnan. All rights reserved.</p>
            </footer>
        </main>

        {/* AI Chat Widget */}
        <ChatWidget />
    </div>
  );
};

export default App;
