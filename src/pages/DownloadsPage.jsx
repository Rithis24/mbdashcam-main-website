import React, { useState } from 'react';
import { Download, FileText, Smartphone, Monitor, Navigation, Camera, Truck, ExternalLink } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function DownloadsPage({ onOpenOrder }) {
  const [activeTab, setActiveTab] = useState('all');

  const appIcons = {
    navigation: Navigation,
    camera: Camera,
    truck: Truck,
    monitor: Monitor
  };

  return (
    <div className="downloads-page">
      {/* Banner */}
      <section
        style={{
          backgroundColor: '#070a12',
          color: '#ffffff',
          padding: '56px 0',
          borderBottom: '1px solid #1e293b'
        }}
      >
        <div className="container">
          <div className="section-eyebrow section-eyebrow-dark">RESOURCES & SOFTWARE</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Catalogues, Drivers & Fleet Telematics APKs
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '720px', lineHeight: 1.6 }}>
            Download verified hardware specification sheets, printable commercial catalogues, Android APKs, and CMS desktop monitoring clients.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          {/* Subcategory 1: Printable Brochures & Catalogues */}
          <div style={{ marginBottom: '64px' }}>
            <div style={{ marginBottom: '24px' }}>
              <span className="section-eyebrow">PRINTABLE PDF BROCHURES</span>
              <h2 className="section-title">
                Hardware Specifications & Corporate Booklets
              </h2>
            </div>

            <div className="grid-2">
              {/* Card 1: Master Catalogue */}
              <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '10px',
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
                  <div>
                    <span className="badge badge-blue" style={{ marginBottom: '6px' }}>
                      PDF DOCUMENT • OFFICIAL
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                      MB Automotives Master Product Catalogue
                    </h3>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      Comprehensive guide covering all commercial dashcams, dual-lens black boxes, radar sensors, and aviation cables.
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    marginBottom: '20px',
                    fontSize: '0.8125rem',
                    color: '#475569'
                  }}
                >
                  Includes pinout wiring diagrams, electrical voltage ratings, and camera field-of-view specifications.
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <a
                    href="/assets/docs/MB-Catalogue.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <Download size={16} />
                    <span>Download Master Catalogue (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Corporate Booklet */}
              <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '10px',
                      backgroundColor: '#fef3c7',
                      color: '#b45309',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <FileText size={28} />
                  </div>
                  <div>
                    <span className="badge badge-amber" style={{ marginBottom: '6px' }}>
                      COMPANY PROFILE • PDF
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                      MB Automotives India Corporate Profile Booklet
                    </h3>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      Corporate background, manufacturing infrastructure in Tamil Nadu, and government certifications.
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    marginBottom: '20px',
                    fontSize: '0.8125rem',
                    color: '#475569'
                  }}
                >
                  Features client case studies, depot installation guidelines, and statutory MSME Udyam documentation.
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <a
                    href="/assets/docs/MB-Automotives-India-Booklet.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ width: '100%' }}
                  >
                    <Download size={16} />
                    <span>Download Corporate Booklet (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Subcategory 2: Telematics Software & Applications */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="section-eyebrow">FLEET TELEMATICS SUITE</span>
              <h2 className="section-title">
                Mobile Monitoring APKs & Desktop Clients
              </h2>
              <p className="section-subtitle">
                Official client applications enabling live dual-lens camera streaming, GPS playback history, and centralized fleet management.
              </p>
            </div>

            <div className="grid-2">
              {siteConfig.applications.map((app) => {
                const IconComp = appIcons[app.iconType] || Smartphone;
                return (
                  <div key={app.id} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '10px',
                          backgroundColor: '#f0f9ff',
                          color: '#0284c7',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <IconComp size={26} />
                      </div>
                      <div>
                        <span className="badge badge-blue" style={{ marginBottom: '6px' }}>
                          {app.fileType}
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                          {app.name}
                        </h3>
                        <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                          {app.category}
                        </div>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55, marginBottom: '20px' }}>
                      {app.desc}
                    </p>

                    <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                      <a
                        href={app.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ flex: 1 }}
                      >
                        <Download size={16} />
                        <span>Download {app.fileType.includes('APK') ? 'APK Package' : 'Client Setup'}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
