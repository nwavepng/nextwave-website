import { useState, FormEvent } from 'react';
import { 
  Phone, Mail, MessageSquare, MapPin, Clock, 
  Send, CheckCircle2, ShieldCheck, FileSpreadsheet, ArrowRight, Building 
} from 'lucide-react';
import Page from '../components/PageHero';
import { companyContact } from '../data/nextwave';

export default function Contact() {
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formLocation, setFormLocation] = useState('Port Moresby (NCD)');
  const [formService, setFormService] = useState('Network Audit & Health Diagnostic');
  const [formUrgency, setFormUrgency] = useState('Standard (1-2 Weeks)');
  const [formMsg, setFormMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;
    setSubmitted(true);
  };

  const getWhatsAppMessageUrl = () => {
    const text = `*NextWave ICT Quote Request*\n` +
      `*Name:* ${formName}\n` +
      `*Company:* ${formCompany || 'N/A'}\n` +
      `*Phone:* ${formPhone}\n` +
      `*Email:* ${formEmail || 'N/A'}\n` +
      `*Location:* ${formLocation}\n` +
      `*Service Required:* ${formService}\n` +
      `*Timeline:* ${formUrgency}\n` +
      `*Project Details:* ${formMsg || 'Requesting consultation and scope of work.'}`;
    return `https://wa.me/67577449219?text=${encodeURIComponent(text)}`;
  };

  return (
    <Page
      eyebrow="COMMUNICATIONS & ICT ENGAGEMENT"
      title={
        <>
          Let's talk technology.<br />
          <em>Start your ICT project today.</em>
        </>
      }
    >
      {/* Direct Quote Quick Alert */}
      <section className="py-4">
        <div className="container">
          <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-white text-base block">Looking for an immediate quotation?</strong>
                <p className="text-slate-400 text-sm">Send your tender documents, BoM, or project specifications directly to our quotes desk.</p>
              </div>
            </div>
            <a
              href={companyContact.email.quotesHref}
              className="btn primary flex-shrink-0 text-sm font-semibold"
              title="Click to open email client addressed to info@nwavepng.com"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>EMAIL INFO@NWAVEPNG.COM ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Tappable Contact Directory Grid */}
      <section className="contactDirectorySection">
        <div className="container">
          <div className="contactCardsGrid">
            {/* Phone Card 1 */}
            <div className="contactChannelBox">
              <div className="contactBoxHeader">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>TECHNICAL LINE 1</span>
              </div>
              <p>Direct line for project quotes, cabling, audits, and new office set ups.</p>
              <a
                href={`tel:${companyContact.phones[0].raw}`}
                className="tappableContactValue phone"
                title={`Tap to call Technical Line 1: ${companyContact.phones[0].display}`}
              >
                <strong>{companyContact.phones[0].display}</strong>
                <small>Tap to dial directly ↗</small>
              </a>
            </div>

            {/* Phone Card 2 */}
            <div className="contactChannelBox">
              <div className="contactBoxHeader">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>TECHNICAL LINE 2</span>
              </div>
              <p>Direct line for hardware procurement, servers, and UPS power solutions.</p>
              <a
                href={`tel:${companyContact.phones[1].raw}`}
                className="tappableContactValue phone"
                title={`Tap to call Technical Line 2: ${companyContact.phones[1].display}`}
              >
                <strong>{companyContact.phones[1].display}</strong>
                <small>Tap to dial directly ↗</small>
              </a>
            </div>

            {/* Emergency Hotline Card */}
            <div className="contactChannelBox highlight">
              <div className="contactBoxHeader">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span>24/7 SUPPORT HOTLINE</span>
              </div>
              <p>Immediate phone triage for network downtime and critical issues.</p>
              <a
                href={`tel:${companyContact.supportPhone.raw}`}
                className="tappableContactValue emergency"
                title={`Tap to call ${companyContact.supportPhone.display}`}
              >
                <strong>{companyContact.supportPhone.display}</strong>
                <small>Tap to call 24/7 hotline ↗</small>
              </a>
            </div>

            {/* Email Card */}
            <div className="contactChannelBox">
              <div className="contactBoxHeader">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>OFFICIAL INQUIRIES</span>
              </div>
              <p>Email our engineering desk for formal tenders and quotations.</p>
              <a
                href={companyContact.email.href}
                className="tappableContactValue email"
                title={`Tap to email ${companyContact.email.display}`}
              >
                <strong>{companyContact.email.display}</strong>
                <small>Tap to send email ↗</small>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="contactChannelBox whatsappCard">
              <div className="contactBoxHeader">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>WHATSAPP DESK</span>
              </div>
              <p>Send photos of server racks, error messages, or request rapid pricing.</p>
              <a
                href={companyContact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tappableContactValue whatsapp"
                title="Tap to message on WhatsApp"
              >
                <strong>+675 7744 9219</strong>
                <small>Chat with engineer on WhatsApp ↗</small>
              </a>
            </div>

            {/* Operating Locations */}
            <div className="contactChannelBox">
              <div className="contactBoxHeader">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>OFFICE HUBS</span>
              </div>
              <p>Headquarters in Port Moresby with regional engineering in Bougainville.</p>
              <div className="locationDetails">
                <strong>Port Moresby & Bougainville</strong>
                <small>Deployment teams across all PNG provinces</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ICT Scope & Consultation Form */}
      <section className="contactFormSection">
        <div className="container">
          <div className="contactFormContainer">
            <div className="formHeader">
              <div className="eyebrow">ICT PROJECT SCOPE & QUOTE REQUEST</div>
              <h2>Tell Us About Your Technology Requirements</h2>
              <p>
                Complete the details below to receive a certified proposal, bill of materials, or schedule an on-site engineering assessment.
              </p>
            </div>

            {submitted ? (
              <div className="formSuccessBox">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3>Thank You, {formName}!</h3>
                <p>
                  Your inquiry regarding <strong>{formService}</strong> has been logged with our technical sales team. We will call you back at <strong>{formPhone}</strong> shortly.
                </p>

                <div className="successActions">
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn whatsapp"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Send this Request via WhatsApp Now ↗</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn secondary"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ictQuoteForm">
                <div className="formGrid">
                  {/* Name */}
                  <div className="formGroup">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Samuel Kila"
                      className="formControl"
                    />
                  </div>

                  {/* Company / Organization */}
                  <div className="formGroup">
                    <label>Company / Organization</label>
                    <input
                      type="text"
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      placeholder="e.g. Pacific Logistics Ltd"
                      className="formControl"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="formGroup">
                    <label>Phone Number (Tappable callback) *</label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="e.g. +675 7750 7098 or 7256 3755"
                      className="formControl"
                    />
                  </div>

                  {/* Email */}
                  <div className="formGroup">
                    <label>Business Email</label>
                    <input
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. name@company.com.pg"
                      className="formControl"
                    />
                  </div>

                  {/* Location in PNG */}
                  <div className="formGroup">
                    <label>Project Location in PNG</label>
                    <select
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      className="formControl"
                    >
                      <option value="Port Moresby (NCD)">Port Moresby (National Capital District)</option>
                      <option value="Bougainville (Buka / Arawa)">Autonomous Region of Bougainville</option>
                      <option value="Lae (Morobe Province)">Lae (Morobe Province)</option>
                      <option value="Mount Hagen (Western Highlands)">Mount Hagen (Western Highlands)</option>
                      <option value="Kokopo (East New Britain)">Kokopo / Rabaul</option>
                      <option value="Madang">Madang</option>
                      <option value="Remote Mine / Exploration Site">Remote Mine / Industrial Site</option>
                      <option value="Other PNG Province">Other PNG Province</option>
                    </select>
                  </div>

                  {/* Service Selection */}
                  <div className="formGroup">
                    <label>Primary Service of Interest *</label>
                    <select
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="formControl"
                    >
                      <option value="Network Audit & Health Diagnostic">Network Audit & Health Diagnostic</option>
                      <option value="UPS & Clean Power Solutions">UPS & Clean Power Solutions</option>
                      <option value="Structured Cabling (Cat6 / Fiber)">Structured Cabling (Cat6 / Cat6A / Fiber)</option>
                      <option value="Turnkey Office IT Set Up & Relocation">Turnkey Office IT Set Up & Relocation</option>
                      <option value="Enterprise Printer Service & MFP Integration">Enterprise Printer Service & MFP Integration</option>
                      <option value="Enterprise Networking & Wi-Fi">Enterprise Networking & Wi-Fi</option>
                      <option value="Business Internet & Multi-WAN Failover">Business Internet & Multi-WAN Failover</option>
                      <option value="Microsoft 365 & Office 365 Migration">Microsoft 365 & Office 365 Migration</option>
                      <option value="Server Implementation & Virtualization">Server Implementation & Virtualization</option>
                    </select>
                  </div>

                  {/* Urgency */}
                  <div className="formGroup fullWidth">
                    <label>Project Urgency / Timeline</label>
                    <div className="urgencyRadioRow">
                      {['Immediate (Outage / Emergency)', 'Standard (1-2 Weeks)', 'Planning Phase / Next Month'].map((urg) => (
                        <label key={urg} className={`urgencyLabel ${formUrgency === urg ? 'active' : ''}`}>
                          <input
                            type="radio"
                            name="urgency"
                            value={urg}
                            checked={formUrgency === urg}
                            onChange={(e) => setFormUrgency(e.target.value)}
                          />
                          <span>{urg}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="formGroup fullWidth">
                    <label>Project Scope or Outage Details</label>
                    <textarea
                      rows={4}
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      placeholder="Describe your requirements (e.g. 24 data drops for new office, UPS sizing for 3 server racks, printer offline diagnostics, or campus Wi-Fi heatmapping)..."
                      className="formControl"
                    />
                  </div>
                </div>

                <div className="formSubmitRow">
                  <button type="submit" className="btn primary submitBtn">
                    <Send className="w-4 h-4 mr-2" />
                    <span>SUBMIT INQUIRY TO ENGINEERING</span>
                  </button>

                  <a
                    href={companyContact.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn whatsapp"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Or Chat on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Page>
  );
}
