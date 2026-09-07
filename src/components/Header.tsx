import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Shield, Clock, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { companyContact } from '../data/nextwave';

export function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
  key?: React.Key;
}

export function Link({ to, children, className = '', onClick, id }: LinkProps) {
  return (
    <a
      id={id}
      className={className}
      href={`#${to}`}
      onClick={() => {
        if (onClick) onClick();
        setTimeout(scrollTop, 10);
      }}
    >
      {children}
    </a>
  );
}

export function Logo() {
  return (
    <Link to="/" className="logo" id="header-logo">
      <span className="logoSymbol" aria-hidden="true">
        <i></i>
        <b></b>
      </span>
      <span className="logoText">
        <strong>NEXTWAVE</strong>
        <small>TECHNOLOGIES</small>
      </span>
    </Link>
  );
}

interface HeaderProps {
  currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const nav: [string, string][] = [
    ['/', 'Home'],
    ['/about', 'About Us'],
    ['/services', 'Services'],
    ['/solutions', 'Solutions'],
    ['/support', 'Support'],
    ['/contact', 'Contact']
  ];

  return (
    <header className="siteHeader">
      {/* Top Enterprise Utility Bar - Tappable Contact Info */}
      <div className="topUtilityBar">
        <div className="topUtilityContainer">
          <div className="utilityLeft">
            <span className="utilityBadge">
              <Shield className="w-3 h-3 text-cyan-400" />
              <span>PNG Certified ICT & Network Engineering</span>
            </span>
            <span className="utilityDivider">|</span>
            <span className="utilityLocation">
              <MapPin className="w-3 h-3 text-blue-400" />
              <span>Port Moresby · Bougainville · Nationwide</span>
            </span>
          </div>

          <div className="utilityRight">
            {/* Tappable Technical Line 1 */}
            <a 
              href={`tel:${companyContact.phones[0].raw}`}
              className="utilityContactLink"
              title="Tap to call Technical Line 1"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>Tech 1: {companyContact.phones[0].display}</span>
            </a>

            {/* Tappable Technical Line 2 */}
            <a 
              href={`tel:${companyContact.phones[1].raw}`}
              className="utilityContactLink"
              title="Tap to call Technical Line 2"
            >
              <Phone className="w-3 h-3 text-cyan-300" />
              <span>Tech 2: {companyContact.phones[1].display}</span>
            </a>

            {/* Tappable 24/7 Hotline */}
            <a 
              href={`tel:${companyContact.supportPhone.raw}`}
              className="utilityContactLink hotlineLink"
              title="Tap to call 24/7 Support Hotline"
            >
              <Clock className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-300 font-semibold">24/7: {companyContact.supportPhone.display}</span>
            </a>

            {/* Tappable Email */}
            <a 
              href={companyContact.email.href}
              className="utilityContactLink emailLink"
              title="Tap to send email"
            >
              <Mail className="w-3 h-3 text-blue-400" />
              <span>{companyContact.email.display}</span>
            </a>

            {/* Tappable WhatsApp */}
            <a 
              href={companyContact.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="utilityContactLink whatsappLink"
              title="Open WhatsApp Chat"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="navWrap">
        <Logo />

        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-btn"
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

        {/* Desktop & Mobile Drawer Nav */}
        <nav className={open ? 'open' : ''}>
          {/* Mobile Drawer Quick Action Strip */}
          <div className="mobileDrawerHeader">
            <div className="text-xs uppercase font-bold tracking-wider text-cyan-400 mb-2">
              Direct Contact & Support
            </div>
            <div className="mobileQuickGrid">
              <a
                href={`tel:${companyContact.phones[0].raw}`}
                className="mobileQuickBtn"
                onClick={() => setOpen(false)}
                title="Call Technical Line 1"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Tech Line 1</span>
              </a>

              <a
                href={`tel:${companyContact.phones[1].raw}`}
                className="mobileQuickBtn"
                onClick={() => setOpen(false)}
                title="Call Technical Line 2"
              >
                <Phone className="w-4 h-4 text-cyan-300" />
                <span>Tech Line 2</span>
              </a>

              <a
                href={`tel:${companyContact.supportPhone.raw}`}
                className="mobileQuickBtn hotline"
                onClick={() => setOpen(false)}
              >
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>24/7 Help</span>
              </a>

              <a
                href={companyContact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mobileQuickBtn whatsapp"
                onClick={() => setOpen(false)}
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={companyContact.email.quotesHref}
                className="mobileQuickBtn"
                onClick={() => setOpen(false)}
                title="Email info@nwavepng.com for a quote"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Get Quote</span>
              </a>
            </div>
          </div>

          <div className="navLinksList">
            {nav.map(([p, n]) => {
              const isActive = currentPath === p || (p === '/' && currentPath === '');
              return (
                <Link
                  key={p}
                  to={p}
                  className={`navLinkItem ${isActive ? 'active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  <span>{n}</span>
                  {isActive && <span className="activeDot"></span>}
                </Link>
              );
            })}
          </div>

          <div className="navActions">
            {/* Desktop Direct Dial Button */}
            <a
              href={`tel:${companyContact.phones[0].raw}`}
              className="desktopCallBtn"
              title="Call NextWave Technical Team"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tech 1: +675 7750 7098</span>
            </a>

            <a
              href={companyContact.email.quotesHref}
              className="navCta"
              onClick={() => setOpen(false)}
              title="Email info@nwavepng.com for a quote"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
