import React from 'react';
import { Award, ShieldCheck, CheckCircle, Zap } from 'lucide-react';
import CertificateLogoSlider from '../components/CertificateLogoSlider';

export default function CertificatesPage({ onOpenOrder }) {
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
            Accredited by the Government of India, ISO 9001:2015 Quality Standards, and BIS Automotive Safety frameworks for commercial vehicle hardware.
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

      {/* Auto-Scroll Moving Logos Slideshow (Matching User Design) */}
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
    </div>
  );
}
