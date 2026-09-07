import { useState } from 'react';
import { SOFTWARE_SOLUTIONS } from '../data/solutions';
import { SoftwareSolution } from '../types';
import { CheckCircle2, ArrowRight, ShieldCheck, Terminal, Server, Layers, Cpu } from 'lucide-react';

interface SolutionsSectionProps {
  onSelectSolutionForBriefing: (solutionName: string) => void;
  onOpenAIArchitect: () => void;
}

export default function SolutionsSection({ 
  onSelectSolutionForBriefing, 
  onOpenAIArchitect 
}: SolutionsSectionProps) {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(SOFTWARE_SOLUTIONS[0].id);

  const activeSolution: SoftwareSolution = 
    SOFTWARE_SOLUTIONS.find(s => s.id === activeSolutionId) || SOFTWARE_SOLUTIONS[0];

  return (
    <section id="solutions-section" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
            <Cpu className="w-3.5 h-3.5" />
            <span>Pillar I: AI-Driven Software Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            High-Performance AI Software Built for Critical Enterprise Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            NextWave designs and licenses modular, hardened AI software solutions. Deployable inside your sovereign Virtual Private Cloud (VPC), on-premises data centers, or edge clusters with deterministic reliability and zero third-party training leakage.
          </p>
        </div>

        {/* Product Navigation Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-200 overflow-x-auto">
          {SOFTWARE_SOLUTIONS.map((solution) => {
            const isActive = solution.id === activeSolutionId;
            return (
              <button
                key={solution.id}
                id={`tab-${solution.id}`}
                onClick={() => setActiveSolutionId(solution.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{solution.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>}
              </button>
            );
          })}
        </div>

        {/* Active Solution Deep-Dive View */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          
          {/* Top Bar of Active Solution */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded">
                  {activeSolution.category}
                </span>
                <span className="text-xs text-slate-500 font-medium">Enterprise Software Edition</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {activeSolution.name}
              </h3>
              <p className="text-sm sm:text-base font-medium text-slate-600 mt-1">
                {activeSolution.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                id={`btn-pilot-${activeSolution.id}`}
                onClick={() => onSelectSolutionForBriefing(activeSolution.name)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <span>Schedule Solution Pilot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              
              <button
                id={`btn-roi-${activeSolution.id}`}
                onClick={onOpenAIArchitect}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Calculate ROI</span>
              </button>
            </div>
          </div>

          {/* Core Description & Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-slate-200">
            
            <div className="lg:col-span-8 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Executive Overview & Value Thesis
              </h4>
              <p className="text-slate-700 text-base leading-relaxed">
                {activeSolution.description}
              </p>

              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-slate-800">
                <div className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-1">
                  Primary Enterprise Outcome
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {activeSolution.primaryBenefit}
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Architectural Implementation Note
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3.5 rounded-lg border border-slate-200 font-mono">
                  <Terminal className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{activeSolution.architectureHighlight}</span>
                </div>
              </div>
            </div>

            {/* Metrics Pillar */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Performance Benchmarks
              </div>
              {activeSolution.metrics.map((m, idx) => (
                <div key={idx} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Capabilities Grid */}
          <div className="py-8 border-b border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
              Core Enterprise Capabilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeSolution.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Bar */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
            <div>
              <span className="font-bold text-slate-900 uppercase block mb-1">
                Deployment Topology:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeSolution.deploymentOptions.map((opt, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-medium">
                    {opt}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="font-bold text-slate-900 uppercase block mb-1">
                Engineering Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeSolution.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="font-bold text-slate-900 uppercase block mb-1">
                Compliance & Security:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeSolution.compliance.map((c, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{c}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Ideal Fit Summary */}
          <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
            <span className="font-bold text-slate-700">Target Organization Fit:</span> {activeSolution.idealFor}
          </div>

        </div>

        {/* Bottom Solution Catalog Preview Cards */}
        <div className="mt-12">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            NextWave Modular Software Suite Overview
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SOFTWARE_SOLUTIONS.map((s) => (
              <div 
                key={s.id}
                onClick={() => setActiveSolutionId(s.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  s.id === activeSolutionId
                    ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  {s.category}
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {s.name.split('™')[0]}™
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {s.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
