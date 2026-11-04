import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  ShieldCheck,
  Activity,
  Radio,
  Eye,
  Video,
  FileText
} from 'lucide-react';

export default function HeroSlider({ onOpenOrder }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // 6 Professionally Designed Banners as per Master Requirements Section 4.1
  const slides = [
    {
      id: 1,
      eyebrow: 'COMMERCIAL BUS TRANSIT • DC 9V–36V PROTECTION',
      headline: 'Intelligent Bus Surveillance Solutions',
      highlight: 'Bus Surveillance',
      subheadline:
        'Multi-camera Full HD road & cabin synchronization with DC 9V–36V surge clamping engineered for commercial passenger transport and interstate coaches.',
      image: '/assets/products/mb-bus-black-box-smart-thumb.png',
      badge: 'FLAGSHIP BUS TELEMATICS',
      specs: 'Dual 1080P • GX12 Aviation Screw-Locks • Up to 75°C Supercapacitors',
      primaryBtn: { text: 'Explore Bus Systems', link: '/products/bus' },
      secondaryBtn: { text: 'Request Quotation', action: 'quote' }
    },
    {
      id: 2,
      eyebrow: 'AI VISION TELEMATICS • REAL-TIME ACCIDENT PREVENTION',
      headline: 'Smarter Driving. Safer Journeys.',
      highlight: 'Safer Journeys.',
      subheadline:
        'On-device neural network computer vision tracking eye closure, drowsiness, distractions, and forward lane drift before accidents happen.',
      image: '/assets/products/mb-dms-driver-monitoring-system-thumb.png',
      badge: 'NEURAL AI DMS & ADAS',
      specs: 'Fatigue Tracking • FCW & LDW • In-Cabin Voice Alerts',
      primaryBtn: { text: 'Discover AI Technology', link: '/products/dms-adas' },
      secondaryBtn: { text: 'Download APK Suite', link: '/downloads' }
    },
    {
      id: 3,
      eyebrow: 'ALL-ANGLE COVERAGE • ROAD, CABIN & BLIND SPOTS',
      headline: 'Complete 360° Vehicle Protection',
      highlight: '360° Vehicle Protection',
      subheadline:
        'Full perimeter vehicle coverage: front roadway, reversing assistance, left/right blind-spot radar, and interior driver & passenger observation.',
      image: '/assets/products/mb-bus-black-box-t4-thumb.png',
      badge: 'MULTI-CHANNEL MDVR',
      specs: 'Front + Rear + Sides + Cabin • Anti-Vibration Metal Housing',
      primaryBtn: { text: 'View 360° Systems', link: '/products' },
      secondaryBtn: { text: 'Explore Applications', link: '/applications' }
    },
    {
      id: 4,
      eyebrow: 'ACTIVE HIGHWAY SAFETY • FORWARD COLLISION WARNING',
      headline: 'Advanced AI Driver Safety Systems',
      highlight: 'Driver Safety Systems',
      subheadline:
        'Active collision mitigation, pedestrian proximity warning, and driver facial behavior monitoring tailored for long-haul commercial transport.',
      image: '/assets/products/adas-cameras-thumb.png',
      badge: 'ADAS & DRIVER ALERT',
      specs: 'Neural Edge Processing • Millisecond Response • IR Night Optics',
      primaryBtn: { text: 'View ADAS Hardware', link: '/products/dms-adas' },
      secondaryBtn: { text: 'Download Datasheet', link: '/downloads' }
    },
    {
      id: 5,
      eyebrow: 'HIGH-SPEED INDIAN CLOUD • LIVE GPS & TELEMETRY',
      headline: 'Monitor Your Fleet Anytime, Anywhere',
      highlight: 'Monitor Your Fleet',
      subheadline:
        '4G cloud connectivity, live video streaming, instant incident GPS location, and high-speed Indian server infrastructure for commercial operators.',
      image: '/assets/products/mb-car-dash-z1-thumb.png',
      badge: '4G LIVE FLEET CLOUD',
      specs: 'Live Cloud Video • High-Speed Indian Server • Geofencing',
      primaryBtn: { text: 'Explore Telematics', link: '/products' },
      secondaryBtn: { text: 'Contact Our Team', link: '/contact' }
    },
    {
      id: 6,
      eyebrow: 'MB AUTOMOTIVES INDIA • OPERATING SINCE 2019',
      headline: 'Your Safety, Our Priority',
      highlight: 'Our Priority',
      subheadline:
        'Premier commercial vehicle security manufacturer (A Unit of MetroBasket). Trusted by state bus operators, coach builders, and enterprise freight fleets.',
      image: '/assets/branding/about-hero-image.png',
      badge: 'OPERATING SINCE 2019',
      specs: 'ISO 9001:2015 • BIS IS 616 • Govt. MSME Udyam Verified',
      primaryBtn: { text: 'About MB Automotives', link: '/about' },
      secondaryBtn: { text: 'Request a Quotation', action: 'quote' }
    }
  ];

  // Auto transition every 6 seconds
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Homepage Hero Banners"
    >
      <div className="hero-backdrop-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div className="hero-slide" key={activeSlide.id}>
          <div className="hero-grid">
            {/* Content Column */}
            <div className="hero-content-col">
              <div className="hero-eyebrow">
                <ShieldCheck size={14} color="#38bdf8" />
                <span>{activeSlide.eyebrow}</span>
              </div>

              <h1 className="hero-headline">
                {activeSlide.headline}
              </h1>

              <p className="hero-supporting">
                {activeSlide.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="hero-buttons">
                <Link to={activeSlide.primaryBtn.link} className="btn-hero-primary">
                  <span>{activeSlide.primaryBtn.text}</span>
                  <ArrowRight size={17} />
                </Link>

                {activeSlide.secondaryBtn.action === 'quote' ? (
                  <button
                    type="button"
                    onClick={() => onOpenOrder && onOpenOrder({ title: activeSlide.headline })}
                    className="btn-hero-secondary"
                  >
                    <ShoppingBag size={17} />
                    <span>Request Quotation</span>
                  </button>
                ) : (
                  <Link to={activeSlide.secondaryBtn.link} className="btn-hero-secondary">
                    <FileText size={17} />
                    <span>{activeSlide.secondaryBtn.text}</span>
                  </Link>
                )}
              </div>

              {/* Live Telematics Verified Metrics */}
              <div className="hero-metrics-bar">
                <div className="hero-metric-item">
                  <div className="hero-metric-value" data-count="50000" data-suffix="+">
                    50,000+
                  </div>
                  <div className="hero-metric-label">Highway Hours Logged</div>
                </div>
                <div className="hero-metric-separator" />
                <div className="hero-metric-item">
                  <div className="hero-metric-value" data-count="99.8" data-suffix="%">
                    99.8%
                  </div>
                  <div className="hero-metric-label">Hardware Reliability</div>
                </div>
                <div className="hero-metric-separator" />
                <div className="hero-metric-item">
                  <div className="hero-metric-value" data-count="2019" data-suffix="">
                    2019
                  </div>
                  <div className="hero-metric-label">Operating Since</div>
                </div>
                <div className="hero-metric-separator" />
                <div className="hero-metric-item">
                  <div className="hero-metric-value" data-count="100" data-suffix="%">
                    100%
                  </div>
                  <div className="hero-metric-label">BIS & ISO Tested</div>
                </div>
              </div>
            </div>

            {/* Media Presentation Column */}
            <div className="hero-media-wrapper">
              <div className="hero-media-box">
                <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 4 }}>
                  <span className="badge badge-blue" style={{ backgroundColor: 'rgba(2, 132, 199, 0.25)', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.4)' }}>
                    {activeSlide.badge}
                  </span>
                </div>

                <img
                  key={activeSlide.id}
                  src={activeSlide.image}
                  alt={activeSlide.headline}
                  className="hero-media-img"
                  loading="eager"
                />

                <div className="hero-specs-pill">
                  <Activity size={13} color="#38bdf8" style={{ flexShrink: 0 }} />
                  <span>{activeSlide.specs}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manual Slider Navigation Controls */}
        <div className="hero-slider-controls">
          <button
            type="button"
            onClick={handlePrev}
            className="hero-slider-btn"
            aria-label="Previous banner"
            title="Previous banner"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="hero-slider-dots">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`hero-slider-dot ${currentSlide === idx ? 'active' : ''}`}
                aria-label={`Go to slide ${idx + 1}: ${s.headline}`}
                title={s.headline}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="hero-slider-btn"
            aria-label="Next banner"
            title="Next banner"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
