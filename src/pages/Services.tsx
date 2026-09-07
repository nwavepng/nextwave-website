import React, { useState } from 'react';
import { 
  Activity, Zap, Building2, Printer, Wifi, Globe, 
  Cloud, Server, ShieldCheck, Check, ArrowRight, Phone, MessageSquare, Mail, Download
} from 'lucide-react';
import Page from '../components/PageHero';
import { Link } from '../components/Header';
import { services, companyContact } from '../data/nextwave';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services (8)' },
    { id: 'network-audit', label: 'Network Audit' },
    { id: 'ups-cabling', label: 'UPS & Cabling' },
    { id: 'office-setups', label: 'Office Set Ups' },
    { id: 'printer-service', label: 'Printer Service' },
    { id: 'connectivity', label: 'Wi-Fi & Internet' },
    { id: 'cloud-server', label: 'Cloud & Servers' }
  ];

  const filteredServices = services.filter((s) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'network-audit') return s.id === 'network-audit';
    if (activeCategory === 'ups-cabling') return s.id === 'ups-cabling';
    if (activeCategory === 'office-setups') return s.id === 'office-setups';
    if (activeCategory === 'printer-service') return s.id === 'printer-service';
    if (activeCategory === 'connectivity') return s.id === 'networking-wifi' || s.id === 'business-internet';
    if (activeCategory === 'cloud-server') return s.id === 'microsoft-365' || s.id === 'server-implementation';
    return true;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-8 h-8 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-amber-400" />;
      case 'Building2':
        return <Building2 className="w-8 h-8 text-blue-400" />;
      case 'Printer':
        return <Printer className="w-8 h-8 text-cyan-400" />;
      case 'Wifi':
        return <Wifi className="w-8 h-8 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-blue-400" />;
      case 'Cloud':
        return <Cloud className="w-8 h-8 text-cyan-400" />;
      case 'Server':
        return <Server className="w-8 h-8 text-emerald-400" />;
      default:
        return <Activity className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <Page
      eyebrow="ENTERPRISE ICT SERVICES CATALOG"
      title={
        <>
          Certified ICT Infrastructure.<br />
          <em>Engineered for Papua New Guinea.</em>
        </>
      }
    >
      {/* Category Filter Navigation */}
      <section className="servicesFilterSection">
        <div className="container">
          <div className="filterPillsWrapper">
            <span className="filterLabel">Filter By Focus:</span>
            <div className="filterPillsScroll">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`filterPill ${activeCategory === c.id ? 'active' : ''}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid with Deep Technical Specifications */}
      <section className="servicesDetailedSection">
        <div className="container">
          <div className="servicesDetailedGrid">
            {filteredServices.map((s, index) => (
              <article className="serviceDetailCard" key={s.id} id={s.id}>
                {/* Header Row */}
                <div className="serviceDetailHead">
                  <div className="serviceDetailIconBox">
                    {getIcon(s.iconName)}
                  </div>
                  <div className="serviceDetailTitleBox">
                    <div className="serviceDetailBadges">
                      <span className="serviceDetailBadge">{s.badge}</span>
                      <span className="serviceDetailIndex">ICT-SPEC 0{index + 1}</span>
                    </div>
                    <h2>{s.title}</h2>
                    <p className="serviceTagline">{s.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="serviceDetailDesc">{s.description}</p>

                {/* Two Column Technical Breakdown */}
                <div className="serviceDetailSpecsGrid">
                  {/* Capabilities Column */}
                  <div className="serviceSpecBlock">
                    <h4>
                      <ShieldCheck className="w-4 h-4 text-cyan-400 inline mr-1.5" />
                      Scope & Engineering Capabilities
                    </h4>
                    <ul className="specList">
                      {s.capabilities.map((cap, i) => (
                        <li key={i}>
                          <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables Column */}
                  <div className="serviceSpecBlock">
                    <h4>
                      <Check className="w-4 h-4 text-emerald-400 inline mr-1.5" />
                      Key Client Deliverables
                    </h4>
                    <ul className="deliverableList">
                      {s.deliverables.map((deliv, i) => (
                        <li key={i}>
                          <span className="deliverableBullet">▸</span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Responsive Action Buttons (Tap to call, WhatsApp, Request quote) */}
                <div className="serviceDetailActions">
                  <a
                    href={companyContact.whatsapp.quickQuoteUrl(s.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn whatsapp serviceActionBtn"
                    title="Inquire about this service on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <a
                    href={`tel:${companyContact.phones[0].raw}`}
                    className="btn secondary serviceActionBtn"
                    title="Call Technical Line 1 about this service"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Tech 1: {companyContact.phones[0].display}</span>
                  </a>

                  <a
                    href={companyContact.email.quotesHref}
                    className="btn primary serviceActionBtn"
                    title="Email info@nwavepng.com for a quote"
                  >
                    <span>Request Quote via Email</span>
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency & Custom Project Consultation Banner */}
      <section className="servicesConsultBanner">
        <div className="container">
          <div className="consultBannerBox">
            <div className="consultBannerLeft">
              <div className="eyebrow">CUSTOM ICT ARCHITECTURE</div>
              <h3>Need a multi-site network rollout or complex infrastructure audit?</h3>
              <p>
                Our senior network architects provide on-site technical walk-throughs across Port Moresby, Lae, Bougainville, and provincial centers to formulate your bill of materials (BoM) and migration strategy.
              </p>
            </div>
            <div className="consultBannerRight">
              <a
                href={`tel:${companyContact.supportPhone.raw}`}
                className="consultDialBtn"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <small>URGENT DISPATCH / 24-7</small>
                  <strong>{companyContact.supportPhone.display}</strong>
                </div>
              </a>

              <a 
                href={companyContact.email.quotesHref} 
                className="btn primary consultActionBtn"
                title="Email info@nwavepng.com"
              >
                EMAIL FOR SITE VISIT →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
