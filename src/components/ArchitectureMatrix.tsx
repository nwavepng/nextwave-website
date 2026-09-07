import { ShieldCheck, Lock, Server, Cloud, Cpu, CheckCircle2 } from 'lucide-react';

export default function ArchitectureMatrix() {
  return (
    <section id="architecture-security" className="py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-800/60">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sovereign Security & Deployment Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Enterprise Security, Zero-Leakage & Sovereign Hosting
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Enterprise AI cannot depend on fragile public API wrappers. NextWave Technologies software platforms run exclusively within your dedicated security boundary with cryptographic audit trails and deterministic state guarantees.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Private VPC Deployment
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Deploy inside your own AWS, Google Cloud, or Microsoft Azure tenancy with zero external egress. Complete VPC peering and PrivateLink isolation.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Air-Gapped & On-Premises
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Full offline bare-metal Kubernetes and NVIDIA DGX cluster support. Models execute entirely disconnected from public internet routing.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Zero-Retention Guarantee
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Your confidential training data, prompts, and vector embeddings are never used to train frontier models. Ephemeral memory destruction protocols.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Hardware Attestation
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Confidential Computing with AMD SEV-SNP and Intel SGX enclaves verifying memory encryption during high-frequency vector retrieval.
            </p>
          </div>

        </div>

        {/* Compliance & Regulatory Matrix */}
        <div className="bg-slate-800/90 rounded-2xl border border-slate-700 p-6 sm:p-8 lg:p-10 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-700">
            <div>
              <h3 className="text-xl font-bold text-white">
                Audited Regulatory & Governance Compliance
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Annual independent third-party audits and SOC2 Type II reports available under mutual NDA.
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60 font-semibold self-start sm:self-auto">
              Audits Active for 2026
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { standard: 'SOC 2 Type II', authority: 'AICPA Audited' },
              { standard: 'ISO 27001', authority: 'Information Security' },
              { standard: 'HIPAA Compliant', authority: 'PHI Vaults & BAA' },
              { standard: 'GDPR Article 22', authority: 'Explainable AI' },
              { standard: 'FedRAMP Moderate', authority: 'GovReady Controls' },
              { standard: 'PCI-DSS Level 1', authority: 'Tokenized Payments' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-1">
                <div className="text-xs sm:text-sm font-bold text-white">{item.standard}</div>
                <div className="text-[11px] text-slate-400">{item.authority}</div>
              </div>
            ))}
          </div>

          {/* SLA Tiers */}
          <div className="pt-6 border-t border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">Enterprise Production SLA</span>
                <span className="text-xs font-mono text-blue-400">99.8% Availability</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Standard with all NextWave software licenses. Includes 4-hour critical issue response window, automated patch deployments, and dedicated account lead.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Multi-region automated failover runbooks included</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">Mission-Critical Premier SLA</span>
                <span className="text-xs font-mono text-emerald-400">99.95% Availability</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Designed for high-frequency financial trading, clinical acute care, and defense systems. Includes 15-minute response time and 24/7 dedicated Site Reliability Engineer (SRE).
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Active-Active multi-cloud disaster recovery clusters</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
