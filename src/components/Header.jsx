import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
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
  Truck,
  Phone
} from 'lucide-react';
import MbEmblem from './MbEmblem';

export default function Header({ onOpenOrder }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'applications' | 'gallery' | 'resources'
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null); // 'products' | 'applications' | 'gallery' | 'resources'
  const [scrolled, setScrolled] = useState(false);
  
  const headerRef = useRef(null);
  const location = useLocation();

  // Scroll detection for sticky header shadow and backdrop
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedSection(null);
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
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

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileSection = (name) => {
    setMobileExpandedSection((prev) => (prev === name ? null : name));
  };

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
    <header ref={headerRef} className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="header-main-nav" aria-label="Main Navigation">
        {/* Brand Identity on the Left */}
        <Link to="/" className="brand-logo-group" aria-label="MB Automotives India Homepage">
          <div className="brand-logo-emblem-wrap">
            <MbEmblem size={38} />
          </div>
          <div className="brand-logo-text">
            <span className="brand-logo-primary">MB AUTOMOTIVES INDIA</span>
            <div className="brand-logo-subline">
              <span className="brand-tagline">Your Safety, Our Priority</span>
              <span className="brand-unit-tag">• A Unit of MetroBasket</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links in One Row */}
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
              onClick={() => setActiveDropdown(null)}
              className={`nav-link-item ${isActive('/products') || activeDropdown === 'products' ? 'active' : ''}`}
            >
              <span>Products</span>
              <ChevronDown
                size={13}
                className={`chevron-icon ${activeDropdown === 'products' ? 'rotated' : ''}`}
              />
            </Link>

            {activeDropdown === 'products' && (
              <div className="mega-dropdown-menu mega-dropdown-products" role="menu">
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
                        role="menuitem"
                      >
                        <div className="mega-dropdown-icon-box">
                          <IconComponent size={16} />
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
              onClick={() => setActiveDropdown(null)}
              className={`nav-link-item ${isActive('/applications') || activeDropdown === 'applications' ? 'active' : ''}`}
            >
              <span>Applications</span>
              <ChevronDown
                size={13}
                className={`chevron-icon ${activeDropdown === 'applications' ? 'rotated' : ''}`}
              />
            </Link>

            {activeDropdown === 'applications' && (
              <div className="mega-dropdown-menu mega-dropdown-applications" role="menu">
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
                        role="menuitem"
                      >
                        <div className="mega-dropdown-icon-box">
                          <IconComponent size={16} />
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
              onClick={() => setActiveDropdown(null)}
              className={`nav-link-item ${isActive('/gallery') || activeDropdown === 'gallery' ? 'active' : ''}`}
            >
              <span>Gallery</span>
              <ChevronDown
                size={13}
                className={`chevron-icon ${activeDropdown === 'gallery' ? 'rotated' : ''}`}
              />
            </Link>

            {activeDropdown === 'gallery' && (
              <div className="mega-dropdown-menu mega-dropdown-gallery" role="menu">
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
                        role="menuitem"
                      >
                        <div className="mega-dropdown-icon-box">
                          <IconComponent size={16} />
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
              onClick={() => setActiveDropdown(null)}
              className={`nav-link-item ${isActive('/resources') || activeDropdown === 'resources' ? 'active' : ''}`}
            >
              <span>Resources</span>
              <ChevronDown
                size={13}
                className={`chevron-icon ${activeDropdown === 'resources' ? 'rotated' : ''}`}
              />
            </Link>

            {activeDropdown === 'resources' && (
              <div className="mega-dropdown-menu mega-dropdown-resources" role="menu">
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
                        role="menuitem"
                      >
                        <div className="mega-dropdown-icon-box">
                          <IconComponent size={16} />
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

          {/* Contact */}
          <li>
            <Link to="/contact" className={`nav-link-item ${isActive('/contact') ? 'active' : ''}`}>
              <span>Contact</span>
            </Link>
          </li>
        </ul>

        {/* Action Group on Right */}
        <div className="header-actions-group">
          <a
            href="/assets/docs/MB-Catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="header-catalog-btn"
            title="Download Master Catalogue PDF"
          >
            <FileText size={14} />
            <span>Catalog</span>
          </a>

          <button
            type="button"
            onClick={() => onOpenOrder && onOpenOrder()}
            className="btn-header-cta"
            title="Request Commercial Fleet Quotation"
          >
            <ShoppingBag size={14} />
            <span>Get Quote</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="mobile-nav-scroll-content">
            {/* Direct Links */}
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>

            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>
              About Us (Operating Since 2019)
            </Link>

            {/* Products Accordion */}
            <div className="mobile-nav-accordion-item">
              <div className="mobile-nav-accordion-header">
                <Link
                  to="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-nav-link ${isActive('/products') ? 'active' : ''}`}
                  style={{ flex: 1, paddingRight: '4px' }}
                >
                  Hardware Products (26 Models)
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMobileSection('products');
                  }}
                  className={`mobile-nav-accordion-toggle-btn ${mobileExpandedSection === 'products' ? 'expanded' : ''}`}
                  aria-label="Toggle Products Submenu"
                >
                  <ChevronDown
                    size={18}
                    className={`chevron-icon ${mobileExpandedSection === 'products' ? 'rotated' : ''}`}
                  />
                </button>
              </div>

              {mobileExpandedSection === 'products' && (
                <div className="mobile-nav-sublist">
                  <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-sublink highlight">
                    <span>View Complete Hardware Range (26 Models)</span>
                    <ArrowRight size={13} />
                  </Link>
                  {productCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      to={cat.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="mobile-nav-sublink"
                    >
                      <cat.icon size={15} color="#38bdf8" />
                      <span>{cat.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Applications Accordion */}
            <div className="mobile-nav-accordion-item">
              <div className="mobile-nav-accordion-header">
                <Link
                  to="/applications"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-nav-link ${isActive('/applications') ? 'active' : ''}`}
                  style={{ flex: 1, paddingRight: '4px' }}
                >
                  Applications & Fleet Solutions
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMobileSection('applications');
                  }}
                  className={`mobile-nav-accordion-toggle-btn ${mobileExpandedSection === 'applications' ? 'expanded' : ''}`}
                  aria-label="Toggle Applications Submenu"
                >
                  <ChevronDown
                    size={18}
                    className={`chevron-icon ${mobileExpandedSection === 'applications' ? 'rotated' : ''}`}
                  />
                </button>
              </div>

              {mobileExpandedSection === 'applications' && (
                <div className="mobile-nav-sublist">
                  <Link to="/applications" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-sublink highlight">
                    <span>All Commercial Fleet Solutions</span>
                    <ArrowRight size={13} />
                  </Link>
                  {applications.map((app, idx) => (
                    <Link
                      key={idx}
                      to={app.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="mobile-nav-sublink"
                    >
                      <app.icon size={15} color="#38bdf8" />
                      <span>{app.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Downloads */}
            <Link to="/downloads" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/downloads') ? 'active' : ''}`}>
              Downloads (Catalogues & Docs)
            </Link>

            {/* Warranty */}
            <Link to="/warranty" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/warranty') ? 'active' : ''}`}>
              Warranty Registration & Status
            </Link>

            {/* Gallery Accordion */}
            <div className="mobile-nav-accordion-item">
              <div className="mobile-nav-accordion-header">
                <Link
                  to="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-nav-link ${isActive('/gallery') ? 'active' : ''}`}
                  style={{ flex: 1, paddingRight: '4px' }}
                >
                  Media & Field Gallery
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMobileSection('gallery');
                  }}
                  className={`mobile-nav-accordion-toggle-btn ${mobileExpandedSection === 'gallery' ? 'expanded' : ''}`}
                  aria-label="Toggle Gallery Submenu"
                >
                  <ChevronDown
                    size={18}
                    className={`chevron-icon ${mobileExpandedSection === 'gallery' ? 'rotated' : ''}`}
                  />
                </button>
              </div>

              {mobileExpandedSection === 'gallery' && (
                <div className="mobile-nav-sublist">
                  {galleryLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="mobile-nav-sublink"
                    >
                      <item.icon size={15} color="#38bdf8" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div className="mobile-nav-accordion-item">
              <div className="mobile-nav-accordion-header">
                <Link
                  to="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-nav-link ${isActive('/resources') ? 'active' : ''}`}
                  style={{ flex: 1, paddingRight: '4px' }}
                >
                  Resources & Support
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMobileSection('resources');
                  }}
                  className={`mobile-nav-accordion-toggle-btn ${mobileExpandedSection === 'resources' ? 'expanded' : ''}`}
                  aria-label="Toggle Resources Submenu"
                >
                  <ChevronDown
                    size={18}
                    className={`chevron-icon ${mobileExpandedSection === 'resources' ? 'rotated' : ''}`}
                  />
                </button>
              </div>

              {mobileExpandedSection === 'resources' && (
                <div className="mobile-nav-sublist">
                  {resourceLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="mobile-nav-sublink"
                    >
                      <item.icon size={15} color="#38bdf8" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Certificates & Partners Direct Links */}
            <Link to="/certificates" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/certificates') ? 'active' : ''}`}>
              Certifications & Homologation
            </Link>

            <Link to="/partners" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/partners') ? 'active' : ''}`}>
              Channel Partners & OEM Network
            </Link>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact Us & Facilities
            </Link>

            {/* Drawer Actions & Contact */}
            <div className="mobile-nav-drawer-actions">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenOrder) onOpenOrder();
                }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <ShoppingBag size={16} />
                <span>Request Fleet Quotation</span>
              </button>

              <a
                href="/assets/docs/MB-Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', backgroundColor: '#0f172a', color: '#38bdf8', borderColor: '#334155' }}
              >
                <FileText size={15} />
                <span>Download Master Catalogue (PDF)</span>
              </a>

              <div className="mobile-nav-contact-strip">
                <a href="tel:+919360101871" className="mobile-nav-call-link">
                  <Phone size={14} color="#38bdf8" />
                  <span>Sales: +91 93601 01871</span>
                </a>
                <span className="mobile-nav-divider">•</span>
                <span className="mobile-nav-hours">Since 2019</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
