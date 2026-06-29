import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Terminal, FileText, Download } from 'lucide-react';
import { personalInfo } from '../data';
import { motion } from 'motion/react';

export default function Header() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="relative overflow-hidden bg-white/[0.01] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10 backdrop-blur-md" id="header-section">
      {/* Abstract Tech Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Main Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-4"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-mono tracking-wide">
              <Terminal className="w-4 h-4" />
              <span>Available for Fresh Graduate Roles (May 2026)</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subtitles */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-lg sm:text-xl text-slate-300 font-medium">
              <span className="text-blue-400">{personalInfo.title}</span>
              <span className="text-slate-500/50 hidden sm:inline">•</span>
              <span className="text-slate-400">{personalInfo.subTitle}</span>
            </div>

            {/* Location & Metadata */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-500" />
                {personalInfo.location}
              </span>
            </div>
          </motion.div>

          {/* Action Hub */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[220px]"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:from-blue-700 active:to-indigo-700 transition-all text-white font-semibold shadow-lg shadow-blue-500/30"
              id="btn-contact-email"
            >
              <Mail className="w-4 h-4" />
              <span>Hire Me / Email</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 backdrop-blur-md transition text-slate-200 hover:text-white font-medium"
              id="btn-download-resume"
            >
              <Download className="w-4 h-4" />
              <span>Print / Save CV</span>
            </button>
          </motion.div>
        </div>

        {/* Contact Links Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-y-4 gap-x-8 items-center text-slate-300"
        >
          {/* Email */}
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="flex items-center gap-2 hover:text-blue-400 transition font-mono text-sm py-1.5"
            id="link-email"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>{personalInfo.email}</span>
          </a>

          {/* Phone */}
          <a 
            href={`tel:${personalInfo.phone}`} 
            className="flex items-center gap-2 hover:text-blue-400 transition font-mono text-sm py-1.5"
            id="link-phone"
          >
            <Phone className="w-4 h-4 text-slate-500" />
            <span>+91 {personalInfo.phone}</span>
          </a>

          {/* LinkedIn */}
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-blue-400 transition font-mono text-sm py-1.5"
            id="link-linkedin"
          >
            <Linkedin className="w-4 h-4 text-slate-500" />
            <span>LinkedIn Profile</span>
          </a>

          {/* GitHub */}
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-blue-400 transition font-mono text-sm py-1.5"
            id="link-github"
          >
            <Github className="w-4 h-4 text-slate-500" />
            <span>GitHub Profile</span>
          </a>
        </motion.div>

      </div>
    </header>
  );
}
