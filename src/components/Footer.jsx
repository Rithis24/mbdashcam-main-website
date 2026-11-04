import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, ChevronRight, FileText, ShieldCheck, Award } from 'lucide-react';
import MbEmblem from './MbEmblem';

export default function Footer({ onOpenOrder }) {
  return (
    <footer className="figma-footer">
      <div className="container">
        <div className="figma-footer-grid">
          {/* Column 1: Company Profile */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <MbEmblem size={44} />
              <div>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.125rem', letterSpacing: '-0.01em' }}>
                  MB AUTOMOTIVES INDIA
                </div>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: '#0284c7', fontWeight: 600, letterSpacing: '0.05em' }}>
                  A Unit of MetroBasket • Since 2019
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.84375rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '14px' }}>
              Your Safety, Our Priority. Manufacturer and system integrator of intelligent bus black boxes, edge AI driver monitoring (DMS), ADAS safety cameras, and high-precision vehicle telemetry engineered for Indian road environments.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <span className="badge badge-dark">ISO 9001:2015</span>
              <span className="badge badge-dark">MSME Udyam</span>
              <span className="badge badge-dark">Make in India</span>
              <span className="badge badge-dark">BIS IS 616</span>
              <span className="badge badge-dark">GeM Registered</span>
            </div>
          </div>

          {/* Column 2: Commercial Equipment */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Hardware Catalog
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84375rem' }}>
              <li>
                <Link to="/products/bus" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Bus & Commercial Dashcams
                </Link>
              </li>
              <li>
                <Link to="/products/car" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Car Dash Cameras
                </Link>
              </li>
              <li>
                <Link to="/products/bike" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Bike Dash Cameras
                </Link>
              </li>
              <li>
                <Link to="/products/dms-adas" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> AI DMS & ADAS Systems
                </Link>
              </li>
              <li>
                <Link to="/products/sensors" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Reverse Sensors & Radar
                </Link>
              </li>
              <li>
                <Link to="/products/storage" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> High-Endurance Memory
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Aviation Cables & Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Telematics & Resources */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Fleet & Resources
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84375rem' }}>
              <li>
                <Link to="/applications" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Applications & Fleet Solutions
                </Link>
              </li>
              <li>
                <Link to="/warranty" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Online Warranty Registration
                </Link>
              </li>
              <li>
                <Link to="/resources" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> FAQs & Technical Documents
                </Link>
              </li>
              <li>
                <Link to="/certificates" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Quality & ARAI Standards
                </Link>
              </li>
              <li>
                <Link to="/partners" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> OEM & Channel Partners
                </Link>
              </li>
              <li>
                <Link to="/gallery" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Video & Field Vault
                </Link>
              </li>
              <li>
                <Link to="/downloads" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Catalog & Firmware Downloads
                </Link>
              </li>
              <li>
                <button
                  onClick={() => onOpenOrder && onOpenOrder()}
                  style={{ color: '#38bdf8', fontWeight: 600, padding: 0, textAlign: 'left', display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <ChevronRight size={14} /> Request Fleet Quotation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Factory Facilities */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Corporate & Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={17} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#e2e8f0', display: 'block', marginBottom: '2px' }}>
                    Registered Facility:
                  </strong>
                  <span style={{ color: '#94a3b8', lineHeight: 1.5 }}>
                    14/145, Niton Estate, Club Road, Kotagiri, The Nilgiris, Tamil Nadu - 643217, India.
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#0284c7" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Sales & Institutional:</div>
                  <a href="tel:+919360101871" style={{ color: '#cbd5e1' }}>+91 93601 01871</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#0284c7" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Service & Warranty:</div>
                  <a href="tel:+918838100080" style={{ color: '#cbd5e1' }}>+91 88381 00080</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#0284c7" style={{ flexShrink: 0 }} />
                <div>
                  <a href="mailto:sales@mbdashcam.com" style={{ color: '#cbd5e1', display: 'block' }}>sales@mbdashcam.com</a>
                  <a href="mailto:support@mbdashcam.com" style={{ color: '#94a3b8', display: 'block' }}>support@mbdashcam.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Globe size={16} color="#0284c7" style={{ flexShrink: 0 }} />
                <div>
                  <a href="https://www.mbdashcam.com" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1' }}>www.mbdashcam.com</a>
                  {' • '}
                  <a href="https://www.metrobasket.in" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}>www.metrobasket.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="figma-footer-bottom">
          <div>
            © {new Date().getFullYear()} <strong>MB AUTOMOTIVES INDIA</strong> (A Unit of MetroBasket). Operating Since 2019. Tagline: <em>"Your Safety, Our Priority"</em>. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/about" style={{ color: '#64748b' }}>Statutory Registrations</Link>
            <Link to="/certificates" style={{ color: '#64748b' }}>Quality Compliance</Link>
            <Link to="/warranty" style={{ color: '#64748b' }}>Warranty Policy</Link>
            <Link to="/contact" style={{ color: '#64748b' }}>Support & Enquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
