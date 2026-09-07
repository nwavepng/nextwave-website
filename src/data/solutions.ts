import { SoftwareSolution } from '../types';

export const SOFTWARE_SOLUTIONS: SoftwareSolution[] = [
  {
    id: 'omnicore',
    name: 'OmniCore™ AI Orchestrator',
    category: 'Agentic Workflow Systems',
    tagline: 'Autonomous Multi-Agent Enterprise Orchestration Platform',
    description: 'A distributed multi-agent execution engine designed to coordinate complex business workflows across legacy ERPs, CRM systems, and cloud databases. Features deterministic state verification, human-in-the-loop validation, and low-latency event-driven routing.',
    architectureHighlight: 'Event-driven micro-kernel architecture with Raft consensus, vector memory cache, and cryptographic agent audit trails.',
    primaryBenefit: 'Eliminates 74% of cross-department manual data reconciliation and speeds execution pipelines from hours to milliseconds.',
    metrics: [
      { label: 'Latency Reduction', value: '88%' },
      { label: 'Task Completion Rate', value: '99.8%' },
      { label: 'Legacy Connectors', value: '45+' }
    ],
    capabilities: [
      'Multi-agent role specialization (Data Ingestor, Policy Auditor, Executor)',
      'Deterministic fallback routines for zero unmonitored hallucinations',
      'Native bidirectional bi-directional SAP, Salesforce, Workday, and Oracle connectors',
      'Granular role-based token delegation and session-scoped access keys',
      'Real-time streaming telemetry with OpenTelemetry instrumentation'
    ],
    techStack: ['Rust Core', 'gRPC / protobuf', 'Apache Kafka', 'Redis Cluster', 'Python SDK', 'Kubernetes'],
    deploymentOptions: ['VPC Cloud', 'On-Premises', 'Hybrid Edge'],
    compliance: ['SOC 2 Type II', 'ISO 27001', 'FedRAMP Moderate Ready'],
    idealFor: 'Fortune 500 operations teams seeking to automate repetitive cross-system transactional triage without replacing core legacy platforms.'
  },
  {
    id: 'cortexpredict',
    name: 'CortexPredict™ Analytics',
    category: 'Predictive Intelligence',
    tagline: 'High-Frequency Predictive Modeling & Anomaly Detection',
    description: 'An enterprise continuous intelligence engine that ingests millions of time-series signals per minute to forecast supply disruptions, financial risk anomalies, and equipment degradation cycles with calibrated uncertainty intervals.',
    architectureHighlight: 'Distributed temporal neural networks paired with Bayesian inference and sub-millisecond sliding window vector pipelines.',
    primaryBenefit: 'Forecast demand volatility 3.8x earlier with 94.2% precision, cutting buffer inventory carry costs by up to $18M annually.',
    metrics: [
      { label: 'Forecast Accuracy', value: '94.2%' },
      { label: 'Early Anomaly Lead Time', value: '14 Days' },
      { label: 'Throughput', value: '2.4M msg/s' }
    ],
    capabilities: [
      'Automated feature engineering across structured SQL and streaming telemetry',
      'Root-cause attribution trees for explainable machine learning outputs',
      'Automated drift detection and continuous self-retraining pipelines',
      'What-if scenario modeling with Monte Carlo simulation harnesses',
      'Executive dashboard integration with drill-down probability distributions'
    ],
    techStack: ['PyTorch', 'NVIDIA Triton', 'ClickHouse', 'Ray distributed', 'Apache Flink', 'Apache Arrow'],
    deploymentOptions: ['VPC Cloud', 'On-Premises'],
    compliance: ['SOC 2 Type II', 'HIPAA', 'GDPR Article 22 compliant'],
    idealFor: 'Supply chain directors, quantitative risk officers, and infrastructure managers managing volatile physical or financial flows.'
  },
  {
    id: 'synapse-rag',
    name: 'Synapse™ Secure RAG',
    category: 'Enterprise Knowledge Intelligence',
    tagline: 'Zero-Retention Private Knowledge Retrieval & Synthesis',
    description: 'A sovereign retrieval-augmented generation engine engineered specifically for strictly regulated environments. Allows thousands of employees to query petabytes of confidential contracts, clinical trials, and proprietary engineering specs with zero data leakage.',
    architectureHighlight: 'Hybrid sparse-dense lexical vector indexing, hardware-enforced confidential computing, and document-level ACL inheritance.',
    primaryBenefit: 'Retrieves verified answers with exact citation page offsets in under 380ms while guaranteeing data never trains external third-party models.',
    metrics: [
      { label: 'Query Latency', value: '<380ms' },
      { label: 'Citation Fidelity', value: '99.4%' },
      { label: 'Document Scale', value: '100M+ pages' }
    ],
    capabilities: [
      'Document-level ACL synchronization with Active Directory and Okta',
      'Verifiable citations with click-to-preview PDF bounding boxes',
      'Zero external data retention guarantee with air-gapped deployment option',
      'Automated PII/PHI redaction pipeline prior to vector indexing',
      'Hybrid semantic reranking (BM25 + ColBERT-v2 neural rerankers)'
    ],
    techStack: ['Qdrant / Milvus', 'LangGraph', 'vLLM', 'FastAPI', 'Confidential VM', 'PostgreSQL pgvector'],
    deploymentOptions: ['VPC Cloud', 'On-Premises', 'Air-Gapped'],
    compliance: ['SOC 2 Type II', 'HIPAA', 'ISO 27701', 'ITAR Ready'],
    idealFor: 'Legal teams, clinical research organizations, investment research desks, and defense contractors with strict non-disclosure mandates.'
  },
  {
    id: 'neuroflow',
    name: 'NeuroFlow™ Automation',
    category: 'Cognitive Document & Process AI',
    tagline: 'Self-Optimizing Multimodal Document Intelligence',
    description: 'An enterprise document ingestion platform that converts unstructured PDFs, complex insurance claims, multi-language trade manifests, and handwritten invoices into high-accuracy structured JSON directly into your core systems.',
    architectureHighlight: 'Vision-language transformer models paired with layout-aware spatial tokenizers and reinforcement learning from human feedback (RLHF).',
    primaryBenefit: 'Cuts manual document processing time from 42 minutes per case to under 18 seconds, reducing processing operational expenditures by 68%.',
    metrics: [
      { label: 'Field Extraction Accuracy', value: '99.2%' },
      { label: 'Processing Speed', value: '18s / case' },
      { label: 'Straight-Through Rate', value: '86%' }
    ],
    capabilities: [
      'Multi-page table extraction with nested hierarchy reconstruction',
      'Cross-document reconciliation (e.g. Purchase Order vs. Invoice vs. Bill of Lading)',
      'Human-in-the-loop exception routing with low-confidence flags',
      'Automated semantic fraud and duplicate invoice detection',
      'Pre-built domain packs for Insurance, Trade Finance, and Healthcare'
    ],
    techStack: ['PaddleOCR', 'HuggingFace Transformers', 'Celery / RabbitMQ', 'FastAPI', 'MinIO Object Store'],
    deploymentOptions: ['VPC Cloud', 'On-Premises', 'Hybrid Edge'],
    compliance: ['SOC 2 Type II', 'HIPAA', 'PCI-DSS'],
    idealFor: 'Insurance carriers, logistics customs brokers, shared service centers, and commercial banking operations.'
  },
  {
    id: 'visionscale',
    name: 'VisionScale™ Industrial Edge',
    category: 'Computer Vision & Edge Systems',
    tagline: 'Edge-Accelerated Defect Detection & Multimodal Quality Assurance',
    description: 'An edge-native computer vision pipeline designed for real-time manufacturing line defect detection, automated packaging inspection, and worker safety protocol adherence at sub-10ms line speeds.',
    architectureHighlight: 'TensorRT-optimized micro-models running on edge accelerators (NVIDIA Jetson / x86 GPU) with cloud sync for fleet-wide model updates.',
    primaryBenefit: 'Detects microscopic surface defects with 99.7% precision at production speeds up to 120 units per minute, avoiding costly factory product recalls.',
    metrics: [
      { label: 'Defect Precision', value: '99.7%' },
      { label: 'Inference Latency', value: '8.4ms' },
      { label: 'Fleet Sync Interval', value: 'Continuous' }
    ],
    capabilities: [
      'Real-time video inference on multiple concurrent industrial 4K camera streams',
      'Synthetic defect data generation to bootstrap rare failure detection',
      'Zero-latency offline operation with store-and-forward telemetry',
      'Over-the-air (OTA) encrypted model weights distribution to factory edge nodes',
      'SCADA / PLC hardware trigger integration via OPC-UA protocols'
    ],
    techStack: ['NVIDIA TensorRT', 'OpenCV', 'DeepStream SDK', 'MQTT', 'Rust Edge Agent', 'WebRTC'],
    deploymentOptions: ['Hybrid Edge', 'On-Premises', 'Air-Gapped'],
    compliance: ['ISO 9001', 'IEC 62443 Industrial Cybersecurity'],
    idealFor: 'High-precision manufacturing, semiconductor fabrication, automotive assembly lines, and pharmaceutical packaging facilities.'
  }
];
