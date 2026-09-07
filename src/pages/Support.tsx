import { 
  Phone, MessageSquare, Mail, Clock, AlertTriangle, 
  CheckCircle2, Laptop, Wrench, ShieldCheck, Zap, Printer, Activity, ArrowRight 
} from 'lucide-react';
import Page from '../components/PageHero';
import { Link } from '../components/Header';
import { companyContact } from '../data/nextwave';

export default function Support() {
  return (
    <Page
      eyebrow="24/7 TECHNICAL SUPPORT & SERVICE DESK"
      title={
        <>
          When technology gets in the way.<br />
          <em>We get you back online fast.</em>
        </>
      }
    >
      {/* Emergency Hotline Spotlight */}
      <section className="supportEmergencySection">
        <div className="container">
          <div className="emergencyHotlineBox">
            <div className="emergencyIconCol">
              <div className="pulsingAlertIcon">
                <AlertTriangle className="w-8 h-8 text-amber-400" />
              </div>
            </div>

            <div className="emergencyTextCol">
              <div className="emergencyBadge">HIGH PRIORITY ICT DISPATCH</div>
              <h2>Network Down or Critical System Outage?</h2>
              <p>
                Direct line to on-duty network engineers in Papua New Guinea. Tap below to initiate immediate phone triage or on-site dispatch.
              </p>
            </div>

            <div className="emergencyActionsCol">
              {/* Tappable 24/7 Phone */}
              <a
                href={`tel:${companyContact.supportPhone.raw}`}
                className="emergencyDialBtn"
                title="Tap to call 24/7 Emergency Support Hotline"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <div>
                  <small>TAP TO CALL 24/7 HOTLINE</small>
                  <strong>{companyContact.supportPhone.display}</strong>
                </div>
              </a>

              {/* Tappable WhatsApp */}
              <a
                href={companyContact.whatsapp.emergencySupportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="emergencyWhatsappBtn"
                title="Tap to message emergency dispatch on WhatsApp"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <div>
                  <small>INSTANT MESSAGING</small>
                  <strong>WhatsApp Dispatch ↗</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Support Channels */}
      <section className="supportChannelsSection">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="eyebrow">FAST RESOLUTION PATHS</div>
              <h2 className="sectionTitle">Dedicated Support <em>Specializations</em></h2>
              <p className="sectionSubtitle">
                Tap any contact method to connect with the right engineering team immediately.
              </p>
            </div>
          </div>

          <div className="supportChannelsGrid">
            {/* Remote Support */}
            <div className="supportChannelCard">
              <div className="channelIconWrap">
                <Laptop className="w-6 h-6 text-cyan-400" />
              </div>
              <h3>Remote Service Desk</h3>
              <p>
                Fast remote desktop assistance for email setup, Microsoft 365 issues, print driver errors, VPN connections, and workstation fixes.
              </p>
              <div className="channelContactPills">
                <a href={`tel:${companyContact.supportPhone.raw}`} className="channelPill phone">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {companyContact.supportPhone.short}</span>
                </a>
                <a href={companyContact.email.supportHref} className="channelPill email">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Support</span>
                </a>
              </div>
            </div>

            {/* Network & Wi-Fi Emergency */}
            <div className="supportChannelCard">
              <div className="channelIconWrap">
                <Activity className="w-6 h-6 text-cyan-400" />
              </div>
              <h3>Network & Wi-Fi Triage</h3>
              <p>
                Diagnosis of router outages, switch fabric failure, ISP failover problems, packet loss, and office Wi-Fi interference.
              </p>
              <div className="channelContactPills">
                <a href={`tel:${companyContact.phones[0].raw}`} className="channelPill phone">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {companyContact.phones[0].short}</span>
                </a>
                <a href={companyContact.whatsapp.url} target="_blank" rel="noopener noreferrer" className="channelPill whatsapp">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* UPS & Power Infrastructure */}
            <div className="supportChannelCard">
              <div className="channelIconWrap">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <h3>UPS & Clean Power Support</h3>
              <p>
                Emergency battery replacement, UPS alarm clearance, surge damage inspection, and server room power backup restorations.
              </p>
              <div className="channelContactPills">
                <a href={`tel:${companyContact.phones[1].raw}`} className="channelPill phone">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {companyContact.phones[1].short}</span>
                </a>
                <a href={companyContact.whatsapp.url} target="_blank" rel="noopener noreferrer" className="channelPill whatsapp">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Printer & Office Setup */}
            <div className="supportChannelCard">
              <div className="channelIconWrap">
                <Printer className="w-6 h-6 text-blue-400" />
              </div>
              <h3>Printer & Office Hardware</h3>
              <p>
                Onsite troubleshooting for network printers, multifunction scanners, server rack connectivity, and office workstation cabling drops.
              </p>
              <div className="channelContactPills">
                <a href={`tel:${companyContact.supportPhone.raw}`} className="channelPill phone">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {companyContact.supportPhone.short}</span>
                </a>
                <Link to="/contact" className="channelPill quote">
                  <span>Log Ticket</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ICT Service Level Agreement (SLA) Standards */}
      <section className="slaSection">
        <div className="container">
          <div className="slaContainerBox">
            <div className="slaHeader">
              <div className="eyebrow">RESPONSE TIME COMMITMENT</div>
              <h2>Service Level Agreements (SLAs)</h2>
              <p>
                Transparent response times to ensure business continuity across Port Moresby, Bougainville, and regional accounts.
              </p>
            </div>

            <div className="slaTableWrapper">
              <table className="slaTable">
                <thead>
                  <tr>
                    <th>Severity Level</th>
                    <th>Typical Outage Scenario</th>
                    <th>Phone Triage Response</th>
                    <th>On-Site Dispatch (POM / Buka)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="slaRowCritical">
                    <td>
                      <span className="slaBadge critical">P1 - CRITICAL</span>
                    </td>
                    <td>Complete company network down, core UPS failure, server offline</td>
                    <td><strong>&lt; 15 Minutes</strong></td>
                    <td><strong>&lt; 2 Hours</strong></td>
                  </tr>
                  <tr className="slaRowMajor">
                    <td>
                      <span className="slaBadge major">P2 - MAJOR</span>
                    </td>
                    <td>Departmental Wi-Fi failure, main printer offline, internet degradation</td>
                    <td><strong>&lt; 30 Minutes</strong></td>
                    <td><strong>&lt; 4 Hours</strong></td>
                  </tr>
                  <tr className="slaRowModerate">
                    <td>
                      <span className="slaBadge moderate">P3 - MODERATE</span>
                    </td>
                    <td>Individual user workstation, email configuration, cabling add-on</td>
                    <td><strong>&lt; 2 Hours</strong></td>
                    <td><strong>Same-Day / Next Business Day</strong></td>
                  </tr>
                  <tr className="slaRowStandard">
                    <td>
                      <span className="slaBadge standard">P4 - PLANNED</span>
                    </td>
                    <td>Network audit, new office setup rollout, scheduled maintenance</td>
                    <td><strong>&lt; 4 Hours</strong></td>
                    <td><strong>Per Scheduled Project Plan</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Support Action CTA */}
      <section className="supportCtaSection">
        <div className="container">
          <div className="supportCtaCard">
            <div>
              <div className="eyebrow">NEED ON-SITE ENGINEERING?</div>
              <h3>Book a Technician Visit or Preventative Maintenance Audit</h3>
              <p>
                We can inspect your server room, UPS battery load, structured cabling, and network switch health before unexpected failures occur.
              </p>
            </div>
            <div className="supportCtaButtons">
              <a 
                href={companyContact.email.quotesHref} 
                className="btn primary"
                title="Email info@nwavepng.com"
              >
                SCHEDULE VISIT (EMAIL) →
              </a>
              <a
                href={companyContact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp"
              >
                WHATSAPP CHAT
              </a>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
