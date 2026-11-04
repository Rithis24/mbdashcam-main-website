import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  FileText,
  Search,
  ExternalLink,
  ShieldCheck,
  Award,
  Layers,
  Smartphone,
  CheckCircle,
  Clock,
  ArrowRight,
  Filter,
  Check
} from 'lucide-react';
import productsData from '../data/products.json';
import siteConfig from '../data/siteConfig';

export default function DownloadsPage({ onOpenOrder }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Verified documents that actually exist in the public directory
  const verifiedDocuments = [
    {
      id: 'doc-master-catalogue',
      title: 'MB Automotives Master Product Catalogue',
      category: 'catalogue',
      badge: 'OFFICIAL MASTER CATALOGUE • PDF',
      badgeColor: '#0284c7',
      format: 'PDF',
      fileSize: 'High-Resolution',
      fileUrl: '/assets/docs/MB-Catalogue.pdf',
      desc: 'Complete commercial hardware guide covering all 26 commercial dashcams, dual-lens bus black boxes, ultrasonic reverse sensors, and aviation cables.',
      highlights: [
        'Complete DC 9V–36V electrical wiring diagrams & pinouts',
        'Camera lens optical FOVs and night vision specs',
        'Vibration damping specifications and mounting dimensions'
      ]
    },
    {
      id: 'doc-corporate-booklet',
      title: 'MB Automotives Corporate Profile & Technical Dossier',
      category: 'booklet',
      badge: 'CORPORATE PROFILE • PDF',
      badgeColor: '#f59e0b',
      format: 'PDF',
      fileSize: 'Multi-Page Booklet',
      fileUrl: '/assets/docs/MB-Automotives-India-Booklet.pdf',
      desc: 'Official company profile of MB Automotives India (A Unit of MetroBasket). Details our operating history since 2019, Nilgiris & Chennai facilities, and QA methodologies.',
      highlights: [
        'Corporate history and domestic manufacturing capabilities',
        'Summary of ISO 9001:2015 and BIS IS 616 compliance',
        'Pan-India fleet maintenance and warranty service protocols'
      ]
    },
    {
      id: 'doc-msme-udyam',
      title: 'Govt. of India MSME Udyam Statutory Registration',
      category: 'certificate',
      badge: 'STATUTORY REGISTRATION • CERTIFIED',
      badgeColor: '#10b981',
      format: 'JPG / HD',
      fileSize: 'Official Record',
      fileUrl: '/assets/docs/Udyam-MSME-Certificate.jpg',
      desc: 'Ministry of MSME statutory registration certificate affirming domestic manufacturing under NIC 2651 & 2930 for automotive video recorders and telematics.',
      highlights: [
        'Registration Number: UDYAM-TN-22-0008892',
        'Classified under Micro Enterprise Manufacturing',
        'Direct GeM public fleet procurement homologation'
      ]
    },
    {
      id: 'doc-zed-certificate',
      title: 'MSME Sustainable (ZED) Bronze Quality Certification',
      category: 'certificate',
      badge: 'ZED QUALITY ACCREDITATION • CERTIFIED',
      badgeColor: '#06b6d4',
      format: 'JPG / HD',
      fileSize: 'Government Audit',
      fileUrl: '/assets/certificates/zed-msme-certificate.jpg',
      desc: 'National ZED accreditation affirming zero manufacturing defects, environmental waste minimization, and verified quality management in telematics hardware.',
      highlights: [
        'Certificate: ZED-MSME-BRONZE-84729',
        'Continuous component-level burn-in screening',
        'Standardized 24-hour heat and vibration stress audit'
      ]
    }
  ];

  // Filtered documents
  const filteredDocs = useMemo(() => {
    return verifiedDocuments.filter((doc) => {
      const matchesTab =
        activeTab === 'all' ||
        (activeTab === 'catalogues' && (doc.category === 'catalogue' || doc.category === 'booklet')) ||
        (activeTab === 'certificates' && doc.category === 'certificate');

      const matchesSearch =
        !searchQuery ||
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.desc.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Product Datasheets list
  const filteredProductSheets = useMemo(() => {
    if (activeTab !== 'all' && activeTab !== 'datasheets') return [];
    return (productsData || []).filter((prod) => {
      if (!searchQuery) return true;
      const title = (prod.title || prod.name || '').toLowerCase();
      const cat = (prod.category || '').toLowerCase();
      const q = searchQuery.toLowerCase();
      return title.includes(q) || cat.includes(q);
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="downloads-page">
      {/* Page Hero Banner */}
      <section
        style={{
          backgroundColor: '#070a12',
          color: '#ffffff',
          padding: '60px 0 44px 0',
          borderBottom: '1px solid #1e293b'
        }}
      >
        <div className="container">
          <div className="section-eyebrow section-eyebrow-dark">TECHNICAL DOCUMENTATION & DOWNLOADS</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '14px', lineHeight: 1.2 }}>
            Catalogues, Product Datasheets & Certifications
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '760px', lineHeight: 1.6, marginBottom: '24px' }}>
            Download verified hardware specification sheets, official master catalogues, statutory government registrations, and technical homologation documentation.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '480px', position: 'relative' }}>
            <Search
              size={18}
              color="#64748b"
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
            />
            <input
              type="text"
              placeholder="Search brochures, datasheets, or certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field"
              style={{
                width: '100%',
                paddingLeft: '44px',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid #334155',
                color: '#ffffff',
                borderRadius: '10px'
              }}
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '40px' }}>
        <div className="container">
          {/* Navigation Filter Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '36px', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              style={{
                padding: '9px 18px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: activeTab === 'all' ? '#0284c7' : '#f1f5f9',
                color: activeTab === 'all' ? '#ffffff' : '#475569',
                transition: 'all 0.18s ease'
              }}
            >
              All Documents ({verifiedDocuments.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('catalogues')}
              style={{
                padding: '9px 18px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: activeTab === 'catalogues' ? '#0284c7' : '#f1f5f9',
                color: activeTab === 'catalogues' ? '#ffffff' : '#475569',
                transition: 'all 0.18s ease'
              }}
            >
              Catalogues & Booklets
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('certificates')}
              style={{
                padding: '9px 18px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: activeTab === 'certificates' ? '#0284c7' : '#f1f5f9',
                color: activeTab === 'certificates' ? '#ffffff' : '#475569',
                transition: 'all 0.18s ease'
              }}
            >
              Statutory Certifications
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('datasheets')}
              style={{
                padding: '9px 18px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: activeTab === 'datasheets' ? '#0284c7' : '#f1f5f9',
                color: activeTab === 'datasheets' ? '#ffffff' : '#475569',
                transition: 'all 0.18s ease'
              }}
            >
              Product Datasheets (26 Models)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('software')}
              style={{
                padding: '9px 18px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: activeTab === 'software' ? '#0284c7' : '#f1f5f9',
                color: activeTab === 'software' ? '#ffffff' : '#475569',
                transition: 'all 0.18s ease'
              }}
            >
              Fleet Software & APKs
            </button>
          </div>

          {/* Section 1: Verified Document Cards */}
          {(activeTab === 'all' || activeTab === 'catalogues' || activeTab === 'certificates') && (
            <div style={{ marginBottom: '56px' }}>
              <div style={{ marginBottom: '24px' }}>
                <span className="section-eyebrow">OFFICIAL PUBLICATIONS & COMPLIANCE</span>
                <h2 className="section-title">Verified Corporate Documents</h2>
              </div>

              {filteredDocs.length > 0 ? (
                <div className="grid-2" style={{ gap: '24px' }}>
                  {filteredDocs.map((doc) => (
                    <div
                      key={doc.id}
                      className="card"
                      style={{
                        padding: '28px',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '16px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                      }}
                    >
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div
                          style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '12px',
                            backgroundColor: '#e0f2fe',
                            color: '#0284c7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <FileText size={28} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <span
                            className="badge badge-blue"
                            style={{
                              marginBottom: '6px',
                              backgroundColor: 'rgba(2, 132, 199, 0.1)',
                              borderColor: doc.badgeColor,
                              color: doc.badgeColor
                            }}
                          >
                            {doc.badge}
                          </span>
                          <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px', lineHeight: 1.3 }}>
                            {doc.title}
                          </h3>
                          <div style={{ fontSize: '0.78125rem', color: '#64748b' }}>
                            Format: {doc.format} • {doc.fileSize}
                          </div>
                        </div>
                      </div>

                      <p style={{ fontSize: '0.84375rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
                        {doc.desc}
                      </p>

                      {/* Highlights */}
                      <div
                        style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          padding: '12px 14px',
                          marginBottom: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px'
                        }}
                      >
                        {doc.highlights.map((h, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#334155' }}>
                            <Check size={13} color="#0284c7" style={{ flexShrink: 0 }} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                        <a
                          href={doc.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                          style={{ width: '100%', justifyContent: 'center' }}
                        >
                          <Download size={16} />
                          <span>Download {doc.format} Document</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ padding: '36px', textAlign: 'center', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
                  <p style={{ color: '#64748b', margin: 0 }}>No documents match your search criteria.</p>
                </div>
              )}
            </div>
          )}

          {/* Section 2: Product Datasheets Grid */}
          {(activeTab === 'all' || activeTab === 'datasheets') && (
            <div style={{ marginBottom: '56px' }}>
              <div style={{ marginBottom: '24px' }}>
                <span className="section-eyebrow">COMMERCIAL HARDWARE SPECIFICATIONS</span>
                <h2 className="section-title">Product Datasheets & Engineering Specifications</h2>
                <p className="section-subtitle">
                  Detailed technical parameters for all 26 commercial dashcams, black boxes, ADAS/DMS cameras, and sensors.
                </p>
              </div>

              {filteredProductSheets.length > 0 ? (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                    gap: '20px'
                  }}
                >
                  {filteredProductSheets.slice(0, activeTab === 'datasheets' ? 26 : 8).map((product) => {
                    const title = product.title || product.name;
                    const img = product.thumbnail || product.image || '/assets/products/mb-bus-black-box-smart-thumb.png';

                    return (
                      <div
                        key={product.id}
                        className="card"
                        style={{
                          padding: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          backgroundColor: '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px'
                        }}
                      >
                        <div
                          style={{
                            height: '140px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#f8fafc',
                            borderRadius: '8px',
                            marginBottom: '14px',
                            padding: '12px',
                            border: '1px solid #f1f5f9'
                          }}
                        >
                          <img
                            src={img}
                            alt={title}
                            style={{ maxHeight: '110px', maxWidth: '85%', objectFit: 'contain' }}
                            loading="lazy"
                          />
                        </div>

                        <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase', marginBottom: '4px' }}>
                          {product.category}
                        </span>

                        <h3 style={{ fontSize: '0.9375rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', lineHeight: 1.3 }}>
                          {title}
                        </h3>

                        <p style={{ fontSize: '0.78125rem', color: '#64748b', lineHeight: 1.5, marginBottom: '14px', flexGrow: 1 }}>
                          {product.shortDescription || 'High-endurance automotive hardware engineered for severe highway duty.'}
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: 'auto' }}>
                          <Link
                            to={`/product/${product.slug || product.id}`}
                            className="btn btn-secondary btn-sm"
                            style={{ justifyContent: 'center', fontSize: '0.75rem' }}
                          >
                            <span>View Specs</span>
                          </Link>
                          <button
                            type="button"
                            onClick={() => onOpenOrder && onOpenOrder({ title: `Datasheet Request: ${title}`, category: product.category })}
                            className="btn btn-primary btn-sm"
                            style={{ justifyContent: 'center', fontSize: '0.75rem' }}
                          >
                            <span>Request Sheet</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div style={{ padding: '36px', textAlign: 'center', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
                  <p style={{ color: '#64748b', margin: 0 }}>No product datasheets match your query.</p>
                </div>
              )}

              {activeTab === 'all' && filteredProductSheets.length > 8 && (
                <div style={{ textAlign: 'center', marginTop: '28px' }}>
                  <button
                    type="button"
                    onClick={() => setActiveTab('datasheets')}
                    className="btn btn-secondary"
                  >
                    <span>Browse All 26 Product Datasheets</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Section 3: Telematics Software & Mobile APKs */}
          {(activeTab === 'all' || activeTab === 'software') && (
            <div style={{ marginBottom: '40px' }}>
              <div style={{ marginBottom: '24px' }}>
                <span className="section-eyebrow">ENTERPRISE TELEMATICS SUITE</span>
                <h2 className="section-title">Fleet Monitoring Software & Mobile APKs</h2>
                <p className="section-subtitle">
                  Provisioning and configuration details for client desktop consoles and Android mobile clients.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#070c18',
                  border: '1px solid #1e293b',
                  borderRadius: '16px',
                  padding: 'clamp(24px, 4vw, 36px)',
                  color: '#ffffff'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
                  <div>
                    <span className="badge badge-blue" style={{ marginBottom: '10px' }}>
                      CLIENT PROVISIONED TELEMATICS
                    </span>
                    <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                      MB Fleet CMS Desktop & Android Driver APK
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>
                      To maintain strict enterprise security and data privacy, 4G Live Video Streaming APKs and Desktop CMS monitoring clients are provisioned directly per commercial fleet account with custom server IP configurations and encrypted access keys.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#cbd5e1' }}>
                        <CheckCircle size={15} color="#38bdf8" />
                        <span>High-Speed Indian Cloud Video Streaming Servers</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#cbd5e1' }}>
                        <CheckCircle size={15} color="#38bdf8" />
                        <span>Dual-lens synchronized live view and GPS route playback</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#38bdf8' }}>
                        <CheckCircle size={15} color="#38bdf8" />
                        <span>Dedicated bilingual depot support & setup assistance</span>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid #334155',
                      borderRadius: '12px',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px'
                    }}
                  >
                    <strong style={{ fontSize: '1rem', color: '#ffffff' }}>
                      Request Software Access / APK Download:
                    </strong>
                    <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                      Contact our technical telemetry desk with your organization details to receive direct APK download links and CMS installation credentials.
                    </p>
                    <button
                      type="button"
                      onClick={() => onOpenOrder && onOpenOrder({ title: 'Software & APK Package Access Request' })}
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <Smartphone size={16} />
                      <span>Request Fleet APK Package</span>
                    </button>
                    <Link
                      to="/contact"
                      className="btn btn-secondary"
                      style={{ width: '100%', justifyContent: 'center', backgroundColor: '#0b1329', color: '#38bdf8', borderColor: '#334155' }}
                    >
                      <span>Contact Technical Support</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
