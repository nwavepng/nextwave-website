import { 
  Phone, MessageSquare, Mail, Shield, Activity, Zap, Cable, 
  Building2, Printer, Wifi, Globe, CheckCircle2, ArrowRight, 
  Clock, Award, Server, Laptop, ChevronRight, FileSpreadsheet
} from 'lucide-react';
import { Link } from '../components/Header';
import { services, companyContact } from '../data/nextwave';

export default function Home() {
  return (
    <main className="homeMain">
      {/* Hero Section */}
      <section className="hero">
        <div className="heroGlow" aria-hidden="true"></div>

        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="eyebrowBadge">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>PAPUA NEW GUINEA · ENTERPRISE ICT INFRASTRUCTURE</span>
            </div>

            <h1 className="heroTitle">
              ENGINEERED FOR<br />
              <span className="heroTitleAccent">UNBROKEN</span><br />
              CONNECTIVITY.
            </h1>

            <p className="heroDescription">
              NextWave Technologies delivers carrier-grade networking, high-density Wi-Fi, 
              clean UPS power protection, certified structured cabling, printer fleet management, 
              and turnkey office set ups for businesses across Papua New Guinea.
            </p>

            {/* Responsive Direct Contact & Call To Action Buttons */}
            <div className="heroActions">
              <a 
                href={companyContact.email.quotesHref} 
                className="btn primary heroBtn"
                title="Email info@nwavepng.com for a quote"
              >
                <span>REQUEST ICT QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href={`tel:${companyContact.phones[0].raw}`}
                className="btn secondary heroBtn tapPhoneBtn"
                title="Tap to call Technical Line 1"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>TECH LINE 1: {companyContact.phones[0].display}</span>
              </a>

              <a 
                href={companyContact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp heroBtn"
                title="Chat with a Network Technician on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP SUPPORT</span>
              </a>
            </div>

            {/* ICT Proof Metrics */}
            <div className="heroTrustGrid">
              <div className="trustCard">
                <div className="trustNumber">Cat6 & Fiber</div>
                <div className="trustLabel">Certified Structured Cabling</div>
              </div>

              <div className="trustCard">
                <div className="trustNumber">2-Hour SLA</div>
                <div className="trustLabel">Local On-Site Dispatch</div>
              </div>

              <div className="trustCard">
                <div className="trustNumber">99.9%</div>
                <div className="trustLabel">Power & Network Uptime Focus</div>
              </div>

              <div className="trustCard">
                <div className="trustNumber">PNG Wide</div>
                <div className="trustLabel">POM · Bougainville · Provinces</div>
              </div>
            </div>
          </div>

          <div className="heroVisual">
            <div className="serverPhoto" role="img" aria-label="Enterprise Data Center and Server Infrastructure"></div>

            {/* Interactive Status Card */}
            <div className="floatingStatusBox">
              <div className="statusIndicatorRow">
                <span className="livePulse"></span>
                <span className="statusText">NETWORK OPERATIONS CENTER: ACTIVE</span>
              </div>
              <div className="statusDetails">
                <strong>We Are Networking People</strong>
                <p>Cabling, UPS, Wi-Fi, Printer & Server Support Ready</p>
              </div>
              <div className="statusContactDirect">
                <a 
                  href={`tel:${companyContact.supportPhone.raw}`}
                  className="statusDial"
                  title="Direct 24/7 Hotline"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>24/7 Hotline: {companyContact.supportPhone.display}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Mobile Quick Tappable Banner */}
      <section className="quickConnectBanner">
        <div className="container">
          <div className="quickConnectBox">
            <div className="quickConnectLeft">
              <Clock className="w-5 h-5 text-cyan-400" />
              <div>
                <strong>Need immediate ICT or network assistance in PNG?</strong>
                <p>Call our technicians directly or connect instantly on WhatsApp.</p>
              </div>
            </div>
            <div className="quickConnectButtons">
              <a 
                href={`tel:${companyContact.phones[0].raw}`}
                className="tappableActionBtn phone"
              >
                <Phone className="w-4 h-4" />
                <span>Call {companyContact.phones[0].display}</span>
              </a>
              <a 
                href={`tel:${companyContact.supportPhone.raw}`}
                className="tappableActionBtn hotline"
              >
                <Clock className="w-4 h-4" />
                <span>Support {companyContact.supportPhone.display}</span>
              </a>
              <a 
                href={companyContact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tappableActionBtn whatsapp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core ICT Services Matrix Spotlight */}
      <section className="servicesHome" id="services-section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">ENTERPRISE ICT SOLUTIONS</div>
              <h2 className="sectionTitle">
                Comprehensive Technology for <em>Modern Business.</em>
              </h2>
              <p className="sectionSubtitle">
                Built to international standards (TIA-568-D, IEEE 802.3, IEC 62040) and optimized for PNG's unique environmental and power realities.
              </p>
            </div>

            <Link to="/services" className="textLink viewAllBtn">
              EXPLORE ALL SERVICES & SPECS →
            </Link>
          </div>

          <div className="serviceGrid">
            {/* 1. Network Audit */}
            <article className="serviceCard featured">
              <div className="serviceCardHeader">
                <span className="cardBadge">Essential Diagnostic</span>
                <span className="cardNumber">01</span>
              </div>
              <div className="serviceIconWrap">
                <Activity className="w-7 h-7 text-cyan-400" />
              </div>
              <h3>Network Audit & Health Diagnostic</h3>
              <p>
                In-depth discovery of bottlenecks, rogue APs, packet loss, and security gaps. Includes TIA/EIA Fluke cable certification and an actionable executive roadmap.
              </p>
              <ul className="servicePillList">
                <li>Vulnerability Scans</li>
                <li>Wi-Fi Heatmaps</li>
                <li>Fluke Cable Testing</li>
              </ul>
              <div className="serviceCardFooter">
                <Link to="/services#network-audit" className="cardLink">
                  VIEW AUDIT DELIVERABLES <span>↗</span>
                </Link>
                <a 
                  href={companyContact.whatsapp.quickQuoteUrl("Network Audit Assessment")}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="quickInquirePill"
                  title="Inquire via WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </article>

            {/* 2. UPS & Cabling */}
            <article className="serviceCard featured">
              <div className="serviceCardHeader">
                <span className="cardBadge">Clean Power & Physical</span>
                <span className="cardNumber">02</span>
              </div>
              <div className="serviceIconWrap">
                <Zap className="w-7 h-7 text-amber-400" />
              </div>
              <h3>UPS & Structured Cabling Solutions</h3>
              <p>
                Online double-conversion UPS systems and surge suppression built to safeguard hardware from PNG voltage spikes, paired with certified Cat6/Cat6A & optical fiber runs.
              </p>
              <ul className="servicePillList">
                <li>Online Double-Conversion UPS</li>
                <li>Cat6 / Cat6A & Fiber</li>
                <li>Rack Dressing & Fluke Tests</li>
              </ul>
              <div className="serviceCardFooter">
                <Link to="/services#ups-cabling" className="cardLink">
                  VIEW POWER & CABLING <span>↗</span>
                </Link>
                <a 
                  href={companyContact.whatsapp.quickQuoteUrl("UPS and Structured Cabling")}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="quickInquirePill"
                  title="Inquire via WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </article>

            {/* 3. Office Set Ups */}
            <article className="serviceCard featured">
              <div className="serviceCardHeader">
                <span className="cardBadge">Turnkey Rollouts</span>
                <span className="cardNumber">03</span>
              </div>
              <div className="serviceIconWrap">
                <Building2 className="w-7 h-7 text-blue-400" />
              </div>
              <h3>Turnkey Office IT Set Ups & Relocations</h3>
              <p>
                End-to-end IT setup for new corporate branches, mine site offices, and relocations. We handle desk drops, switches, Wi-Fi, workstations, printers, and meeting room AV.
              </p>
              <ul className="servicePillList">
                <li>Desk Voice & Data Drops</li>
                <li>Firewall & Wi-Fi Mesh</li>
                <li>Conference Room Video AV</li>
              </ul>
              <div className="serviceCardFooter">
                <Link to="/services#office-setups" className="cardLink">
                  EXPLORE OFFICE SETUPS <span>↗</span>
                </Link>
                <a 
                  href={companyContact.whatsapp.quickQuoteUrl("New Office IT Set Up")}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="quickInquirePill"
                  title="Inquire via WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </article>

            {/* 4. Printer Service */}
            <article className="serviceCard featured">
              <div className="serviceCardHeader">
                <span className="cardBadge">Managed Print & MFP</span>
                <span className="cardNumber">04</span>
              </div>
              <div className="serviceIconWrap">
                <Printer className="w-7 h-7 text-cyan-400" />
              </div>
              <h3>Enterprise Printer Service & MFP Integration</h3>
              <p>
                Centralized print server deployment, fleet driver automation, secure PIN release, scan-to-SharePoint workflows, and preventative maintenance for Kyocera, HP, Canon & Brother.
              </p>
              <ul className="servicePillList">
                <li>Print Server Management</li>
                <li>Scan-to-Cloud / Email</li>
                <li>Fleet Maintenance & Spares</li>
              </ul>
              <div className="serviceCardFooter">
                <Link to="/services#printer-service" className="cardLink">
                  VIEW PRINTER SERVICES <span>↗</span>
                </Link>
                <a 
                  href={companyContact.whatsapp.quickQuoteUrl("Enterprise Printer Services")}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="quickInquirePill"
                  title="Inquire via WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </article>

            {/* 5. Wi-Fi & Switching */}
            <article className="serviceCard">
              <div className="serviceCardHeader">
                <span className="cardBadge">Enterprise Wireless</span>
                <span className="cardNumber">05</span>
              </div>
              <div className="serviceIconWrap">
                <Wifi className="w-7 h-7 text-cyan-400" />
              </div>
              <h3>Networking & High-Density Wi-Fi</h3>
              <p>
                Managed Ubiquiti UniFi, Cisco, and Aruba deployments with isolated guest captive portals, employee VLANs, WPA3 enterprise security, and long-range wireless links.
              </p>
              <ul className="servicePillList">
                <li>Wi-Fi 6/7 Coverage</li>
                <li>VLAN Segmentation</li>
                <li>Captive Portal Vouchers</li>
              </ul>
              <div className="serviceCardFooter">
                <Link to="/services#networking-wifi" className="cardLink">
                  LEARN MORE <span>↗</span>
                </Link>
              </div>
            </article>

            {/* 6. Business Internet & SD-WAN */}
            <article className="serviceCard">
              <div className="serviceCardHeader">
                <span className="cardBadge">Multi-WAN Failover</span>
                <span className="cardNumber">06</span>
              </div>
              <div className="serviceIconWrap">
                <Globe className="w-7 h-7 text-blue-400" />
              </div>
              <h3>Business Internet & Multi-ISP Redundancy</h3>
              <p>
                Aggregate local fiber with Starlink Business and 4G cellular backup with automatic sub-second failover and QoS traffic prioritization for ERP and VoIP.
              </p>
              <ul className="servicePillList">
                <li>Automatic Starlink Failover</li>
                <li>Site-to-Site Encrypted VPN</li>
                <li>VoIP & Teams QoS Shaping</li>
              </ul>
              <div className="serviceCardFooter">
                <Link to="/services#business-internet" className="cardLink">
                  LEARN MORE <span>↗</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Statement & Philosophy Section */}
      <section className="statement">
        <div className="container statementGrid">
          <div>
            <div className="eyebrow">THE NEXTWAVE DIFFERENCE</div>
            <h2>
              We are <em>networking people.</em>
            </h2>
            <p className="statementLead">
              In Papua New Guinea, network failure isn't just an annoyance — it stops retail POS terminals, halts mining logistics, blocks banking transfers, and leaves staff stranded.
            </p>
          </div>

          <div className="statementRight">
            <div className="statementPoints">
              <div className="statementPoint">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <strong>Local Presence & Rapid Response</strong>
                  <p>Dedicated engineers stationed in Port Moresby and Bougainville with nationwide deployment capability.</p>
                </div>
              </div>

              <div className="statementPoint">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <strong>End-to-End Accountability</strong>
                  <p>From the incoming ISP cable and UPS power rack to workstations and printer drivers, you deal with one accountable partner.</p>
                </div>
              </div>

              <div className="statementPoint">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <strong>Honest Advice & Proven Hardware</strong>
                  <p>We deploy proven enterprise brands: Cisco, Ubiquiti, APC Schneider Electric, Eaton, Microsoft, Kyocera, HP, and Dell.</p>
                </div>
              </div>
            </div>

            <div className="statementActions">
              <Link to="/about" className="btn primary">
                ABOUT OUR TEAM →
              </Link>
              <a 
                href={`tel:${companyContact.phones[0].raw}`}
                className="btn secondary"
                title="Call Technical Line 1"
              >
                CALL TECH 1: {companyContact.phones[0].display}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Quote Request Box */}
      <section className="ctaSection">
        <div className="container">
          <div className="ctaBox">
            <div className="ctaContent">
              <div className="eyebrow">READY WHEN YOU ARE</div>
              <h2>
                Ready to Upgrade Your Network, UPS, or Office IT?
              </h2>
              <p>
                Contact our engineering team for an on-site consultation, network audit, or rapid quotation in Port Moresby, Bougainville, or anywhere in Papua New Guinea.
              </p>
              
              <div className="ctaContactBadges">
                <a href={`tel:${companyContact.phones[0].raw}`} className="ctaBadge" title="Call Technical Line 1">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tech 1: {companyContact.phones[0].display}</span>
                </a>
                <a href={`tel:${companyContact.phones[1].raw}`} className="ctaBadge" title="Call Technical Line 2">
                  <Phone className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Tech 2: {companyContact.phones[1].display}</span>
                </a>
                <a href={companyContact.email.quotesHref} className="ctaBadge" title="Email info@nwavepng.com">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>Email: {companyContact.email.display}</span>
                </a>
                <a href={companyContact.whatsapp.url} target="_blank" rel="noopener noreferrer" className="ctaBadge">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            <div className="ctaButtons">
              <a 
                href={companyContact.email.quotesHref} 
                className="btn primary ctaBigBtn"
                title="Email info@nwavepng.com for a quote"
              >
                <span>REQUEST PROJECT QUOTE ↗</span>
              </a>
              <a 
                href={companyContact.whatsapp.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn whatsapp ctaBigBtn"
              >
                CHAT ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
