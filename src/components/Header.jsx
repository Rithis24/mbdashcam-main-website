import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  FileText,
  ShoppingBag,
  ArrowRight,
  Bus,
  Car,
  Bike,
  Activity,
  Radio,
  HardDrive,
  Wrench,
  ShieldCheck,
  Video
} from 'lucide-react';
import MbEmblem from './MbEmblem';

export default function Header({ onOpenOrder }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const productCategories = [
    {
      label: 'Bus & Commercial Dashcams',
      path: '/products/bus',
      desc: 'Dual 1080P road & cabin sync with DC 9V–36V surge clamping',
      icon: Bus
    },
    {
      label: 'Car & Light Vehicle Dashcams',
      path: '/products/car',
      desc: 'Compact smart incident recording with emergency G-Sensor lock',
      icon: Car
    },
    {
      label: 'Motorcycle Dashcams',
      path: '/products/bike',
      desc: 'All-weather dual-lens systems engineered for two-wheeler chassis',
      icon: Bike
    },
    {
      label: 'Driver Monitoring & ADAS',
      path: '/products/dms-adas',
      desc: 'Neural computer vision tracking fatigue, eye-closure, and lane drift',
      icon: Activity
    },
    {
      label: 'Vehicle Sensors & Radar',
      path: '/products/sensors',
      desc: 'Heavy-duty ultrasonic blind-spot sensors and reverse radar',
      icon: Radio
    },
    {
      label: 'Memory & Storage',
      path: '/products/storage',
      desc: 'High-endurance flash memory cards designed for continuous loop writes',
      icon: HardDrive
    },
    {
      label: 'Accessories & Spares',
      path: '/products/accessories',
      desc: 'Threaded 4-pin aviation cables, heavy brackets, and power modules',
      icon: Wrench
    },
    {
      label: 'Custom Fleet Solutions',
      path: '/products',
      desc: 'Tailored 4G GPS telematics, multi-channel MDVR, and fleet integration',
      icon: ShieldCheck
    }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="header-main-nav">
        {/* Brand Identity */}
        <Link to="/" className="brand-logo-group">
          <MbEmblem size={40} />
          <div className="brand-logo-text">
            <span className="brand-logo-primary">MB AUTOMOTIVES</span>
            <span className="brand-logo-subline">Commercial Vehicle Safety & Telematics</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav-links-list">
          <li>
            <Link to="/" className={`nav-link-item ${isActive('/') ? 'active' : ''}`}>
              <span>Home</span>
            </Link>
          </li>

          {/* Products Dropdown */}
          <li
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <Link
              to="/products"
              className={`nav-link-item ${isActive('/products') ? 'active' : ''}`}
            >
              <span>Products</span>
              <ChevronDown
                size={14}
                className={`chevron-icon ${productsDropdownOpen ? 'rotated' : ''}`}
              />
            </Link>

            {productsDropdownOpen && (
              <div className="mega-dropdown-menu">
                <div className="mega-dropdown-header">
                  <span className="mega-dropdown-eyebrow">
                    COMMERCIAL AUTOMOTIVE HARDWARE
                  </span>
                  <Link
                    to="/products"
                    className="mega-dropdown-all-link"
                    onClick={() => setProductsDropdownOpen(false)}
                  >
                    <span>View All 26 Products</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

                <div className="mega-dropdown-grid">
                  {productCategories.map((cat, idx) => {
                    const IconComponent = cat.icon;
                    return (
                      <Link
                        key={idx}
                        to={cat.path}
                        className="mega-dropdown-item"
                        onClick={() => setProductsDropdownOpen(false)}
                      >
                        <div className="mega-dropdown-icon-box">
                          <IconComponent size={17} />
                        </div>
                        <div className="mega-dropdown-content">
                          <div className="mega-dropdown-item-title">
                            {cat.label}
                          </div>
                          <div className="mega-dropdown-item-desc">
                            {cat.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/certificates" className={`nav-link-item ${isActive('/certificates') ? 'active' : ''}`}>
              <span>Certificates</span>
            </Link>
          </li>

          <li>
            <Link to="/partners" className={`nav-link-item ${isActive('/partners') ? 'active' : ''}`}>
              <span>Partners</span>
            </Link>
          </li>

          <li>
            <Link to="/gallery" className={`nav-link-item ${isActive('/gallery') ? 'active' : ''}`}>
              <span>Gallery</span>
            </Link>
          </li>

          <li>
            <Link to="/downloads" className={`nav-link-item ${isActive('/downloads') ? 'active' : ''}`}>
              <span>Downloads</span>
            </Link>
          </li>

          <li>
            <Link to="/contact" className={`nav-link-item ${isActive('/contact') ? 'active' : ''}`}>
              <span>Contact</span>
            </Link>
          </li>
        </ul>

        {/* Action Group */}
        <div className="header-actions-group">
          <a
            href="/assets/docs/MB-Catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="header-catalog-btn"
          >
            <FileText size={14} />
            <span>Catalog</span>
          </a>

          <button
            onClick={() => onOpenOrder && onOpenOrder()}
            className="btn-header-cta"
          >
            <ShoppingBag size={14} />
            <span>Request Quote</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/products') ? 'active' : ''}`}>
            Hardware Catalog (26 Products)
          </Link>
          <Link to="/certificates" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/certificates') ? 'active' : ''}`}>
            Certifications & ARAI Standards
          </Link>
          <Link to="/partners" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/partners') ? 'active' : ''}`}>
            OEM Integrations & Channel Partners
          </Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/gallery') ? 'active' : ''}`}>
            Video & Field Vault
          </Link>
          <Link to="/downloads" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/downloads') ? 'active' : ''}`}>
            Brochures & APK Downloads
          </Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact & Facilities
          </Link>

          <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenOrder) onOpenOrder();
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <ShoppingBag size={16} />
              <span>Request Fleet Quote</span>
            </button>
            <a
              href="/assets/docs/MB-Catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center', backgroundColor: '#0f172a', color: '#38bdf8', borderColor: '#334155' }}
            >
              <FileText size={14} />
              <span>Download Catalog PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
