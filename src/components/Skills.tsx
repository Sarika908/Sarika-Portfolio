import React, { useState } from 'react';
import { skillsGrouped } from '../data';
import { 
  Terminal, FileCode, Paintbrush, Cpu, Globe, Zap, Database, 
  Cloud, Layers, Github, GitBranch, Code, PenTool, Wrench, Users, Search, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Icon mapper helper
const iconMap: Record<string, React.ComponentType<any>> = {
  Terminal,
  FileCode,
  Paintbrush,
  Cpu,
  Globe,
  Zap,
  Database,
  Cloud,
  Layers,
  Github,
  GitBranch,
  Code,
  PenTool,
  Wrench,
  Users
};

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'backend', name: 'Backend' },
    { id: 'databases', name: 'Databases' },
    { id: 'devops', name: 'Cloud & DevOps' },
    { id: 'tools', name: 'Tools & Core' }
  ];

  // Helper to filter skills
  const getFilteredSkills = () => {
    const results: Array<{ name: string; level: number; icon: string; category: string; categoryTitle: string }> = [];
    
    Object.entries(skillsGrouped).forEach(([key, value]) => {
      // Check category filter
      if (activeCategory !== 'all' && activeCategory !== key) return;

      value.skills.forEach(skill => {
        // Check search filter
        if (searchTerm && !skill.name.toLowerCase().includes(searchTerm.toLowerCase())) return;

        results.push({
          ...skill,
          category: key,
          categoryTitle: value.title
        });
      });
    });

    return results;
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section className="py-16 bg-white/[0.01] border-y border-white/5 px-4 sm:px-6 lg:px-8 relative z-10" id="skills-section">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Title and Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-mono text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Technical Inventory</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">
              Skills & Proficiencies
            </h2>
            <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
              An index of my coding languages, framework masteries, database management tools, and deployment workflows. Use filters to narrow down.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search e.g., Django, AWS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition text-sm shadow-sm"
              id="skill-search"
            />
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2 border-b border-white/5 pb-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
              id={`tab-skill-cat-${cat.id}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Code;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className="glass-panel p-5 rounded-2xl flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 shadow-sm"
                  id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-white/5 text-blue-400 border border-white/10">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">
                            {skill.name}
                          </h4>
                          <span className="text-xs font-mono text-slate-400">
                            {skill.categoryTitle}
                          </span>
                        </div>
                      </div>
                      
                      {/* Badge level indicator */}
                      <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md">
                        {skill.level}% Proficiency
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredSkills.length === 0 && (
            <div className="col-span-full py-12 text-center glass-panel rounded-2xl">
              <p className="text-slate-400 text-sm">No skills found matching "{searchTerm}"</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('all'); }} 
                className="mt-3 text-sm text-blue-400 hover:text-blue-300 hover:underline font-semibold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
