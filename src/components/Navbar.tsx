import { useState } from 'react';
import { ShieldCheck, ArrowRight, Menu, X, Terminal, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenAIArchitect: () => void;
}

export default function Navbar({ onOpenConsultation, onOpenAIArchitect }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            id="brand-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 border border-blue-400/30 group-hover:bg-blue-500 transition-colors">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12c3-4 6-4 9 0s6 4 9 0" />
                <path d="M2 7c3-4 6-4 9 0s6 4 9 0" opacity="0.6" />
                <path d="M2 17c3-4 6-4 9 0s6 4 9 0" opacity="0.3" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">NEXTWAVE</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/40">
                  ENTERPRISE
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-medium -mt-0.5">
                Technologies & Consulting
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button 
              id="nav-link-solutions"
              onClick={() => scrollToSection('solutions-section')}
              className="hover:text-white transition-colors"
            >
              Software Solutions
            </button>
            <button 
              id="nav-link-consulting"
              onClick={() => scrollToSection('consulting-section')}
              className="hover:text-white transition-colors"
            >
              Corporate Consulting
            </button>
            <button 
              id="nav-link-methodology"
              onClick={() => scrollToSection('methodology-section')}
              className="hover:text-white transition-colors"
            >
              Methodology
            </button>
            <button 
              id="nav-link-casestudies"
              onClick={() => scrollToSection('case-studies-section')}
              className="hover:text-white transition-colors"
            >
              Client Impact
            </button>
            <button 
              id="nav-link-architecture"
              onClick={() => scrollToSection('architecture-security')}
              className="hover:text-white transition-colors"
            >
              Security & Specs
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-btn-ai-architect"
              onClick={onOpenAIArchitect}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-700 hover:border-blue-500/50 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              AI Solution Architect
            </button>

            <button
              id="nav-btn-consultation"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-500/30 transition-all cursor-pointer"
            >
              <span>Executive Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 text-xs text-emerald-400 px-2 py-1 bg-emerald-950/40 rounded border border-emerald-900/40">
            <ShieldCheck className="w-4 h-4" />
            <span>SOC 2 Type II Certified • HIPAA Compliant</span>
          </div>
          <button
            onClick={() => scrollToSection('solutions-section')}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            AI Software Solutions
          </button>
          <button
            onClick={() => scrollToSection('consulting-section')}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Corporate Consulting Services
          </button>
          <button
            onClick={() => scrollToSection('methodology-section')}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            5-Stage Delivery Methodology
          </button>
          <button
            onClick={() => scrollToSection('case-studies-section')}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Client Impact & Case Studies
          </button>
          <button
            onClick={() => scrollToSection('architecture-security')}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Enterprise Security & Architecture
          </button>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIArchitect();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-slate-800 text-blue-300 border border-slate-700"
            >
              <Sparkles className="w-4 h-4" />
              Launch AI Solution Architect
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 text-white"
            >
              <span>Schedule Executive Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
