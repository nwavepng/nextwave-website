export interface ServiceItem {
  id: string;
  iconName: string;
  badge?: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
}

export interface SolutionDomain {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  typicalClients: string;
  keyFeatures: string[];
}

export interface ContactChannel {
  label: string;
  displayValue: string;
  actionHref: string;
  subtext: string;
  primary?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "network-audit",
    iconName: "Activity",
    badge: "ICT Essential",
    title: "Network Audit & Infrastructure Assessment",
    tagline: "Comprehensive diagnostic of your corporate network topology, throughput & security posture.",
    description: "Identify hidden bottlenecks, unauthorized access points, outdated firmware, and packet loss before they impact your operations. Our certified network engineers perform in-depth packet analysis, Wi-Fi RF heatmapping, and physical layer cable integrity testing.",
    capabilities: [
      "Vulnerability & open port scanning",
      "Bandwidth utilization & latency bottleneck discovery",
      "Wi-Fi RF heatmapping & interference diagnosis",
      "Switching fabric & VLAN segmentation review",
      "TIA/EIA physical layer Fluke cable certification",
      "Executive risk & prioritized remediation report"
    ],
    deliverables: [
      "Complete Network Topology Diagram (L2/L3)",
      "Comprehensive ICT Health & Security Audit Report",
      "Phased 30-60-90 Day Remediation Roadmap"
    ]
  },
  {
    id: "ups-cabling",
    iconName: "Zap",
    badge: "Power & Physical Layer",
    title: "UPS & Structured Cabling Solutions",
    tagline: "Uninterruptible clean power protection & certified Cat6/Cat6A and Fiber physical cabling.",
    description: "Papua New Guinea's commercial power grid experiences severe voltage fluctuations, brownouts, and sudden surges. We design and install online double-conversion UPS systems, automatic transfer switches (ATS), and certified structured cabling backbones that safeguard multi-million kina server rooms and workstations.",
    capabilities: [
      "Online double-conversion UPS sizing & rack integration",
      "Battery health diagnostics & runtime expansion banks",
      "Surge suppression & automated voltage regulation (AVR)",
      "Cat6 / Cat6A shielded (STP) & unshielded (UTP) cabling",
      "Single-mode & multi-mode optical fiber splicing & termination",
      "Server rack consolidation, patch panel labeling & cable dressing"
    ],
    deliverables: [
      "Certified Cable Test Results (Fluke DTX/DSX certified)",
      "Power Load & Runtime Capacity Documentation",
      "Rack Elevation & Patch Panel Port Mapping Schedules"
    ]
  },
  {
    id: "office-setups",
    iconName: "Building2",
    badge: "Turnkey ICT",
    title: "Turnkey Office IT Set Ups & Relocations",
    tagline: "Zero-downtime office IT rollouts, workstation deployments, and conference room integrations.",
    description: "Whether opening a new corporate branch in Port Moresby, setting up a mining camp operations hub, or relocating your headquarters, NextWave delivers complete end-to-end ICT setups. From incoming fiber drop to the CEO's desk, we handle cabling, Wi-Fi, workstations, servers, and meeting room AV.",
    capabilities: [
      "Complete new office IT layout & electrical coordination",
      "Desk data/voice drops & clean under-desk cable management",
      "Enterprise firewall, core router & PoE switch deployment",
      "Seamless indoor/outdoor Wi-Fi mesh coverage",
      "Teams/Zoom hybrid video conference room AV setup",
      "Centralized NAS, local backup & perimeter surveillance (CCTV)"
    ],
    deliverables: [
      "Day-1 Operational Readiness Certification",
      "User Onboarding Handover Manuals",
      "Dedicated On-site Support for Launch Week"
    ]
  },
  {
    id: "printer-service",
    iconName: "Printer",
    badge: "Managed Print",
    title: "Enterprise Printer Service & MFP Integration",
    tagline: "Centralized print server management, secure scan workflows & multi-vendor MFP servicing.",
    description: "Stop printer downtime and unmanaged print costs. We configure, secure, and maintain commercial network multifunction printers (Kyocera, HP, Canon, Epson, Xerox, Brother). We deploy secure badge/PIN printing, scan-to-folder/SharePoint automation, and driver deployments across Windows and Mac fleets.",
    capabilities: [
      "Network printer discovery, IP reservation & print server setup",
      "Secure scan-to-email, scan-to-SharePoint & scan-to-SMB folders",
      "Follow-me / PIN-authenticated pull printing configuration",
      "Firmware updates, paper-jam diagnostics & roller servicing",
      "Fleet-wide print driver deployment via GPO / Microsoft Intune",
      "Color vs. mono access quotas & print cost auditing"
    ],
    deliverables: [
      "Centralized Print Server Dashboard",
      "Departmental Scan-to-Cloud Routing Matrix",
      "Preventative Maintenance & Spare Parts Schedule"
    ]
  },
  {
    id: "networking-wifi",
    iconName: "Wifi",
    badge: "Core Connectivity",
    title: "Enterprise Networking & High-Density Wi-Fi",
    tagline: "Carrier-grade switching, secure routing, and high-density enterprise wireless coverage.",
    description: "Engineered for high interference tropical environments, multi-story buildings, and high-client densities. We implement managed Ubiquiti UniFi, Cisco, Aruba, and MikroTik solutions with guest captive portals, employee VLANs, and intelligent band steering.",
    capabilities: [
      "High-density Wi-Fi 6 / 6E / Wi-Fi 7 access point deployments",
      "Layer 2 / Layer 3 managed switching & inter-VLAN routing",
      "Guest Wi-Fi captive portal with SMS/Voucher authentication",
      "Enterprise WPA3 security & 802.1X RADIUS authentication",
      "Long-range point-to-point (PtP) & point-to-multipoint wireless bridges",
      "24/7 cloud controller monitoring & automatic interference avoidance"
    ],
    deliverables: [
      "Interactive Wi-Fi Signal Coverage Heatmap",
      "VLAN & Network Subnet Allocation Document",
      "Cloud Controller Remote Management Access"
    ]
  },
  {
    id: "business-internet",
    iconName: "Globe",
    badge: "WAN & SD-WAN",
    title: "Business Internet & Multi-WAN Failover",
    tagline: "High-stability business internet integration, automated 4G/LTE failover & SD-WAN.",
    description: "Never lose connectivity during critical business hours. We aggregate multiple local ISP feeds (Digicel, Telikom, Vodafone, Starlink Business, and VSAT) with automated failover and intelligent traffic shaping so your ERP, banking, and communications never drop.",
    capabilities: [
      "Multi-WAN load balancing & seamless sub-second failover",
      "Primary fiber + secondary Starlink / 4G cellular backup",
      "Quality of Service (QoS) prioritization for VoIP, Teams & ERP",
      "Site-to-Site VPN tunnels between HQ and remote provincial branches",
      "Deep Packet Inspection (DPI) & application bandwidth throttling",
      "Real-time latency, jitter & packet loss threshold alerting"
    ],
    deliverables: [
      "Automatic Failover Test & Validation Report",
      "Secure Encrypted Site-to-Site VPN Mesh",
      "Bandwidth Consumption Executive Summary"
    ]
  },
  {
    id: "microsoft-365",
    iconName: "Cloud",
    badge: "Cloud Workplace",
    title: "Microsoft 365 & Cloud Solutions",
    tagline: "Custom domain email, Exchange migration, SharePoint intranet & Entra ID cybersecurity.",
    description: "Modernize your company with legitimate, licensed Microsoft 365 services. We manage complete tenant creation, hybrid Exchange migrations, OneDrive for Business governance, SharePoint document management systems, and multi-factor authentication (MFA).",
    capabilities: [
      "Domain DNS verification, MX records & SPF/DKIM/DMARC anti-spoofing",
      "Legacy IMAP/cPanel email migration to Exchange Online",
      "SharePoint corporate intranet & departmental folder permissions",
      "Microsoft Teams deployment with voice & dial-in conferencing",
      "Entra ID (Azure AD) identity governance & Conditional Access MFA",
      "Cloud-to-cloud automated backup for Exchange, OneDrive & Teams"
    ],
    deliverables: [
      "Zero-Data-Loss Migration Signoff",
      "Security Hardening Score (>85% M365 Secure Score)",
      "Admin Credential Vault & Recovery Runbook"
    ]
  },
  {
    id: "server-implementation",
    iconName: "Server",
    badge: "Compute & Storage",
    title: "Server Implementation & Virtualization",
    tagline: "On-premise physical servers, VMware/Hyper-V virtualization, Active Directory & automated backups.",
    description: "Robust local compute infrastructure tailored for accounting packages (MYOB, QuickBooks, SAP, Pronto), centralized domain control, file sharing, and disaster recovery. We deploy Dell PowerEdge and HPE ProLiant platforms configured for high reliability.",
    capabilities: [
      "Windows Server 2022/2025 Active Directory, DNS & DHCP setup",
      "VMware ESXi & Microsoft Hyper-V virtualization clustering",
      "Hardware RAID configuration (RAID 1, 5, 10) with hot spares",
      "Synology / QNAP enterprise NAS local storage & snapshot replication",
      "3-2-1 Disaster recovery strategy (Local + Air-gapped + Cloud backup)",
      "Bare-metal recovery testing & RTO / RPO SLA verification"
    ],
    deliverables: [
      "Disaster Recovery & System Restoration Guide",
      "Server Baseline Performance Benchmark",
      "Active Directory Group Policy (GPO) Inventory"
    ]
  }
];

export const solutions: [string, string][] = [
  ["Network Audit & Health Diagnostic", "Full-spectrum inspection of cabling, switches, Wi-Fi coverage, throughput, and security vulnerabilities with an actionable executive remediation plan."],
  ["UPS & Clean Power Protection", "Online double-conversion UPS systems, battery banks, and surge suppression engineered to protect sensitive hardware against PNG grid instability."],
  ["Structured Cabling & Fiber", "Cat6/Cat6A copper and optical fiber backbones, patch panels, cable trays, and clean rack architecture."],
  ["Turnkey Office IT Set Ups", "Rapid, reliable IT infrastructure rollouts for new corporate branches, office relocations, mine sites, and commercial spaces across PNG."],
  ["Enterprise Printer & MFP Service", "Fleet deployment, driver automation, secure PIN/badge release, scan-to-SharePoint workflows, and preventative maintenance for major printer brands."],
  ["High-Density Wi-Fi Solutions", "Reliable, high-throughput wireless coverage for corporate offices, warehouses, schools, hotels, and remote site compounds."],
  ["Business Internet & SD-WAN", "Redundant multi-ISP connectivity combining fiber, Starlink Business, and 4G with sub-second failover and VoIP traffic prioritization."],
  ["Microsoft 365 & Email Migration", "Corporate email setup, domain authentication (SPF/DKIM/DMARC), SharePoint intranets, and Entra ID security hardening."],
  ["Server Implementation & Virtualization", "On-premise servers (Dell/HPE), Hyper-V/VMware virtualization, Active Directory Domain Services, and robust 3-2-1 backup protection."],
  ["IT Support & Managed Maintenance", "Responsive SLA-backed remote helpdesk, on-site emergency dispatch, scheduled preventative visits, and 24/7 network monitoring."]
];

export const companyContact = {
  phones: [
    {
      display: "+675 7750 7098",
      raw: "+67577507098",
      short: "7750 7098",
      label: "Technical Line 1",
      carrier: "PNG Mobile"
    },
    {
      display: "+675 7256 3755",
      raw: "+67572563755",
      short: "7256 3755",
      label: "Technical Line 2",
      carrier: "PNG Mobile"
    }
  ],
  supportPhone: {
    display: "+675 7744 9219",
    raw: "+67577449219",
    short: "77449219",
    label: "Dedicated 24/7 IT Support Hotline",
    carrier: "Direct Support & WhatsApp"
  },
  email: {
    display: "info@nwavepng.com",
    href: "mailto:info@nwavepng.com?subject=NextWave%20Technologies%20Inquiry",
    quotesHref: "mailto:info@nwavepng.com?subject=Request%20for%20ICT%20Quote%20-%20NextWave%20Technologies",
    supportHref: "mailto:info@nwavepng.com?subject=Urgent%20ICT%20Support%20Request"
  },
  whatsapp: {
    url: "https://wa.me/67577449219",
    quickQuoteUrl: (serviceName: string) => 
      `https://wa.me/67577449219?text=${encodeURIComponent(`Hello NextWave Technologies, I am inquiring about: ${serviceName}. Please provide details and pricing.`)}`,
    emergencySupportUrl: 
      `https://wa.me/67577449219?text=${encodeURIComponent(`URGENT SUPPORT REQUEST: Our network/system is down. Please contact us immediately.`)}`
  },
  locations: [
    {
      hub: "Port Moresby HQ",
      address: "National Capital District, Papua New Guinea",
      focus: "Corporate ICT, Managed Networks, Enterprise Cabling & Government Systems"
    },
    {
      hub: "Bougainville Regional Hub",
      address: "Autonomous Region of Bougainville, Papua New Guinea",
      focus: "Remote Site Connectivity, VSAT / Starlink, Solar-UPS Hybrid Power & Field Engineering"
    }
  ],
  serviceAreas: "Serving Port Moresby, Lae, Mount Hagen, Kokopo, Madang, Bougainville, and remote mining/commercial project sites nationwide across Papua New Guinea."
};
