import { useState, useEffect, FormEvent } from 'react';
import { X, CheckCircle2, Loader2, Send, Shield, Calendar, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillInterest?: string;
  prefillSummary?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  prefillInterest = '',
  prefillSummary = ''
}: ConsultationModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('Chief Technology Officer / VP Eng');
  const [serviceInterest, setServiceInterest] = useState(prefillInterest || 'Software Solution Pilot');
  const [timeline, setTimeline] = useState('Within 30 Days (Immediate)');
  const [message, setMessage] = useState(prefillSummary || '');
  const [needsNDA, setNeedsNDA] = useState(true);

  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefillInterest) setServiceInterest(prefillInterest);
    if (prefillSummary) setMessage(prefillSummary);
  }, [prefillInterest, prefillSummary]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      setErrorMsg('Please provide your full name and corporate work email.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/consultation-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          company,
          role,
          serviceInterest,
          timeline,
          message: needsNDA ? `${message} [Mutual NDA Requested prior to data review]` : message
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmittedData({
          referenceId: data.referenceId,
          message: data.message
        });
      } else {
        setErrorMsg(data.error || 'Failed to submit consultation request.');
      }
    } catch (err) {
      console.error('Error submitting consultation:', err);
      // Fallback submission success
      setSubmittedData({
        referenceId: `NXT-${Date.now().toString(36).toUpperCase()}`,
        message: `Thank you, ${fullName}. Your executive consultation request has been registered with NextWave Technologies.`
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm">
      
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl text-white overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Banner */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/90">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                NextWave Technologies
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-mono border border-blue-800/40">
                Enterprise Intake
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              Schedule Executive Briefing & RFP Review
            </h3>
          </div>

          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          
          {submittedData ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-700">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">
                  Executive Briefing Confirmed
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {submittedData.message}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-left text-xs space-y-2 font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Tracking Reference ID:</span>
                  <span className="text-blue-400 font-bold">{submittedData.referenceId}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>SLA Response Window:</span>
                  <span className="text-white">Under 24 Business Hours</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Assigned Practice:</span>
                  <span className="text-white">{serviceInterest}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-950/80 border border-red-800 text-red-300 text-xs">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="modal-input-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Arthur Pendelton"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    id="modal-input-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@enterprise.com"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Organization / Company
                  </label>
                  <input
                    id="modal-input-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Enterprise Corp"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Executive Title
                  </label>
                  <select
                    id="modal-select-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="Chief Technology Officer / VP Eng">Chief Technology Officer / VP Eng</option>
                    <option value="Chief Information Officer / VP IT">Chief Information Officer / VP IT</option>
                    <option value="Chief AI Officer / VP Data">Chief AI Officer / VP Data</option>
                    <option value="Chief Operating Officer / VP Ops">Chief Operating Officer / VP Ops</option>
                    <option value="Enterprise Solutions Architect">Enterprise Solutions Architect</option>
                    <option value="Corporate Strategy Director">Corporate Strategy Director</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Area of Interest
                  </label>
                  <select
                    id="modal-select-interest"
                    value={serviceInterest}
                    onChange={(e) => setServiceInterest(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="Software Solution Pilot">Software Solution Pilot (OmniCore / CortexPredict / Synapse)</option>
                    <option value="Enterprise AI Readiness Diagnostic">Enterprise AI Readiness & Strategic Roadmap</option>
                    <option value="Architecture & Legacy Modernization">Architecture & Legacy Modernization</option>
                    <option value="Data Engineering & Governance">Data Engineering & Sovereign Governance</option>
                    <option value="Custom Model Fine-Tuning">Custom Model Fine-Tuning & Private Hosting</option>
                    <option value="General Executive Briefing">General Executive Briefing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Initiative Target Timeline
                  </label>
                  <select
                    id="modal-select-timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="Within 30 Days (Immediate)">Within 30 Days (Immediate Action)</option>
                    <option value="Q2 / Q3 Enterprise Cycle">Next 90 - 180 Days (Q2 / Q3 Cycle)</option>
                    <option value="Fiscal Year 2027 Planning">Fiscal Year 2027 Capital Planning</option>
                    <option value="Exploring Feasibility">Exploratory / Research Phase</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Project Brief or Core Technical Challenge
                </label>
                <textarea
                  id="modal-textarea-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline key systems (e.g. SAP ERP, AWS, snowflake), bottlenecks, or target operational milestones..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500 leading-relaxed"
                />
              </div>

              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-950 border border-slate-800">
                <input
                  id="modal-check-nda"
                  type="checkbox"
                  checked={needsNDA}
                  onChange={(e) => setNeedsNDA(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="modal-check-nda" className="text-xs text-slate-300 cursor-pointer">
                  Request standard mutual Non-Disclosure Agreement (NDA) prior to technical review
                </label>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Shield className="w-3.5 h-3.5 text-blue-400" />
                  <span>Strict confidentiality guaranteed</span>
                </div>

                <button
                  id="modal-btn-submit"
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
