import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Play,
  Video,
  Image as ImageIcon,
  Calendar,
  Wrench,
  Download,
  CheckCircle,
  ShieldCheck,
  Zap,
  Activity,
  HardDrive,
  ExternalLink,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';

export default function GalleryPage({ onOpenOrder }) {
  const { galleryType } = useParams();

  // Tab State: 'all' | 'videos' | 'photos' | 'events' | 'benchmarks'
  const [activeTab, setActiveTab] = useState('all');
  const [activeVideo, setActiveVideo] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (galleryType === 'videos') {
      setActiveTab('videos');
    } else if (galleryType === 'photos' || galleryType === 'installations') {
      setActiveTab('photos');
    } else if (galleryType === 'events') {
      setActiveTab('events');
    }
  }, [galleryType]);

  const playlist = [
    {
      id: 1,
      title: 'Dual 1080P Commercial Bus Road & Cabin Sync',
      route: 'Bangalore – Salem NH44 Highway Route',
      badge: 'DUAL 1080P RECORDING',
      duration: '4:20 Min',
      src: '/assets/videos/product-demo-1.mp4',
      poster: '/assets/branding/about-hero-image.png',
      desc: 'Simultaneous forward roadway view and interior passenger cabin monitoring under active heavy highway transit conditions with zero frame drops.'
    },
    {
      id: 2,
      title: 'AI Driver Monitoring System (DMS) Fatigue Detection',
      route: 'Night Highway Intercity Luxury Coach',
      badge: 'AI DMS ALARM',
      duration: '3:15 Min',
      src: '/assets/videos/product-demo-2.mp4',
      poster: '/assets/products/mb-dms-driver-monitoring-system-gallery-1.jpg',
      desc: 'Real-time eye closure, head-nod, and distraction detection triggering instant high-decibel in-cabin voice warnings on unlit highway routes.'
    },
    {
      id: 3,
      title: 'Ultrasonic Blind Spot Radar Escalating Buzzer Test',
      route: 'Heavy Freight Trailer Loading Dock',
      badge: 'PROXIMITY RADAR',
      duration: '2:45 Min',
      src: '/assets/videos/product-demo-1.mp4',
      poster: '/assets/products/mb-parking-sensor-gallery-1.png',
      desc: 'Graduated distance audible alerts and digital LED metric readout assisting heavy trailer reversing in tight warehouse bays.'
    },
    {
      id: 4,
      title: 'Heavy Monsoon Rain Night Vision Optical Test',
      route: 'Western Ghats Wet Asphalt Incline',
      badge: 'STARLIGHT OPTICS',
      duration: '3:50 Min',
      src: '/assets/videos/product-demo-2.mp4',
      poster: '/assets/products/mb-bus-black-box-smart-gallery-1.jpg',
      desc: 'F/1.8 wide aperture starlight optical sensor capturing clear lane markings and vehicle numbers through heavy wiper sweeps and road spray.'
    }
  ];

  const deploymentPhotos = [
    {
      id: 'dep-1',
      title: 'Windshield Dual-Lens Mount in Luxury Intercity Coach',
      category: 'Coach Assembly',
      image: '/assets/branding/about-hero-image.png',
      desc: 'Concealed aviation cabling and lockable anti-tamper bracket installed cleanly behind central rear-view mirror.'
    },
    {
      id: 'dep-2',
      title: 'Driver Fatigue DMS Optical Sensor Pillar Alignment',
      category: 'AI Safety Fitment',
      image: '/assets/products/mb-dms-driver-monitoring-system-gallery-1.jpg',
      desc: 'A-pillar mounting angle calibrated for unobstructed eye blink and micro-sleep tracking even with eyeglasses.'
    },
    {
      id: 'dep-3',
      title: 'Heavy-Duty Reverse Radar IP68 Weather-Sealed Sensor',
      category: 'Chassis Integration',
      image: '/assets/products/mb-parking-sensor-gallery-1.png',
      desc: 'Chassis rear bumper placement with threaded locking metal couplings enduring road grit, mud, and water wash.'
    },
    {
      id: 'dep-4',
      title: 'Forward-Facing ADAS High-Definition Optics Feed',
      category: 'Optical Telematics',
      image: '/assets/products/mb-dms-driver-monitoring-system-gallery-2.jpg',
      desc: 'High-mount optical module tracking highway headway distance and unintentional lane departure drift.'
    },
    {
      id: 'dep-5',
      title: 'Bus Black Box Smart Dual 1080P Core Architecture',
      category: 'Hardware Rig',
      image: '/assets/products/mb-bus-black-box-smart-gallery-2.png',
      desc: 'Internal supercapacitor layout and DC 9V–36V surge suppression circuits housed inside rugged metal casing.'
    },
    {
      id: 'dep-6',
      title: 'Multi-Angle Passenger Cabin Safety Oversight',
      category: 'Passenger Transit',
      image: '/assets/products/mb-bus-black-box-smart-gallery-3.png',
      desc: 'Interior wide-angle panoramic view covering student seating, gangway aisles, and entry/exit doors.'
    },
    {
      id: 'dep-7',
      title: 'Two-Wheeler Delivery Fleet Dual Camera Mounting',
      category: 'Two-Wheeler Logistics',
      image: '/assets/products/mb-bike-black-box-smart-gallery-1.jpg',
      desc: 'IP67 submersible front and rear camera brackets fitted to delivery motorbike handlebars and tail cowl.'
    },
    {
      id: 'dep-8',
      title: 'Heavy Freight Trailer 4-Channel Synchronized Hub',
      category: 'Logistics Fleet',
      image: '/assets/products/mb-bus-black-box-t4-gallery-1.png',
      desc: '4-channel MDVR synchronizing front roadway, driver cabin, left blind spot, and rear trailer reversing camera.'
    }
  ];

  const industryEvents = [
    {
      id: 'evt-1',
      title: 'Commercial Vehicle Safety & Telematics Expo',
      date: 'Auto Expo India Pavilion',
      category: 'Industry Exhibition',
      badge: 'TECH EXPO',
      image: '/assets/branding/about-hero-image.png',
      desc: 'Demonstrating AI driver monitoring systems and supercapacitor bus black boxes to commercial fleet directors and transport federations.'
    },
    {
      id: 'evt-2',
      title: 'State Road Transport Corporation (SRTC) Depot Workshop',
      date: 'Regional Engineering Base',
      category: 'Depot Training',
      badge: 'DEPOT CERTIFICATION',
      image: '/assets/products/mb-dms-driver-monitoring-system-gallery-3.jpg',
      desc: 'Hands-on technician training for depot electricians on threaded aviation harness routing and fuse-tap electrical isolation.'
    },
    {
      id: 'evt-3',
      title: 'Commercial Coach Builders Alliance Summit',
      date: 'OEM Assembly Forum',
      category: 'OEM Conference',
      badge: 'OEM ALLIANCE',
      image: '/assets/products/mb-dms-driver-monitoring-system-gallery-4.jpg',
      desc: 'Collaborating with intercity bus body builders on standardizing factory-fitted dashcam wiring in new bus chassis.'
    }
  ];

  const currentVid = playlist[activeVideo] || playlist[0];

  return (
    <div className="gallery-page">
      {/* Page Hero Banner */}
      <section
        style={{
          backgroundColor: '#070a12',
          color: '#ffffff',
          padding: '60px 0 44px 0',
          borderBottom: '1px solid #1e293b'
        }}
      >
        <div className="container">
          <div className="section-eyebrow section-eyebrow-dark">FIELD EVIDENCE & MEDIA VAULT</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '14px', lineHeight: 1.2 }}>
            Field Engineering, Installations & Video Vault
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '760px', lineHeight: 1.6, marginBottom: '24px' }}>
            Unedited highway road footage, high-vibration commercial test clips, factory installation records, and depot assembly documentation captured across Indian commercial fleets.
          </p>

          {/* Navigation Filter Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: activeTab === 'all' ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                color: activeTab === 'all' ? '#ffffff' : '#cbd5e1',
                transition: 'all 0.18s ease'
              }}
            >
              All Media Vault
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('videos')}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: activeTab === 'videos' ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                color: activeTab === 'videos' ? '#ffffff' : '#cbd5e1',
                transition: 'all 0.18s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Video size={14} />
              <span>Video Showcase ({playlist.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('photos')}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: activeTab === 'photos' ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                color: activeTab === 'photos' ? '#ffffff' : '#cbd5e1',
                transition: 'all 0.18s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <ImageIcon size={14} />
              <span>Depot Installations ({deploymentPhotos.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('events')}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: activeTab === 'events' ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                color: activeTab === 'events' ? '#ffffff' : '#cbd5e1',
                transition: 'all 0.18s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Calendar size={14} />
              <span>Events & Expos ({industryEvents.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '40px' }}>
        <div className="container">
          {/* SECTION 1: VIDEO SHOWCASE PLAYER */}
          {(activeTab === 'all' || activeTab === 'videos') && (
            <div style={{ marginBottom: '64px' }}>
              <div style={{ marginBottom: '24px' }}>
                <span className="section-eyebrow">HIGHWAY PERFORMANCE PROOF</span>
                <h2 className="section-title">Verified Video Test Footage</h2>
                <p className="section-subtitle">
                  Inspect synchronized dual-lens recordings, AI fatigue detection responses, and starlight low-light clarity.
                </p>
              </div>

              <div className="gallery-showcase-grid">
                {/* Left Main Video Viewport */}
                <div
                  style={{
                    backgroundColor: '#000000',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid #1e293b',
                    boxShadow: 'var(--shadow-xl)'
                  }}
                >
                  <video
                    key={activeVideo}
                    controls
                    poster={currentVid.poster}
                    style={{ width: '100%', maxHeight: '460px', objectFit: 'cover', display: 'block' }}
                  >
                    <source src={currentVid.src} type="video/mp4" />
                    Your browser does not support HTML5 video playback.
                  </video>

                  <div style={{ padding: '20px 24px', backgroundColor: '#0a1122', color: '#ffffff', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                      <span className="badge badge-blue" style={{ fontSize: '0.6875rem' }}>
                        {currentVid.badge}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                        {currentVid.route} • {currentVid.duration}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                      {currentVid.title}
                    </h3>
                    <p style={{ fontSize: '0.84375rem', color: '#94a3b8', lineHeight: 1.55, margin: 0 }}>
                      {currentVid.desc}
                    </p>
                  </div>
                </div>

                {/* Right Playlist Selector */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    Select Test Clip ({playlist.length} Available)
                  </div>

                  {playlist.map((item, idx) => (
                    <div
                      key={item.id}
                      onClick={() => setActiveVideo(idx)}
                      style={{
                        padding: '14px 16px',
                        borderRadius: '10px',
                        border: activeVideo === idx ? '1px solid #0284c7' : '1px solid #e2e8f0',
                        backgroundColor: activeVideo === idx ? '#f0f9ff' : '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.18s ease',
                        boxShadow: activeVideo === idx ? '0 2px 8px rgba(2, 132, 199, 0.12)' : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <Play
                          size={14}
                          color={activeVideo === idx ? '#0284c7' : '#64748b'}
                          fill={activeVideo === idx ? '#0284c7' : 'none'}
                        />
                        <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: activeVideo === idx ? '#0284c7' : '#64748b' }}>
                          CLIP 0{idx + 1} • {item.badge}
                        </span>
                      </div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: activeVideo === idx ? '#0284c7' : '#0f172a', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                        {item.title}
                      </h4>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {item.route}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: DEPOT & FIELD INSTALLATION GALLERY */}
          {(activeTab === 'all' || activeTab === 'photos') && (
            <div style={{ marginBottom: '64px' }}>
              <div style={{ marginBottom: '24px' }}>
                <span className="section-eyebrow">FIELD DEPLOYMENT EVIDENCE</span>
                <h2 className="section-title">Hardware in Production, Assembly & Depot Fitment</h2>
                <p className="section-subtitle">
                  Photographic documentation of concealed wire harnesses, coach body installations, and ultrasonic bumper mounts.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                  gap: '20px'
                }}
              >
                {deploymentPhotos.map((item) => (
                  <div
                    key={item.id}
                    className="card"
                    style={{
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px'
                    }}
                  >
                    <div
                      style={{
                        height: '180px',
                        backgroundColor: '#070a12',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        marginBottom: '14px',
                        position: 'relative',
                        cursor: 'pointer'
                      }}
                      onClick={() => setLightboxImage(item)}
                      title="Click to expand image"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '8px',
                          right: '8px',
                          backgroundColor: 'rgba(0, 0, 0, 0.65)',
                          borderRadius: '4px',
                          padding: '4px 6px',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.6875rem'
                        }}
                      >
                        <Maximize2 size={11} />
                        <span>Zoom</span>
                      </div>
                    </div>

                    <span className="badge badge-slate" style={{ alignSelf: 'flex-start', fontSize: '0.6875rem', marginBottom: '6px' }}>
                      {item.category}
                    </span>

                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px', lineHeight: 1.3 }}>
                      {item.title}
                    </h4>

                    <p style={{ fontSize: '0.78125rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 3: INDUSTRY EVENTS & EXHIBITIONS */}
          {(activeTab === 'all' || activeTab === 'events') && (
            <div style={{ marginBottom: '64px' }}>
              <div style={{ marginBottom: '24px' }}>
                <span className="section-eyebrow">TRADE & INDUSTRY ENGAGEMENTS</span>
                <h2 className="section-title">Automotive Expos & Technical Workshops</h2>
                <p className="section-subtitle">
                  Engaging with transport associations, fleet operators, and institutional buyers across India.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px'
                }}
              >
                {industryEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="card"
                    style={{
                      padding: '24px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '14px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div style={{ height: '180px', backgroundColor: '#070a12', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px' }}>
                      <img src={evt.image} alt={evt.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span className="badge badge-blue">{evt.badge}</span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{evt.date}</span>
                    </div>

                    <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', lineHeight: 1.3 }}>
                      {evt.title}
                    </h3>

                    <p style={{ fontSize: '0.8125rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                      {evt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 4: ENGINEERING RESILIENCE BENCHMARKS */}
          <div style={{ backgroundColor: '#070c18', border: '1px solid #1e293b', borderRadius: '16px', padding: 'clamp(24px, 4vw, 36px)', color: '#ffffff', marginBottom: '48px' }}>
            <div style={{ marginBottom: '24px' }}>
              <span className="section-eyebrow section-eyebrow-dark">ENGINEERING BENCHMARKS</span>
              <h2 className="section-title section-title-dark">Stress-Tested for Indian Commercial Road Realities</h2>
              <p className="section-subtitle section-subtitle-dark">
                Rigorous electrical surge protection and thermal tolerances engineered into every MB Automotives hardware chassis.
              </p>
            </div>

            <div className="grid-2" style={{ gap: '20px' }}>
              <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid #334155', borderRadius: '12px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Zap size={22} color="#38bdf8" />
                  <h4 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    Alternator Voltage Spike Clamping
                  </h4>
                </div>
                <p style={{ fontSize: '0.84375rem', color: '#94a3b8', marginBottom: '16px', lineHeight: 1.55 }}>
                  Heavy commercial 24V diesel alternators generate transient load dump spikes up to 36V. Our transient suppressor clamps spikes to a safe level instantaneously.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: 'rgba(2, 132, 199, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 700, color: '#38bdf8' }}>
                  <span>Input Range: DC 9V – 36V</span>
                  <span>Response: &lt; 1 Microsecond</span>
                </div>
              </div>

              <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid #334155', borderRadius: '12px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Activity size={22} color="#10b981" />
                  <h4 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    Windshield Thermal Tolerance
                  </h4>
                </div>
                <p style={{ fontSize: '0.84375rem', color: '#94a3b8', marginBottom: '16px', lineHeight: 1.55 }}>
                  Under direct Indian summer windshield solar baking, cabin glass exceeds 65°C. Dual supercapacitors operate safely without swelling or fire hazards.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 700, color: '#34d399' }}>
                  <span>Supercapacitors: -20°C to +75°C</span>
                  <span>Zero Lithium Fire Risk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setLightboxImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              backgroundColor: '#070c18',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid #1e293b'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', backgroundColor: '#000000', display: 'block' }}
            />

            <div style={{ padding: '20px 24px', color: '#ffffff' }}>
              <span className="badge badge-blue" style={{ marginBottom: '6px' }}>{lightboxImage.category}</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 8px 0' }}>
                {lightboxImage.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
                {lightboxImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
