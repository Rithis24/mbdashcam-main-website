import React, { useState } from 'react';
import { Play, Video, Image as ImageIcon, Download, CheckCircle, ShieldCheck, Zap, Activity, HardDrive, Smartphone, Monitor } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function GalleryPage({ onOpenOrder }) {
  const [activeVideo, setActiveVideo] = useState(0);

  const playlist = [
    {
      title: 'Dual 1080P Commercial Bus Road & Cabin Sync',
      route: 'Bangalore – Salem NH44 Highway Route',
      badge: 'DUAL 1080P RECORDING',
      duration: 'Full Route Clip',
      src: '/assets/videos/product-demo-1.mp4',
      poster: '/assets/branding/about-hero-image.png',
      desc: 'Simultaneous forward roadway view and interior passenger cabin monitoring under active highway transit.'
    },
    {
      title: 'AI Driver Monitoring System (DMS) Fatigue Detection',
      route: 'Night Highway Intercity Luxury Coach',
      badge: 'AI DMS ALARM',
      duration: 'Fatigue Trigger Clip',
      src: '/assets/videos/product-demo-2.mp4',
      poster: '/assets/products/mb-dms-driver-monitoring-system-gallery-1.jpg',
      desc: 'Real-time eye closure and head-nod detection triggering instant in-cabin voice alarm to prevent accident.'
    },
    {
      title: 'Ultrasonic Blind Spot Radar Escalating Buzzer Test',
      route: 'Heavy Freight Trailer Loading Dock',
      badge: 'PROXIMITY RADAR',
      duration: 'Reverse Maneuver',
      src: '/assets/videos/product-demo-1.mp4',
      poster: '/assets/products/mb-parking-sensor-gallery-1.png',
      desc: 'Graduated distance audible alerts and digital LED metric readout assisting truck reversing.'
    },
    {
      title: 'Heavy Monsoon Rain Night Vision Optical Test',
      route: 'Western Ghats Wet Asphalt Incline',
      badge: 'STARLIGHT OPTICS',
      duration: 'Low-Light Wet Test',
      src: '/assets/videos/product-demo-2.mp4',
      poster: '/assets/products/mb-bus-black-box-smart-gallery-1.jpg',
      desc: 'F/1.8 wide aperture starlight optical sensor capturing clear lane markings through heavy wiper sweep.'
    }
  ];

  const deploymentPhotos = [
    {
      title: 'Windshield Dual-Lens Mount in Luxury Intercity Coach',
      category: 'Coach Assembly',
      image: '/assets/branding/about-hero-image.png',
      desc: 'Concealed aviation cabling and lockable anti-tamper bracket installed behind rear-view mirror.'
    },
    {
      title: 'Driver Fatigue DMS Optical Sensor Pillar Alignment',
      category: 'AI Safety Fitment',
      image: '/assets/products/mb-dms-driver-monitoring-system-gallery-1.jpg',
      desc: 'A-pillar mounting angle calibrated for unobstructed eye blink and distraction tracking.'
    },
    {
      title: 'Heavy-Duty Reverse Radar IP68 Weather-Sealed Sensor',
      category: 'Chassis Integration',
      image: '/assets/products/mb-parking-sensor-gallery-1.png',
      desc: 'Chassis rear bumper placement with threaded locking couplings enduring road mud and power washing.'
    },
    {
      title: 'Forward-Facing ADAS High-Definition Optics Feed',
      category: 'Optical Telematics',
      image: '/assets/products/mb-dms-driver-monitoring-system-gallery-2.jpg',
      desc: 'High-mount optical module tracking highway headway distance and unintentional lane drift.'
    }
  ];

  const currentVid = playlist[activeVideo] || playlist[0];

  return (
    <div className="gallery-page">
      {/* Figma Page 5 Banner */}
      <section
        style={{
          backgroundColor: '#070a12',
          color: '#ffffff',
          padding: '60px 0 44px 0',
          borderBottom: '1px solid #1e293b'
        }}
      >
        <div className="container">
          <span className="section-eyebrow section-eyebrow-dark">VERIFIED VIDEO VAULT & FIELD EVIDENCE</span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Field Engineering, Installation & Real-World Video Vault
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '760px', lineHeight: 1.6 }}>
            Unedited highway road footage, high-vibration commercial test clips, and depot assembly documentation captured across active Indian transport fleets.
          </p>
        </div>
      </section>

      {/* Main Video Player Showcase (Figma Page 5) */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', gap: '28px', alignItems: 'flex-start', marginBottom: '64px' }}>
            {/* Left Main Video Viewport */}
            <div style={{ backgroundColor: '#000000', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e293b', boxShadow: 'var(--shadow-xl)' }}>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span className="badge badge-blue" style={{ fontSize: '0.6875rem' }}>{currentVid.badge}</span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>{currentVid.route}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  {currentVid.title}
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  {currentVid.desc}
                </p>
              </div>
            </div>

            {/* Right Playlist Selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em', marginBottom: '4px' }}>
                Verified Test Footage Playlist ({playlist.length} Clips)
              </div>

              {playlist.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveVideo(idx)}
                  style={{
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: activeVideo === idx ? '1px solid #0284c7' : '1px solid #e2e8f0',
                    backgroundColor: activeVideo === idx ? '#f0f9ff' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Play size={14} color={activeVideo === idx ? '#0284c7' : '#64748b'} fill={activeVideo === idx ? '#0284c7' : 'none'} />
                    <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: activeVideo === idx ? '#0284c7' : '#64748b' }}>
                      CLIP 0{idx + 1}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: activeVideo === idx ? '#0284c7' : '#0f172a', margin: '0 0 2px 0' }}>
                    {item.title}
                  </h4>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {item.route}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hardware in Production, Assembly & Active Field Deployment (Figma Page 5) */}
          <div style={{ marginBottom: '64px' }}>
            <div className="section-header">
              <span className="section-eyebrow">FIELD DEPLOYMENT EVIDENCE</span>
              <h2 className="section-title">Hardware in Production, Assembly & Depot Fitment</h2>
              <p className="section-subtitle">
                Photographic documentation of concealed wire harnesses, coach body installations, and ultrasonic bumper mounts.
              </p>
            </div>

            <div className="grid-4">
              {deploymentPhotos.map((item, idx) => (
                <div key={idx} className="card" style={{ padding: '16px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '180px', backgroundColor: '#070a12', borderRadius: '8px', overflow: 'hidden', marginBottom: '14px' }}>
                    <img src={item.image} alt={item.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <span className="badge badge-slate" style={{ alignSelf: 'flex-start', fontSize: '0.6875rem', marginBottom: '6px' }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stress-Tested Against Harsh Realities (Figma Page 5 Section) */}
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '36px', marginBottom: '64px' }}>
            <div className="section-header">
              <span className="section-eyebrow">ENGINEERING BENCHMARKS</span>
              <h2 className="section-title">Stress-Tested Against the Harsh Realities of Indian Highways</h2>
              <p className="section-subtitle">
                Comparative performance demonstrating how supercapacitor hardware outlasts standard consumer electronics.
              </p>
            </div>

            <div className="grid-2">
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '24px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  Alternator Voltage Spike Clamping Curve
                </h4>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', marginBottom: '16px', lineHeight: 1.5 }}>
                  Heavy commercial diesel alternators generate transient load dumps up to 36V. Our transient suppressor clamps spikes to safe 12V level instantaneously.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#f0f9ff', borderRadius: '6px', fontSize: '0.8125rem', fontWeight: 700, color: '#0284c7' }}>
                  <span>Input Voltage Range: DC 9V – 36V</span>
                  <span>Clamping Response: &lt; 1 Microsecond</span>
                </div>
              </div>

              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '24px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  Windshield Temperature Tolerance
                </h4>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', marginBottom: '16px', lineHeight: 1.5 }}>
                  Under direct windshield sunlight, cabin temperatures frequently reach 70°C. Supercapacitors operate without swelling or emergency shutoff.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#ecfdf5', borderRadius: '6px', fontSize: '0.8125rem', fontWeight: 700, color: '#059669' }}>
                  <span>Supercapacitor Range: -20°C to +75°C</span>
                  <span>Lithium Battery Swell Threshold: 50°C</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Uncompressed Raw Test Clips & Software APKs (Figma Page 5 Bottom) */}
          <div>
            <div className="section-header">
              <span className="section-eyebrow">RAW SAMPLES & SOFTWARE</span>
              <h2 className="section-title">Download Raw Sample Footage & Telematics Software</h2>
              <p className="section-subtitle">
                Official software APKs and uncompressed raw video samples for commercial fleet software evaluation.
              </p>
            </div>

            <div className="grid-4">
              {siteConfig.applications.map((app) => (
                <div key={app.id} className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#f0f9ff', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    {app.fileType.includes('Windows') ? <Monitor size={22} /> : <Smartphone size={22} />}
                  </div>
                  <span className="badge badge-blue" style={{ alignSelf: 'flex-start', fontSize: '0.6875rem', marginBottom: '6px' }}>
                    {app.fileType}
                  </span>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                    {app.name}
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.45, marginBottom: '16px', flexGrow: 1 }}>
                    {app.desc}
                  </p>
                  <a
                    href={app.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%', fontSize: '0.75rem' }}
                  >
                    <Download size={13} />
                    <span>Download</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
