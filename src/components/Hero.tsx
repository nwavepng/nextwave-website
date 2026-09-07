import { ArrowRight, Sparkles, Shield, Cpu, BarChart3, Lock, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenAIArchitect: () => void;
}

export default function Hero({ onOpenConsultation, onOpenAIArchitect }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 relative z-10">
        
        {/* Top Operational Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-medium text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>NextWave Core 4.2 Production Suite Active</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-medium text-blue-300">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>SOC 2 Type II & ISO 27001 Certified Enterprise Architecture</span>
          </div>
        </div>

        {/* Main Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Intelligent Software Systems. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Transformative Corporate Consulting.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
              NextWave Technologies engineers autonomous AI software platforms and provides high-conviction corporate technology consulting. We empower Fortune 500 enterprises to modernize legacy mainframes, orchestrate multi-agent workflows, and scale secure, sovereign AI.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-btn-briefing"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all cursor-pointer"
              >
                <span>Request Executive Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-ai-architect"
                onClick={onOpenAIArchitect}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/90 text-blue-300 font-semibold text-sm border border-slate-700 hover:border-blue-500/40 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Interactive AI Solution Architect</span>
              </button>

              <button
                id="hero-btn-explore-solutions"
                onClick={() => scrollTo('solutions-section')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-slate-300 hover:text-white font-medium text-sm transition-colors"
              >
                <span>Explore Solutions Suite</span>
                <span className="text-slate-500">↓</span>
              </button>
            </div>

            {/* Credential Checkmarks */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Zero Third-Party Training Leakage</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Private Cloud & On-Premises Air-Gap</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Fixed-Fee Diagnostic Roadmaps</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Highlights Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 shadow-xl backdrop-blur space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Core Enterprise Offerings
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700 text-blue-300 font-mono">
                  v4.2 Production
                </span>
              </div>

              {/* Offer 1: Software Platforms */}
              <div 
                onClick={() => scrollTo('solutions-section')}
                className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/60 hover:border-blue-500/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      AI Software Solutions
                    </h3>
                    <p className="text-xs text-slate-400">
                      OmniCore™, CortexPredict™, Synapse RAG™
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-300 transition-colors" />
                </div>
              </div>

              {/* Offer 2: Corporate Consulting */}
              <div 
                onClick={() => scrollTo('consulting-section')}
                className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/60 hover:border-blue-500/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      Corporate Consulting
                    </h3>
                    <p className="text-xs text-slate-400">
                      AI Roadmaps, Legacy Decoupling, Governance
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-300 transition-colors" />
                </div>
              </div>

              {/* Offer 3: Sovereign Security */}
              <div 
                onClick={() => scrollTo('architecture-security')}
                className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/60 hover:border-blue-500/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      Confidential Architecture
                    </h3>
                    <p className="text-xs text-slate-400">
                      SOC 2 Type II, ISO 27001, HIPAA Certified
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-300 transition-colors" />
                </div>
              </div>

              {/* Footer Stat inside hero card */}
              <div className="pt-2 text-center text-xs text-slate-400">
                Average client enterprise deployment timeline: <span className="text-white font-semibold">6.2 Weeks</span>
              </div>

            </div>
          </div>

        </div>

        {/* Enterprise Metrics Ribbon */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              $140M+
            </div>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
              Verified Client ROI & Cost Reductions
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              99.8%
            </div>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
              Production Execution Reliability SLA
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              45+
            </div>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
              Legacy ERP, CRM & Cloud Connectors
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              0%
            </div>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
              Data Retention Guarantee for External AI
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
