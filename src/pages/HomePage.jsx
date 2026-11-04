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
  Car,
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
  PlayCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  HardDrive,
  Wrench
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import PartnerLogoSlider from '../components/PartnerLogoSlider';
import CertificateLogoSlider from '../components/CertificateLogoSlider';
import VideoShowcaseSlider from '../components/VideoShowcaseSlider';
import siteConfig from '../data/siteConfig';
import productsData from '../data/products.json';

export default function HomePage({ onOpenOrder }) {
  // Tabs for: "Trending Now Box with 3D Images, New Launch the same, Upcoming Products also Same"
  const [activeShowcaseTab, setActiveShowcaseTab] = useState('trending'); // 'trending' | 'new-launch' | 'upcoming'

  // Reviews carousel state
  const [reviewIdx, setReviewIdx] = useState(0);
  const reviews = siteConfig.testimonials || [];

  const handlePrevReview = () => {
    setReviewIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setReviewIdx((prev) => (prev + 1) % reviews.length);
  };

  // 1. Trending Now Products
  const trendingProducts = [
    {
      id: 'trend-1',
      title: 'MB Bus Black Box Smart',
      category: 'Bus & Commercial Dashcams',
      badge: 'TOP TRENDING 2025',
      badgeColor: '#0284c7',
      image: '/assets/products/mb-bus-black-box-smart-thumb.png',
      slug: 'mb-bus-black-box-smart',
      specs: ['Dual 1080P Road & Cabin Sync', 'DC 9V–36V Clamped Voltage', 'Dual Supercapacitors (-20°C to +75°C)', 'Lockable Anti-Tamper SD Bay'],
      desc: 'Industry benchmark dual-lens transit camera synchronized for commercial passenger coaches and interstate bus fleets.'
    },
    {
      id: 'trend-2',
      title: 'MB Black Box DMS (Driver Monitoring)',
      category: 'Driver Monitoring & ADAS',
      badge: 'NEURAL AI VISION',
      badgeColor: '#00b4d8',
      image: '/assets/products/mb-dms-driver-monitoring-system-thumb.png',
      slug: 'mb-black-box-dms',
      specs: ['Infrared 940nm Night Eye Tracking', 'Drowsiness & Micro-Sleep Alarm', 'Mobile Phone Distraction Alert', 'In-Cabin Spoken Voice Speaker'],
      desc: 'Edge neural computer vision detecting fatigue, yawning, and distractions in pitch-dark night cabins.'
    },
    {
      id: 'trend-3',
      title: 'MB Car Dash Z1 4K UHD',
      category: 'Car & Light Vehicle Dashcams',
      badge: '4K SONY STARVIS 2',
      badgeColor: '#10b981',
      image: '/assets/products/mb-car-dash-z1-thumb.png',
      slug: 'mb-car-dash-z1',
      specs: ['4K UHD Low-Light Optical Sensor', 'Emergency G-Sensor File Lock', 'Supercapacitor Heat Endurance', 'Mobile WiFi Instant Clip Export'],
      desc: 'Aerodynamic windshield dashcam engineered for high thermal resilience without volatile lithium batteries.'
    }
  ];

  // 2. New Launches
  const newLaunchProducts = [
    {
      id: 'launch-1',
      title: 'MB Bus Black Box T4 System',
      category: 'Bus & Multi-Channel MDVR',
      badge: 'NEW 2025 LAUNCH',
      badgeColor: '#ef4444',
      image: '/assets/products/mb-bus-black-box-t4-thumb.png',
      slug: 'mb-bus-black-box-t4',
      specs: ['4-Channel Synchronized Video', 'GX12 Threaded Aviation Couplings', 'Heavy Metal Vibration-Damped Enclosure', 'Panic NC GPIO Emergency Output'],
      desc: 'Heavy-duty 4-channel vehicle recording hub engineered for heavy freight trailers and city transit buses.'
    },
    {
      id: 'launch-2',
      title: 'AHD 1080P Vehicle Cameras',
      category: 'Accessories & Exterior Optics',
      badge: 'IP68 WEATHERPROOF',
      badgeColor: '#38bdf8',
      image: '/assets/products/ahd-1080p-vehicle-cameras-thumb.jpg',
      slug: 'ahd-1080p-vehicle-cameras',
      specs: ['Full HD 1080P Metal Housing', 'IP68 Immersion & Wash Proof', 'Starlight Night Headlight Glare Shield', 'Wide 140° Optical Field of View'],
      desc: 'Rugged exterior side and reverse cameras built to endure harsh monsoons, road grit, and power washers.'
    },
    {
      id: 'launch-3',
      title: 'Bus and Truck Parking Sensors',
      category: 'Vehicle Sensors & Radar',
      badge: 'COMMERCIAL RADAR',
      badgeColor: '#f59e0b',
      image: '/assets/products/bus-and-truck-parking-sensors-thumb.jpg',
      slug: 'bus-and-truck-parking-sensors',
      specs: ['Heavy-Duty Ultrasonic Transducers', '0.3m to 2.5m Precision Detection', 'In-Cabin Graduated Buzzer Warning', 'DC 12V–36V Commercial Feed'],
      desc: 'Eliminates dangerous trailer rear blind spots during warehouse cargo dock reversing maneuvers.'
    }
  ];

  // 3. Upcoming Products
  const upcomingProducts = [
    {
      id: 'upcoming-1',
      title: 'MB AIS-140 NavIC Telematics Hub',
      category: 'Next-Gen Intelligent Telematics',
      badge: 'COMING SOON • Q2 2025',
      badgeColor: '#8b5cf6',
      image: '/assets/products/mb-accessories-thumb.png',
      slug: 'mb-accessories',
      specs: ['Govt. NavIC / IRNSS Satellite Receiver', 'Dual 4G M2M eSIM Cloud Sync', '8-Channel AI MDVR Architecture', 'Up to 2TB Shock-Isolated SSD Storage'],
      desc: 'Next-generation intelligent vehicle surveillance gateway meeting IS 16833:2018 national fleet standards.'
    },
    {
      id: 'upcoming-2',
      title: 'MB Bike Black Box Smart Dual 4K',
      category: 'Motorcycle & Delivery Fleets',
      badge: 'NEXT-GEN HARDWARE',
      badgeColor: '#ec4899',
      image: '/assets/products/mb-bike-black-box-smart-thumb.png',
      slug: 'mb-bike-black-box-smart',
      specs: ['Front & Rear Dual 4K UHD Lenses', 'IP67 Submersible Weather Seal', 'Ignition Auto-On Loop Start', 'Vibration Damped Motorcycle Mounts'],
      desc: 'High-endurance optical recording engineered specifically for two-wheeler logistics and delivery motorbikes.'
    },
    {
      id: 'upcoming-3',
      title: 'MB Neural ADAS Vision Module v2',
      category: 'Driver Monitoring & ADAS',
      badge: 'ADVANCED AI VISION',
      badgeColor: '#06b6d4',
      image: '/assets/products/adas-cameras-thumb.png',
      slug: 'adas-cameras',
      specs: ['Forward Collision Warning (FCW)', 'Lane Departure Drift Alert (LDW)', 'Millisecond Edge AI Processing', 'Direct Aviation Harness Interface'],
      desc: 'High-precision computer vision neural model delivering real-time auditory warnings on unlit Indian national highways.'
    }
  ];

  const currentShowcaseList =
    activeShowcaseTab === 'trending'
      ? trendingProducts
      : activeShowcaseTab === 'new-launch'
      ? newLaunchProducts
      : upcomingProducts;

  return (
    <div className="home-page">
      {/* =========================================================================
          SECTION 1: HERO SLIDING BANNERS WITH HIGH QUALITY BANNERS (FIGMA 4.1)
          ========================================================================= */}
      <HeroSlider onOpenOrder={onOpenOrder} />

      {/* =========================================================================
          SECTION 2: ABOUT US (CORPORATE INTRODUCTION & SAFETY MISSION)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="about-narrative-grid">
            <div>
              <span className="section-eyebrow">ESTABLISHED 2019 • CORPORATE OVERVIEW</span>
              <h2 className="section-title">
                Pioneering Automotive Surveillance & Intelligent Telematics in India
              </h2>
              <p style={{ color: '#0f172a', fontSize: '1.0625rem', fontWeight: 600, lineHeight: 1.6, marginBottom: '16px' }}>
                MB Automotives India (A Unit of MetroBasket) is a dedicated domestic manufacturer of commercial vehicle black boxes, AI-powered smart dashcams, and fleet telematics solutions operating since 2019.
              </p>
              <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '20px' }}>
                Standard consumer dashcams frequently suffer swollen batteries, melted casing, corrupted memory cards, and disconnected power cables when subjected to prolonged 14-hour duty cycles on Indian highway buses and freight trucks.
              </p>
              <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '28px' }}>
                We engineer our telematics hardware from the component level up: incorporating wide DC 9V–36V dynamic voltage clamping, dual supercapacitors rated to 75°C, threaded aviation metal couplings, and key-locked tamper-proof enclosures.
              </p>

              {/* 4 KPI Metrics */}
              <div className="about-stats-grid" style={{ marginBottom: '28px' }}>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0284c7', fontFamily: 'var(--font-heading)' }} data-count="50000" data-suffix="+">
                    50,000+
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>Highway Hours Tested</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0284c7', fontFamily: 'var(--font-heading)' }} data-count="11570" data-suffix="+">
                    11,570+
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>Commercial Units Equipped</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0284c7', fontFamily: 'var(--font-heading)' }}>
                    2019
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>Operating Since</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0284c7', fontFamily: 'var(--font-heading)' }}>
                    100%
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>BIS & ISO 9001 Tested</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-primary">
                  <span>Read Full Company Profile</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/products" className="btn btn-secondary">
                  <span>Explore Hardware Range</span>
                </Link>
              </div>
            </div>

            {/* Right Image Stage */}
            <div>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid #cbd5e1'
                }}
              >
                <img
                  src="/assets/branding/about-hero-image.png"
                  alt="MB Automotives Manufacturing & Testing Facility"
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Tagline Card */}
              <div
                style={{
                  marginTop: '16px',
                  backgroundColor: '#070a12',
                  border: '1px solid #1e293b',
                  borderRadius: '12px',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <ShieldCheck size={28} color="#38bdf8" style={{ flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: '0.6875rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                    CORPORATE CREED
                  </span>
                  <strong style={{ color: '#ffffff', fontSize: '1rem', letterSpacing: '-0.01em' }}>
                    "Your Safety, Our Priority"
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHY CHOOSE US (KEY TECHNOLOGY & RESILIENCE HIGHLIGHTS)
          ========================================================================= */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">AUTOMOTIVE ENDURANCE SPECIFICATIONS</span>
            <h2 className="section-title">Why Fleet Operators Choose MB Automotives</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Built from component-level up to survive the severe physical and electrical realities of Indian commercial road transport.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '24px' }}>
            {/* Card 1 */}
            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Dual Supercapacitors (Up to 75°C)
              </h3>
              <p style={{ fontSize: '0.84375rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Completely replaces volatile lithium batteries. Supercapacitors endure extreme Indian summer windshield solar baking up to 75°C with zero fire hazard, zero battery swelling, and millions of duty cycles.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                DC 9V–36V Dynamic Overvoltage Clamping
              </h3>
              <p style={{ fontSize: '0.84375rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Built-in industrial transient suppression diodes clamp hazardous starter kickback spikes encountered during heavy 24V diesel alternator turnover, preventing electrical motherboard blowouts.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Activity size={24} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                AI DMS & ADAS Computer Vision
              </h3>
              <p style={{ fontSize: '0.84375rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                On-device neural vision processing tracks eye closure, head-nod drowsiness, and smartphone distractions in pitch-dark cabins, triggering immediate high-decibel spoken voice warnings.
              </p>
            </div>

            {/* Card 4 */}
            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Cable size={24} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Threaded GX12 Aviation Metal Couplings
              </h3>
              <p style={{ fontSize: '0.84375rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Screw-locking 4-pin metal connectors eliminate loose USB plugs and signal flickering caused by high-vibration rural transit roads, ensuring tamper-proof, locked video signals.
              </p>
            </div>

            {/* Card 5 */}
            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Lock size={24} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Key-Locked Anti-Tamper Enclosures
              </h3>
              <p style={{ fontSize: '0.84375rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Physical key-locked doors cover the SD card bays, SIM card slots, and power harnesses, preventing unauthorized drivers or personnel from ejecting or deleting trip footage.
              </p>
            </div>

            {/* Card 6 */}
            <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Radio size={24} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                High-Speed Indian Server Telematics
              </h3>
              <p style={{ fontSize: '0.84375rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                4G cloud video playback, live dispatch streaming, and NavIC/IRNSS satellite positioning hosted securely on domestic high-speed Indian servers for strict data privacy and zero latency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CUSTOMER REVIEWS & RATINGS SCROLLING SECTION (FIGMA 4.6)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="section-eyebrow">VERIFIED COMMERCIAL FLEET EVALUATIONS</span>
              <h2 className="section-title" style={{ margin: 0 }}>Customer Reviews & Ratings</h2>
            </div>

            {/* Manual Navigation Controls */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={handlePrevReview}
                aria-label="Previous review"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#0f172a',
                  transition: 'all 0.15s ease'
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNextReview}
                aria-label="Next review"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#0f172a',
                  transition: 'all 0.15s ease'
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Testimonial Cards Row */}
          <div className="grid-2">
            {[reviews[reviewIdx], reviews[(reviewIdx + 1) % reviews.length]].map((rev, idx) => (
              <div
                key={rev?.id || idx}
                className="card"
                style={{
                  padding: '28px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '4px', color: '#f59e0b' }}>
                      {[...Array(rev?.rating || 5)].map((_, i) => (
                        <Star key={i} size={16} fill="#f59e0b" />
                      ))}
                    </div>
                    <span className="badge badge-emerald" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle size={12} />
                      <span>{rev?.vehiclesEquipped || 'Verified Fleet Deployment'}</span>
                    </span>
                  </div>

                  <p style={{ fontSize: '0.9375rem', color: '#334155', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '20px' }}>
                    "{rev?.content}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontSize: '0.9375rem', color: '#0f172a', display: 'block' }}>
                      {rev?.name}
                    </strong>
                    <span style={{ fontSize: '0.78125rem', color: '#64748b' }}>
                      {rev?.role} • {rev?.company}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    {rev?.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PRODUCT CATEGORIES FEW BOXES (OPEN TO BROWSE ALL ITEMS)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">COMMERCIAL HARDWARE CATALOGUE</span>
            <h2 className="section-title">Explore Commercial Hardware Categories</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Select a specialized vehicle category to browse all compatible dashcams, multi-channel MDVRs, sensors, and cables.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '20px'
            }}
          >
            {/* Box 1: Car Dash Cameras */}
            <Link to="/products/car" className="category-browse-box">
              <div className="category-browse-media">
                <img src="/assets/products/mb-car-dash-z1-thumb.png" alt="Car Dash Cameras" loading="lazy" />
              </div>
              <div className="category-browse-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Car size={18} color="#0284c7" />
                  <h3 className="category-browse-title">Car Dash Cameras</h3>
                </div>
                <p className="category-browse-desc">
                  Compact 4K UHD smart incident recording with G-Sensor emergency file locking and supercapacitor heat tolerance.
                </p>
                <span className="category-browse-action">
                  <span>Browse Car Dashcams</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Box 2: Bus Dash Cameras */}
            <Link to="/products/bus" className="category-browse-box">
              <div className="category-browse-media">
                <img src="/assets/products/mb-bus-black-box-smart-thumb.png" alt="Bus Dash Cameras" loading="lazy" />
              </div>
              <div className="category-browse-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Bus size={18} color="#0284c7" />
                  <h3 className="category-browse-title">Bus Dash Cameras</h3>
                </div>
                <p className="category-browse-desc">
                  Dual-channel forward roadway and cabin sync, key-locked SD bays, and DC 9V–36V heavy diesel power protection.
                </p>
                <span className="category-browse-action">
                  <span>Browse Bus Dashcams</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Box 3: Bike Dash Cameras */}
            <Link to="/products/bike" className="category-browse-box">
              <div className="category-browse-media">
                <img src="/assets/products/mb-bike-black-box-smart-thumb.png" alt="Bike Dash Cameras" loading="lazy" />
              </div>
              <div className="category-browse-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Bike size={18} color="#0284c7" />
                  <h3 className="category-browse-title">Bike Dash Cameras</h3>
                </div>
                <p className="category-browse-desc">
                  IP67 all-weather waterproof front and rear cameras engineered for delivery motorbikes and two-wheelers.
                </p>
                <span className="category-browse-action">
                  <span>Browse Bike Dashcams</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Box 4: Memory Devices */}
            <Link to="/products/storage" className="category-browse-box">
              <div className="category-browse-media">
                <img src="/assets/products/high-speed-memory-card-128gb-thumb.png" alt="Memory Devices" loading="lazy" />
              </div>
              <div className="category-browse-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <HardDrive size={18} color="#0284c7" />
                  <h3 className="category-browse-title">Memory Devices</h3>
                </div>
                <p className="category-browse-desc">
                  High-endurance V30 Class 10 flash storage cards rated for continuous 24/7 video loop write cycles.
                </p>
                <span className="category-browse-action">
                  <span>Browse Memory Cards</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Box 5: Sensors & Radar */}
            <Link to="/products/sensors" className="category-browse-box">
              <div className="category-browse-media">
                <img src="/assets/products/bus-and-truck-parking-sensors-thumb.jpg" alt="Sensors & Radar" loading="lazy" />
              </div>
              <div className="category-browse-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Radio size={18} color="#0284c7" />
                  <h3 className="category-browse-title">Sensors & Radar</h3>
                </div>
                <p className="category-browse-desc">
                  Heavy-duty ultrasonic blind-spot proximity sensors and reversing radar with in-cabin audible alerts.
                </p>
                <span className="category-browse-action">
                  <span>Browse Vehicle Sensors</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Box 6: Cables & Connectors */}
            <Link to="/products/accessories" className="category-browse-box">
              <div className="category-browse-media">
                <img src="/assets/products/aviation-cable-15m-thumb.png" alt="Aviation Cables" loading="lazy" />
              </div>
              <div className="category-browse-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Cable size={18} color="#0284c7" />
                  <h3 className="category-browse-title">Cables & Connectors</h3>
                </div>
                <p className="category-browse-desc">
                  Threaded 4-pin GX12 aviation metal screw-lock cables available in 5m, 10m, and 15m lengths.
                </p>
                <span className="category-browse-action">
                  <span>Browse Aviation Cables</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Box 7: Other Accessories & Spares */}
            <Link to="/products/accessories" className="category-browse-box">
              <div className="category-browse-media">
                <img src="/assets/products/mb-accessories-thumb.png" alt="Other Accessories" loading="lazy" />
              </div>
              <div className="category-browse-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Wrench size={18} color="#0284c7" />
                  <h3 className="category-browse-title">Other Accessories</h3>
                </div>
                <p className="category-browse-desc">
                  7" display dashboard stands, lockable SD enclosures, step-down voltage power modules, and brackets.
                </p>
                <span className="category-browse-action">
                  <span>Browse All Accessories</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: TRENDING NOW BOX WITH 3D IMAGES, NEW LAUNCH, UPCOMING PRODUCTS
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#070c18', color: '#ffffff' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow section-eyebrow-dark">FEATURED HARDWARE SPOTLIGHT</span>
            <h2 className="section-title section-title-dark">Flagship Technology Showcase</h2>
            <p className="section-subtitle section-subtitle-dark" style={{ margin: '0 auto 28px auto' }}>
              Explore our top trending commercial hardware, newly launched systems, and upcoming intelligent telematics hubs.
            </p>

            {/* 3-Tab Switcher */}
            <div className="tech-showcase-tabs-container">
              <button
                type="button"
                onClick={() => setActiveShowcaseTab('trending')}
                className={`tech-showcase-tab ${activeShowcaseTab === 'trending' ? 'active' : ''}`}
              >
                <Sparkles size={16} />
                <span>Trending Now</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveShowcaseTab('new-launch')}
                className={`tech-showcase-tab ${activeShowcaseTab === 'new-launch' ? 'active' : ''}`}
              >
                <Zap size={16} />
                <span>New Launch</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveShowcaseTab('upcoming')}
                className={`tech-showcase-tab ${activeShowcaseTab === 'upcoming' ? 'active' : ''}`}
              >
                <Layers size={16} />
                <span>Upcoming Products</span>
              </button>
            </div>
          </div>

          {/* 3D Hardware Cards Grid */}
          <div className="grid-3" style={{ gap: '28px' }}>
            {currentShowcaseList.map((item) => (
              <div key={item.id} className="card-3d-hardware">
                {/* Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge badge-blue" style={{ backgroundColor: 'rgba(2, 132, 199, 0.25)', borderColor: item.badgeColor, color: '#38bdf8' }}>
                    {item.badge}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {item.category}
                  </span>
                </div>

                {/* 3D Perspective Image Stage */}
                <Link to={`/product/${item.slug}`} className="card-3d-media-stage">
                  <img src={item.image} alt={item.title} className="card-3d-product-img" loading="lazy" />
                  <div className="card-3d-glow-ring" />
                </Link>

                {/* Body Details */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                  <Link to={`/product/${item.slug}`} style={{ color: '#ffffff' }}>
                    {item.title}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '16px', flexGrow: 1 }}>
                  {item.desc}
                </p>

                {/* Specs Pill List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px', backgroundColor: 'rgba(15, 23, 42, 0.65)', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px' }}>
                  {item.specs.map((spec, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#cbd5e1' }}>
                      <Check size={12} color="#38bdf8" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: 'auto' }}>
                  <Link to={`/product/${item.slug}`} className="btn btn-secondary btn-sm" style={{ width: '100%', fontSize: '0.75rem', justifyContent: 'center', backgroundColor: '#0f172d', color: '#38bdf8', borderColor: '#1e293b' }}>
                    <span>Explore Model</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => onOpenOrder && onOpenOrder({ title: item.title, category: item.category })}
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%', fontSize: '0.75rem', justifyContent: 'center' }}
                  >
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: OUR CHANNEL PARTNERS (HORIZONTAL SCROLLING CAROUSEL)
          ========================================================================= */}
      <PartnerLogoSlider />

      {/* =========================================================================
          SECTION 8: OUR CERTIFICATES (SEPARATE SCROLLING LOGO TICKER)
          ========================================================================= */}
      <CertificateLogoSlider />

      {/* =========================================================================
          SECTION 9: VIDEO HIGHLIGHTS (ROAD DEMONSTRATION & IN-CABIN VAULT)
          ========================================================================= */}
      <section id="video-showcase" className="section section-dark" style={{ borderTop: '1px solid #1e293b' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow section-eyebrow-dark">FIELD TESTING EVIDENCE</span>
            <h2 className="section-title section-title-dark">Real-World Road Testing & Video Showcase</h2>
            <p className="section-subtitle section-subtitle-dark" style={{ margin: '0 auto' }}>
              Verified highway performance under monsoon rain, low light, and high vibration on heavy commercial transit routes.
            </p>
          </div>

          <VideoShowcaseSlider />
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: B2B FLEET PROCUREMENT CTA BANNER & QUICK QUOTE
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
                <a href="tel:+919360101871" className="btn btn-primary btn-lg">
                  <Phone size={16} />
                  <span>Call Fleet Sales: +91 93601 01871</span>
                </a>
                <a href="/assets/docs/MB-Catalogue.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
                  <FileText size={16} />
                  <span>Download Catalogue (PDF)</span>
                </a>
              </div>
            </div>

            {/* Quick Consultation Form Box */}
            <div className="figma-cta-form-box">
              <h4 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                Request Fleet Quotation
              </h4>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', marginBottom: '16px' }}>
                Receive customized corporate quotation within 24 hours.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); if (onOpenOrder) onOpenOrder(); }} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input type="text" placeholder="Your Name / Company" required className="input-field" style={{ height: '38px', fontSize: '0.8125rem' }} />
                <input type="tel" placeholder="Mobile Phone Number" required className="input-field" style={{ height: '38px', fontSize: '0.8125rem' }} />
                <select className="input-field" style={{ height: '38px', fontSize: '0.8125rem' }}>
                  <option>Fleet Size: 1 – 10 Vehicles</option>
                  <option>Fleet Size: 11 – 50 Vehicles</option>
                  <option>Fleet Size: 50+ Enterprise Vehicles</option>
                </select>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '40px', fontWeight: 700 }}>
                  Get Official Quotation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
