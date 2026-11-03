import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Play,
  Bus,
  Truck,
  Bike,
  Activity,
  ShieldCheck,
  Award,
  CheckCircle,
  Zap,
  Lock,
  Cable,
  Check,
  FileText,
  Phone,
  Radio,
  Cpu,
  Layers,
  Thermometer,
  Moon,
  ChevronDown,
  PlayCircle
} from 'lucide-react';
import PartnerLogoSlider from '../components/PartnerLogoSlider';
import CertificateLogoSlider from '../components/CertificateLogoSlider';
import VideoShowcaseSlider from '../components/VideoShowcaseSlider';
import siteConfig from '../data/siteConfig';
import productsData from '../data/products.json';

export default function HomePage({ onOpenOrder }) {
  const [activeVideo, setActiveVideo] = useState(0);

  // 6 Flagship Featured Products directly matching the Figma 3x2 grid
  const featuredProducts = [
    productsData.find((p) => p.slug === 'mb-bus-black-box-smart') || productsData[0],
    productsData.find((p) => p.slug === 'mb-black-box-dms') || productsData[1],
    productsData.find((p) => p.slug === 'mb-bike-black-box-smart') || productsData[4],
    productsData.find((p) => p.slug === 'mb-bus-black-box-t4') || productsData[2],
    productsData.find((p) => p.slug === 'memory-storage-devices') || productsData[12] || productsData[3],
    productsData.find((p) => p.slug === '4-pin-aviation-cable') || productsData[15] || productsData[5]
  ];

  return (
    <div className="home-page">
      {/* =========================================================================
          FIGMA HERO SECTION: CINEMATIC COCKPIT & HIGHWAY TELEMATICS
          ========================================================================= */}
      <section className="figma-hero-section">
        <div className="figma-hero-bg" />

        <div className="container">
          <div className="figma-hero-content">
            {/* Top 2025 Fleet & Consumer Series Pill Badge */}
            <div className="hero-top-badge">
              <span className="hero-badge-dot">●</span>
              <span className="hero-badge-title">2025 Fleet & Consumer Series</span>
              <span className="hero-badge-divider">|</span>
              <span className="hero-badge-subtitle">Engineered for Indian Climate</span>
            </div>

            {/* Main Headline */}
            <h1 className="figma-hero-title">
              Intelligent Automotive<br />
              Vision & <span className="highlight-telematics">Telematics</span>
            </h1>

            {/* Subtext Paragraph */}
            <p className="figma-hero-subtext">
              Precision 4K UHD & Dual-Channel Dashcams engineered for Indian road conditions. High-thermal endurance, supercapacitors, and AI road safety.
            </p>

            {/* Action Buttons */}
            <div className="figma-hero-ctas">
              <Link to="/products" className="btn-hero-primary">
                <span>Explore Dashcams</span>
                <ArrowRight size={17} />
              </Link>
              <a href="#video-showcase" className="btn-hero-secondary">
                <PlayCircle size={18} />
                <span>Watch Video Demonstration</span>
              </a>
            </div>

            {/* Bottom 3-Metric Feature Dock */}
            <div className="hero-spec-dock">
              <div className="hero-spec-card">
                <div className="hero-spec-icon-box">
                  <Thermometer size={20} color="#38bdf8" />
                </div>
                <div className="hero-spec-text">
                  <span className="hero-spec-label">HEAT RESISTANCE</span>
                  <strong className="hero-spec-val">Up to 75°C Supercap</strong>
                </div>
              </div>

              <div className="hero-spec-divider" />

              <div className="hero-spec-card">
                <div className="hero-spec-icon-box">
                  <Moon size={20} color="#38bdf8" />
                </div>
                <div className="hero-spec-text">
                  <span className="hero-spec-label">NIGHT SENSOR</span>
                  <strong className="hero-spec-val">Sony STARVIS 2 HDR</strong>
                </div>
              </div>

              <div className="hero-spec-divider" />

              <div className="hero-spec-card">
                <div className="hero-spec-icon-box">
                  <ShieldCheck size={20} color="#38bdf8" />
                </div>
                <div className="hero-spec-text">
                  <span className="hero-spec-label">COMPLIANCE</span>
                  <strong className="hero-spec-val">AIS-140 Certified</strong>
                </div>
              </div>
            </div>

            {/* Discover Scroll Indicator */}
            <a href="#video-showcase" className="hero-discover-scroll" aria-label="Scroll to discover">
              <span className="discover-text">DISCOVER</span>
              <ChevronDown size={14} className="discover-chevron" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FIGMA SECTION 2: REAL-WORLD ROAD TESTING & VIDEO SHOWCASE
          ========================================================================= */}
      <section id="video-showcase" className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow section-eyebrow-dark">FIELD DEMONSTRATION</span>
            <h2 className="section-title section-title-dark">Real-World Road Testing & Video Showcase</h2>
            <p className="section-subtitle section-subtitle-dark" style={{ margin: '0 auto' }}>
              Verified highway performance under monsoon rain, low light, and high vibration on heavy commercial transit routes.
            </p>
          </div>

          {/* Clean Video Showcase Slider with Left and Right Controls */}
          <VideoShowcaseSlider />
        </div>
      </section>

      {/* =========================================================================
          FIGMA SECTION 3: ENGINEERED FOR EVERY VEHICLE CATEGORY
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">APPLICATION SCOPE</span>
            <h2 className="section-title">Engineered for Every Vehicle Category</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Specialized hardware configurations engineered for commercial transit, heavy logistics, and institutional fleets.
            </p>
          </div>

          <div className="grid-4">
            {/* Category 1 */}
            <div className="vehicle-cat-card">
              <div className="vehicle-cat-icon">
                <Bus size={24} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Commercial Buses & Coaches
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.55, marginBottom: '16px' }}>
                Dual-channel black boxes, tamper-proof SD card locks, in-cabin passenger surveillance, and wide DC 9V–36V power protection.
              </p>
              <Link to="/products/bus" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: '#0284c7', fontWeight: 700 }}>
                <span>Explore Buses</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Category 2 */}
            <div className="vehicle-cat-card">
              <div className="vehicle-cat-icon">
                <Truck size={24} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Heavy Freight & Trucks
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.55, marginBottom: '16px' }}>
                Blind-spot ultrasonic radar, 4G real-time GPS telemetry, reversing assistance, and multi-channel MDVR storage.
              </p>
              <Link to="/products/sensors" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: '#0284c7', fontWeight: 700 }}>
                <span>Explore Trucks</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Category 3 */}
            <div className="vehicle-cat-card">
              <div className="vehicle-cat-icon">
                <Bike size={24} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Motorcycles & Delivery Fleets
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.55, marginBottom: '16px' }}>
                All-weather IP67 waterproof dual camera modules, vibration-damped mounts, and automatic ignition loop start.
              </p>
              <Link to="/products/bike" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: '#0284c7', fontWeight: 700 }}>
                <span>Explore 2-Wheelers</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Category 4 */}
            <div className="vehicle-cat-card">
              <div className="vehicle-cat-icon">
                <Activity size={24} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                ADAS & Fleet Telematics
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.55, marginBottom: '16px' }}>
                Driver monitoring DMS fatigue camera, forward collision warning (FCW), lane departure drift alerts, and cloud video playback.
              </p>
              <Link to="/products/dms-adas" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: '#0284c7', fontWeight: 700 }}>
                <span>Explore AI Systems</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FIGMA SECTION 4: FEATURED AUTOMOTIVE EQUIPMENT (3x2 GRID)
          ========================================================================= */}
      <section className="section section-subtle">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="section-eyebrow">FLAGSHIP PORTFOLIO</span>
              <h2 className="section-title" style={{ margin: 0 }}>Featured Automotive Equipment</h2>
            </div>
            <Link to="/products" className="btn btn-secondary">
              <span>View Full Catalog (26 Products)</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="figma-product-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="figma-product-card">
                <div className="figma-product-media">
                  <img src={product.image || product.thumbnail} alt={product.title} loading="lazy" />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="badge badge-blue" style={{ fontSize: '0.6875rem' }}>
                    {product.category}
                  </span>
                  <span className="badge badge-slate" style={{ fontSize: '0.6875rem' }}>
                    9V–36V DC
                  </span>
                </div>

                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  <Link to={`/product/${product.slug}`} style={{ color: '#0f172a' }}>
                    {product.title}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5, marginBottom: '16px', flexGrow: 1 }}>
                  {product.shortDescription || product.fullDescription}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                  <Link to={`/product/${product.slug}`} className="btn btn-secondary btn-sm" style={{ width: '100%', fontSize: '0.75rem' }}>
                    View Specs
                  </Link>
                  <button onClick={() => onOpenOrder && onOpenOrder(product)} className="btn btn-primary btn-sm" style={{ width: '100%', fontSize: '0.75rem' }}>
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FIGMA SECTION 5: PILLARS OF AUTOMOTIVE RESILIENCE
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">HARDWARE RELIABILITY</span>
            <h2 className="section-title">Pillars of Automotive Resilience</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Built from component-level up to survive the physical realities of Indian commercial road transport.
            </p>
          </div>

          <div className="grid-4">
            <div className="resilience-card">
              <div className="resilience-icon">
                <Zap size={22} />
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Dual Supercapacitor Power
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.55 }}>
                Replaces volatile lithium batteries. Supercapacitors operate reliably up to 75°C under direct windshield sunlight with zero swell or fire hazard.
              </p>
            </div>

            <div className="resilience-card">
              <div className="resilience-icon">
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                DC 9V–36V Voltage Clamping
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.55 }}>
                Built-in industrial transient suppression clamps overvoltage safely during starter turnover on heavy 24V diesel commercial alternators.
              </p>
            </div>

            <div className="resilience-card">
              <div className="resilience-icon">
                <Lock size={22} />
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Lockable Tamper Enclosure
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.55 }}>
                Heavy mechanical key locks prevent unauthorized removal of SD cards, SIM cards, or power harnesses by unauthorized drivers.
              </p>
            </div>

            <div className="resilience-card">
              <div className="resilience-icon">
                <Cable size={22} />
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Threaded Aviation Connections
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.55 }}>
                GX12 screw-lock metal couplings eliminate connection dropouts and signal flickering on rough rural road vibration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FIGMA SECTION 6: TELEMATICS & OPTICAL INTELLIGENCE
          ========================================================================= */}
      <section className="section section-subtle">
        <div className="container">
          <div className="home-telematics-grid">
            <div>
              <span className="section-eyebrow">DOMESTIC TELEMATICS LEADER</span>
              <h2 className="section-title">
                Pioneering Full-Vehicle Surveillance & Optical Intelligence in India
              </h2>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px' }}>
                MB Automotives India (A Unit of Metro Basket) designs and manufactures dedicated commercial telematics hardware with statutory MSME recognition and ISO 9001:2015 quality control.
              </p>

              <div className="home-stats-grid">
                <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '1.625rem', fontWeight: 800, color: '#0284c7' }} data-count="10000" data-suffix="+">
                    10,000+
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Active Vehicles</div>
                </div>

                <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '1.625rem', fontWeight: 800, color: '#0284c7' }} data-count="99.8" data-suffix="%">
                    99.8%
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Hardware Uptime</div>
                </div>

                <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '1.625rem', fontWeight: 800, color: '#0284c7' }}>
                    24/7
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Depot Support</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-primary">
                  <span>About MB Automotives</span>
                  <ArrowRight size={15} />
                </Link>
                <Link to="/certificates" className="btn btn-secondary">
                  <span>View Certifications</span>
                </Link>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Manufacturing & Regional Operations
              </h4>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle size={18} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ fontSize: '0.875rem', color: '#0f172a', display: 'block' }}>Headquarters & Registered Facility:</strong>
                  <span style={{ fontSize: '0.8125rem', color: '#64748b' }}>14/145, Niton Estate, Club Road, Kotagiri, Tamil Nadu - 643217</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle size={18} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ fontSize: '0.875rem', color: '#0f172a', display: 'block' }}>Regional Operations Base:</strong>
                  <span style={{ fontSize: '0.8125rem', color: '#64748b' }}>Industrial Corridor, Guindy, Chennai, Tamil Nadu - 600032</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle size={18} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ fontSize: '0.875rem', color: '#0f172a', display: 'block' }}>Direct Fleet Hotline:</strong>
                  <span style={{ fontSize: '0.8125rem', color: '#64748b' }}>+91-8489880444 / +91-8220955966 (Mon–Sat 9AM–7PM)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FIGMA SECTION 7: CERTIFICATES & OEM PARTNERS
          ========================================================================= */}
      <CertificateLogoSlider />
      <PartnerLogoSlider />

      {/* =========================================================================
          FIGMA SECTION 8: EQUIP YOUR FLEET CTA BANNER
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingBottom: '96px' }}>
        <div className="container">
          <div className="figma-cta-banner">
            <div>
              <span className="section-eyebrow section-eyebrow-dark">B2B FLEET PROCUREMENT</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '14px', lineHeight: 1.15 }}>
                Equip Your Fleet with Verified Automotive Vision
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px', maxWidth: '580px' }}>
                Connect directly with our engineering division for custom wiring harnesses, wholesale dealer pricing, and on-site depot installation support.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <Phone size={16} />
                  <span>Speak to Fleet Engineer</span>
                </Link>
                <a href="/assets/docs/MB-Catalogue.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
                  <FileText size={16} />
                  <span>Download Product Catalog (PDF)</span>
                </a>
              </div>
            </div>

            {/* Quick Consultation Form Box */}
            <div className="figma-cta-form-box">
              <h4 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                Request Fleet Consultation
              </h4>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', marginBottom: '16px' }}>
                Receive customized quotation within 24 hours.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); if (onOpenOrder) onOpenOrder(); }} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input type="text" placeholder="Your Name" required className="input-field" style={{ height: '38px', fontSize: '0.8125rem' }} />
                <input type="tel" placeholder="Phone Number" required className="input-field" style={{ height: '38px', fontSize: '0.8125rem' }} />
                <select className="input-field" style={{ height: '38px', fontSize: '0.8125rem' }}>
                  <option>Fleet Size: 1-10 Vehicles</option>
                  <option>Fleet Size: 11-50 Vehicles</option>
                  <option>Fleet Size: 50+ Vehicles</option>
                </select>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '40px', fontWeight: 700 }}>
                  Get Official Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
