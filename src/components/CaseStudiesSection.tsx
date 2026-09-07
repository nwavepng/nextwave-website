import { useState } from 'react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudy } from '../types';
import { TrendingUp, Quote, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenConsultation: () => void;
}

export default function CaseStudiesSection({ onOpenConsultation }: CaseStudiesSectionProps) {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);

  const activeCase: CaseStudy = CASE_STUDIES.find(c => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <section id="case-studies-section" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Enterprise Impact & Realized ROI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Measured Outcomes Across Global Enterprises
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our dual approach combines proprietary software platforms with high-touch advisory. Explore verified transformations from Fortune 500 logistics leaders, private banks, healthcare providers, and advanced manufacturing operations.
          </p>
        </div>

        {/* Case Study Selector Chips */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-200">
          {CASE_STUDIES.map((c) => {
            const isActive = c.id === selectedCaseId;
            return (
              <button
                key={c.id}
                id={`case-tab-${c.id}`}
                onClick={() => setSelectedCaseId(c.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{c.clientIndustry}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Spotlight */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          
          {/* Header of Case */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                {activeCase.clientIndustry}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                {activeCase.clientProfile}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeCase.solutionProductsUsed.map((prod, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-semibold">
                  {prod}
                </span>
              ))}
            </div>
          </div>

          {/* Core Story Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-slate-200">
            
            {/* Challenge & Solution */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  The Enterprise Challenge
                </h4>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {activeCase.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                  NextWave Deployed Solution & Consulting Intervention
                </h4>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {activeCase.nextWaveSolution}
                </p>
              </div>

              {/* Verified Executive Quote */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 relative">
                <Quote className="w-6 h-6 text-slate-300 absolute top-4 right-4" />
                <p className="text-sm italic text-slate-800 leading-relaxed pr-6">
                  "{activeCase.quote.text}"
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">{activeCase.quote.author}</span>
                  <span className="text-xs text-slate-500">{activeCase.quote.title}</span>
                </div>
              </div>
            </div>

            {/* Quantified Metrics Highlight */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-center space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-100">
                Audited Enterprise Performance Metrics
              </div>

              {activeCase.results.map((res, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="text-blue-600">●</span>
                    <span>{res.metric}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                    {res.description}
                  </p>
                </div>
              ))}

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Request Full Case Study & Architecture Docs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
