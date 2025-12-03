import React from 'react';
import { Mail, Phone, MapPin, Linkedin, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_INFO } from '../constants';

interface SidebarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-850 text-white w-full lg:w-80 lg:fixed lg:h-screen lg:overflow-y-auto shrink-0 transition-all duration-300">
      
      {/* Profile Section */}
      <div className="p-8 text-center lg:text-left">
        <div className="w-32 h-32 mx-auto lg:mx-0 bg-slate-700 rounded-full mb-6 overflow-hidden border-4 border-slate-600 shadow-xl relative flex items-center justify-center">
            {/* Placeholder for Profile Image if user had one, using Initials for now */}
            <span className="text-4xl font-bold text-slate-400">MA</span>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">{PERSONAL_INFO.name}</h1>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          {PERSONAL_INFO.headline}
        </p>

        <div className="flex flex-col gap-3 text-sm text-slate-300">
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
            <Mail size={16} />
            <span className="truncate">{CONTACT_INFO.email}</span>
          </a>
          <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 hover:text-white transition-colors">
            <Phone size={16} />
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <div className="flex items-center gap-3">
            <MapPin size={16} />
            <span>{CONTACT_INFO.location}</span>
          </div>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
            <Linkedin size={16} />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 lg:px-8 pb-8">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                  activeSection === item.id 
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="font-medium tracking-wide text-sm uppercase">{item.label}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${activeSection === item.id ? 'bg-white' : 'bg-transparent group-hover:bg-slate-600'}`}></div>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer / Download Resume */}
      <div className="p-8 mt-auto border-t border-slate-800">
        <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors border border-slate-700">
          <Download size={18} />
          <span>Download CV</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
