import React from 'react';
import { Link } from 'react-router-dom';
import {
  Bus,
  Truck,
  Bike,
  Car,
  Activity,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  ShoppingBag,
  FileText,
  Zap,
  Lock,
  Cable
} from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function ApplicationsPage({ onOpenOrder }) {
  const applicationCategories = [
    {
      id: 'school-buses',
      title: 'School & Institutional Buses',
      tagline: 'Student Safety & Cabin Oversight',
      icon: Bus,
      image: '/assets/products/mb-bus-black-box-smart-gallery-1.jpg',
      badge: 'CHILD SAFETY PRIORITY',
      challenges: [
        'Lack of real-time visibility into student boarding, seating, and disembarkation.',
        'High risk of unmonitored driver speeding or route deviations.',
        'Need for tamper-proof storage preventing unauthorized video deletion.'
      ],
      solution:
        'Dual-camera synchronized recording system with wide-angle passenger cabin surveillance, forward roadway documentation, emergency SOS panic button, and 4G GPS live fleet telemetry.',
      recommendedProducts: [
        { name: 'MB Bus Black Box Smart (Dual 1080P)', slug: 'mb-bus-black-box-smart' },
        { name: 'Lockable Tamper-Proof SD Card Enclosure', slug: 'mb-accessories' },
        { name: '10m Threaded GX12 Aviation Cable', slug: 'aviation-cable-10m' }
      ]
    },
    {
      id: 'public-transport',
      title: 'Public Transport & State Buses',
      tagline: '18-Hour Continuous High-Transit Duty',
      icon: Bus,
      image: '/assets/products/mb-bus-black-box-t4-gallery-1.png',
      badge: 'HEAVY TRANSIT ENDURANCE',
      challenges: [
        'Prolonged duty cycles on rough state highway corridors causing camera mount vibration looseness.',
        'Heavy diesel alternator starter surges up to 36V damaging consumer-grade electronics.',
        'High summer windshield solar heat exceeding 65°C causing lithium battery swelling.'
      ],
      solution:
        'Industrial dual supercapacitor commercial black box with DC 9V–36V dynamic voltage clamping, threaded GX12 screw-lock aviation couplings, and key-locked access.',
      recommendedProducts: [
        { name: 'MB Bus Black Box T4 System', slug: 'mb-bus-black-box-t4' },
        { name: 'AHD 1080P Waterproof Exterior Cameras', slug: 'ahd-1080p-vehicle-cameras' },
        { name: 'High-Endurance 128GB Flash Storage', slug: 'high-speed-memory-card-128gb' }
      ]
    },
    {
      id: 'trucks-logistics',
      title: 'Heavy Freight Trucks & Logistics Fleets',
      tagline: 'Blind Spot Elimination & Cargo Security',
      icon: Truck,
      image: '/assets/products/bus-and-truck-parking-sensors-thumb.jpg',
      badge: 'LOGISTICS & TRAILER FLEET',
      challenges: [
        'Dangerous blind spots on massive 14-wheeler articulated trailers during lane merges.',
        'Driver fatigue, drowsiness, and distraction during overnight intercity freight transit.',
        'Reversing accidents at unlit warehouse cargo loading bays.'
      ],
      solution:
        'Comprehensive multi-channel recording with ultrasonic proximity radar, IP68 heavy-duty reverse sensors, and real-time AI DMS fatigue detection cameras.',
      recommendedProducts: [
        { name: 'Bus and Truck Parking Sensors (Heavy Duty)', slug: 'bus-and-truck-parking-sensors' },
        { name: 'MB Driver Monitoring System (DMS)', slug: 'mb-black-box-dms' },
        { name: '15m Aviation Extension Harness', slug: 'aviation-cable-15m' }
      ]
    },
    {
      id: 'driver-monitoring',
      title: 'AI Driver Monitoring & ADAS Safety',
      tagline: 'Edge Neural Vision Incident Prevention',
      icon: Activity,
      image: '/assets/products/mb-dms-driver-monitoring-system-gallery-1.jpg',
      badge: 'NEURAL COMPUTER VISION',
      challenges: [
        'Highway road accidents caused by micro-sleep, eye closure, yawning, and phone distraction.',
        'Unintentional lane drift on unlit national highways during night shifts.',
        'Lack of real-time audible warnings inside the driver cabin.'
      ],
      solution:
        'On-device neural computer vision DMS camera tracking driver eye blinks, facial orientation, and yawning, coupled with forward-facing ADAS lane departure and collision alerts.',
      recommendedProducts: [
        { name: 'MB DMS Driver Monitoring System', slug: 'mb-black-box-dms' },
        { name: 'ADAS Forward Safety Camera Module', slug: 'adas-cameras' },
        { name: 'In-Cabin Spoken Voice Speaker Unit', slug: 'dms-and-adas-speaker-with-aviation-cable' }
      ]
    },
    {
      id: 'passenger-cars',
      title: 'Passenger Cars & Commercial Taxis',
      tagline: 'Compact 4K UHD Incident Protection',
      icon: Car,
      image: '/assets/products/mb-car-dash-z1-thumb.png',
      badge: 'COMMERCIAL TAXI & CONSUMER',
      challenges: [
        'Fraudulent hit-and-run claims, staged accidents, and vandalism while parked.',
        'Severe windshield heat under Indian summer sunlight compromising lithium batteries.',
        'Difficult video retrieval during insurance claims and police reporting.'
      ],
      solution:
        'Aerodynamic windshield 4K UHD dashcams featuring Sony STARVIS 2 low-light sensors, supercapacitors up to 75°C, emergency G-Sensor accident lock, and mobile WiFi app playback.',
      recommendedProducts: [
        { name: 'MB Car Dash Z1 (4K Single/Dual)', slug: 'mb-car-dash-z1' },
        { name: 'MB Car Black Box C2', slug: 'mb-car-black-box-c2' },
        { name: 'High-Speed Endurance 64GB Card', slug: 'high-speed-memory-card-64gb' }
      ]
    },
    {
      id: 'two-wheelers',
      title: 'Motorcycles & Two-Wheeler Delivery',
      tagline: 'All-Weather IP67 Weatherproof Dual Cam',
      icon: Bike,
      image: '/assets/products/mb-bike-black-box-b1-thumb.png',
      badge: 'DELIVERY & COMMUTER FLEET',
      challenges: [
        'Extreme exposure to monsoon rain, road dust, and severe chassis vibration.',
        'Battery drain from un-isolated electrical wiring.',
        'Lack of video evidence for two-wheeler delivery riders during traffic disputes.'
      ],
      solution:
        'IP67 fully waterproof front and rear cameras with vibration-damped bracket mounts, ignition-switched automatic loop recording, and supercapacitor backup.',
      recommendedProducts: [
        { name: 'MB Bike Black Box B1 Dual Cam', slug: 'bike-black-box-b1' },
        { name: 'MB Bike Black Box Smart (Full HD)', slug: 'mb-bike-black-box-smart' }
      ]
    }
  ];

  return (
    <div className="applications-page">
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
          <span className="section-eyebrow section-eyebrow-dark">COMMERCIAL APPLICATION SCOPE</span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Specialized Hardware for Every Fleet Category
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '760px', margin: '0 auto', lineHeight: 1.6 }}>
            MB Automotives India designs application-specific surveillance systems tailored for school buses, interstate passenger coaches, heavy logistics trailers, commercial taxis, and two-wheeler fleets.
          </p>
        </div>
      </section>

      {/* Main Applications List */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {applicationCategories.map((app, idx) => {
              const IconComp = app.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={app.id}
                  id={app.id}
                  className="application-detail-card"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'grid',
                    gridTemplateColumns: isEven ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                    alignItems: 'center'
                  }}
                >
                  {/* Content Column */}
                  <div
                    style={{
                      padding: 'clamp(24px, 4vw, 40px)',
                      order: isEven ? 1 : 2
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <span className="badge badge-blue">{app.badge}</span>
                      <span style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 600 }}>
                        {app.tagline}
                      </span>
                    </div>

                    <h2 style={{ fontSize: 'clamp(1.5rem, 2.4vw, 1.875rem)', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
                      {app.title}
                    </h2>

                    {/* Challenges List */}
                    <div style={{ marginBottom: '18px' }}>
                      <strong style={{ fontSize: '0.8125rem', textTransform: 'uppercase', color: '#dc2626', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
                        Operational Challenges:
                      </strong>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.84375rem', color: '#64748b' }}>
                        {app.challenges.map((c, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                            <span style={{ color: '#ef4444', fontWeight: 800 }}>•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution Paragraph */}
                    <div style={{ marginBottom: '22px', backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '10px', padding: '14px 16px' }}>
                      <strong style={{ fontSize: '0.8125rem', textTransform: 'uppercase', color: '#0369a1', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
                        MB Engineered Solution:
                      </strong>
                      <p style={{ fontSize: '0.875rem', color: '#0f172a', lineHeight: 1.5, margin: 0 }}>
                        {app.solution}
                      </p>
                    </div>

                    {/* Recommended Products */}
                    <div style={{ marginBottom: '24px' }}>
                      <strong style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                        Recommended Hardware Architecture:
                      </strong>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {app.recommendedProducts.map((p, i) => (
                          <Link
                            key={i}
                            to={`/product/${p.slug}`}
                            className="badge badge-slate"
                            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                          >
                            <span>{p.name}</span>
                            <ArrowRight size={11} />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        onClick={() => onOpenOrder && onOpenOrder({ title: app.title })}
                        className="btn btn-primary btn-sm"
                      >
                        <ShoppingBag size={14} />
                        <span>Request Application Quote</span>
                      </button>
                      <Link to="/products" className="btn btn-secondary btn-sm">
                        <span>Browse Related Products</span>
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    style={{
                      height: '100%',
                      minHeight: '320px',
                      backgroundColor: '#070c18',
                      order: isEven ? 2 : 1,
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src={app.image}
                      alt={app.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        maxHeight: '440px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Consultation Banner */}
      <section className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="figma-cta-banner">
            <div>
              <span className="section-eyebrow section-eyebrow-dark">CUSTOM FLEET ARCHITECTURE</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                Require a Custom Fleet Configuration?
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: 1.6, maxWidth: '580px', margin: 0 }}>
                Our automotive engineering team provides on-site vehicle audits, custom wire harness fabrication, and depot technician training across India.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenOrder && onOpenOrder({ title: 'Custom Fleet Engineering' })}
              className="btn btn-primary btn-lg"
              style={{ flexShrink: 0 }}
            >
              <ShoppingBag size={16} />
              <span>Consult an Automotive Engineer</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
