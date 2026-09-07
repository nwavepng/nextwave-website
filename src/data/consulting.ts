import { ConsultingPractice, MethodologyStep } from '../types';

export const CONSULTING_PRACTICES: ConsultingPractice[] = [
  {
    id: 'readiness-roadmap',
    title: 'Enterprise AI Readiness & Strategic Roadmap',
    subtitle: '90-Day Executive Blueprint & Value Realization Model',
    scope: 'A rigorous diagnostic of your organization’s tech architecture, data hygiene, regulatory exposure, and workforce capability. We deliver an actionable 36-month roadmap aligned directly with financial EBITDA targets.',
    engagementLength: '6 - 8 Weeks',
    deliverables: [
      'Comprehensive AI Feasibility & Value Matrix (ranked by ROI & difficulty)',
      'Data Infrastructure & Technical Debt Audit Report',
      'Regulatory Compliance, Risk & Responsible AI Governance Framework',
      '3-Year Capital Allocation & Infrastructure Cost Model'
    ],
    methodologyStage: 1,
    clientImpact: 'Prevents wasteful AI pilot sprawl and prioritizes high-conviction enterprise use cases that yield measurable return within 6 months.',
    iconName: 'Compass'
  },
  {
    id: 'legacy-modernization',
    title: 'Architecture & Legacy Modernization',
    subtitle: 'Decoupling Monoliths for Intelligent Microservices',
    scope: 'We bridge legacy mainframes, ERPs, and fragmented on-premises silos with modern cloud-native, event-driven backbones ready to handle real-time inference and massive vector indexing without costly forklift replacements.',
    engagementLength: '12 - 24 Weeks',
    deliverables: [
      'Target Event-Driven Microservices Architecture Design',
      'Low-Latency API Gateway & Legacy Adapter Implementation',
      'Continuous Integration / Continuous Deployment (CI/CD) for AI Assets',
      'Zero-Downtime Data Migration & Sync Runbooks'
    ],
    methodologyStage: 2,
    clientImpact: 'Reduced core system query latency by 65% while establishing a scalable API foundation for autonomous agent orchestration.',
    iconName: 'Layers'
  },
  {
    id: 'data-governance',
    title: 'Data Engineering & Governance Architecture',
    subtitle: 'High-Performance Pipelines & Sovereign Vector Stores',
    scope: 'AI models are only as good as the underlying data fabric. NextWave designs enterprise data lakes, streaming ETL/ELT pipelines, real-time feature stores, and automated lineage tracking that guarantee data freshness, privacy, and integrity.',
    engagementLength: '8 - 16 Weeks',
    deliverables: [
      'Modern Data Lakehouse & Feature Store Architecture',
      'Automated PII/PHI Masking & Anonymization Pipelines',
      'Role-Based Data Access Control (RBAC) & Vector Partitioning Scheme',
      'Real-Time Ingestion Architecture with Kafka/Flink'
    ],
    methodologyStage: 3,
    clientImpact: 'Accelerated model training and vector indexing preparation times by 82%, eliminating data silo friction across 14 business units.',
    iconName: 'Database'
  },
  {
    id: 'executive-advisory',
    title: 'Executive AI Advisory & Change Management',
    subtitle: 'C-Suite Enablement, Ethics & Steering Committee Frameworks',
    scope: 'Technology adoption fails when organizational culture lags behind. We partner with CEOs, CTOs, and boards to construct AI steering committees, upskill operational teams, define ethical AI guardrails, and track human productivity gains.',
    engagementLength: 'Retainer / Ongoing Advisory',
    deliverables: [
      'Board-Level AI Risk & Governance Charter',
      'Workforce Augmentation & AI Upskilling Curriculum',
      'Productivity KPI Scorecard & Vendor Assessment Protocols',
      'Bi-Weekly Strategic Advisory Sessions with Senior Partners'
    ],
    methodologyStage: 4,
    clientImpact: 'Empowered 3,400+ enterprise knowledge workers to adopt generative workflow assistants with 91% sustained monthly engagement.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'custom-model-finetuning',
    title: 'Custom Model Fine-Tuning & Private Cloud Hosting',
    subtitle: 'Domain-Specialized SLMs on Sovereign Infrastructure',
    scope: 'Off-the-shelf public models often fall short on proprietary jargon, legal precedents, or proprietary engineering constraints. We train and fine-tune compact, high-efficiency domain models hosted on your dedicated private cloud or on-prem hardware.',
    engagementLength: '10 - 14 Weeks',
    deliverables: [
      'Dataset Curation, Deduplication & Synthetic Augmentation Pipeline',
      'Fine-Tuned Domain Model Artifacts (LoRA/QLoRA & Full Weights)',
      'Hardware Sizing & Quantization Benchmarks (TensorRT / vLLM)',
      'Autonomous Eval Benchmark Suite against Industry Baselines'
    ],
    methodologyStage: 5,
    clientImpact: 'Delivered a proprietary financial compliance model matching frontier LLM accuracy at 1/9th the operational inference inference cost.',
    iconName: 'Cpu'
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    stepNumber: '01',
    title: 'Diagnostic & Feasibility Analysis',
    duration: 'Weeks 1 - 3',
    focus: 'In-depth review of existing architecture, data readiness, security boundaries, and high-impact business bottlenecks.',
    deliverable: 'Executive AI Opportunity Matrix & Technical Feasibility Report'
  },
  {
    stepNumber: '02',
    title: 'Target Architecture & Systems Blueprint',
    duration: 'Weeks 4 - 6',
    focus: 'Detailed architectural blueprints mapping software solution modules, pipeline connectors, security ACLs, and SLA targets.',
    deliverable: 'Production Architecture Specification & Infrastructure Sizing'
  },
  {
    stepNumber: '03',
    title: 'Proof-of-Value (PoV) Production Pilot',
    duration: 'Weeks 7 - 11',
    focus: 'Deploying a targeted production-grade pilot in a sandboxed VPC with live data to validate measurable business ROI.',
    deliverable: 'Working Production Pilot with Quantified KPI Verification'
  },
  {
    stepNumber: '04',
    title: 'Enterprise-Wide Rollout & Co-Engineering',
    duration: 'Weeks 12 - 20',
    focus: 'Scaling software solutions across global business units, paired with hands-on co-engineering and team upskilling.',
    deliverable: 'Full Production Deployment, Monitoring Telemetry & Handover Runbooks'
  },
  {
    stepNumber: '05',
    title: 'Continuous Governance & Optimization',
    duration: 'Ongoing',
    focus: 'Quarterly model performance audits, drift correction, emerging model upgrades, and executive advisory steering.',
    deliverable: 'Quarterly Optimization Reviews & SLA Maintenance'
  }
];

export const ENGAGEMENT_MODELS = [
  {
    title: 'Strategic Advisory & Assessment',
    idealFor: 'Enterprises exploring AI feasibility or needing third-party architectural audit before major capital commitments.',
    format: 'Executive sprint (4-8 weeks) led by Senior Partners and Principal Architects.',
    highlight: 'Fixed-duration, fixed-scope high-conviction roadmap.'
  },
  {
    title: 'Embedded Co-Engineering Pods',
    idealFor: 'Enterprises wanting rapid deployment of NextWave software solutions with their internal engineering teams.',
    format: 'Cross-functional pod (Staff AI Engineer, Solutions Architect, Data Engineer) embedded into client sprint cycles.',
    highlight: 'Full knowledge transfer and shared code repository ownership.'
  },
  {
    title: 'Turnkey Enterprise Transformation',
    idealFor: 'Global organizations seeking end-to-end modernization from architecture design to complete deployed software.',
    format: 'Dedicated NextWave delivery team with SLA-backed implementation and 24/7 mission-critical support.',
    highlight: 'Outcome-based milestone delivery with guaranteed performance metrics.'
  }
];
