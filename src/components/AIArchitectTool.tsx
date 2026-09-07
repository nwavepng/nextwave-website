import { useState, FormEvent } from 'react';
import { AIArchitectRecommendation } from '../types';
import { Sparkles, Loader2, CheckCircle2, ArrowRight, ShieldCheck, Copy, Check, Terminal, FileText } from 'lucide-react';

interface AIArchitectToolProps {
  onScheduleWithPlan: (planSummary: string) => void;
}

export default function AIArchitectTool({ onScheduleWithPlan }: AIArchitectToolProps) {
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('Financial Services & Banking');
  const [challenge, setChallenge] = useState('Cross-system manual workflow triage and unstructured document backlogs');
  const [scale, setScale] = useState('Large Enterprise (1,000 - 10,000 employees)');
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([
    'OmniCore™ AI Orchestrator',
    'Synapse™ Secure RAG'
  ]);
  
  const [customGoal, setCustomGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AIArchitectRecommendation | null>(null);
  const [copied, setCopied] = useState(false);

  const togglePriority = (sol: string) => {
    if (selectedPriorities.includes(sol)) {
      setSelectedPriorities(selectedPriorities.filter(s => s !== sol));
    } else {
      setSelectedPriorities([...selectedPriorities, sol]);
    }
  };

  const handleGenerateBlueprint = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/ai-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: companyName.trim() || 'Your Enterprise Organization',
          industry,
          challenge: customGoal.trim() ? `${challenge} — Specific mandate: ${customGoal.trim()}` : challenge,
          scale,
          targetSolutions: selectedPriorities
        })
      });

      const resData = await response.json();
      if (resData && resData.data) {
        setRecommendation(resData.data);
      }
    } catch (err) {
      console.error('Error generating blueprint:', err);
      // Fallback state
      setRecommendation({
        executiveSummary: `For ${companyName || 'your enterprise'} in the ${industry} sector, NextWave Technologies recommends deploying OmniCore AI Orchestrator alongside a 6-week Enterprise AI Readiness Diagnostic.`,
        recommendedSoftware: [
          {
            name: 'OmniCore™ AI Orchestrator',
            purpose: 'Automate cross-department transactional triage and legacy ERP routing.',
            implementationWeeks: '6 - 8 Weeks',
            impact: 'Cuts manual reconciliation latency by up to 74%.'
          },
          {
            name: 'Synapse™ Secure RAG',
            purpose: 'Zero-retention private document indexing with granular role-based ACLs.',
            implementationWeeks: '4 - 6 Weeks',
            impact: 'Sub-second search across proprietary contracts and records.'
          }
        ],
        consultingServices: [
          'Enterprise AI Readiness & Security Governance Audit (Phase 1)',
          'Architecture Decoupling & Legacy ERP Adapter Engineering (Phase 2)',
          'Executive Steering & Change Management Enablement'
        ],
        estimatedROI: '3.4x to 5.2x projected return on investment over 24 months',
        securityComplianceNote: 'SOC2 Type II, ISO 27001, and HIPAA-compliant architecture with zero data retention.'
      });
    } finally {
      setLoading(false);
    }
  };

  const copyBlueprint = () => {
    if (!recommendation) return;
    const text = `NEXTWAVE TECHNOLOGIES - ARCHITECTURAL BLUEPRINT
Organization: ${companyName || 'Enterprise Client'}
Industry: ${industry}
Scale: ${scale}

EXECUTIVE ASSESSMENT:
${recommendation.executiveSummary}

RECOMMENDED SOFTWARE SOLUTIONS:
${recommendation.recommendedSoftware.map(s => `- ${s.name} (${s.implementationWeeks}): ${s.purpose} [Impact: ${s.impact}]`).join('\n')}

CONSULTING ENGAGEMENT ROADMAP:
${recommendation.consultingServices.map(c => `- ${c}`).join('\n')}

PROJECTED 24-MONTH ROI:
${recommendation.estimatedROI}

SECURITY & COMPLIANCE:
${recommendation.securityComplianceNote}
`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleBookWithBlueprint = () => {
    if (!recommendation) return;
    const summary = `Generated Blueprint for ${companyName || 'Enterprise'} (${industry}): ${recommendation.recommendedSoftware.map(s => s.name).join(', ')}`;
    onScheduleWithPlan(summary);
  };

  return (
    <section id="ai-architect-tool" className="py-24 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-800/50">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Enterprise Planning Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            NextWave AI Solution Architect & ROI Estimator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Configure your technical bottlenecks and organizational scale to receive an immediate architectural recommendation, implementation timeline, and projected 24-month ROI model.
          </p>
        </div>

        {/* Two Column Layout: Configuration Form & Live Blueprint Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                1. Specify Enterprise Parameters
              </span>
              <span className="text-[11px] text-blue-400 font-mono">
                System Advisor Engine
              </span>
            </div>

            <form onSubmit={handleGenerateBlueprint} className="space-y-5">
              
              {/* Organization Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Organization / Enterprise Name (Optional)
                </label>
                <input
                  id="input-company-name"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Apex Global Logistics, Meridian Health, Citadel Trust"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Industry Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Industry Vertical
                </label>
                <select
                  id="select-industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="Financial Services & Banking">Financial Services, Banking & Capital Markets</option>
                  <option value="Healthcare & Life Sciences">Healthcare Systems, Payers & Life Sciences</option>
                  <option value="Global Freight & Supply Chain">Supply Chain, Freight & Multimodal Logistics</option>
                  <option value="Advanced Manufacturing & Energy">Industrial Manufacturing, Semiconductors & Energy</option>
                  <option value="Enterprise SaaS & Technology">Enterprise SaaS, Telecommunications & IT</option>
                  <option value="Retail & Multi-Channel Commerce">Retail, Consumer Goods & E-Commerce</option>
                </select>
              </div>

              {/* Primary Bottleneck */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Primary Operational Bottleneck / Transformation Goal
                </label>
                <select
                  id="select-challenge"
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="Cross-system manual workflow triage and unstructured document backlogs">
                    Cross-system manual workflow triage and unstructured document backlogs
                  </option>
                  <option value="Volatile demand forecasting, supply chain anomalies, and equipment downtime">
                    Volatile demand forecasting, supply chain anomalies, and equipment downtime
                  </option>
                  <option value="Fragmented enterprise knowledge silos and risk of confidential data leakage">
                    Fragmented enterprise knowledge silos and risk of confidential data leakage
                  </option>
                  <option value="High operational expenditures in manual invoice, claim, and contract verification">
                    High operational expenditures in manual invoice, claim, and contract verification
                  </option>
                  <option value="Microscopic manufacturing line defect rate and manual inspection fatigue">
                    Microscopic manufacturing line defect rate and manual inspection fatigue
                  </option>
                  <option value="Legacy monolith decoupling and enterprise-wide AI readiness alignment">
                    Legacy monolith decoupling and enterprise-wide AI readiness alignment
                  </option>
                </select>
              </div>

              {/* Scale */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Enterprise Scale
                </label>
                <select
                  id="select-scale"
                  value={scale}
                  onChange={(e) => setScale(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="Mid-Market ($50M - $250M Revenue)">Mid-Market ($50M - $250M Revenue)</option>
                  <option value="Large Enterprise ($250M - $2B Revenue, 1,000+ employees)">Large Enterprise ($250M - $2B Revenue, 1,000+ employees)</option>
                  <option value="Global Multinational ($2B+ Revenue, 10,000+ employees)">Global Multinational ($2B+ Revenue, 10,000+ employees)</option>
                </select>
              </div>

              {/* Solution Suite Interests */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Target NextWave Technologies Platforms
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'OmniCore™ AI Orchestrator',
                    'CortexPredict™ Analytics',
                    'Synapse™ Secure RAG',
                    'NeuroFlow™ Automation',
                    'VisionScale™ Industrial Edge'
                  ].map((sol) => {
                    const checked = selectedPriorities.includes(sol);
                    return (
                      <div
                        key={sol}
                        onClick={() => togglePriority(sol)}
                        className={`p-2.5 rounded-lg border cursor-pointer flex items-center gap-2 transition-colors ${
                          checked
                            ? 'bg-blue-950/70 border-blue-600 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] font-bold border ${
                          checked ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700'
                        }`}>
                          {checked && '✓'}
                        </div>
                        <span className="truncate">{sol}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Optional Custom Mandate */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Specific Mandate or Cloud Constraints (Optional)
                </label>
                <input
                  id="input-custom-goal"
                  type="text"
                  value={customGoal}
                  onChange={(e) => setCustomGoal(e.target.value)}
                  placeholder="e.g. Must integrate with SAP S/4HANA on AWS GovCloud with zero external egress"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Generate Button */}
              <button
                id="btn-generate-blueprint"
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold text-sm shadow-md transition-colors cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Synthesizing Enterprise Architecture...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-blue-300" />
                    <span>Synthesize Solution Blueprint & ROI Estimate</span>
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Right Column: Live Architectural Blueprint Result */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                2. Recommended Architecture & Roadmap
              </span>
              {recommendation && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyBlueprint}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              )}
            </div>

            {loading ? (
              <div className="py-24 text-center space-y-4">
                <Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto" />
                <div className="text-sm font-semibold text-white">
                  NextWave Chief Solutions Architect is evaluating your parameters...
                </div>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Cross-referencing software product modules, consulting milestones, and security compliance boundaries.
                </p>
              </div>
            ) : recommendation ? (
              <div className="space-y-6">
                
                {/* Executive Assessment */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Executive Strategic Assessment</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                    {recommendation.executiveSummary}
                  </p>
                </div>

                {/* Software Allocations */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Recommended NextWave Software Deployments
                  </div>
                  <div className="space-y-2.5">
                    {recommendation.recommendedSoftware.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">
                            {item.name}
                          </span>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-mono border border-blue-800/40">
                            {item.implementationWeeks}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {item.purpose}
                        </p>
                        <div className="text-[11px] font-semibold text-emerald-400 pt-1">
                          Expected Impact: {item.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consulting Program */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Aligned Corporate Consulting Roadmap
                  </div>
                  <div className="space-y-1.5">
                    {recommendation.consultingServices.map((srv, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projected ROI & Compliance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/40">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-blue-400 block mb-1">
                      Projected 24-Month ROI
                    </span>
                    <span className="text-sm font-bold text-white">
                      {recommendation.estimatedROI}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-400 block mb-1 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Security Standard</span>
                    </span>
                    <span className="text-xs text-slate-300">
                      {recommendation.securityComplianceNote}
                    </span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    id="btn-book-with-plan"
                    onClick={handleBookWithBlueprint}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors cursor-pointer"
                  >
                    <span>Schedule Executive Briefing with this Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ) : (
              <div className="py-20 text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center mx-auto border border-slate-700">
                  <Terminal className="w-6 h-6" />
                </div>
                <div className="text-base font-bold text-white">
                  Awaiting Enterprise Specifications
                </div>
                <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Select your organization parameters and click "Synthesize Solution Blueprint" to compute a custom architecture and financial realization model.
                </p>
                <button
                  type="button"
                  onClick={() => handleGenerateBlueprint()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-blue-300 border border-slate-700 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Run Sample Financial Services Blueprint</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
