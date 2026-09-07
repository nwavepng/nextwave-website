import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'NextWave Technologies API', timestamp: new Date().toISOString() });
  });

  // AI Strategy & Architecture Consultation Endpoint
  app.post('/api/ai-consultation', async (req, res) => {
    const { companyName, industry, challenge, scale, targetSolutions = [] } = req.body || {};

    const fallbackResponse = {
      executiveSummary: `For ${companyName || 'your enterprise'} in the ${industry || 'technology'} sector, NextWave Technologies recommends a phased modernization strategy focusing on high-value operational automation and robust data governance.`,
      recommendedSoftware: [
        {
          name: 'OmniCore AI Orchestrator',
          purpose: 'Coordinate multi-agent workflows across your existing ERP, CRM, and internal databases with low-latency event streaming.',
          implementationWeeks: '6-8 weeks',
          impact: 'Eliminates up to 72% of manual cross-system data triage.'
        },
        {
          name: 'Synapse Secure RAG',
          purpose: 'Deploy zero-leakage enterprise retrieval augmented generation for proprietary documentation, compliance, and institutional knowledge.',
          implementationWeeks: '4-6 weeks',
          impact: 'Sub-second search latency with verifiable audit trails and RBAC.'
        }
      ],
      consultingServices: [
        'Enterprise AI Readiness & Security Governance Audit (Phase 1: 3 weeks)',
        'Data Foundation & High-Performance Vector Pipeline Engineering (Phase 2: 5 weeks)',
        'Executive Steering & Change Management Enablement (Continuous)'
      ],
      estimatedROI: '3.4x to 5.2x projected return on investment over 24 months',
      securityComplianceNote: 'SOC2 Type II, ISO 27001, and HIPAA-compliant architecture options with zero data retention guarantee.'
    };

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        success: true,
        source: 'knowledge-engine',
        data: fallbackResponse
      });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      const prompt = `You are the Chief Solutions Architect at NextWave Technologies, a premier enterprise firm specializing in AI-driven software solutions and corporate technology consulting.
A prospective enterprise client submitted their organizational requirements:
- Organization: ${companyName || 'Confidential Enterprise'}
- Industry: ${industry || 'Cross-Industry Enterprise'}
- Primary Operational Bottleneck / AI Goal: ${challenge || 'Accelerate AI transformation and operational efficiency'}
- Enterprise Scale: ${scale || 'Mid to Large Scale'}
- Expressed Interest In: ${targetSolutions.length > 0 ? targetSolutions.join(', ') : 'AI-driven software platforms & corporate consulting'}

NextWave Technologies flagship software products:
1. OmniCore AI Orchestrator (Autonomous multi-agent workflow engine, legacy ERP/CRM bridges)
2. CortexPredict Analytics (Real-time forecasting, anomaly detection, predictive demand modeling)
3. Synapse Secure RAG (Private high-compliance enterprise knowledge retrieval, zero-retention)
4. NeuroFlow Automation (Self-optimizing cognitive document and operations pipeline)
5. VisionScale Inspection (Edge/Cloud computer vision inspection & multimodal quality control)

NextWave Technologies corporate consulting practices:
1. Enterprise AI Readiness & Strategic Roadmap (90-day comprehensive audit & blueprint)
2. Architecture & Legacy Modernization (Monolith decoupling, event-driven AI services)
3. Data Engineering & Governance Architecture (Vector pipelines, data lakes, compliance)
4. Executive Advisory & Steering Governance (C-suite AI playbooks, ROI KPIs, change management)
5. Custom Model Fine-Tuning & Private Cloud Deployment (Domain SLMs, on-prem Kubernetes)

Provide a tailored executive proposal in JSON matching this schema:
{
  "executiveSummary": "Concise 2-3 sentence strategic executive assessment",
  "recommendedSoftware": [
    {
      "name": "Product Name from NextWave suite",
      "purpose": "Precise architectural alignment to their bottleneck",
      "implementationWeeks": "Estimated delivery window (e.g., 4-8 weeks)",
      "impact": "Quantifiable operational or financial outcome"
    }
  ],
  "consultingServices": [
    "Specific NextWave consulting program and duration"
  ],
  "estimatedROI": "Realistic estimated financial or operational ROI range (e.g., 280% - 410% in 18 months)",
  "securityComplianceNote": "Tailored data security, sovereignty, and compliance guarantee"
}
Return pure valid JSON only, without markdown backticks.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const text = response.text?.trim() || '';
      try {
        const parsed = JSON.parse(text);
        return res.json({
          success: true,
          source: 'gemini-advisor',
          data: parsed
        });
      } catch (parseErr) {
        return res.json({
          success: true,
          source: 'knowledge-engine',
          data: fallbackResponse
        });
      }
    } catch (error) {
      console.error('Error generating AI consultation:', error);
      return res.json({
        success: true,
        source: 'knowledge-engine',
        data: fallbackResponse
      });
    }
  });

  // Handle consultation booking / RFP submissions
  app.post('/api/consultation-request', (req, res) => {
    const { fullName, email, company, role, serviceInterest, message, timeline } = req.body || {};
    if (!email || !fullName) {
      return res.status(400).json({ error: 'Full name and email are required.' });
    }
    const referenceId = `NXT-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`;
    
    // In a production setup this routes to NextWave CRM / HubSpot / Salesforce
    return res.json({
      success: true,
      referenceId,
      message: `Thank you, ${fullName}. Your executive consultation request with NextWave Technologies has been registered. An Enterprise Solutions Principal will contact you within 1 business day.`,
      receivedDetails: {
        company: company || 'N/A',
        role: role || 'Enterprise Leader',
        serviceInterest: serviceInterest || 'General AI Inquiry',
        timeline: timeline || 'Immediate'
      }
    });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`NextWave Technologies server running on http://localhost:${PORT}`);
  });
}

startServer();
