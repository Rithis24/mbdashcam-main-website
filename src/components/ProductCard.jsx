import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowUpRight, Check } from 'lucide-react';

export default function ProductCard({ product, onOpenOrder }) {
  const title = product.title || product.name;
  const image = product.thumbnail || product.image;
  const productId = product.slug || product.id;

  const specs = product.specs ? Object.entries(product.specs).slice(0, 2) : [];
  const features = Array.isArray(product.features) ? product.features.slice(0, 2) : [];

  return (
    <div
      className="card product-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Category & Status Tags */}
      <div
        style={{
          padding: '16px 16px 0 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 2
        }}
      >
        <span className="badge badge-blue">
          {product.category || 'Automotive Grade'}
        </span>
        <span className="badge badge-slate" style={{ fontSize: '0.6875rem' }}>
          9V–36V DC
        </span>
      </div>

      {/* Product Image Stage */}
      <Link to={`/product/${productId}`} className="product-card-media" style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </Link>

      {/* Product Body */}
      <div
        style={{
          padding: '16px 20px 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          borderTop: '1px solid #f1f5f9'
        }}
      >
        <h4
          style={{
            fontSize: '1.0625rem',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: '8px',
            lineHeight: 1.3
          }}
        >
          <Link to={`/product/${productId}`} style={{ color: '#0f172a' }}>
            {title}
          </Link>
        </h4>

        <p
          style={{
            fontSize: '0.8125rem',
            color: '#64748b',
            lineHeight: 1.5,
            marginBottom: '14px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {product.shortDescription || product.fullDescription}
        </p>

        {/* Technical Highlights */}
        <div style={{ marginBottom: '16px', marginTop: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {specs.map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  borderBottom: '1px dashed #e2e8f0',
                  paddingBottom: '4px'
                }}
              >
                <span style={{ color: '#64748b', fontWeight: 500 }}>{k}:</span>
                <span style={{ color: '#0f172a', fontWeight: 600, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
            {specs.length === 0 &&
              features.map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    color: '#334155'
                  }}
                >
                  <Check size={12} color="#0284c7" style={{ flexShrink: 0 }} />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{feat}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            paddingTop: '12px',
            borderTop: '1px solid #f1f5f9'
          }}
        >
          <Link
            to={`/product/${productId}`}
            className="btn btn-secondary btn-sm"
            style={{ width: '100%', fontSize: '0.75rem' }}
          >
            Specs & Docs
          </Link>
          <button
            onClick={() => onOpenOrder && onOpenOrder(product)}
            className="btn btn-primary btn-sm"
            style={{ width: '100%', fontSize: '0.75rem' }}
          >
            <ShoppingBag size={13} />
            <span>Place Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
