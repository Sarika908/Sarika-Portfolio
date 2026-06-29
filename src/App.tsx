/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { 
  Terminal, ShieldCheck, Cpu, Mic, Database, Code, 
  Menu, X, BookOpen, Sparkles, ChevronUp, Layers, Award, Trophy
} from 'lucide-react';
import { personalInfo } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position to change header style and show/hide "Back to top" button
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans relative overflow-x-hidden selection:bg-blue-500/30">
      
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-100px] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-50px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Sticky Modern Top Navigation */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-[#0f172a]/75 border-white/10 backdrop-blur-xl shadow-lg shadow-black/25 py-3' 
            : 'bg-transparent border-white/5 py-4.5'
        }`}
        id="navbar-main"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            onClick={() => scrollToSection('header-section')}
            className="flex items-center gap-2.5 cursor-pointer group"
            id="nav-logo"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm tracking-tighter group-hover:bg-blue-500 shadow-md shadow-blue-500/20 transition">
              S
            </div>
            <span className="font-display font-bold tracking-tight text-white hover:text-blue-400 transition text-sm sm:text-base">
              {personalInfo.name} <span className="text-blue-400 font-mono text-xs font-normal ml-1">.dev</span>
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1.5">
            {[
              { label: 'About', target: 'about-section' },
              { label: 'Skills', target: 'skills-section' },
              { label: 'Projects', target: 'projects-section' },
              { label: 'Experience', target: 'experience-section' },
              { label: 'Certifications', target: 'certifications-section' },
              { label: 'Recruiter Hub', target: 'contact-section' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.target)}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer"
                id={`nav-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition cursor-pointer"
            id="btn-mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0f172a]/95 border-t border-white/10 py-3 px-4 space-y-1.5 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
            {[
              { label: 'About', target: 'about-section' },
              { label: 'Skills', target: 'skills-section' },
              { label: 'Projects', target: 'projects-section' },
              { label: 'Experience', target: 'experience-section' },
              { label: 'Certifications', target: 'certifications-section' },
              { label: 'Recruiter Hub', target: 'contact-section' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.target)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-white/5 block cursor-pointer"
                id={`nav-mobile-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Floating Micro-Badges Bar (Quick Stats Dashboard) */}
      <div className="bg-white/3 border-b border-white/5 backdrop-blur-md py-3.5 px-4 relative z-20">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center sm:justify-start items-center gap-x-6 gap-y-2 text-xs text-slate-300 font-mono">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>CGPA: <strong className="text-white">8.71 / 10</strong> (Periyar Univ)</span>
          </div>
          <span className="hidden sm:inline text-white/10">|</span>
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Core: <strong className="text-white">Python, Django, AWS, MySQL</strong></span>
          </div>
          <span className="hidden sm:inline text-white/10">|</span>
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interned: <strong className="text-white">Yale IT Skill Hub</strong></span>
          </div>
          <span className="hidden sm:inline text-white/10">|</span>
          <div className="flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Award: <strong className="text-white">Best Outgoing Student</strong></span>
          </div>
        </div>
      </div>

      {/* Primary Web Layout Modules */}
      <main className="flex-1 bg-transparent relative z-10">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </main>

      {/* Modern Compact Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-900" id="footer-section">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-300 font-display">
              {personalInfo.name} — Portfolio Website
            </p>
            <p className="text-xs text-slate-500 font-mono">
              Designed & Built with React, Tailwind CSS v4 & Motion
            </p>
          </div>
          <p className="text-xs text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} Sarika S. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => scrollToSection('header-section')}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-lg transition duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom-4"
          id="btn-back-to-top"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
