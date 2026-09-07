import { Phone, Clock, MessageSquare, FileText } from 'lucide-react';
import { companyContact } from '../data/nextwave';

export default function MobileQuickBar() {
  return (
    <aside className="mobileQuickBar" aria-label="Mobile quick contact bar">
      <div className="mobileQuickBarInner">
        <a
          href={`tel:${companyContact.phones[0].raw}`}
          className="mobileBarItem"
          title="Call Technical Line 1"
        >
          <div className="mobileBarIcon call">
            <Phone className="w-4 h-4" />
          </div>
          <span>Tech Line 1</span>
        </a>

        <a
          href={`tel:${companyContact.supportPhone.raw}`}
          className="mobileBarItem"
          title="24/7 Emergency Support"
        >
          <div className="mobileBarIcon emergency">
            <Clock className="w-4 h-4" />
          </div>
          <span>24/7 Support</span>
        </a>

        <a
          href={companyContact.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mobileBarItem"
          title="WhatsApp Chat"
        >
          <div className="mobileBarIcon whatsapp">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span>WhatsApp</span>
        </a>

        <a
          href={companyContact.email.quotesHref}
          className="mobileBarItem"
          title="Email Quote to info@nwavepng.com"
        >
          <div className="mobileBarIcon quote">
            <FileText className="w-4 h-4" />
          </div>
          <span>Get Quote</span>
        </a>
      </div>
    </aside>
  );
}
