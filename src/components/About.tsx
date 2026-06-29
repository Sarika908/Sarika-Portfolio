import React from 'react';
import { personalInfo, education } from '../data';
import { GraduationCap, Award, BookOpen, Quote, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10" id="about-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Professional Bio / Pitch */}
        <div className="lg:col-span-7 space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Professional Narrative</span>
          </div>
          
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Engineering solid backend systems with Python & Django
          </h2>
          
          <div className="text-slate-300 space-y-4 text-base leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-400 first-letter:float-left first-letter:mr-3 first-letter:font-display">
              {personalInfo.summary}
            </p>
            <p>
              My technical foundation centers around Python-based web architectures, specifically 
              harnessing <strong className="text-white font-semibold">Django, Django REST Framework, and Flask</strong> to engineer resilient API pipelines, 
              robust transactional safety, and secure relational query setups with <strong className="text-white font-semibold">MySQL</strong>.
            </p>
            <p>
              I thrive on building optimized backend solutions, integrating cloud services like <strong className="text-white font-semibold">AWS</strong>, 
              managing application containerization with <strong className="text-white font-semibold">Docker</strong>, and validating system integrity through 
              strict unit-testing and CI/CD best practices.
            </p>
          </div>

          <div className="p-4 bg-white/[0.02] border-l-4 border-blue-500 rounded-r-lg flex gap-3 text-slate-300 italic glass-panel">
            <Quote className="w-8 h-8 text-blue-400/25 shrink-0" />
            <p className="text-sm leading-relaxed">
              "Dedicated to writing clean, maintainable, and highly-performant Python backends that bridge complex database layers with secure, modern APIs."
            </p>
          </div>
        </div>

        {/* Academic Profile */}
        <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-lg">Education Credentials</h3>
              <p className="text-xs text-slate-400 font-mono">Verified academic history</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded">
                {education.period}
              </span>
              <h4 className="font-display font-semibold text-slate-200 mt-2 text-base">
                {education.degree}
              </h4>
              <p className="text-sm text-slate-400">
                {education.school}
              </p>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                {education.location}
              </p>
            </div>

            {/* GPA Callout */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-medium text-slate-300">Cumulative CGPA</span>
              </div>
              <span className="text-xl font-display font-bold text-white font-mono bg-[#0f172a]/60 px-3 py-1 rounded-lg border border-white/10 shadow-sm">
                {education.cgpa}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              {education.description}
            </p>

            <div className="pt-3 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Top 5% Academic Ranking (Periyar University)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
