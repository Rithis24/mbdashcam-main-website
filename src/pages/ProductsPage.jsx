import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Filter, ShoppingBag, ArrowRight, Download, FileText, Check, ShieldCheck, Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

export default function ProductsPage({ onOpenOrder }) {
  const { categorySlug } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categorySlug || 'all');
  const [selectedVoltage, setSelectedVoltage] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryFilters = [
    { id: 'all', label: 'All Products (26)' },
    { id: 'bus', label: 'Bus & Commercial Dashcams', query: 'bus' },
    { id: 'car', label: 'Car & Light Vehicle Dashcams', query: 'car' },
    { id: 'bike', label: 'Motorcycle Dashcams', query: 'motorcycle' },
    { id: 'dms-adas', label: 'Driver Monitoring & ADAS', query: 'driver monitoring' },
    { id: 'sensors', label: 'Vehicle Sensors & Radar', query: 'sensors' },
    { id: 'storage', label: 'Memory & Storage', query: 'memory' },
    { id: 'accessories', label: 'Accessories & Spares', query: 'accessories' }
  ];

  useEffect(() => {
    if (categorySlug) {
      setSelectedCategory(categorySlug);
    }
  }, [categorySlug]);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const title = (product.title || product.name || '').toLowerCase();
      const desc = (product.shortDescription || product.fullDescription || '').toLowerCase();
      const cat = (product.category || '').toLowerCase();
      const query = searchQuery.toLowerCase();

      const matchesSearch = !searchQuery || title.includes(query) || desc.includes(query) || cat.includes(query);

      let matchesCategory = true;
      if (selectedCategory && selectedCategory !== 'all') {
        const filterObj = categoryFilters.find((f) => f.id === selectedCategory);
        if (filterObj && filterObj.query) {
          matchesCategory =
            cat.includes(filterObj.query.toLowerCase()) ||
            title.includes(filterObj.query.toLowerCase()) ||
            (selectedCategory === 'dms-adas' && (cat.includes('adas') || cat.includes('dms'))) ||
            (selectedCategory === 'bus' && cat.includes('bus')) ||
            (selectedCategory === 'car' && cat.includes('car')) ||
            (selectedCategory === 'bike' && (cat.includes('bike') || cat.includes('motorcycle')));
        }
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="products-page">
      {/* Header Banner */}
      <section
        style={{
          backgroundColor: '#070a12',
          color: '#ffffff',
          padding: '52px 0 40px 0',
          borderBottom: '1px solid #1e293b'
        }}
      >
        <div className="container">
          <span className="section-eyebrow section-eyebrow-dark">COMMERCIAL HARDWARE REPOSITORY</span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Automotive Dashcams, ADAS & Fleet Telematics Hardware
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '720px', lineHeight: 1.6, marginBottom: '24px' }}>
            Comprehensive lineup of dual-channel black boxes, AI neural fatigue cameras, heavy-duty reversing radar, and vibration-proof aviation cabling.
          </p>

          {/* Quick Filter Chips */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categoryFilters.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '6px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  backgroundColor: selectedCategory === cat.id ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                  color: selectedCategory === cat.id ? '#ffffff' : '#cbd5e1',
                  border: selectedCategory === cat.id ? '1px solid #0284c7' : '1px solid rgba(255, 255, 255, 0.14)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Layout: Left Sidebar Filters + Right Product Grid */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          {/* Mobile Filter Toggle */}
          <div className="mobile-catalog-filter-bar">
            <button
              type="button"
              className="btn-mobile-catalog-toggle"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              aria-label="Toggle filters"
            >
              <Filter size={16} />
              <span>{mobileFiltersOpen ? 'Hide Filters' : 'Filter & Search'}</span>
              {(selectedCategory !== 'all' || searchQuery) && (
                <span className="mobile-active-filter-badge">Active</span>
              )}
            </button>
            <span className="mobile-catalog-count">
              <strong>{filteredProducts.length}</strong> Products
            </span>
          </div>

          <div className="products-layout-grid">
            {/* Left Sidebar Filters */}
            <aside className={`products-sidebar-panel ${mobileFiltersOpen ? 'mobile-visible' : ''}`}>
              {/* Search Box */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Search Catalog
                </label>
                <div style={{ position: 'relative' }}>
                  <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    placeholder="Search model, spec..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-field"
                    style={{ paddingLeft: '34px', height: '38px', fontSize: '0.8125rem' }}
                  />
                </div>
              </div>

              {/* Category Filter Checkboxes */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em', marginBottom: '10px' }}>
                  Vehicle Categories
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem' }}>
                  {categoryFilters.slice(1).map((cat) => (
                    <label key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: selectedCategory === cat.id ? '#0284c7' : '#334155', fontWeight: selectedCategory === cat.id ? 700 : 500 }}>
                      <input
                        type="radio"
                        name="categoryFilter"
                        checked={selectedCategory === cat.id}
                        onChange={() => {
                          setSelectedCategory(cat.id);
                          setMobileFiltersOpen(false);
                        }}
                      />
                      <span>{cat.label.replace(/\s\(.*\)/, '')}</span>
                    </label>
                  ))}
                  <button
                    onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setMobileFiltersOpen(false); }}
                    style={{ marginTop: '4px', textAlign: 'left', color: '#0284c7', fontSize: '0.75rem', fontWeight: 700, padding: 0 }}
                  >
                    Reset Category Filter
                  </button>
                </div>
              </div>

              {/* Voltage Clamping */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Voltage Architecture
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.8125rem', color: '#475569' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Zap size={14} color="#0284c7" />
                    <span>DC 9V–36V Commercial (Buses & Trucks)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Zap size={14} color="#0284c7" />
                    <span>DC 12V–24V Passenger (Cars & SUVs)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Zap size={14} color="#0284c7" />
                    <span>5V Supercapacitor Isolated Feed</span>
                  </div>
                </div>
              </div>

              {/* Master Catalog PDF Box */}
              <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '8px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0284c7', fontWeight: 700, fontSize: '0.875rem', marginBottom: '6px' }}>
                  <FileText size={18} />
                  <span>Product Catalog PDF</span>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#0369a1', lineHeight: 1.45, marginBottom: '12px' }}>
                  Download complete specifications, pinouts, and cable configurations.
                </p>
                <a
                  href="/assets/docs/MB-Catalogue.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%', fontSize: '0.75rem' }}
                >
                  <Download size={13} />
                  <span>Download PDF</span>
                </a>
              </div>
            </aside>

            {/* Right Product Grid */}
            <div className="products-main-content">
              <div className="products-header-stats-bar">
                <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 600 }}>
                  Showing <strong style={{ color: '#0f172a' }}>{filteredProducts.length}</strong> Products
                </span>
                <span className="badge badge-emerald">
                  <Check size={12} />
                  <span>Immediate Fleet Delivery</span>
                </span>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="products-catalog-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onOpenOrder={onOpenOrder} />
                  ))}
                </div>
              ) : (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '48px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    No hardware found matching "{searchQuery}"
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '20px' }}>
                    Try searching for another term or click below to clear your filters.
                  </p>
                  <button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} className="btn btn-secondary">
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Banner on Product Page (Figma Page 2 Bottom) */}
          <div style={{ marginTop: '56px' }}>
            <div className="figma-cta-banner">
              <div>
                <span className="section-eyebrow section-eyebrow-dark">COMMERCIAL FLEET DISCOUNTS</span>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px', lineHeight: 1.2 }}>
                  Equipping a Fleet of 20+ Vehicles?
                </h2>
                <p style={{ color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: 1.55, maxWidth: '540px' }}>
                  We provide volume discounts, custom-length threaded aviation wiring harnesses, and on-site depot installation assistance across India.
                </p>
              </div>

              <div className="figma-cta-form-box">
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                  Request Volume Pricing
                </h4>
                <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '12px' }}>
                  Direct pricing quote for transport operators.
                </p>
                <form onSubmit={(e) => { e.preventDefault(); if (onOpenOrder) onOpenOrder(); }} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <input type="text" placeholder="Contact Name" required className="input-field" style={{ height: '36px', fontSize: '0.8125rem' }} />
                  <input type="tel" placeholder="Phone Number" required className="input-field" style={{ height: '36px', fontSize: '0.8125rem' }} />
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '38px', fontWeight: 700, fontSize: '0.8125rem' }}>
                    Request Fleet Pricing
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
