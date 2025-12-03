import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <GraduationCap size={28} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Education</h2>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-blue-500 transition-colors"></div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                <h4 className="text-lg text-blue-700 font-medium mb-4">{edu.institution}</h4>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{edu.duration}</span>
                  </div>
                  {edu.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
