import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data';
import { 
  Terminal, ShieldCheck, Cpu, Mic, Database, ArrowRight, Play, CheckCircle2, 
  RefreshCw, AlertTriangle, Cloud, Server, Sparkles, Send, MessageSquareCode
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Projects() {
  const [activeSimulator, setActiveSimulator] = useState<'none' | 'election' | 'voice'>('none');
  
  // Election System Simulator State
  const [voterId, setVoterId] = useState('SARIKA-VOTER-2026');
  const [electionStep, setElectionStep] = useState<'id' | 'otp' | 'vote' | 'success'>('id');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [inputOtp, setInputOtp] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [otpError, setOtpError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [electionLogs, setElectionLogs] = useState<string[]>([]);
  const electionLogsEndRef = useRef<HTMLDivElement>(null);

  // Voice Assistant Simulator State
  const [voiceQuery, setVoiceQuery] = useState('');
  const [voiceStep, setVoiceStep] = useState<'idle' | 'listening' | 'analyzing' | 'executed'>('idle');
  const [voiceLogs, setVoiceLogs] = useState<string[]>([]);
  const [extractedIntent, setExtractedIntent] = useState<any>(null);
  const [waveAnimation, setWaveAnimation] = useState<number[]>(Array(15).fill(4));

  // Voice wave animation driver
  useEffect(() => {
    let interval: any;
    if (voiceStep === 'listening') {
      interval = setInterval(() => {
        setWaveAnimation(Array(15).fill(0).map(() => Math.floor(Math.random() * 24) + 6));
      }, 100);
    } else if (voiceStep === 'analyzing') {
      interval = setInterval(() => {
        setWaveAnimation(Array(15).fill(0).map(() => Math.floor(Math.random() * 10) + 4));
      }, 200);
    } else {
      setWaveAnimation(Array(15).fill(4));
    }
    return () => clearInterval(interval);
  }, [voiceStep]);

  // Scroll election logs
  useEffect(() => {
    electionLogsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [electionLogs]);

  // Helper to append log in election
  const addElectionLog = (msg: string, delay = 0) => {
    if (delay === 0) {
      setElectionLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
    } else {
      setTimeout(() => {
        setElectionLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
      }, delay);
    }
  };

  // Election Step: ID Verification
  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!voterId.trim()) return;
    setIsProcessing(true);
    setElectionLogs([]);
    
    addElectionLog(`⚡ POST /api/auth/otp-request - Payload: { voterId: "${voterId}" }`);
    addElectionLog(`🔍 Security: Sanitizing query input to prevent SQL injection...`);
    
    setTimeout(() => {
      addElectionLog(`✓ Input sanitized. Running duplicate checking protocol in MySQL...`);
      addElectionLog(`SQL: SELECT COUNT(*) FROM votes WHERE voter_id = '${voterId}'`);
      
      setTimeout(() => {
        addElectionLog(`✓ Double-voting check: No records found. Generating dual-factor OTP token.`);
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOtp(otp);
        addElectionLog(`[SMS Gateway] Dispatched mock secure verification code.`);
        addElectionLog(`🔑 [DEBUG BACKEND] OTP Generated: ${otp}`);
        
        setElectionStep('otp');
        setIsProcessing(false);
      }, 800);
    }, 600);
  };

  // Election Step: OTP Verification
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputOtp !== generatedOtp) {
      setOtpError('Invalid secure OTP. Check DEBUG log on the right!');
      addElectionLog(`❌ SECURITY WARN: Invalid OTP token attempted for Voter ID: ${voterId}`);
      return;
    }
    setOtpError('');
    setIsProcessing(true);
    addElectionLog(`⚡ POST /api/auth/otp-verify - Voter verified successfully.`);
    addElectionLog(`🛡️ Secure Session Token: Issued under AES-256-GCM context.`);
    
    setTimeout(() => {
      setElectionStep('vote');
      setIsProcessing(false);
    }, 600);
  };

  // Election Step: Cast Vote
  const handleCastVote = (candidate: string) => {
    setSelectedCandidate(candidate);
    setIsProcessing(true);
    addElectionLog(`⚡ POST /api/ballot/cast - Payload: { candidate: "${candidate}" }`);
    addElectionLog(`🔐 Initializing multi-transaction lock to prevent duplicate concurrent writes.`);
    addElectionLog(`🔒 SQL: START TRANSACTION ISOLATION LEVEL SERIALIZABLE;`);
    
    setTimeout(() => {
      addElectionLog(`✓ Double check inside transactional scope: No double voting found.`);
      addElectionLog(`SQL: INSERT INTO votes (voter_id, candidate, transaction_hash) VALUES ('${voterId}', '${candidate}', SHA2('...', 256))`);
      
      setTimeout(() => {
        addElectionLog(`✓ Data integrity checked. Generating sha256 cryptographic proof block...`);
        const blockHash = '8f9e0a2d4' + Math.floor(100000 + Math.random() * 900000) + 'e3b0c44';
        addElectionLog(`⛓️ Block committed. HASH: ${blockHash}`);
        addElectionLog(`🔒 SQL: COMMIT; Transaction closed.`);
        addElectionLog(`📈 Uptime metrics: 99.9% database integrity preserved.`);
        
        setElectionStep('success');
        setIsProcessing(false);
      }, 800);
    }, 700);
  };

  // Reset Election
  const resetElection = () => {
    setVoterId('SARIKA-VOTER-2026');
    setElectionStep('id');
    setGeneratedOtp('');
    setInputOtp('');
    setSelectedCandidate('');
    setOtpError('');
    setIsProcessing(false);
    setElectionLogs([]);
  };

  // Voice Assistant Simulator: Run Query
  const runVoiceCommand = (query: string) => {
    setVoiceQuery(query);
    setVoiceStep('listening');
    setVoiceLogs([]);
    setExtractedIntent(null);

    const appendVoiceLog = (msg: string, delay: number) => {
      setTimeout(() => {
        setVoiceLogs(prev => [...prev, msg]);
      }, delay);
    };

    appendVoiceLog(`🎙️ Audio Stream Opened: Capturing local voice waveform...`, 200);
    appendVoiceLog(`✓ Capture complete. Sending binary audio chunk to Flask NLP engine.`, 1200);
    
    setTimeout(() => {
      setVoiceStep('analyzing');
      appendVoiceLog(`⚙️ NLP processing: Tokenizing text query...`, 200);
      appendVoiceLog(`🔎 Intent analysis: Executing custom vocabulary mapping algorithms...`, 700);
    }, 1500);

    // Intent resolution
    setTimeout(() => {
      setVoiceStep('executed');
      let intent = 'UNKNOWN';
      let entities = {};
      let actionCode = '';

      if (query.includes('standup') || query.includes('schedule')) {
        intent = 'SCHEDULE_MEETING';
        entities = { topic: "Daily Standup Meeting", format: "Scrum Review" };
        actionCode = `calendar.create_event(title="Daily Standup", date="Today")`;
        appendVoiceLog(`✓ Intent mapped: ${intent} (Confidence: 98.4%)`, 200);
        appendVoiceLog(`✓ Extracted Entities: ${JSON.stringify(entities)}`, 400);
        appendVoiceLog(`⚡ Calling serverless AWS Lambda: Triggering container endpoint...`, 600);
        appendVoiceLog(`✓ Lambda Container spinup time: 34ms`, 850);
        appendVoiceLog(`📅 Calendar Event Saved: "Daily Standup" booked successfully. Notifications dispatched.`, 1100);
      } else if (query.includes('performance') || query.includes('MySQL')) {
        intent = 'DATABASE_DIAGNOSTIC';
        entities = { target: "MySQL Master Cluster", query_depth: "Full log audit" };
        actionCode = `mysql.get_diagnostics(cluster="production-master")`;
        appendVoiceLog(`✓ Intent mapped: ${intent} (Confidence: 96.1%)`, 200);
        appendVoiceLog(`✓ Extracted Entities: ${JSON.stringify(entities)}`, 400);
        appendVoiceLog(`⚡ Connecting with DB connection pool (99.9% uptime validation)...`, 600);
        appendVoiceLog(`✓ MySQL diagnostic result: Connections: 14/100, Peak latency: 8ms, Health: OPTIMAL.`, 900);
        appendVoiceLog(`📊 Report Compiled: 0 critical connection drops detected in the past 24 hours.`, 1200);
      } else if (query.includes('Docker') || query.includes('deploy')) {
        intent = 'CLOUD_DEPLOY';
        entities = { artifact: "Python Docker Image", cloud_provider: "AWS Elastic Container" };
        actionCode = `aws.deploy_container(image="python-backend:latest")`;
        appendVoiceLog(`✓ Intent mapped: ${intent} (Confidence: 97.8%)`, 200);
        appendVoiceLog(`✓ Extracted Entities: ${JSON.stringify(entities)}`, 400);
        appendVoiceLog(`⚡ Invoking AWS ECS rolling update...`, 600);
        appendVoiceLog(`🐳 Docker container layer cached. Uploading fresh layers to AWS ECR...`, 800);
        appendVoiceLog(`🚀 Deploy Success: Rolling release complete on AWS ECS. Traffic switched. Uptime unaffected.`, 1200);
      } else {
        intent = 'BOILERPLATE_GENERATION';
        entities = { framework: "Django REST Framework", pattern: "ModelViewSet Boilerplate" };
        actionCode = `django.generate_boilerplate(model="Developer")`;
        appendVoiceLog(`✓ Intent mapped: ${intent} (Confidence: 99.2%)`, 200);
        appendVoiceLog(`✓ Extracted Entities: ${JSON.stringify(entities)}`, 400);
        appendVoiceLog(`⚡ Compiling custom Django modular script templates...`, 600);
        appendVoiceLog(`📝 Success: Scaffolded Class-based views and serializer routers dynamically.`, 1000);
      }

      setExtractedIntent({
        intent,
        entities,
        code: actionCode
      });

    }, 3200);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 relative z-10" id="projects-section">
      
      {/* Section Title */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-blue-400 font-mono text-sm uppercase tracking-wider">
          <Terminal className="w-4 h-4" />
          <span>Interactive Engineering</span>
        </div>
        <h2 className="text-3xl font-display font-bold text-white tracking-tight">
          Featured Software Projects
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          These projects showcase my design capabilities in building highly secure backend layers, strict query-validation schemes, and AI tokenization algorithms. <strong className="text-white font-semibold">Interact with the direct mock simulators</strong> below to test my backend logic in real-time.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="glass-panel rounded-2xl hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-md"
            id={`project-card-${project.id}`}
          >
            {/* Header Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded">
                  {project.period}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Server className="w-3.5 h-3.5 text-slate-500" />
                  {project.location}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-white">
                {project.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Stats Block */}
              <div className="grid grid-cols-3 gap-2 bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <p className="text-white font-display font-bold text-base sm:text-lg tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-slate-400 font-sans text-[10px] leading-tight uppercase font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bullet Highlights */}
              <ul className="space-y-2 text-slate-300 text-xs sm:text-sm pl-0">
                {project.highlights.map((hl, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags & Action Button Footer */}
            <div className="px-6 py-4 bg-white/[0.01] border-t border-white/5 flex flex-col gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-slate-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveSimulator(project.id === 'project_election' ? 'election' : 'voice')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:from-blue-700 active:to-indigo-700 transition-all text-white font-semibold text-sm cursor-pointer shadow-md shadow-blue-500/20"
                id={`btn-simulate-${project.id}`}
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Run Interactive Simulator</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Simulator Portal Block */}
      <AnimatePresence mode="wait">
        {activeSimulator !== 'none' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="glass-panel-heavy rounded-3xl overflow-hidden p-6 sm:p-8 shadow-2xl relative z-20"
            id="simulator-terminal-container"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="h-4 w-[1px] bg-white/10" />
                <span className="text-xs font-mono text-slate-400">
                  sandbox-environment://{activeSimulator === 'election' ? 'election-system-ledger' : 'nlp-voice-agent'}
                </span>
              </div>
              <button
                onClick={() => setActiveSimulator('none')}
                className="text-xs font-mono text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200"
                id="btn-close-simulator"
              >
                Close Sandbox [ESC]
              </button>
            </div>

            {/* --- ELECTION SIMULATOR --- */}
            {activeSimulator === 'election' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Voter client interaction screen (Col 5) */}
                <div className="lg:col-span-5 bg-white/[0.02] rounded-2xl border border-white/10 p-5 flex flex-col justify-between backdrop-blur-md">
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 w-fit">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Gov-Tech Voter Terminal v1.4</span>
                    </div>

                    {/* Step 1: Voter ID */}
                    {electionStep === 'id' && (
                      <form onSubmit={handleRequestOtp} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-xs text-slate-400 uppercase tracking-wider font-mono block">Voter Registration ID</label>
                          <input
                            type="text"
                            value={voterId}
                            onChange={(e) => setVoterId(e.target.value.toUpperCase())}
                            className="w-full bg-[#070b14]/80 border border-white/10 focus:border-blue-500 rounded-xl px-3 py-2.5 text-sm font-mono text-white focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isProcessing}
                          className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20"
                          id="btn-election-otp-request"
                        >
                          {isProcessing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                          <span>Generate Secure OTP</span>
                        </button>
                      </form>
                    )}

                    {/* Step 2: OTP Verification */}
                    {electionStep === 'otp' && (
                      <form onSubmit={handleVerifyOtp} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-xs text-slate-400 uppercase tracking-wider font-mono block">Dual-Factor SMS/Email OTP</label>
                          <input
                            type="text"
                            placeholder="Enter 4-digit code"
                            value={inputOtp}
                            onChange={(e) => setInputOtp(e.target.value)}
                            maxLength={4}
                            className="w-full bg-[#070b14]/80 border border-white/10 focus:border-blue-500 rounded-xl px-3 py-2.5 text-center text-lg tracking-widest font-mono text-white focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                            required
                          />
                          {otpError && (
                            <p className="text-xs text-red-400 flex items-center gap-1 font-mono mt-1.5">
                              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                              {otpError}
                            </p>
                          )}
                        </div>
                        <button
                          type="submit"
                          disabled={isProcessing}
                          className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
                          id="btn-election-otp-verify"
                        >
                          {isProcessing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
                          <span>Verify Identity</span>
                        </button>
                        <p className="text-[10px] text-slate-400 text-center italic font-mono">
                          Hint: Check the database system logs on the right to grab the secret code!
                        </p>
                      </form>
                    )}

                    {/* Step 3: Cast Ballot */}
                    {electionStep === 'vote' && (
                      <div className="space-y-4">
                        <p className="text-xs text-slate-400 font-mono">Select candidate and click to commit vote securely:</p>
                        <div className="space-y-2">
                          {[
                            'Dr. Ada Lovelace - Python Django Party',
                            'Prof. Alan Turing - Flask Micro-frameworks',
                            'Grace Hopper - AWS Serverless Alliance'
                          ].map((cand) => (
                            <button
                              key={cand}
                              onClick={() => handleCastVote(cand)}
                              disabled={isProcessing}
                              className="w-full text-left bg-[#070b14]/80 hover:bg-white/5 border border-white/10 hover:border-blue-500 rounded-xl p-3.5 text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer"
                              id={`candidate-btn-${cand.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            >
                              <span>{cand}</span>
                              <ArrowRight className="w-4 h-4 text-slate-500" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 4: Ballot Committed Success */}
                    {electionStep === 'success' && (
                      <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                        <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                          <CheckCircle2 className="w-6 h-6 animate-bounce" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-semibold text-white">Ballot Securely Cast!</h4>
                          <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                            Double voting prevented. Your transaction hash is permanently verified inside the database.
                          </p>
                        </div>
                        <div className="bg-[#070b14]/80 p-3.5 rounded-xl border border-white/5 text-left space-y-1.5 font-mono text-[10px]">
                          <span className="text-slate-500">VOTER ID:</span> <span className="text-slate-300">{voterId}</span><br />
                          <span className="text-slate-500">BALLOT FOR:</span> <span className="text-blue-400">{selectedCandidate}</span><br />
                          <span className="text-slate-500">STATUS:</span> <span className="text-emerald-400 font-bold">COMMITTED</span>
                        </div>
                        <button
                          onClick={resetElection}
                          className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-mono text-slate-300 transition-all cursor-pointer"
                          id="btn-election-simulate-again"
                        >
                          Simulate New Voter Ballot
                        </button>
                      </div>
                    )}
                  </div>

                  {/* MySQL server metadata status indicator */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      MySQL Status: Online
                    </span>
                    <span>Uptime: 99.9%</span>
                  </div>
                </div>

                {/* Right DB Logs (Col 7) */}
                <div className="lg:col-span-7 bg-white/[0.01] border border-white/10 rounded-2xl flex flex-col justify-between overflow-hidden backdrop-blur-md">
                  <div className="px-4 py-2.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      Django Backend & MySQL Query Logs
                    </span>
                    <button 
                      onClick={() => setElectionLogs([])} 
                      className="hover:text-white font-semibold transition"
                      title="Clear logs"
                    >
                      Clear
                    </button>
                  </div>
                  
                  {/* Ledger output lines */}
                  <div className="p-4 flex-1 font-mono text-[11px] leading-relaxed overflow-y-auto max-h-[300px] h-[300px] bg-[#070b14]/90 text-slate-300">
                    {electionLogs.length === 0 ? (
                      <div className="h-full flex items-center justify-center text-slate-500 italic">
                        Logs empty. Use the voter terminal on the left to fire events...
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {electionLogs.map((log, idx) => {
                          let colorClass = 'text-slate-300';
                          if (log.includes('🔍 Security') || log.includes('✓ Input sanitized')) colorClass = 'text-yellow-400';
                          if (log.includes('SQL:')) colorClass = 'text-purple-400';
                          if (log.includes('✓ Double-voting check') || log.includes('✓ Data integrity') || log.includes('✓ Voter verified')) colorClass = 'text-emerald-400';
                          if (log.includes('🔑 [DEBUG')) colorClass = 'text-orange-400 font-bold bg-orange-500/10 px-1.5 py-0.5 rounded';
                          if (log.includes('⚡ POST')) colorClass = 'text-blue-400 font-medium';
                          if (log.includes('❌ SECURITY')) colorClass = 'text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20';
                          return (
                            <div key={idx} className={`${colorClass} whitespace-pre-wrap break-all`}>
                              {log}
                            </div>
                          );
                        })}
                        <div ref={electionLogsEndRef} />
                      </div>
                    )}
                  </div>

                  <div className="px-4 py-2 bg-[#070b14] border-t border-white/5 text-[10px] font-mono text-slate-500 flex justify-between">
                    <span>Transaction Isolation: SERIALIZABLE</span>
                    <span>Engine: InnoDB (MySQL)</span>
                  </div>
                </div>

              </div>
            )}

            {/* --- VOICE ASSISTANT SIMULATOR --- */}
            {activeSimulator === 'voice' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Voice command options panel (Col 5) */}
                <div className="lg:col-span-5 bg-white/[0.02] rounded-2xl border border-white/10 p-5 flex flex-col justify-between backdrop-blur-md">
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20 w-fit">
                      <Mic className="w-4 h-4" />
                      <span>NLP Voice Core v2.1</span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Select a pre-programmed voice command trigger below to watch the custom tokenizer compile natural voice parameters into transactional backend events on AWS.
                    </p>

                    <div className="space-y-2.5">
                      {[
                        "Assistant, schedule a daily standup meeting.",
                        "Assistant, check MySQL system database performance.",
                        "Assistant, deploy Python Docker image to production.",
                        "Assistant, generate Django REST ModelViewSet boilerplate."
                      ].map((cmd, idx) => (
                        <button
                          key={idx}
                          onClick={() => runVoiceCommand(cmd)}
                          disabled={voiceStep === 'listening' || voiceStep === 'analyzing'}
                          className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 rounded-xl p-3.5 text-xs sm:text-sm font-medium transition-all flex items-center gap-3 cursor-pointer"
                          id={`voice-btn-${idx}`}
                        >
                          <div className="w-6 h-6 bg-indigo-500/15 text-indigo-400 rounded-full flex items-center justify-center shrink-0 border border-indigo-500/20">
                            <span className="font-mono text-[10px]">{idx + 1}</span>
                          </div>
                          <span className="text-slate-200">{cmd}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Equalizer Visualizer Waveform */}
                  <div className="mt-8 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Voice equalizer feed</span>
                      <span className="text-[10px] font-mono text-indigo-400">
                        {voiceStep === 'listening' && 'Recording...'}
                        {voiceStep === 'analyzing' && 'Analyzing intent...'}
                        {voiceStep === 'executed' && 'Task Complete'}
                        {voiceStep === 'idle' && 'Waiting...'}
                      </span>
                    </div>
                    
                    {/* Sine bar equalizer visualization */}
                    <div className="h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center gap-1.5 px-4 overflow-hidden">
                      {waveAnimation.map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: `${h}px` }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                          className={`w-1 rounded-full ${
                            voiceStep === 'listening' 
                              ? 'bg-indigo-500' 
                              : voiceStep === 'analyzing' 
                              ? 'bg-yellow-500' 
                              : 'bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* NLP Tokenizer & Trace output terminal (Col 7) */}
                <div className="lg:col-span-7 bg-white/[0.01] border border-white/10 rounded-2xl flex flex-col justify-between overflow-hidden backdrop-blur-md">
                  <div className="px-4 py-2.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      AWS Serverless execution & NLP Trace logs
                    </span>
                  </div>

                  {/* Main log stream */}
                  <div className="p-5 flex-1 flex flex-col justify-between gap-6 min-h-[320px] max-h-[350px] overflow-y-auto">
                    
                    {/* Execution text logs */}
                    <div className="space-y-1.5 font-mono text-[11px] leading-relaxed text-slate-300">
                      {voiceLogs.length === 0 ? (
                        <div className="h-28 flex items-center justify-center text-slate-500 italic font-mono text-xs">
                          Voice audio pipeline silent. Tap a command to begin...
                        </div>
                      ) : (
                        voiceLogs.map((log, idx) => {
                          let color = 'text-slate-300';
                          if (log.includes('🎙️ Audio') || log.includes('✓ Intent')) color = 'text-indigo-400 font-semibold';
                          if (log.includes('⚙️ NLP') || log.includes('🔎 Intent')) color = 'text-yellow-400';
                          if (log.includes('⚡ Calling') || log.includes('🐳 Docker')) color = 'text-purple-400';
                          if (log.includes('✓ Lambda') || log.includes('✓ Extracted') || log.includes('📅 Calendar') || log.includes('📊 Report') || log.includes('🚀 Deploy') || log.includes('📝 Success')) color = 'text-emerald-400';
                          return <div key={idx} className={color}>{log}</div>;
                        })
                      )}
                    </div>

                    {/* NLP Token Parser Box */}
                    {extractedIntent && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#070b14]/95 border border-indigo-500/20 rounded-xl p-4 space-y-3 font-mono text-xs"
                      >
                        <div className="flex items-center gap-2 border-b border-white/5 pb-1.5 text-slate-400">
                          <MessageSquareCode className="w-4 h-4 text-indigo-400" />
                          <span>Intent Mapper Engine (NLP Outcome)</span>
                        </div>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                          <div>
                            <span className="text-slate-500">MAPPED INTENT:</span>
                            <div className="text-indigo-400 font-bold font-mono text-xs">{extractedIntent.intent}</div>
                          </div>
                          <div>
                            <span className="text-slate-500">ACCURACY INDEX:</span>
                            <div className="text-emerald-400 font-bold font-mono text-xs">98.4% (Verified)</div>
                          </div>
                          <div className="col-span-2">
                            <span className="text-slate-500">EXTRACTED ENTITIES:</span>
                            <pre className="text-yellow-400 text-[10px] mt-1 bg-[#070b14] p-2 rounded border border-white/5 overflow-x-auto">
                              {JSON.stringify(extractedIntent.entities, null, 2)}
                            </pre>
                          </div>
                          <div className="col-span-2">
                            <span className="text-slate-500">SERVERLESS COMMAND ROUTING:</span>
                            <pre className="text-slate-300 text-[10px] mt-1 bg-[#070b14] p-2 rounded border border-white/5 overflow-x-auto text-blue-300">
                              {extractedIntent.code}
                            </pre>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="px-4 py-2 bg-[#070b14] border-t border-white/5 text-[10px] font-mono text-slate-500 flex justify-between">
                    <span>Engine: Flask + Amazon Web Services (AWS)</span>
                    <span>Deployment: Containerized (Docker)</span>
                  </div>
                </div>

              </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
