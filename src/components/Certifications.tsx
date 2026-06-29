import React from 'react';
import { certifications } from '../data';
import { ShieldCheck, Award, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function Certifications() {
  return (
    <section className="py-16 bg-white/[0.01] border-t border-white/5 px-4 sm:px-6 lg:px-8 relative z-10" id="certifications-section">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-sm uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Industry Certifications
          </h2>
          <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
            Professional certifications and credentials verifying competency in modern backend coding, machine learning, and cloud deployment operations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between gap-5 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 shadow-sm"
              id={`cert-card-${cert.id}`}
            >
              <div className="space-y-3.5">
                {/* Header Icon + Info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-sm sm:text-base leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-400 font-sans mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              {/* Verified skills tags */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider">
                  Validated Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[11px] font-mono font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-md shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
