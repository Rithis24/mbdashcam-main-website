import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, ShoppingBag } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
        textAlign: 'center',
        backgroundColor: '#ffffff'
      }}
    >
      <div style={{ maxWidth: '480px' }}>
        <div
          style={{
            fontSize: '5rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
            color: '#0284c7',
            lineHeight: 1,
            marginBottom: '16px'
          }}
        >
          404
        </div>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
          Page Not Found
        </h1>

        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px' }}>
          The requested page could not be located on the MB Automotives India website. Please use the navigation links below to return to our commercial hardware catalog.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/products" className="btn btn-secondary">
            <ShoppingBag size={16} />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
