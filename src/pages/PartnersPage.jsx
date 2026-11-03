import React, { useState } from 'react';
import { Building, CheckCircle, Handshake, Truck, Bus, ArrowRight, ShieldCheck, Award, Cpu, Radio, Video, Navigation, Check } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function PartnersPage({ onOpenOrder }) {
  const [partnerFormSubmitted, setPartnerFormSubmitted] = useState(false);

  return (
    <div className="partners-page">
      {/* Figma Page 4 Banner */}
      <section
        style={{
          backgroundColor: '#070a12',
          color: '#ffffff',
          padding: '60px 0 44px 0',
          borderBottom: '1px solid #1e293b'
        }}
      >
        <div className="container">
          <span className="section-eyebrow section-eyebrow-dark">STRATEGIC ALLIANCES & OEM INTEGRATIONS</span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            OEM Integration, Fleet Operators & Pan-India Channel Partners
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '760px', lineHeight: 1.6 }}>
            Collaborating with commercial coach body builders, state transport corporations, and logistics enterprise fleets to integrate certified dashcam and telemetry hardware directly into vehicle builds.
          </p>
        </div>
      </section>

      {/* KPI Metrics Row */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '24px 0' }}>
        <div className="container">
          <div className="grid-3">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <Bus size={32} color="#0284c7" />
              <div>
                <strong style={{ fontSize: '1.25rem', color: '#0f172a', display: 'block', fontWeight: 800 }}>1,500+ Luxury Coaches</strong>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Equipped at Body Builder Factories</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <Building size={32} color="#0284c7" />
              <div>
                <strong style={{ fontSize: '1.25rem', color: '#0f172a', display: 'block', fontWeight: 800 }}>35+ Depot Fitting Locations</strong>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Pan-India Field Engineering Support</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <ShieldCheck size={32} color="#0284c7" />
              <div>
                <strong style={{ fontSize: '1.25rem', color: '#0f172a', display: 'block', fontWeight: 800 }}>99.8% Hardware Reliability</strong>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Tested Across Indian Highways</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured OEM Integration Card (Figma Page 4) */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="partner-feature-grid">
            <div>
              <span className="section-eyebrow">FACTORY ASSEMBLY INTEGRATION</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.25rem)', fontWeight: 800, color: '#0f172a', marginBottom: '14px', lineHeight: 1.2 }}>
                Assembly-Line Dashcam Fitment for Commercial Coach Builders
              </h2>
              <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '20px' }}>
                We partner directly with leading commercial vehicle body builders (including Veera Vahana, SSC Bus Systems, and interstate coach builders) to integrate concealed wiring harnesses, tamper-proof windshield mounts, and dual road/cabin lenses before vehicle delivery.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#334155' }}>
                  <Check size={16} color="#0284c7" />
                  <span>Direct OEM wire harness tie-in to vehicle fuse box with transient suppression</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#334155' }}>
                  <Check size={16} color="#0284c7" />
                  <span>Key-locked tamper-proof SD card protection preventing driver unauthorized removal</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#0284c7' }}>
                  <Check size={16} color="#0284c7" />
                  <span>On-site depot technician training and installation certification provided</span>
                </div>
              </div>

              <button onClick={() => onOpenOrder && onOpenOrder()} className="btn btn-primary">
                <span>Inquire for OEM Factory Supply</span>
                <ArrowRight size={15} />
              </button>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #cbd5e1', boxShadow: 'var(--shadow-md)' }}>
              <img src="/assets/branding/about-hero-image.png" alt="Commercial Coach Assembly Integration" loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>

          {/* Partner Ecosystem Categorized (Figma Page 4) */}
          <div style={{ marginBottom: '64px' }}>
            <div className="section-header">
              <span className="section-eyebrow">PAN-INDIA NETWORK</span>
              <h2 className="section-title">Commercial Partner Ecosystem</h2>
              <p className="section-subtitle">
                Active commercial collaborations across bus body builders, state route contractors, and national transport logistics.
              </p>
            </div>

            <div className="grid-4">
              <div className="card" style={{ padding: '24px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Bus size={22} />
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  Coach & Bus Builders
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.55 }}>
                  Factory integration partners including Veera Vahana, SSC Bus Systems, and interstate coach body builders.
                </p>
              </div>

              <div className="card" style={{ padding: '24px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Truck size={22} />
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  Interstate Freight & Trucks
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.55 }}>
                  Heavy highway transport operators equipped with ultrasonic blind spot proximity radar and 4G GPS tracking.
                </p>
              </div>

              <div className="card" style={{ padding: '24px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <ShieldCheck size={22} />
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  Institutional & School Fleets
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.55 }}>
                  School and college bus operators utilizing dual in-cabin cameras and AI DMS driver fatigue voice alert systems.
                </p>
              </div>

              <div className="card" style={{ padding: '24px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Radio size={22} />
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  Telematics Telemetry Resellers
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.55 }}>
                  Regional automotive safety dealers and GPS software companies integrating MB Automotives hardware devices.
                </p>
              </div>
            </div>
          </div>

          {/* Hardware-to-Cloud Telematics Architecture (Figma Page 4 Section) */}
          <div style={{ marginBottom: '64px' }}>
            <div className="section-header text-center">
              <span className="section-eyebrow">SYSTEM ARCHITECTURE</span>
              <h2 className="section-title">Hardware-to-Cloud Telematics Architecture</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Seamless end-to-end telemetry from vehicle cockpit sensors to central fleet management software.
              </p>
            </div>

            <div className="grid-4">
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px' }}>
                <span className="section-eyebrow" style={{ fontSize: '0.6875rem' }}>LAYER 01</span>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Optical Sensors</h4>
                <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5 }}>
                  Forward 1080P Starlight road lens, driver-facing infrared DMS camera, and IP68 ultrasonic radar.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px' }}>
                <span className="section-eyebrow" style={{ fontSize: '0.6875rem' }}>LAYER 02</span>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Power Clamping</h4>
                <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5 }}>
                  Wide DC 9V–36V surge suppression, supercapacitor power isolation, and ACC ignition sensing.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px' }}>
                <span className="section-eyebrow" style={{ fontSize: '0.6875rem' }}>LAYER 03</span>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Edge AI & GPS</h4>
                <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5 }}>
                  Real-time facial fatigue inference, speed logging, geofencing boundary alerts, and 3-axis G-sensor shock triggers.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px' }}>
                <span className="section-eyebrow" style={{ fontSize: '0.6875rem' }}>LAYER 04</span>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>CMS Cloud Client</h4>
                <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5 }}>
                  Live multi-camera streaming via CMS V7 / iCSee Pro with automated emergency incident clip downloads.
                </p>
              </div>
            </div>
          </div>

          {/* Join Dealer Network Form (Figma Page 4 Bottom) */}
          <div className="figma-cta-banner">
            <div>
              <span className="section-eyebrow section-eyebrow-dark">DEALERSHIP APPLICATION</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px', lineHeight: 1.2 }}>
                Join the MB Automotives Certified Dealer & Installer Network
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: 1.55, maxWidth: '580px' }}>
                Become an authorized regional distributor or certified depot installer. Access wholesale margin pricing, direct factory warranty swaps, and marketing collateral.
              </p>
            </div>

            <div className="figma-cta-form-box">
              {partnerFormSubmitted ? (
                <div style={{ textAlign: 'center', padding: '16px 0' }}>
                  <CheckCircle size={36} color="#10b981" style={{ margin: '0 auto 10px auto' }} />
                  <h4 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0f172a' }}>Application Received</h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Our commercial director will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setPartnerFormSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Apply for Dealership</h4>
                  <input type="text" placeholder="Dealership / Business Name" required className="input-field" style={{ height: '36px', fontSize: '0.8125rem' }} />
                  <input type="tel" placeholder="Phone Number" required className="input-field" style={{ height: '36px', fontSize: '0.8125rem' }} />
                  <input type="text" placeholder="State / Operating Region" required className="input-field" style={{ height: '36px', fontSize: '0.8125rem' }} />
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '38px', fontWeight: 700, fontSize: '0.8125rem' }}>
                    Submit Dealer Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
