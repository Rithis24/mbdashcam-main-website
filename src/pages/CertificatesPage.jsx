import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle,
  Zap,
  Eye,
  FileText,
  Download,
  ExternalLink,
  Check
} from 'lucide-react';
import CertificateLogoSlider from '../components/CertificateLogoSlider';
import CertificateModal from '../components/CertificateModal';

export default function CertificatesPage({ onOpenOrder }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCert = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  // Statutory Certification Documents (Static Cards - NOT Auto-Scrolling)
  const staticCertificates = [
    {
      id: 'udyam',
      title: 'Govt. of India MSME Udyam Registration',
      category: 'Statutory Registration',
      certNumber: 'UDYAM-TN-22-0008892',
      badge: 'Ministry of MSME',
      issuer: 'Ministry of Micro, Small & Medium Enterprises, Govt. of India',
      image: '/assets/certificates/udyam-registration-certificate.jpg',
      docUrl: '/assets/docs/Udyam-MSME-Certificate.jpg',
      description:
        'Official Government of India statutory registration affirming MB Automotives India (A Unit of Metro Basket) as a verified domestic manufacturer of automotive video recording devices, camera sensors, and vehicle telematics hardware.',
      highlights: [
        'Enterprise Type: Micro Manufacturing & Telematics',
        'Registered Under: NIC 2651 & 2930 (Automotive Electronics & Instruments)',
        'Eligible for Direct GeM Public Fleet Procurement'
      ]
    },
    {
      id: 'zed',
      title: 'MSME Sustainable (ZED) Bronze Certification',
      category: 'Quality & Zero Defect',
      certNumber: 'ZED-MSME-BRONZE-RATED',
      badge: 'Zero Defect Zero Effect',
      issuer: 'Quality Council of India & Ministry of MSME',
      image: '/assets/certificates/zed-msme-certificate.jpg',
      docUrl: '/assets/certificates/zed-msme-certificate.jpg',
      description:
        'National ZED accreditation certifying stringent adherence to zero manufacturing defects, environmental waste minimization, and verified quality management in precision automotive telematics production.',
      highlights: [
        'Zero Defect manufacturing and assembly verification',
        'Continuous component-level quality screening',
        'Sustainable and energy-efficient factory operations'
      ]
    },
    {
      id: 'iso',
      title: 'ISO 9001:2015 Quality Management System',
      category: 'International Standard',
      certNumber: 'ISO 9001:2015 CERTIFIED',
      badge: 'International QMS',
      issuer: 'International Quality Assurance Framework',
      image: '/assets/certificates/iso-9001-logo.png',
      docUrl: '/assets/docs/MB-Automotives-India-Booklet.pdf',
      description:
        'Global ISO 9001:2015 quality assurance framework verifying standardized manufacturing procedures, thermal soak testing (-20°C to +75°C), high-vibration stress testing, and rigorous inspection before fleet dispatch.',
      highlights: [
        'Rigorous incoming component inspection and batch tracing',
        'Standardized 14-hour burn-in reliability testing',
        'Formal corrective and preventive action (CAPA) compliance'
      ]
    },
    {
      id: 'bis',
      title: 'Bureau of Indian Standards (BIS) IS 616 : 2017',
      category: 'Safety & Homologation',
      certNumber: 'BIS IS 616 : 2017 / IEC 60065',
      badge: 'Automotive Safety',
      issuer: 'Bureau of Indian Standards, Government of India',
      image: '/assets/certificates/bis-logo.png',
      docUrl: '/assets/docs/MB-Automotives-India-Booklet.pdf',
      description:
        'Full compliance with Bureau of Indian Standards IS 616 : 2017 standards for vehicle audio/video electronic hardware, transient alternator protection, supercapacitor safety, and flame-retardant enclosures.',
      highlights: [
        'Supercapacitor isolation preventing windshield thermal hazards',
        'DC 9V–36V surge suppression clamped for commercial diesel buses',
        'Flame-retardant ABS-PC automotive composite casing'
      ]
    },
    {
      id: 'gem',
      title: 'Government e Marketplace (GeM) Registered Vendor',
      category: 'Public Procurement',
      certNumber: 'GeM VERIFIED OEM VENDOR',
      badge: 'GeM Portal',
      issuer: 'Government e Marketplace, Ministry of Commerce & Industry',
      image: '/assets/certificates/gem-logo.png',
      docUrl: '/assets/docs/MB-Catalogue.pdf',
      description:
        'Registered OEM vendor on the Government e Marketplace (GeM) portal for streamlined B2G procurement by state road transport corporations (SRTCs), police fleets, school boards, and municipal agencies.',
      highlights: [
        'Direct institutional bidding on GeM central portal',
        'Pre-verified statutory compliance and tax credentials',
        'Pan-India depot delivery and on-site fitment support'
      ]
    },
    {
      id: 'made-in-india',
      title: 'Make In India Commercial Hardware Initiative',
      category: 'Domestic Production',
      certNumber: 'MAKE IN INDIA TELEMATICS',
      badge: 'Make In India',
      issuer: 'National Manufacturing Commitment',
      image: '/assets/certificates/made-in-india-logo.png',
      docUrl: '/assets/docs/MB-Catalogue.pdf',
      description:
        'Engineered, assembled, and firmware-calibrated in India specifically for severe highway duty, unpaved transit corridors, high ambient summer heat, and fluctuating heavy diesel vehicle voltage.',
      highlights: [
        'Firmware tuned for Indian road lighting & license plates',
        'Domestic warranty fulfillment and local spare part depots',
        'Dedicated bilingual technical support for fleet mechanics'
      ]
    }
  ];

  const labBenches = [
    {
      title: 'Windshield Solar Thermal Chamber',
      spec: '-20°C to +75°C Continuous Soak',
      desc: 'Simulating extreme Indian summer solar baking on commercial bus windshields to guarantee supercapacitor reliability with zero fire or swell risks.',
      image: '/assets/branding/about-hero-image.png'
    },
    {
      title: 'Alternator Transient Surge Bench',
      spec: 'DC 9V–36V Clamped Overvoltage',
      desc: 'Injecting high-voltage inductive kickback spikes encountered during heavy diesel starter turnover to verify automotive power supply isolation.',
      image: '/assets/products/mb-bus-black-box-smart-gallery-1.jpg'
    },
    {
      title: '3-Axis Highway Vibration Rig',
      spec: '10–500Hz Commercial Shock',
      desc: 'Subjecting threaded aviation metal connectors, optical lenses, and circuit boards to prolonged high-frequency transit vibration without signal interruption.',
      image: '/assets/products/mb-parking-sensor-gallery-1.png'
    },
    {
      title: 'Starlight Night Optics Bench',
      spec: '0.01 Lux Low-Light Calibration',
      desc: 'Calibrating F/1.8 wide-angle lenses for unlit highway license plate readability, headlight glare suppression, and interior cabin passenger surveillance.',
      image: '/assets/products/mb-dms-driver-monitoring-system-gallery-1.jpg'
    }
  ];

  return (
    <div className="certificates-page">
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: '#070a12',
          color: '#ffffff',
          padding: '64px 0 48px 0',
          borderBottom: '1px solid #1e293b'
        }}
      >
        <div className="container text-center">
          <span className="section-eyebrow section-eyebrow-dark">STATUTORY HOMOLOGATION & ACCREDITATIONS</span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Regulatory Certifications & Quality Compliance
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '740px', margin: '0 auto', lineHeight: 1.6 }}>
            Accredited by the Government of India Ministry of MSME, ISO 9001:2015 Quality Frameworks, GeM Central Procurement, and Bureau of Indian Standards (BIS) for commercial vehicle telematics.
          </p>
        </div>
      </section>

      {/* KPI Accreditations Summary Row */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '24px 0' }}>
        <div className="container">
          <div className="grid-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <Award size={28} color="#0284c7" />
              <div>
                <strong style={{ fontSize: '0.9375rem', color: '#0f172a', display: 'block' }}>ISO 9001:2015</strong>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Quality Management Certified</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <ShieldCheck size={28} color="#0284c7" />
              <div>
                <strong style={{ fontSize: '0.9375rem', color: '#0f172a', display: 'block' }}>Govt. MSME Udyam</strong>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>UDYAM-TN-22-0008892</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <CheckCircle size={28} color="#0284c7" />
              <div>
                <strong style={{ fontSize: '0.9375rem', color: '#0f172a', display: 'block' }}>BIS IS 616 : 2017</strong>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Bureau of Indian Standards</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <Zap size={28} color="#0284c7" />
              <div>
                <strong style={{ fontSize: '0.9375rem', color: '#0f172a', display: 'block' }}>ZED MSME Bronze</strong>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Zero Defect Zero Effect</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STATIC CERTIFICATES SHOWCASE (CLEAN CARDS - NOT AUTO-SCROLLING)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">VERIFIED CERTIFICATION DOCUMENTS</span>
            <h2 className="section-title">Official Accreditations & Statutory Records</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Inspect and verify statutory certificates and homologation frameworks issued to MB Automotives India (A Unit of Metro Basket).
            </p>
          </div>

          <div className="static-certificates-grid">
            {staticCertificates.map((cert) => (
              <div key={cert.id} className="static-cert-card">
                {/* Certificate Preview Stage */}
                <div
                  className="static-cert-preview-box"
                  onClick={() => handleOpenCert(cert)}
                  title={`Click to view ${cert.title}`}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="static-cert-preview-img"
                    loading="lazy"
                  />
                  <div className="static-cert-hover-overlay">
                    <span className="static-cert-zoom-btn">
                      <Eye size={16} />
                      <span>View Certificate</span>
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="static-cert-body">
                  <div className="static-cert-tags-row">
                    <span className="badge badge-blue" style={{ fontSize: '0.6875rem' }}>
                      {cert.badge}
                    </span>
                    <span className="static-cert-category-tag">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="static-cert-title">
                    {cert.title}
                  </h3>

                  <div className="static-cert-number-box">
                    <strong>ID / REG:</strong> {cert.certNumber}
                  </div>

                  <p className="static-cert-desc">
                    {cert.description}
                  </p>

                  {/* Highlights checklist */}
                  {cert.highlights && cert.highlights.length > 0 && (
                    <div className="static-cert-highlights-list">
                      {cert.highlights.map((h, i) => (
                        <div key={i} className="static-cert-highlight-item">
                          <Check size={14} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="static-cert-actions">
                    <button
                      type="button"
                      onClick={() => handleOpenCert(cert)}
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      <Eye size={14} />
                      <span>Inspect Record</span>
                    </button>
                    {cert.docUrl && (
                      <a
                        href={cert.docUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        style={{ padding: '8px 12px' }}
                        title="Open Document in New Tab"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Corporate Booklet Banner */}
          <div className="cert-dossier-banner">
            <div>
              <span className="section-eyebrow section-eyebrow-dark">OFFICIAL ACCREDITATION DOSSIER</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                Download MB Automotives India Corporate & Compliance Booklet
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>
                Includes comprehensive registration records, electrical safety test certificates, and factory homologation specifications in high-resolution PDF format.
              </p>
            </div>
            <a
              href="/assets/docs/MB-Automotives-India-Booklet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flexShrink: 0 }}
            >
              <Download size={16} />
              <span>Download Booklet (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          AUTO-SCROLL MOVING LOGOS TICKER (MATCHING USER PICTURE: ONLY LOGOS)
          ========================================================================= */}
      <CertificateLogoSlider />

      {/* Environmental & Reliability Lab Rigor */}
      <section className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">LABORATORY RIGOR</span>
            <h2 className="section-title">Environmental & Reliability Testing Benches</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Commercial telematics hardware subjected to extreme temperature soak, 3-axis vibration, and transient overvoltage prior to fleet dispatch.
            </p>
          </div>

          <div className="grid-4">
            {labBenches.map((bench, idx) => (
              <div key={idx} className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '140px', backgroundColor: '#070a12', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px' }}>
                  <img src={bench.image} alt={bench.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span className="badge badge-blue" style={{ alignSelf: 'flex-start', fontSize: '0.6875rem', marginBottom: '8px' }}>
                  {bench.spec}
                </span>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                  {bench.title}
                </h4>
                <p style={{ fontSize: '0.78125rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                  {bench.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full-Screen Certificate Inspection */}
      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificate={selectedCert}
      />
    </div>
  );
}
