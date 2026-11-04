import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Search,
  ChevronDown,
  FileText,
  Download,
  Phone,
  Mail,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  ArrowRight
} from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      category: 'power',
      question: 'Why does MB Automotives use Supercapacitors instead of Lithium Batteries?',
      answer:
        'Standard lithium batteries frequently overheat, swell, and pose severe thermal fire hazards when exposed to prolonged Indian summer solar baking on commercial windshields (which regularly exceeds 65°C to 70°C). MB Automotives uses automotive-grade dual supercapacitors rated from -20°C to +75°C continuous soak. Supercapacitors provide millions of charge-discharge cycles, zero swell risk, and sufficient reserve power to safely save the final incident file when vehicle ignition turns off.'
    },
    {
      id: 2,
      category: 'power',
      question: 'How does DC 9V–36V dynamic voltage clamping protect against heavy diesel alternators?',
      answer:
        'Commercial 24V bus and truck electrical systems frequently generate extreme inductive voltage kickback spikes (transient overvoltages exceeding 50V) during diesel starter motor turnover. MB Automotives commercial hardware features built-in industrial TVS diode suppression and step-down power conversion that safely clamps surges up to 36V DC, preventing circuit board blowout and ensuring uninterrupted continuous recording.'
    },
    {
      id: 3,
      category: 'hardware',
      question: 'What are threaded GX12 aviation connectors and why are they required on buses?',
      answer:
        'Consumer dashcams use standard USB or 3.5mm push-fit plugs that easily shake loose on rough Indian highways, causing fatal power drops or video flickering. Our commercial bus black boxes and truck cameras use heavy-duty GX12 4-pin metal couplings with knurled screw-locking threads. Once tightened, they cannot be disconnected by transit vibration, chassis flex, or accidental passenger contact.'
    },
    {
      id: 4,
      category: 'dms-adas',
      question: 'How do the AI Driver Monitoring System (DMS) cameras operate at night?',
      answer:
        'The MB DMS camera uses a 940nm invisible infrared illuminator combined with a dedicated neural computer vision processing unit. Even in completely pitch-dark bus cabins without interior lighting, the system accurately tracks the driver’s facial landmarks, eyelid blink duration, eye closure, yawning frequency, and head nod angles, alerting the driver via high-decibel spoken cabin audio in real time before micro-sleep occurs.'
    },
    {
      id: 5,
      category: 'storage',
      question: 'What happens when the memory card fills up during a long journey?',
      answer:
        'All MB Automotives dashcams use seamless FIFO (First-In, First-Out) loop recording. When storage capacity is reached, the system automatically overwrites the oldest non-critical video segment without a single dropped frame between clips. Emergency incident recordings triggered by the 3-axis G-Sensor or SOS button are automatically locked into a dedicated protected directory that is immune to automatic loop overwriting.'
    },
    {
      id: 6,
      category: 'warranty',
      question: 'What is the procedure for registering and claiming hardware warranty?',
      answer:
        'Fleet buyers and vehicle owners can register their hardware online at our Warranty Portal within 30 days of fitment by providing the serial number (S/N) and dealer tax invoice. Commercial systems include 24 months of full factory warranty. In case of any technical issue, our pan-India service depots provide on-site diagnostics, harness testing, and immediate unit replacement.'
    },
    {
      id: 7,
      category: 'telematics',
      question: 'Can fleet managers view live 4G video streaming from their central office?',
      answer:
        'Yes. Our 4G-enabled commercial models connect directly to the MB Fleet CMS Cloud platform (hosted on high-speed Indian server infrastructure for low latency and data residency compliance). Fleet dispatchers can view multi-camera live video feeds, real-time GPS speed and location, historical route playback, and receive instant alert notifications on desktop and Android mobile clients.'
    },
    {
      id: 8,
      category: 'hardware',
      question: 'Is the storage card protected against unauthorized driver tampering or removal?',
      answer:
        'Yes. Commercial models such as the MB Bus Black Box Smart and MB Bus T4 feature a heavy physical key lock on the SD/SIM access bay. Without the designated fleet manager key, drivers or unauthorized personnel cannot access, eject, or tamper with the recording media.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'power', label: 'Power & Supercapacitors' },
    { id: 'hardware', label: 'Hardware & Aviation Wiring' },
    { id: 'dms-adas', label: 'AI DMS & ADAS' },
    { id: 'storage', label: 'Storage & Loop Writes' },
    { id: 'telematics', label: '4G Cloud & Telematics' },
    { id: 'warranty', label: 'Warranty & Service' }
  ];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="resources-page">
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: '#070a12',
          color: '#ffffff',
          padding: '64px 0 44px 0',
          borderBottom: '1px solid #1e293b'
        }}
      >
        <div className="container text-center">
          <span className="section-eyebrow section-eyebrow-dark">TECHNICAL KNOWLEDGE BASE</span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Resources, Engineering FAQs & Technical Guides
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '720px', margin: '0 auto 28px auto', lineHeight: 1.6 }}>
            Comprehensive technical explanations, installation guidance, wiring pinouts, and regulatory compliance standards for commercial automotive hardware.
          </p>

          {/* Search Box */}
          <div style={{ maxWidth: '580px', margin: '0 auto', position: 'relative' }}>
            <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search by topic, e.g., supercapacitors, aviation cable, 9V-36V, warranty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field"
              style={{
                paddingLeft: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                color: '#ffffff',
                border: '1px solid #334155',
                fontSize: '0.9375rem'
              }}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '36px', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: activeCategory === cat.id ? '#0284c7' : '#e2e8f0',
                  backgroundColor: activeCategory === cat.id ? '#0284c7' : '#f8fafc',
                  color: activeCategory === cat.id ? '#ffffff' : '#334155',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '64px' }}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    style={{
                      border: '1px solid',
                      borderColor: isOpen ? '#bae6fd' : '#e2e8f0',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      backgroundColor: isOpen ? '#f0f9ff' : '#ffffff',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      style={{
                        width: '100%',
                        padding: '18px 22px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '16px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        background: 'none',
                        border: 'none'
                      }}
                    >
                      <span style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        color="#0284c7"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                          flexShrink: 0
                        }}
                      />
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '0 22px 20px 22px',
                          fontSize: '0.90625rem',
                          color: '#334155',
                          lineHeight: 1.65,
                          borderTop: '1px solid rgba(2, 132, 199, 0.15)',
                          paddingTop: '14px'
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div style={{ textAlign: 'center', padding: '48px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <HelpCircle size={36} color="#94a3b8" style={{ margin: '0 auto 12px auto' }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                  No FAQs matching "{searchQuery}"
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '16px' }}>
                  Contact our fleet engineers directly for specific pinouts or electrical integration assistance.
                </p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="btn btn-secondary btn-sm"
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>

          {/* Quick Technical Links Row */}
          <div className="grid-3" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '48px' }}>
            <div className="card" style={{ padding: '24px' }}>
              <FileText size={26} color="#0284c7" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                Download Product Catalog
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5, marginBottom: '16px' }}>
                Comprehensive PDF document featuring electrical ratings, pinout diagrams, and model comparisons.
              </p>
              <a
                href="/assets/docs/MB-Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>
            </div>

            <div className="card" style={{ padding: '24px' }}>
              <ShieldCheck size={26} color="#0284c7" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                Corporate Compliance Booklet
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5, marginBottom: '16px' }}>
                Official MSME Udyam, ISO 9001:2015, and BIS homologation compliance dossier.
              </p>
              <a
                href="/assets/docs/MB-Automotives-India-Booklet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <Download size={14} />
                <span>Download Dossier</span>
              </a>
            </div>

            <div className="card" style={{ padding: '24px' }}>
              <Phone size={26} color="#0284c7" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                Direct Fleet Support
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5, marginBottom: '16px' }}>
                Speak directly to an automotive telematics technician for on-site depot installation assistance.
              </p>
              <a href="tel:+918838100080" className="btn btn-primary btn-sm">
                <Phone size={14} />
                <span>+91 88381 00080</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
