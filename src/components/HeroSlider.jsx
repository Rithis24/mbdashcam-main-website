import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingBag, ShieldCheck, Activity, Radio } from 'lucide-react';

export default function HeroSlider({ onOpenOrder }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 1,
      eyebrow: 'MB AUTOMOTIVES INDIA • FLEET SAFETY',
      headline: 'Engineering Safer Journeys.',
      highlight: 'Safer Journeys.',
      subheadline: 'Advanced dual-lens vehicle dashcams and commercial telematics systems built to endure rigorous Indian highway and transit conditions.',
      image: '/assets/products/mb-bus-black-box-smart-thumb.png',
      badge: 'FLAGSHIP COMMERCIAL HARDWARE',
      specs: 'Dual 1080P • DC 9V–36V • 4G Live Telematics',
      primaryBtn: { text: 'EXPLORE PRODUCTS', link: '/products' },
      secondaryBtn: { text: 'CONTACT FACTORY', link: '/contact' }
    },
    {
      id: 2,
      eyebrow: 'AI VISION TELEMATICS • REAL-TIME ALERT',
      headline: 'Active Driver Monitoring & ADAS.',
      highlight: 'Driver Monitoring & ADAS.',
      subheadline: 'On-device neural network vision algorithms detecting eye closure, drowsiness, distractions, and forward lane drift before accidents happen.',
      image: '/assets/products/mb-dms-driver-monitoring-system-thumb.png',
      badge: 'NEURAL COMPUTER VISION',
      specs: 'Fatigue Tracking • FCW & LDW • In-Cabin Voice Alerts',
      primaryBtn: { text: 'VIEW DMS HARDWARE', link: '/products/dms-adas' },
      secondaryBtn: { text: 'DOWNLOAD APK', link: '/downloads' }
    },
    {
      id: 3,
      eyebrow: 'COMMERCIAL TRANSIT • DC 9V–36V PROTECTION',
      headline: 'Rugged Bus & Truck Black Boxes.',
      highlight: 'Bus & Truck Black Boxes.',
      subheadline: 'Dual supercapacitor architecture, threaded 4-pin aviation metal couplings, and transient voltage clamping engineered for heavy diesel alternators.',
      image: '/assets/products/mb-bus-black-box-t4-thumb.png',
      badge: 'AUTOMOTIVE ENDURANCE GRADE',
      specs: 'Aviation Screw-Locks • Shock G-Sensor • Zero Swell Capacitors',
      primaryBtn: { text: 'BUS DASHCAM SYSTEMS', link: '/products/bus' },
      secondaryBtn: { text: 'VIEW CERTIFICATIONS', link: '/certificates' }
    }
  ];

  // Auto transition
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
    >
      <div className="hero-backdrop-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div className="hero-slide">
          <div className="hero-grid">
            {/* Content Column */}
            <div>
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

              <div className="hero-buttons">
                <Link to={activeSlide.primaryBtn.link} className="btn btn-accent btn-lg">
                  <span>{activeSlide.primaryBtn.text}</span>
                  <ArrowRight size={17} />
                </Link>
                <button
                  onClick={() => onOpenOrder && onOpenOrder({ title: activeSlide.headline })}
                  className="btn btn-outline-white btn-lg"
                >
                  <ShoppingBag size={17} />
                  <span>REQUEST FLEET QUOTE</span>
                </button>
              </div>

              {/* Live Telematics Metrics Bar */}
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
                  <div className="hero-metric-value" data-count="26" data-suffix="+">
                    26+
                  </div>
                  <div className="hero-metric-label">Fleet Safety Systems</div>
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
                <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                  <span className="badge badge-blue" style={{ backgroundColor: 'rgba(2, 132, 199, 0.25)', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.4)' }}>
                    {activeSlide.badge}
                  </span>
                </div>

                <img
                  key={activeSlide.id}
                  src={activeSlide.image}
                  alt={activeSlide.headline}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(6px)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#94a3b8'
                  }}
                >
                  {activeSlide.specs}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manual Slider Navigation Controls */}
        <div className="hero-slider-controls">
          <button
            onClick={handlePrev}
            className="hero-slider-btn"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="hero-slider-dots">
            {slides.map((s, idx) => (
              <div
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`hero-slider-dot ${currentSlide === idx ? 'active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="hero-slider-btn"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
