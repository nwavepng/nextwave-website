import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'global-logistics',
    clientIndustry: 'Global Freight & Supply Chain',
    clientProfile: 'Top-5 Global Multimodal Logistics Carrier ($14B Annual Revenue)',
    challenge: 'Unpredictable port congestion and weather delays triggered chronic cargo rerouting penalties, resulting in over $42M in annual demurrage and buffer warehousing costs. Legacy ERP systems took 18 hours to simulate alternative shipping lanes.',
    nextWaveSolution: 'NextWave deployed CortexPredict™ Analytics integrated with OmniCore™ AI Orchestrator alongside a 14-week Legacy Modernization consulting engagement to connect legacy terminal operating systems into a streaming Kafka backbone.',
    solutionProductsUsed: ['CortexPredict™ Analytics', 'OmniCore™ AI Orchestrator', 'Architecture Modernization'],
    results: [
      { metric: '64%', description: 'Reduction in multi-leg rerouting latency (from 18 hours to 38 minutes)' },
      { metric: '$28.4M', description: 'Net annual demurrage and detention penalty savings realized in Year 1' },
      { metric: '94.6%', description: 'Prediction accuracy for container dwell time 7 days ahead' }
    ],
    quote: {
      text: 'NextWave didn’t just hand us algorithms; their consulting team completely decoupled our 20-year-old dispatch systems and stood up a predictive decision engine that our port coordinators trust daily.',
      author: 'Henrik Lindqvist',
      title: 'Global SVP of Fleet Operations & Technology'
    }
  },
  {
    id: 'tier1-wealth-banking',
    clientIndustry: 'Financial Services & Private Wealth',
    clientProfile: 'Tier-1 International Private Bank with $320B Assets Under Management',
    challenge: 'Over 650 research analysts and compliance officers spent 25+ hours per week manually synthesizing complex multi-jurisdiction regulatory filings, SEC releases, and proprietary credit memoranda under strict banking confidentiality mandates.',
    nextWaveSolution: 'Architected and deployed Synapse™ Secure RAG on private dedicated AWS Outposts with strict zero-leakage air-gapping, backed by NextWave Executive Advisory for regulatory risk audit and compliance approval.',
    solutionProductsUsed: ['Synapse™ Secure RAG', 'Enterprise AI Readiness & Roadmap', 'Custom Model Fine-Tuning'],
    results: [
      { metric: '76%', description: 'Decrease in analyst research synthesis cycle time' },
      { metric: '18,500 hrs', description: 'Analyst research hours liberated annually for active client advisory' },
      { metric: '100%', description: 'Regulatory compliance score across FINRA & SEC audit inspections' }
    ],
    quote: {
      text: 'The zero-retention architecture of Synapse RAG satisfied our strictest risk committee mandates. Our investment teams now execute deep credit analysis in minutes with full page citations.',
      author: 'Marcus Vance',
      title: 'Chief Technology & Innovation Officer'
    }
  },
  {
    id: 'healthcare-clinical-network',
    clientIndustry: 'Healthcare & Life Sciences',
    clientProfile: 'Integrated Healthcare Provider Network (34 Hospitals, 120 Urgent Care Centers)',
    challenge: 'Backlog of 1.2 million unstructured prior-authorization documents, specialist clinical referrals, and laboratory claims caused delayed patient care approvals and an estimated $36M in billing denials.',
    nextWaveSolution: 'NextWave engineered and deployed NeuroFlow™ Automation coupled with a 16-week Data Governance and FHIR/HL7 integration sprint, automating clinical document intake and policy matching.',
    solutionProductsUsed: ['NeuroFlow™ Automation', 'Data Engineering & Governance', 'Co-Engineering Pods'],
    results: [
      { metric: '82%', description: 'Straight-through prior-authorization approval rate without human touch' },
      { metric: '18s', description: 'Average document extraction & policy validation time (down from 35 mins)' },
      { metric: '$21.2M', description: 'Reduction in administrative claims denials in the first 12 months' }
    ],
    quote: {
      text: 'NextWave delivered a transformational clinical automation engine that reduced our patient authorization wait times from 4 business days to same-day, with zero clinical errors.',
      author: 'Dr. Elena Rostova',
      title: 'VP of Digital Health Transformation'
    }
  },
  {
    id: 'precision-aerospace-mfg',
    clientIndustry: 'Aerospace & Advanced Manufacturing',
    clientProfile: 'Tier-1 Commercial Turbine Component Manufacturer',
    challenge: 'Manual microscopic inspection of turbine blade thermal coatings suffered from human fatigue variance, leading to a 2.4% scrap rate and costly production rework bottlenecks.',
    nextWaveSolution: 'Implemented VisionScale™ Industrial Edge across 16 assembly cells paired with on-premises NVIDIA Jetson accelerators, trained with domain fine-tuning and SCADA hardware integration.',
    solutionProductsUsed: ['VisionScale™ Industrial Edge', 'Custom Model Fine-Tuning', 'Embedded Co-Engineering'],
    results: [
      { metric: '99.85%', description: 'Verified defect classification precision under industrial lighting' },
      { metric: '8.4ms', description: 'Real-time inference speed per blade component' },
      { metric: '$14.6M', description: 'Direct savings in preserved raw materials and avoided rework' }
    ],
    quote: {
      text: 'NextWave’s edge vision system exceeded our stringent FAA safety tolerance specifications on the very first production run.',
      author: 'David Chen',
      title: 'Director of Advanced Manufacturing Engineering'
    }
  }
];
