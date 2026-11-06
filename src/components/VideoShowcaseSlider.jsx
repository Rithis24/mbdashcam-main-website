import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Video } from 'lucide-react';

const videoOptions = [
  {
    id: 1,
    title: 'Commercial Bus Dual-Channel Black Box Demonstration',
    src: '/assets/videos/product-demo-1.mp4',
    poster: '/assets/branding/about-hero-image.png',
    badge: 'Dual 1080P In-Cabin & Road Recording',
    desc: 'Simultaneous forward roadway traffic recording alongside interior passenger cabin observation.'
  },
  {
    id: 2,
    title: 'AI Driver Monitoring & Collision Avoidance Demonstration',
    src: '/assets/videos/product-demo-2.mp4',
    poster: '/assets/products/mb-dms-driver-monitoring-system-gallery-1.jpg',
    badge: 'AI DMS & ADAS Alerts',
    desc: 'Real-time facial fatigue alerts, drowsiness warnings, and active forward collision prevention on highway routes.'
  }
];

export default function VideoShowcaseSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Switch video gently every 8 seconds when not paused or playing
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoOptions.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoOptions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videoOptions.length);
  };

  const activeVideo = videoOptions[currentIndex];

  return (
    <div
      className="simple-video-showcase-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Navigation Arrow */}
      <button
        type="button"
        className="video-side-nav-btn prev-btn"
        onClick={handlePrev}
        aria-label="Previous video"
        title="Previous video"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Center Video Card */}
      <div className="simple-video-cinema-box">
        <video
          key={activeVideo.id}
          controls
          playsInline
          poster={activeVideo.poster}
          className="simple-video-player"
          onPlay={() => setIsPaused(true)}
          onPause={() => setIsPaused(false)}
        >
          <source src={activeVideo.src} type="video/mp4" />
          Your browser does not support HTML5 video playback.
        </video>

        {/* Clean Header Overlay */}
        <div className="simple-video-header-overlay">
          <div className="simple-video-badge">
            <Video size={14} />
            <span>{activeVideo.badge}</span>
          </div>
          <span className="simple-video-counter">
            {currentIndex + 1} / {videoOptions.length}
          </span>
        </div>

        {/* Clean Bottom Title Bar */}
        <div className="simple-video-info-bar">
          <h3 className="simple-video-title">{activeVideo.title}</h3>
          <p className="simple-video-desc">{activeVideo.desc}</p>
        </div>
      </div>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        className="video-side-nav-btn next-btn"
        onClick={handleNext}
        aria-label="Next video"
        title="Next video"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
