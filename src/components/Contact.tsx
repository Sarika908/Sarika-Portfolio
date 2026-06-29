import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquareCode, CheckCircle2, User, Inbox, Reply } from 'lucide-react';
import { personalInfo } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface RecruiterMessage {
  id: string;
  senderName: string;
  senderEmail: string;
  company: string;
  subject: string;
  body: string;
  timestamp: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [inbox, setInbox] = useState<RecruiterMessage[]>([
    {
      id: 'msg_pre_1',
      senderName: 'Sarah Jenkins',
      senderEmail: 's.jenkins@innovatetech.io',
      company: 'Innovate Tech Corp',
      subject: 'Python/Django Junior Developer Opening',
      body: 'Hi Sarika, I came across your impressive election system project and saw your Best Outgoing Student Award. We have an immediate opening for a junior backend developer with strong Python, Django, and MySQL competencies. Your profile aligns perfectly with our stack. Let us connect for an exploratory call soon!',
      timestamp: 'Today, 10:15 AM'
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const newMessage: RecruiterMessage = {
      id: `msg_${Date.now()}`,
      senderName: formData.name,
      senderEmail: formData.email,
      company: formData.company || 'Independent Recruiter',
      subject: formData.subject || 'Inquiry regarding Python Development',
      body: formData.message,
      timestamp: 'Just now'
    };

    setInbox(prev => [newMessage, ...prev]);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-16 bg-[#070b14]/50 text-white px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10" id="contact-section">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm uppercase tracking-wider">
            <MessageSquareCode className="w-4 h-4" />
            <span>Employment Gateway</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Connect & Recruiter Sandbox
          </h2>
          <p className="text-slate-400 max-w-xl text-sm mx-auto md:mx-0 leading-relaxed">
            Send me a direct recruitment inquiry. Submitting the form below simulates a live backend ingestion, saving the message to the **Recruiter Inbox Console** below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Inbox Console (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Stats/Links card */}
            <div className="glass-panel p-6 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-sm">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Primary Contact</span>
                <p className="text-slate-200 font-semibold font-mono text-sm flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline transition-all">{personalInfo.email}</a>
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Mobile Hotline</span>
                <p className="text-slate-200 font-semibold font-mono text-sm flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:underline transition-all">+91 {personalInfo.phone}</a>
                </p>
              </div>
            </div>

            {/* LIVE INBOX VIEW MODULE */}
            <div className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl">
              
              {/* Header */}
              <div className="px-5 py-3 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Inbox className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono font-bold text-slate-300">Live Recruiter Inbox Console</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 animate-pulse">
                  Active
                </span>
              </div>

              {/* Message List */}
              <div className="p-5 space-y-4 max-h-[300px] overflow-y-auto h-[300px] bg-[#070b14]/80 scrollbar-thin">
                {inbox.map((msg) => (
                  <div 
                    key={msg.id} 
                    className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-2.5 hover:border-white/20 transition-all duration-200"
                    id={`inbox-msg-${msg.id}`}
                  >
                    <div className="flex items-start justify-between gap-2 border-b border-white/5 pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-blue-500/10 text-blue-400 font-bold flex items-center justify-center font-display text-xs border border-blue-500/20">
                          {msg.senderName.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-semibold text-slate-200 text-xs sm:text-sm">
                              {msg.senderName}
                            </h4>
                            <span className="text-[10px] text-slate-400 font-medium bg-white/5 border border-white/10 px-1.5 py-0.5 rounded font-sans">
                              {msg.company}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono leading-none">
                            {msg.senderEmail}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap">
                        {msg.timestamp}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h5 className="font-semibold text-xs text-blue-400 font-display">
                        Sub: {msg.subject}
                      </h5>
                      <p className="text-slate-300 text-xs leading-relaxed font-sans font-normal whitespace-pre-wrap">
                        {msg.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-5 py-2.5 bg-white/[0.03] border-t border-white/10 flex justify-between text-[10px] font-mono text-slate-500">
                <span>Total Received: {inbox.length}</span>
                <span>Type: Secure Client-Side Local State</span>
              </div>

            </div>

          </div>

          {/* Form inputs panel (Col 5) */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl shadow-sm">
            <h3 className="font-display font-bold text-white text-lg mb-4">Send Recruitment Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-slate-400">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#070b14]/80 border border-white/10 focus:border-blue-500 rounded-xl px-3 py-2.5 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-slate-400">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#070b14]/80 border border-white/10 focus:border-blue-500 rounded-xl px-3 py-2.5 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-slate-400">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-[#070b14]/80 border border-white/10 focus:border-blue-500 rounded-xl px-3 py-2.5 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-slate-400">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-[#070b14]/80 border border-white/10 focus:border-blue-500 rounded-xl px-3 py-2.5 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-slate-400">Message Payload *</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-[#070b14]/80 border border-white/10 focus:border-blue-500 rounded-xl px-3 py-2.5 text-xs font-sans text-white focus:outline-none resize-none focus:ring-1 focus:ring-blue-500/20 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-emerald-600 disabled:to-emerald-600 disabled:opacity-90 transition-all font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20"
                id="btn-submit-recruitment-form"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Injected Successfully into Console!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>Inject Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
