import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2, Cpu, Briefcase, Languages } from 'lucide-react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  
  const getIcon = (category: string) => {
    switch(category) {
        case 'Technical': return <Cpu size={20} />;
        case 'Language': return <Languages size={20} />;
        default: return <Briefcase size={20} />;
    }
  }

  // Group skills by category
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
            <span className="w-10 h-1 bg-blue-600 rounded-full"></span>
            Professional Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(groupedSkills).map(([category, skills]) => (
                <div key={category} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                            {getIcon(category)}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">{category}</h3>
                    </div>

                    <div className="space-y-6">
                        {skills.map((skill, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-slate-700 flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-green-500" />
                                        {skill.name}
                                    </span>
                                    <span className="text-slate-400 text-sm">{skill.level}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
