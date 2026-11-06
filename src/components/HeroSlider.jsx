import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Play,
  Pause
} from 'lucide-react';

export default function HeroSlider({ onOpenOrder }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartXRef = useRef(null);

  // 4 Flagship Slides with approved corporate Dark Cyan theme and high-res imagery
  const slides = [
    {
      id: 1,
      counter: '01 / 04',
      eyebrow: 'RECORDING EVERY KILOMETRE',
      headlineWhite: 'Every drive,',
      headlineHighlight: 'on record.',
      subheadline:
        'Dash cams, AI driver-monitoring and fleet black boxes for cars, buses, bikes and trucks. Designed for complete visibility across every journey.',
      primaryBtn: { text: 'Explore Products', link: '/products' },
      secondaryBtn: { text: 'Get a Quote', action: 'quote' },
      trustBadge: 'Thoughtful technology for the road ahead',
      image: '/assets/branding/hero-windshield-cockpit.jpg',
      badge: 'ADAS & FLEET RECORDING'
    },
    {
      id: 2,
      counter: '02 / 04',
      eyebrow: 'COMMERCIAL BUS SURVEILLANCE',
      headlineWhite: 'Safer journeys',
      headlineHighlight: 'for every fleet.',
      subheadline:
        'High-durability bus and coach surveillance with synchronized road and cabin Full HD recording, DC 9V–36V surge clamping, and 75°C supercapacitors.',
      primaryBtn: { text: 'Explore Bus Systems', link: '/products/bus' },
      secondaryBtn: { text: 'Get a Quote', action: 'quote' },
      trustBadge: 'Thoughtful technology for the road ahead',
      image: '/assets/products/mb-bus-black-box-smart-gallery-1.jpg',
      badge: 'BUS & TRANSIT BLACK BOX'
    },
    {
      id: 3,
      counter: '03 / 04',
      eyebrow: '360° MULTI-CHANNEL TELEMATICS',
      headlineWhite: 'Complete 360°',
      headlineHighlight: 'vehicle vision.',
      subheadline:
        'Multi-channel MDVR systems with GX12 aviation metal screw locks, reversing radar sensors, and key-locked tamper-proof memory bays.',
      primaryBtn: { text: 'Explore 360° Systems', link: '/products' },
      secondaryBtn: { text: 'Get a Quote', action: 'quote' },
      trustBadge: 'Thoughtful technology for the road ahead',
      image: '/assets/branding/about-hero-image.png',
      badge: '360° MULTI-CHANNEL MDVR'
    },
    {
      id: 4,
      counter: '04 / 04',
      eyebrow: 'AI DRIVER MONITORING & SAFETY',
      headlineWhite: 'Support the person',
      headlineHighlight: 'at the wheel.',
      subheadline:
        'Edge neural computer vision tracking driver micro-sleep, eye fatigue, and distractions with real-time in-cabin spoken warnings.',
      primaryBtn: { text: 'Explore DMS Solutions', link: '/products/dms-adas' },
      secondaryBtn: { text: 'Get a Quote', action: 'quote' },
      trustBadge: 'Thoughtful technology for the road ahead',
      image: '/assets/products/mb-dms-driver-monitoring-system-gallery-1.jpg',
      badge: 'AI DRIVER MONITORING (DMS)'
    }
  ];

  const DURATION_MS = 5500;
  const TICK_MS = 50;
  const STEP = (TICK_MS / DURATION_MS) * 100;

  // Automatic progress timer
  useEffect(() => {
    if (isPaused || isHovered) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + STEP;
      });
    }, TICK_MS);

    return () => clearInterval(timer);
  }, [isPaused, isHovered, slides.length, STEP]);

  const goToSlide = (idx) => {
    setProgress(0);
    setCurrentSlide(idx);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setProgress(0);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPaused((prev) => !prev);
  };

  // Touch Swipe Support on Mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartXRef.current) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      className="hero-slider-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Homepage Hero Banners"
    >
      <div className="hero-backdrop-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div className="hero-slide-container" key={activeSlide.id}>
          <div className="hero-grid-modern">
            {/* Left Content Column */}
            <div className="hero-content-col">
              {/* Eyebrow with Cyan Dash Line */}
              <div className="hero-eyebrow-container">
                <span className="hero-eyebrow-line" />
                <span className="hero-eyebrow-text">{activeSlide.eyebrow}</span>
              </div>

              {/* Two-Tone Headline with Cyan Highlight */}
              <h1 className="hero-headline-modern">
                <span className="hero-text-white">{activeSlide.headlineWhite}</span>
                <br />
                <span className="hero-text-cyan">{activeSlide.headlineHighlight}</span>
              </h1>

              {/* Supporting Subheadline */}
              <p className="hero-supporting-text">{activeSlide.subheadline}</p>

              {/* Pill Action Buttons (Electric Blue + Dark Glass) */}
              <div className="hero-buttons-row">
                <Link to={activeSlide.primaryBtn.link} className="hero-btn-primary-cyan">
                  <span>{activeSlide.primaryBtn.text}</span>
                  <ArrowRight size={16} />
                </Link>

                {activeSlide.secondaryBtn.action === 'quote' ? (
                  <button
                    type="button"
                    onClick={() =>
                      onOpenOrder &&
                      onOpenOrder({
                        title: `${activeSlide.headlineWhite} ${activeSlide.headlineHighlight}`,
                        category: activeSlide.badge
                      })
                    }
                    className="hero-btn-secondary-dark"
                  >
                    <span>{activeSlide.secondaryBtn.text}</span>
                    <ArrowUpRight size={16} />
                  </button>
                ) : (
                  <Link to={activeSlide.secondaryBtn.link} className="hero-btn-secondary-dark">
                    <span>{activeSlide.secondaryBtn.text}</span>
                    <ArrowUpRight size={16} />
                  </Link>
                )}
              </div>

              {/* Trust Badge with Cyan Shield Icon */}
              <div className="hero-trust-badge">
                <div className="hero-trust-icon">
                  <ShieldCheck size={13} color="#38bdf8" />
                </div>
                <span>{activeSlide.trustBadge}</span>
              </div>
            </div>

            {/* Right Media Column: Kinda Square with Small Borders */}
            <div className="hero-media-wrapper-modern">
              <div className="hero-media-square-box">
                <img
                  key={activeSlide.id}
                  src={activeSlide.image}
                  alt={activeSlide.badge}
                  className="hero-media-square-img"
                  loading="eager"
                />

                {/* Subtle Vignette Overlay */}
                <div className="hero-media-square-vignette" />

                {/* Top-Right Counter Pill */}
                <div className="hero-media-counter-pill">{activeSlide.counter}</div>

                {/* Bottom-Left Glass Status Pill */}
                <div className="hero-media-badge-pill">
                  <span className="hero-badge-dot" />
                  <span>{activeSlide.badge}</span>
                </div>
              </div>

              {/* Bottom Control Bar */}
              <div className="hero-bottom-bar">
                <span className="hero-platform-tag">INTEGRATED VEHICLE TECHNOLOGY</span>

                <div className="hero-controls-cluster">
                  {/* Prev Button */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="hero-nav-arrow"
                    aria-label="Previous slide"
                    title="Previous slide"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {/* Dots / Active Pill with Cyan Progress Fill */}
                  <div className="hero-dots-track">
                    {slides.map((s, idx) => {
                      const isActive = currentSlide === idx;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => goToSlide(idx)}
                          className={isActive ? 'hero-dot-item active-pill' : 'hero-dot-item'}
                          aria-label={`Go to slide ${idx + 1}: ${s.badge}`}
                          title={s.badge}
                        >
                          {isActive && (
                            <span
                              className="hero-dot-fill-progress"
                              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Play / Pause Toggle Button */}
                  <button
                    type="button"
                    onClick={togglePlayPause}
                    className="hero-play-pause-btn"
                    aria-label={isPaused ? 'Resume auto-advance' : 'Pause auto-advance'}
                    title={isPaused ? 'Resume auto-advance' : 'Pause auto-advance'}
                  >
                    {isPaused ? (
                      <Play size={13} fill="currentColor" />
                    ) : (
                      <Pause size={13} fill="currentColor" />
                    )}
                  </button>

                  {/* Next Button with Circular Cyan Border */}
                  <button
                    type="button"
                    onClick={handleNext}
                    className="hero-nav-arrow next-highlight"
                    aria-label="Next slide"
                    title="Next slide"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
