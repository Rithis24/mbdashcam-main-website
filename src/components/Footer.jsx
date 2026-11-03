import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronRight, FileText, ShieldCheck } from 'lucide-react';
import MbEmblem from './MbEmblem';

export default function Footer({ onOpenOrder }) {
  return (
    <footer className="figma-footer">
      <div className="container">
        <div className="figma-footer-grid">
          {/* Column 1: Company Profile */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <MbEmblem size={40} />
              <div>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.125rem', letterSpacing: '-0.01em' }}>
                  MB AUTOMOTIVES
                </div>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' }}>
                  Commercial Vehicle Safety & Telematics
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.84375rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '20px' }}>
              Manufacturer of commercial bus black boxes, edge AI driver monitoring systems (DMS), ADAS safety cameras, and high-precision vehicle radar engineered for Indian road logistics.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="badge badge-dark">ISO 9001:2015</span>
              <span className="badge badge-dark">MSME Udyam</span>
              <span className="badge badge-dark">Make in India</span>
              <span className="badge badge-dark">BIS IS 616</span>
            </div>
          </div>

          {/* Column 2: Commercial Equipment */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Commercial Hardware
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84375rem' }}>
              <li>
                <Link to="/products/bus" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Bus & Commercial Dashcams
                </Link>
              </li>
              <li>
                <Link to="/products/car" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Car & Light Vehicle Dashcams
                </Link>
              </li>
              <li>
                <Link to="/products/bike" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Motorcycle Dashcams
                </Link>
              </li>
              <li>
                <Link to="/products/dms-adas" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Driver Monitoring & ADAS
                </Link>
              </li>
              <li>
                <Link to="/products/sensors" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Vehicle Sensors & Radar
                </Link>
              </li>
              <li>
                <Link to="/products/storage" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Memory & Storage
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} color="#0284c7" /> Accessories & Spares
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Telematics & Standards */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Telematics & Standards
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84375rem' }}>
              <li><Link to="/certificates" style={{ color: '#94a3b8' }}>Certifications & Standards</Link></li>
              <li><Link to="/partners" style={{ color: '#94a3b8' }}>OEM & Channel Partners</Link></li>
              <li><Link to="/gallery" style={{ color: '#94a3b8' }}>Video & Field Vault</Link></li>
              <li><Link to="/downloads" style={{ color: '#94a3b8' }}>Brochures & APK Downloads</Link></li>
              <li><Link to="/about" style={{ color: '#94a3b8' }}>Corporate Overview & Mission</Link></li>
              <li><Link to="/contact" style={{ color: '#94a3b8' }}>Contact & Regional Facilities</Link></li>
              <li>
                <button
                  onClick={() => onOpenOrder && onOpenOrder()}
                  style={{ color: '#38bdf8', fontWeight: 600, padding: 0, textAlign: 'left', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <ChevronRight size={14} /> Request Fleet Quotation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Factory Facilities */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Factory Facilities
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={17} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#e2e8f0', display: 'block', marginBottom: '2px' }}>
                    Headquarters & Registered Facility:
                  </strong>
                  <span>14/145, Niton Estate, Club Road, Kotagiri, Tamil Nadu - 643217</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={17} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#e2e8f0', display: 'block', marginBottom: '2px' }}>
                    Regional Operations Base:
                  </strong>
                  <span>Industrial Corridor, Guindy, Chennai, Tamil Nadu - 600032</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#0284c7" style={{ flexShrink: 0 }} />
                <div>
                  <a href="tel:+918489880444" style={{ color: '#cbd5e1' }}>+91-8489880444</a> /{' '}
                  <a href="tel:+918220955966" style={{ color: '#cbd5e1' }}>+91-8220955966</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#0284c7" style={{ flexShrink: 0 }} />
                <div>
                  <a href="mailto:mbautomotivesindia@gmail.com" style={{ color: '#cbd5e1' }}>mbautomotivesindia@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="figma-footer-bottom">
          <div>
            © {new Date().getFullYear()} <strong>MB Automotives India</strong> (A Unit of Metro Basket). All rights reserved. Identity: <strong>mbdashcam</strong>.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/about" style={{ color: '#64748b' }}>Statutory Registrations</Link>
            <Link to="/certificates" style={{ color: '#64748b' }}>Quality Compliance</Link>
            <Link to="/contact" style={{ color: '#64748b' }}>Support & Warranty</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
