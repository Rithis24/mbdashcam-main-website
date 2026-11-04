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
  Video,
  Image,
  Calendar,
  HelpCircle,
  FileCode,
  Award,
  Users,
  ShieldAlert,
  Truck
} from 'lucide-react';
import MbEmblem from './MbEmblem';

export default function Header({ onOpenOrder }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'applications' | 'gallery' | 'resources'
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
    setActiveDropdown(null);
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
      label: 'Bus & Heavy Commercial',
      path: '/products/bus',
      desc: 'Dual 1080P road & cabin sync with DC 9V–36V surge clamping',
      icon: Bus
    },
    {
      label: 'Passenger Car Dashcams',
      path: '/products/car',
      desc: 'Compact smart incident recording with emergency G-Sensor lock',
      icon: Car
    },
    {
      label: 'Motorcycle & Two-Wheeler',
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
      label: 'High-Endurance Memory',
      path: '/products/storage',
      desc: 'High-endurance flash memory cards designed for continuous loop writes',
      icon: HardDrive
    },
    {
      label: 'Cables & Installation Spares',
      path: '/products/accessories',
      desc: 'Threaded 4-pin aviation cables, heavy brackets, and step-down modules',
      icon: Wrench
    },
    {
      label: 'Complete Fleet Systems',
      path: '/products',
      desc: 'Tailored 4G GPS telematics, multi-channel MDVR, and fleet integration',
      icon: ShieldCheck
    }
  ];

  const applications = [
    {
      label: 'School Bus Surveillance',
      path: '/applications/school-bus',
      desc: 'Student safety compliance, live GPS tracking, and SOS triggers',
      icon: Bus
    },
    {
      label: 'Public Transport & State STUs',
      path: '/applications/public-transport',
      desc: 'High-capacity intercity coaches and municipal transit fleets',
      icon: ShieldAlert
    },
    {
      label: 'Trucks & Long-Haul Logistics',
      path: '/applications/trucks-logistics',
      desc: 'Cargo security, reverse blind-spot elimination, and route telemetry',
      icon: Truck
    },
    {
      label: 'AI ADAS & DMS Fleet Safety',
      path: '/applications/fleet-safety',
      desc: 'Driver drowsiness detection, forward collision, and lane departure warnings',
      icon: Activity
    },
    {
      label: 'Passenger & Commercial Cars',
      path: '/applications/passenger-cars',
      desc: 'Ultra-HD road recording, parking surveillance, and app connectivity',
      icon: Car
    },
    {
      label: 'Motorcycle & Delivery Fleets',
      path: '/applications/two-wheelers',
      desc: 'IP67 waterproof dual cameras for last-mile delivery and patrol bikes',
      icon: Bike
    }
  ];

  const galleryLinks = [
    { label: 'Video Showcase & Field Vault', path: '/gallery/videos', icon: Video, desc: 'Real highway night footage and field demonstrations' },
    { label: 'Image & Installation Gallery', path: '/gallery/photos', icon: Image, desc: 'Factory fittings and bus chassis installations' },
    { label: 'Exhibitions & Industry Events', path: '/gallery/events', icon: Calendar, desc: 'Auto Expo and fleet safety conferences' }
  ];

  const resourceLinks = [
    { label: 'FAQs & Technical Support', path: '/resources', icon: HelpCircle, desc: 'Answers to fleet deployment and hardware questions' },
    { label: 'Brochures & APK Downloads', path: '/downloads', icon: FileCode, desc: 'Download official catalogues and mobile apps' },
    { label: 'Certificates & Homologations', path: '/certificates', icon: Award, desc: 'ISO 9001:2015, ARAI, BIS, and GeM certifications' },
    { label: 'Channel Partners & OEM Network', path: '/partners', icon: Users, desc: 'Verified system integrators and bus body builders' }
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
          <MbEmblem size={42} />
          <div className="brand-logo-text">
            <span className="brand-logo-primary">MB AUTOMOTIVES INDIA</span>
            <span className="brand-logo-subline">(A Unit of MetroBasket) • Your Safety, Our Priority</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav-links-list">
          <li>
            <Link to="/" className={`nav-link-item ${isActive('/') ? 'active' : ''}`}>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to="/about" className={`nav-link-item ${isActive('/about') ? 'active' : ''}`}>
              <span>About Us</span>
            </Link>
          </li>

          {/* Products Dropdown */}
          <li
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/products"
              className={`nav-link-item ${isActive('/products') ? 'active' : ''}`}
            >
              <span>Products</span>
              <ChevronDown
                size={14}
                className={`chevron-icon ${activeDropdown === 'products' ? 'rotated' : ''}`}
              />
            </Link>

            {activeDropdown === 'products' && (
              <div className="mega-dropdown-menu">
                <div className="mega-dropdown-header">
                  <span className="mega-dropdown-eyebrow">
                    COMMERCIAL VEHICLE SECURITY & TELEMATICS
                  </span>
                  <Link
                    to="/products"
                    className="mega-dropdown-all-link"
                    onClick={() => setActiveDropdown(null)}
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
                        onClick={() => setActiveDropdown(null)}
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

          {/* Applications Dropdown */}
          <li
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setActiveDropdown('applications')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/applications"
              className={`nav-link-item ${isActive('/applications') ? 'active' : ''}`}
            >
              <span>Applications</span>
              <ChevronDown
                size={14}
                className={`chevron-icon ${activeDropdown === 'applications' ? 'rotated' : ''}`}
              />
            </Link>

            {activeDropdown === 'applications' && (
              <div className="mega-dropdown-menu" style={{ maxWidth: '640px' }}>
                <div className="mega-dropdown-header">
                  <span className="mega-dropdown-eyebrow">
                    TARGET INDUSTRY & FLEET SOLUTIONS
                  </span>
                  <Link
                    to="/applications"
                    className="mega-dropdown-all-link"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>All Applications</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

                <div className="mega-dropdown-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  {applications.map((app, idx) => {
                    const IconComponent = app.icon;
                    return (
                      <Link
                        key={idx}
                        to={app.path}
                        className="mega-dropdown-item"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="mega-dropdown-icon-box">
                          <IconComponent size={17} />
                        </div>
                        <div className="mega-dropdown-content">
                          <div className="mega-dropdown-item-title">
                            {app.label}
                          </div>
                          <div className="mega-dropdown-item-desc">
                            {app.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </li>

          {/* Downloads */}
          <li>
            <Link to="/downloads" className={`nav-link-item ${isActive('/downloads') ? 'active' : ''}`}>
              <span>Downloads</span>
            </Link>
          </li>

          {/* Warranty Registration */}
          <li>
            <Link to="/warranty" className={`nav-link-item ${isActive('/warranty') ? 'active' : ''}`}>
              <span>Warranty</span>
            </Link>
          </li>

          {/* Gallery Dropdown */}
          <li
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setActiveDropdown('gallery')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/gallery"
              className={`nav-link-item ${isActive('/gallery') ? 'active' : ''}`}
            >
              <span>Gallery</span>
              <ChevronDown
                size={14}
                className={`chevron-icon ${activeDropdown === 'gallery' ? 'rotated' : ''}`}
              />
            </Link>

            {activeDropdown === 'gallery' && (
              <div className="mega-dropdown-menu" style={{ maxWidth: '480px' }}>
                <div className="mega-dropdown-header">
                  <span className="mega-dropdown-eyebrow">MEDIA & FIELD VAULT</span>
                </div>
                <div className="mega-dropdown-grid" style={{ gridTemplateColumns: '1fr' }}>
                  {galleryLinks.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={idx}
                        to={item.path}
                        className="mega-dropdown-item"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="mega-dropdown-icon-box">
                          <IconComponent size={17} />
                        </div>
                        <div className="mega-dropdown-content">
                          <div className="mega-dropdown-item-title">{item.label}</div>
                          <div className="mega-dropdown-item-desc">{item.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </li>

          {/* Resources Dropdown */}
          <li
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/resources"
              className={`nav-link-item ${isActive('/resources') ? 'active' : ''}`}
            >
              <span>Resources</span>
              <ChevronDown
                size={14}
                className={`chevron-icon ${activeDropdown === 'resources' ? 'rotated' : ''}`}
              />
            </Link>

            {activeDropdown === 'resources' && (
              <div className="mega-dropdown-menu" style={{ maxWidth: '520px' }}>
                <div className="mega-dropdown-header">
                  <span className="mega-dropdown-eyebrow">DOCUMENTATION & SUPPORT</span>
                </div>
                <div className="mega-dropdown-grid" style={{ gridTemplateColumns: '1fr' }}>
                  {resourceLinks.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={idx}
                        to={item.path}
                        className="mega-dropdown-item"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="mega-dropdown-icon-box">
                          <IconComponent size={17} />
                        </div>
                        <div className="mega-dropdown-content">
                          <div className="mega-dropdown-item-title">{item.label}</div>
                          <div className="mega-dropdown-item-desc">{item.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </li>

          {/* Contact Us */}
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
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>
            About Us (Since 2019)
          </Link>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/products') ? 'active' : ''}`}>
            Hardware Catalog (26 Products)
          </Link>
          <Link to="/applications" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/applications') ? 'active' : ''}`}>
            Applications (Bus, Truck, Car, Bike)
          </Link>
          <Link to="/warranty" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/warranty') ? 'active' : ''}`}>
            Warranty Registration
          </Link>
          <Link to="/certificates" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/certificates') ? 'active' : ''}`}>
            Certifications & Compliance
          </Link>
          <Link to="/partners" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/partners') ? 'active' : ''}`}>
            Channel Partners
          </Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/gallery') ? 'active' : ''}`}>
            Video & Field Vault
          </Link>
          <Link to="/downloads" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/downloads') ? 'active' : ''}`}>
            Downloads & Brochures
          </Link>
          <Link to="/resources" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/resources') ? 'active' : ''}`}>
            Resources & FAQs
          </Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact & Support
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
