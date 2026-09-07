import { Phone, Mail, MessageSquare, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Logo, Link } from './Header';
import { companyContact } from '../data/nextwave';

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerGrid">
        <div className="footerColBrand">
          <Logo />

          <p className="footerBrandDesc">
            Papua New Guinea's dedicated enterprise networking, power protection,
            structured cabling, and ICT infrastructure specialists.
          </p>

          {/* Quick Contact Action Box */}
          <div className="footerQuickBox">
            <div className="footerQuickBoxHeader">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>24/7 Network Operations & Support</span>
            </div>
            <div className="footerQuickPhoneRow">
              <a
                href={`tel:${companyContact.supportPhone.raw}`}
                className="footerSupportDial"
                title="Tap to call 24/7 Hotline"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{companyContact.supportPhone.display}</span>
              </a>

              <a
                href={companyContact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footerWhatsappBtn"
                title="Open WhatsApp Chat"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4>Core ICT Services</h4>
          <Link to="/services#network-audit">Network Audit & Diagnostic</Link>
          <Link to="/services#ups-cabling">UPS & Clean Power Protection</Link>
          <Link to="/services#ups-cabling">Structured Cabling (Cat6/Fiber)</Link>
          <Link to="/services#office-setups">Turnkey Office IT Set Ups</Link>
          <Link to="/services#printer-service">Enterprise Printer & MFP Service</Link>
          <Link to="/services#networking-wifi">Managed Networking & Wi-Fi</Link>
          <Link to="/services#business-internet">Business Internet & SD-WAN</Link>
          <Link to="/services#microsoft-365">Microsoft 365 & Cloud Email</Link>
          <Link to="/services#server-implementation">Server Implementation & Storage</Link>
        </div>

        <div>
          <h4>Company & Solutions</h4>
          <Link to="/about">About NextWave</Link>
          <Link to="/solutions">Corporate Offices</Link>
          <Link to="/solutions">Mining & Remote Sites</Link>
          <Link to="/solutions">Education & Hospitality</Link>
          <Link to="/support">SLA & Emergency Support</Link>
          <a href={companyContact.email.quotesHref} title="Email info@nwavepng.com for a quote">Request ICT Quote (Email)</a>
          <a
            href={companyContact.whatsapp.quickQuoteUrl("General ICT Consultation")}
            target="_blank"
            rel="noopener noreferrer"
            className="footerExternalLink"
          >
            <span>Live Chat on WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 text-cyan-400" />
          </a>
        </div>

        <div className="footerContactCol">
          <h4>Contact & Locations</h4>
          
          <div className="footerContactList">
            {companyContact.phones.map((phone) => (
              <div key={phone.raw} className="footerContactRow">
                <span className="contactRowLabel">{phone.label}</span>
                <a
                  href={`tel:${phone.raw}`}
                  className="footerInteractiveLink phone"
                  title={`Tap to call ${phone.display}`}
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{phone.display}</span>
                </a>
              </div>
            ))}

            <div className="footerContactRow">
              <span className="contactRowLabel">General & Commercial Inquiries</span>
              <a
                href={companyContact.email.href}
                className="footerInteractiveLink email"
                title={`Tap to email ${companyContact.email.display}`}
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{companyContact.email.display}</span>
              </a>
            </div>

            <div className="footerContactRow">
              <span className="contactRowLabel">Operational Hubs</span>
              <div className="footerLocationItem">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <strong>Port Moresby HQ & Bougainville Hub</strong>
                  <small>Serving clients nationwide across Papua New Guinea</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerBottomContent">
          <span>
            © {new Date().getFullYear()} NextWave Technologies. All rights reserved. Registered ICT & Network Engineering in Papua New Guinea.
          </span>

          <div className="footerLegal">
            <span>Port Moresby</span>
            <span>·</span>
            <span>Bougainville</span>
            <span>·</span>
            <span>Nationwide PNG Coverage</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
