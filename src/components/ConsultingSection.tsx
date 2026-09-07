import { useState } from 'react';
import { CONSULTING_PRACTICES, METHODOLOGY_STEPS, ENGAGEMENT_MODELS } from '../data/consulting';
import { ConsultingPractice } from '../types';
import { ArrowRight, Compass, Layers, Database, ShieldCheck, Cpu, Clock, Award, CheckCircle2, ChevronRight } from 'lucide-react';

interface ConsultingSectionProps {
  onSelectPracticeForBriefing: (practiceTitle: string) => void;
  onOpenConsultation: () => void;
}

export default function ConsultingSection({ 
  onSelectPracticeForBriefing, 
  onOpenConsultation 
}: ConsultingSectionProps) {
  const [selectedPracticeId, setSelectedPracticeId] = useState<string>(CONSULTING_PRACTICES[0].id);

  const selectedPractice: ConsultingPractice = 
    CONSULTING_PRACTICES.find(p => p.id === selectedPracticeId) || CONSULTING_PRACTICES[0];

  const getPracticeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-blue-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-sky-600" />;
      default: return <Compass className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="consulting-section" className="py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-800/60">
            <Award className="w-3.5 h-3.5" />
            <span>Pillar II: Corporate Technology Consulting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Strategic Advisory, Legacy Modernization & Embedded Engineering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Technology transformation fails when technology is divorced from corporate governance and operating reality. NextWave’s partners—veterans of premier strategy consultancies and frontier AI labs—deliver actionable roadmaps and co-engineered solutions.
          </p>
        </div>

        {/* 5 Practice Areas Interactive Selector & Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left practice buttons list */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
              Select Practice Area
            </div>
            {CONSULTING_PRACTICES.map((practice) => {
              const isSelected = practice.id === selectedPracticeId;
              return (
                <div
                  key={practice.id}
                  id={`practice-btn-${practice.id}`}
                  onClick={() => setSelectedPracticeId(practice.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-slate-800 border-blue-500 shadow-md text-white'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/60 shrink-0 mt-0.5">
                    {getPracticeIcon(practice.iconName)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-400 tracking-wide">
                        Phase 0{practice.methodologyStage}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {practice.engagementLength}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1">
                      {practice.title}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 mt-3 transition-transform ${isSelected ? 'text-blue-400 translate-x-0.5' : 'text-slate-600'}`} />
                </div>
              );
            })}
          </div>

          {/* Right practice detail container */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-2xl border border-slate-700 p-6 sm:p-8 lg:p-10">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-700">
              <div>
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wide">
                  Practice Scope & Deliverables
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedPractice.title}
                </h3>
                <p className="text-sm text-slate-400 mt-0.5">
                  {selectedPractice.subtitle}
                </p>
              </div>

              <button
                id="btn-book-practice"
                onClick={() => onSelectPracticeForBriefing(selectedPractice.title)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer shrink-0"
              >
                <span>Engage This Practice</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Scope Details */}
            <div className="py-6 space-y-4 border-b border-slate-700">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Strategic Scope & Methodology
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedPractice.scope}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                  Demonstrated Client Impact
                </div>
                <p className="text-sm font-medium text-white">
                  "{selectedPractice.clientImpact}"
                </p>
              </div>
            </div>

            {/* Core Tangible Deliverables */}
            <div className="pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Guaranteed Contractual Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedPractice.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{del}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* 5-Stage Delivery Methodology */}
        <div id="methodology-section" className="pt-16 border-t border-slate-800">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              NextWave Transformation Framework
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              The 5-Stage Delivery Methodology
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Our phased approach minimizes capital risk, establishes verified proof-of-value with production data, and transitions full operational ownership to your internal teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {METHODOLOGY_STEPS.map((step) => (
              <div 
                key={step.stepNumber}
                className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-3 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-700">
                    <span className="font-mono text-blue-400 font-bold text-sm">
                      {step.stepNumber}
                    </span>
                    <span className="font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-3">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {step.focus}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-700/60 text-[11px] text-blue-300 font-medium">
                  <span className="text-slate-400 block font-normal">Deliverable:</span>
                  {step.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Flexible Corporate Engagement Models */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white">
              Enterprise Engagement Models
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Tailored to your executive mandate, internal engineering capabilities, and capital expenditure preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {model.title}
                  </h4>
                  <p className="text-xs font-semibold text-blue-400 mt-1">
                    {model.highlight}
                  </p>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {model.idealFor}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-700 text-xs text-slate-400">
                  <span className="font-bold text-slate-300 block mb-1">Structure:</span>
                  {model.format}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-colors cursor-pointer"
            >
              <span>Consult with a NextWave Engagement Principal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
