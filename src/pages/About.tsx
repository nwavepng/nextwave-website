import { 
  ShieldCheck, Check, Award, Cpu, Users, 
  MapPin, Phone, MessageSquare, ArrowRight, Activity, Zap, Building2, Printer 
} from 'lucide-react';
import Page from '../components/PageHero';
import { Link } from '../components/Header';
import { companyContact } from '../data/nextwave';

export default function About() {
  return (
    <Page
      eyebrow="ABOUT NEXTWAVE TECHNOLOGIES"
      title={
        <>
          Built in Papua New Guinea.<br />
          <em>Engineered for What's Next.</em>
        </>
      }
    >
      <section className="aboutMainSection">
        <div className="container aboutLayout">
          <div className="aboutImage">
            <div className="cityPhoto" role="img" aria-label="Port Moresby Papua New Guinea skyline and telecommunications hub"></div>

            <div className="imageTag">
              LOCAL PNG KNOWLEDGE<br />
              <strong>ENTERPRISE ICT ENGINEERING</strong>
            </div>
          </div>

          <div className="aboutText">
            <div className="eyebrow">WHO WE ARE</div>

            <h2>A dedicated networking partner, not just a hardware supplier.</h2>

            <p>
              NextWave Technologies was founded to bridge the gap between complex enterprise IT requirements and the unique operational challenges of Papua New Guinea. From severe electrical voltage fluctuations to remote geographic isolation, we engineer networks and power systems that endure.
            </p>

            <p>
              We don't sell generic consumer gadgets. We design, deploy, certify, and support enterprise-grade infrastructure: certified Cat6/Cat6A structured cabling, online double-conversion UPS protection, high-density Wi-Fi 6/7, managed printer fleets, and complete turnkey office set ups.
            </p>

            <div className="checkList">
              <div>
                <Check className="w-4 h-4 text-cyan-400 inline" />
                <span><strong>Certified Engineering:</strong> Structured cabling & high-speed enterprise network backbones</span>
              </div>

              <div>
                <Check className="w-4 h-4 text-cyan-400 inline" />
                <span><strong>On-the-Ground Presence:</strong> Direct operational hubs in Port Moresby and Bougainville</span>
              </div>

              <div>
                <Check className="w-4 h-4 text-cyan-400 inline" />
                <span><strong>Uninterrupted Power Focus:</strong> Grid surge suppression & true online double-conversion UPS</span>
              </div>

              <div>
                <Check className="w-4 h-4 text-cyan-400 inline" />
                <span><strong>Accountable Support:</strong> Direct-to-engineer hotlines without automated call center runarounds</span>
              </div>
            </div>

            <div className="aboutCtaGroup">
              <a href={`tel:${companyContact.phones[0].raw}`} className="btn primary" title="Call Technical Line 1">
                <Phone className="w-4 h-4 text-cyan-200 mr-2" />
                <span>Tech 1: {companyContact.phones[0].display}</span>
              </a>
              <a href={companyContact.email.quotesHref} className="btn secondary" title="Email info@nwavepng.com for a quote">
                REQUEST SITE VISIT (EMAIL) ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Practice Areas Spotlight */}
      <section className="aboutPracticesSection">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">SPECIALIZED PRACTICE AREAS</div>
              <h2 className="sectionTitle">Our 4 Core Engineering Disciplines</h2>
            </div>
          </div>

          <div className="practiceGrid">
            <div className="practiceCard">
              <div className="practiceIconBox">
                <Activity className="w-7 h-7 text-cyan-400" />
              </div>
              <h3>1. Network Audit & Diagnostics</h3>
              <p>
                Comprehensive health assessments, vulnerability scans, Wi-Fi RF heatmaps, and physical cable testing with prioritized remediation roadmaps.
              </p>
            </div>

            <div className="practiceCard">
              <div className="practiceIconBox">
                <Zap className="w-7 h-7 text-amber-400" />
              </div>
              <h3>2. UPS & Structured Cabling</h3>
              <p>
                Fluke-certified Cat6/Cat6A & optical fiber runs paired with online double-conversion UPS systems and surge suppression built for PNG's volatile grid.
              </p>
            </div>

            <div className="practiceCard">
              <div className="practiceIconBox">
                <Building2 className="w-7 h-7 text-blue-400" />
              </div>
              <h3>3. Turnkey Office Set Ups</h3>
              <p>
                Rapid, zero-downtime office IT rollouts: desk data drops, switches, core firewalls, Wi-Fi coverage, and conference room hybrid video systems.
              </p>
            </div>

            <div className="practiceCard">
              <div className="practiceIconBox">
                <Printer className="w-7 h-7 text-cyan-400" />
              </div>
              <h3>4. Enterprise Printer Service</h3>
              <p>
                Fleet setup, centralized print servers, scan-to-SharePoint workflows, user PIN security, and preventative hardware maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Stats Band */}
      <section className="darkBand">
        <div className="container stats">
          <div>
            <b>100+</b>
            <span>Commercial Clients Supported</span>
          </div>

          <div>
            <b>15+</b>
            <span>Years of Network Experience</span>
          </div>

          <div>
            <b>300+</b>
            <span>Cabling & Infrastructure Projects</span>
          </div>

          <div>
            <b>24/7</b>
            <span>Dedicated Support Line: 77449219</span>
          </div>
        </div>
      </section>

      {/* Locations Spotlight */}
      <section className="aboutLocationsSection">
        <div className="container">
          <div className="locationsGrid">
            <div className="locationCard">
              <div className="locationCardHeader">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3>Port Moresby Headquarters</h3>
                  <span>National Capital District</span>
                </div>
              </div>
              <p>
                Core management, enterprise networking, government & commercial client cabling teams, and central spares logistics.
              </p>
              <div className="locationContact">
                <a href={`tel:${companyContact.phones[0].raw}`} className="locationDial">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {companyContact.phones[0].display}</span>
                </a>
              </div>
            </div>

            <div className="locationCard">
              <div className="locationCardHeader">
                <MapPin className="w-6 h-6 text-emerald-400" />
                <div>
                  <h3>Bougainville Regional Hub</h3>
                  <span>Autonomous Region of Bougainville</span>
                </div>
              </div>
              <p>
                Field engineering, remote industrial connectivity, Starlink Business & VSAT rollouts, solar-UPS hybrid power systems, and regional support.
              </p>
              <div className="locationContact">
                <a href={`tel:${companyContact.supportPhone.raw}`} className="locationDial">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {companyContact.supportPhone.display}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
