import { 
  Building2, HardHat, GraduationCap, Warehouse, 
  ShieldCheck, Check, Phone, MessageSquare, ArrowRight 
} from 'lucide-react';
import Page from '../components/PageHero';
import { Link } from '../components/Header';
import { solutions, companyContact } from '../data/nextwave';

export default function Solutions() {
  const industries = [
    {
      title: "Corporate Offices & Commercial Towers",
      subtitle: "Port Moresby Central Business District & Commercial Spaces",
      icon: <Building2 className="w-8 h-8 text-cyan-400" />,
      desc: "High-density structured cabling, enterprise Wi-Fi 6/7, multi-vendor printer fleet management, and clean online double-conversion UPS protection for financial, legal, and corporate enterprises.",
      recommended: ["Turnkey Office Set Ups", "Network Audit", "Managed Printer Service", "Cat6A Cabling"]
    },
    {
      title: "Mining, Construction & Remote Exploration",
      subtitle: "Autonomous Region of Bougainville, Highlands & Coastal Camps",
      icon: <HardHat className="w-8 h-8 text-amber-400" />,
      desc: "Ruggedized long-distance wireless links, Starlink Business & VSAT multi-WAN bonding, heavy-duty surge suppression, and local NAS storage built for harsh tropical environments.",
      recommended: ["High-Capacity UPS", "Multi-WAN Failover", "PtP Wireless Bridges", "Server Implementation"]
    },
    {
      title: "Education, Universities & Training Hubs",
      subtitle: "Campus-Wide Connectivity & Student Wi-Fi",
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
      desc: "Bandwidth-shaped Wi-Fi access with secure voucher captive portals, campus optical fiber backbones, computer lab printer servers, and centralized cloud collaboration.",
      recommended: ["Campus Fiber Cabling", "High-Density Wi-Fi", "Printer Management", "Microsoft 365"]
    },
    {
      title: "Logistics, Warehousing & Supply Chain",
      subtitle: "Freight Depots, Wharves & Distribution Yards",
      icon: <Warehouse className="w-8 h-8 text-emerald-400" />,
      desc: "Seamless roaming for barcode scanners, ruggedized access points, uninterrupted power backup for shipping ERP servers, and automated CCTV integration.",
      recommended: ["Warehouse Wi-Fi Heatmap", "Network Audit", "UPS Battery Backups", "Cat6 Drops"]
    }
  ];

  return (
    <Page
      eyebrow="TAILORED INDUSTRY ICT SOLUTIONS"
      title={
        <>
          Engineered for Papua New Guinea's<br />
          <em>Demanding Environments.</em>
        </>
      }
    >
      {/* Industry Architecture Section */}
      <section className="industrySolutionsSection">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">BY SECTOR</div>
              <h2 className="sectionTitle">Purpose-Built Infrastructure Packages</h2>
              <p className="sectionSubtitle">
                We combine cabling, UPS power, switches, Wi-Fi, and printers tailored to the operational realities of your specific industry.
              </p>
            </div>
          </div>

          <div className="industryCardsGrid">
            {industries.map((ind) => (
              <div key={ind.title} className="industryCard">
                <div className="industryCardIcon">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <span className="industrySubtitle">{ind.subtitle}</span>
                <p>{ind.desc}</p>

                <div className="industryRecommended">
                  <small>Recommended Stack:</small>
                  <div className="recPills">
                    {ind.recommended.map((r) => (
                      <span key={r} className="recPill">{r}</span>
                    ))}
                  </div>
                </div>

                <div className="industryCardFooter">
                  <Link to="/contact" className="cardLink">
                    DISCUSS PROJECT SCOPE <span>↗</span>
                  </Link>
                  <a
                    href={companyContact.whatsapp.quickQuoteUrl(`Industry Solution: ${ind.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsappIconBtn"
                    title="Inquire on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutionCatalogSection">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">SOLUTION CAPABILITIES</div>
              <h2 className="sectionTitle">The NextWave Technical Portfolio</h2>
            </div>
          </div>

          <div className="solutionGrid">
            {solutions.map((s, i) => (
              <article className="solutionCard" key={s[0]}>
                <span className="solutionIndex">0{i + 1}</span>

                <h2>{s[0]}</h2>

                <p>{s[1]}</p>

                <div className="solutionCardActions">
                  <a href={companyContact.email.quotesHref} className="cardLink" title="Email info@nwavepng.com for a quote">
                    REQUEST PROPOSAL ↗
                  </a>
                  <a
                    href={`tel:${companyContact.phones[0].raw}`}
                    className="solutionPhoneDial"
                    title={`Call Technical Line 1 about ${s[0]}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="darkBand">
        <div className="container center">
          <div className="eyebrow">PREPARED FOR YOUR NEXT MOVE</div>
          <h2>Ready to modernise your infrastructure?</h2>
          <p style={{ maxWidth: '640px', margin: '0 auto 28px', color: 'var(--muted)' }}>
            Speak directly with an engineer about structured cabling, UPS power protection, printer services, or network audits.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={companyContact.email.quotesHref} className="btn primary" title="Email info@nwavepng.com for a quote">
              REQUEST QUOTE VIA EMAIL →
            </a>
            <a href={`tel:${companyContact.phones[0].raw}`} className="btn secondary" title="Call Technical Line 1">
              <Phone className="w-4 h-4 text-cyan-400 mr-2" />
              <span>Call Tech 1: +675 7750 7098</span>
            </a>
          </div>
        </div>
      </section>
    </Page>
  );
}
