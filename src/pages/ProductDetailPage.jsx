import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ShoppingBag,
  Check,
  FileText,
  Download,
  Share2,
  CheckCircle,
  Truck,
  Phone,
  ShieldCheck
} from 'lucide-react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage({ onOpenOrder }) {
  const { productId } = useParams();

  const product =
    productsData.find(
      (p) => String(p.slug) === String(productId) || String(p.id) === String(productId)
    ) || productsData[0];

  const galleryImages =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.thumbnail || product.image];

  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  // Related products from same category
  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const title = product.title || product.name;

  return (
    <div className="product-detail-page">
      {/* Breadcrumb Navigation */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#64748b' }}>
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#0284c7', fontWeight: 600 }}>
            <ArrowLeft size={14} /> Back to Products
          </Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span style={{ color: '#0f172a', fontWeight: 600 }}>{title}</span>
        </div>
      </div>

      {/* Main Spec & Showcase Section */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '36px' }}>
        <div className="container">
          <div className="product-detail-grid">
            {/* Left: Gallery Stage */}
            <div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '36px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '360px',
                  boxShadow: 'var(--shadow-sm)',
                  marginBottom: '16px'
                }}
              >
                <img
                  src={activeImage}
                  alt={title}
                  style={{
                    maxHeight: '320px',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Thumbnails row */}
              {galleryImages.length > 1 && (
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '8px',
                        border: '2px solid',
                        borderColor: activeImage === img ? '#0284c7' : '#e2e8f0',
                        padding: '4px',
                        backgroundColor: '#ffffff',
                        cursor: 'pointer'
                      }}
                    >
                      <img src={img} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Technical Specifications & Actions */}
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span className="badge badge-blue">{product.category}</span>
                <span className="badge badge-slate">DC 9V–36V Commercial Protection</span>
                <span className="badge badge-emerald">Available for Commercial Deployment</span>
              </div>

              <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.375rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '16px' }}>
                {title}
              </h1>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                {product.fullDescription || product.shortDescription}
              </p>

              {/* Verified Features */}
              {product.features && product.features.length > 0 && (
                <div style={{ marginBottom: '28px' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: '#0f172a', letterSpacing: '0.05em', marginBottom: '12px' }}>
                    Key Engineering Features
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {product.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: '#334155' }}>
                        <Check size={16} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications Table */}
              {product.specs && Object.keys(product.specs).length > 0 && (
                <div style={{ marginBottom: '32px' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: '#0f172a', letterSpacing: '0.05em', marginBottom: '12px' }}>
                    Verified Hardware Specifications
                  </h4>
                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                    {Object.entries(product.specs).map(([key, value], idx) => (
                      <div
                        key={key}
                        className="product-spec-row"
                        style={{
                          backgroundColor: idx % 2 === 0 ? '#f8fafc' : '#ffffff',
                          borderBottom: idx < Object.keys(product.specs).length - 1 ? '1px solid #e2e8f0' : 'none'
                        }}
                      >
                        <span className="product-spec-key">{key}</span>
                        <span className="product-spec-val">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions Box */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '24px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 600, display: 'block' }}>
                      Pricing Structure
                    </span>
                    <strong style={{ fontSize: '1.125rem', color: '#0f172a' }}>
                      Place an Order / Dealer Pricing
                    </strong>
                  </div>
                  <span className="badge badge-blue">Official B2B Fleet Supply</span>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => onOpenOrder && onOpenOrder(product)}
                    className="btn btn-primary btn-lg"
                    style={{ flex: 1, minWidth: '200px' }}
                  >
                    <ShoppingBag size={18} />
                    <span>Place an Order / Request Quote</span>
                  </button>

                  <a
                    href="/assets/docs/MB-Catalogue.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg"
                  >
                    <Download size={16} />
                    <span>Spec Sheet (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="section section-subtle">
          <div className="container">
            <div style={{ marginBottom: '32px' }}>
              <span className="section-eyebrow">RELATED SYSTEMS</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>
                Similar Commercial Hardware
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '24px'
              }}
            >
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} onOpenOrder={onOpenOrder} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
