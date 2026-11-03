import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, Users, ShoppingBag, ArrowRight, FileText, ShieldCheck, Award } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function AboutPage({ onOpenOrder }) {
  return (
    <div className="about-page">
      {/* Banner */}
      <section
        style={{
          backgroundColor: '#070a12',
          color: '#ffffff',
          padding: '64px 0',
          borderBottom: '1px solid #1e293b'
        }}
      >
        <div className="container">
          <div className="section-eyebrow section-eyebrow-dark">CORPORATE OVERVIEW</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            About MB Automotives India
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '720px', lineHeight: 1.6 }}>
            A Unit of Metro Basket. Leading Indian commercial telematics and vehicle safety hardware manufacturer dedicated to zero-compromise road endurance.
          </p>
        </div>
      </section>

      {/* Main Narrative & Facility Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="about-narrative-grid">
            <div>
              <span className="section-eyebrow">OUR HERITAGE & MISSION</span>
              <h2 className="section-title">
                Pioneering Safety Hardware for High-Risk Commercial Transit
              </h2>
              <p style={{ color: '#334155', fontSize: '1.0625rem', lineHeight: 1.6, marginBottom: '18px' }}>
                MB Automotives India was established with a focused purpose: to engineer automotive recording and sensor technology that withstands the severe physical realities of Indian commercial road transport.
              </p>
              <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Standard consumer dashcams frequently suffer capacitor swelling, melted casing, corrupted memory cards, and disconnected power cables when subjected to prolonged 14-hour duty cycles on Indian highway buses and freight trucks.
              </p>
              <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '28px' }}>
                We engineer our dashcams and telematics sensors with wide 9V–36V dynamic voltage clamping, dual supercapacitors, threaded aviation cables, and lockable tamper-proof casing.
              </p>

              {/* 4 Verified Metric Counters */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px',
                  marginBottom: '28px'
                }}
              >
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0284c7', fontFamily: 'var(--font-heading)' }} data-count="11570" data-suffix="+">
                    11,570+
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>Vehicles & Units Equipped</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0284c7', fontFamily: 'var(--font-heading)' }} data-count="20054" data-suffix="+">
                    20,054+
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>Customer Evaluations</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0284c7', fontFamily: 'var(--font-heading)' }} data-count="60" data-suffix="+">
                    60+
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>R&D & Field Specialists</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0284c7', fontFamily: 'var(--font-heading)' }} data-count="100" data-suffix="+">
                    100+
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>Commercial Hardware Models</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/products" className="btn btn-primary">
                  <span>Explore Hardware Range</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/certificates" className="btn btn-secondary">
                  <span>View Certifications</span>
                </Link>
              </div>
            </div>

            <div>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid #cbd5e1'
                }}
              >
                <img
                  src="/assets/branding/about-hero-image.png"
                  alt="MB Automotives Manufacturing Facility"
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Verified Locations Details */}
              <div
                style={{
                  marginTop: '24px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="#0284c7" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.875rem', color: '#0f172a', display: 'block' }}>
                      Headquarters & Registered Facility:
                    </strong>
                    <span style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      14/145, Niton Estate, Club Road, Kotagiri, Tamil Nadu - 643217
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="#0284c7" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.875rem', color: '#0f172a', display: 'block' }}>
                      Regional Operations Base:
                    </strong>
                    <span style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      Industrial Corridor, Guindy, Chennai, Tamil Nadu - 600032
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Pillars */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">CORE COMPETENCIES</span>
            <h2 className="section-title">Built Upon Strict Engineering Principles</h2>
            <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Every component integrated into MB Dashcam systems is chosen specifically for heavy automotive duty.
            </p>
          </div>

          <div className="grid-3">
            <div className="card" style={{ padding: '28px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Anti-Swell Supercapacitors
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                Unlike consumer dashcams that use lithium pouches, our units use industrial supercapacitors that withstand direct 70°C windshield solar exposure without swelling or losing emergency lock power.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Award size={26} />
              </div>
              <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                BIS & ISO 9001 Compliance
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                Traceable incoming circuit board testing, automated optical inspection, and rigorous vibration tests guarantee dependable hardware reliability across commercial transit operators.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Users size={26} />
              </div>
              <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Direct Regional Field Support
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                Our field technicians assist depot mechanics with cable harness routing, fuse-tap safety power integration, and multi-camera angle calibration for bus body builders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
