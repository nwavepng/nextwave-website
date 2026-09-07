export interface SoftwareSolution {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  architectureHighlight: string;
  primaryBenefit: string;
  metrics: {
    label: string;
    value: string;
  }[];
  capabilities: string[];
  techStack: string[];
  deploymentOptions: ('VPC Cloud' | 'On-Premises' | 'Hybrid Edge' | 'Air-Gapped')[];
  compliance: string[];
  idealFor: string;
}

export interface ConsultingPractice {
  id: string;
  title: string;
  subtitle: string;
  scope: string;
  engagementLength: string;
  deliverables: string[];
  methodologyStage: number;
  clientImpact: string;
  iconName: string;
}

export interface MethodologyStep {
  stepNumber: string;
  title: string;
  duration: string;
  focus: string;
  deliverable: string;
}

export interface CaseStudy {
  id: string;
  clientIndustry: string;
  clientProfile: string;
  challenge: string;
  nextWaveSolution: string;
  solutionProductsUsed: string[];
  results: {
    metric: string;
    description: string;
  }[];
  quote: {
    text: string;
    author: string;
    title: string;
  };
}

export interface AIArchitectRecommendation {
  executiveSummary: string;
  recommendedSoftware: {
    name: string;
    purpose: string;
    implementationWeeks: string;
    impact: string;
  }[];
  consultingServices: string[];
  estimatedROI: string;
  securityComplianceNote: string;
}
