import React from 'react';
import { experiences, awards } from '../data';
import { Briefcase, Trophy, Calendar, MapPin, CheckSquare, Sparkles, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function Timeline() {
  return (
    <section className="py-16 bg-white/[0.01] border-b border-white/5 px-4 sm:px-6 lg:px-8 relative z-10" id="experience-section">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Experience Timeline (Col 7) */}
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-mono text-sm uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Career Foundation</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">
              Work Experience
            </h2>
          </div>

          <div className="relative border-l border-white/10 pl-6 ml-2 space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative" id={`exp-item-${exp.id}`}>
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#070b14] shadow-sm shadow-blue-500/25" />
                
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-slate-300">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 pl-0">
                    {exp.highlights.map((hl, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckSquare className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards and Leadership (Col 5) */}
        <div className="md:col-span-5 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-sm uppercase tracking-wider">
              <Trophy className="w-4 h-4" />
              <span>Achievements & Accolades</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">
              Honors & Leadership
            </h2>
          </div>

          <div className="space-y-6">
            {awards.map((award, idx) => (
              <div 
                key={idx} 
                className="glass-panel p-6 rounded-2xl space-y-4 hover:border-amber-400/30 hover:bg-white/[0.02] transition-all duration-300 shadow-sm"
                id={`award-item-${idx}`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                      {award.date}
                    </span>
                    <h3 className="text-base font-bold text-slate-100 font-display mt-2">
                      {award.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {award.issuer}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-white/10">
                  {award.highlights.map((hl, hlIdx) => (
                    <div key={hlIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {hlIdx === 1 ? (
                        <Users className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      ) : (
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      )}
                      <p className="leading-relaxed">{hl}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
