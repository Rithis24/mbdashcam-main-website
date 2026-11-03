import React, { useEffect } from 'react';
import { X, Award, CheckCircle, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, certificate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(7, 10, 18, 0.82)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          maxWidth: '620px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
          border: '1px solid #cbd5e1',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f8fafc'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Award size={22} color="#0284c7" />
            <div>
              <span className="badge badge-amber" style={{ fontSize: '0.6875rem', marginBottom: '2px' }}>
                {certificate.badge || 'Accredited Certification'}
              </span>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                {certificate.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#f1f5f9',
              color: '#475569',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e2e8f0')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          {certificate.image && (
            <div
              style={{
                backgroundColor: '#070a12',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #e2e8f0'
              }}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                style={{
                  maxHeight: '340px',
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '6px'
                }}
              />
            </div>
          )}

          {certificate.certNumber && (
            <div
              style={{
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)',
                color: '#0369a1',
                fontWeight: 600,
                backgroundColor: '#f0f9ff',
                padding: '8px 12px',
                borderRadius: '6px',
                marginBottom: '16px',
                border: '1px solid #bae6fd'
              }}
            >
              STATUTORY ID / ACCREDITATION: {certificate.certNumber}
            </div>
          )}

          <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '20px' }}>
            {certificate.description}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              backgroundColor: '#ecfdf5',
              border: '1px solid #a7f3d0',
              borderRadius: '8px',
              color: '#065f46',
              fontSize: '0.8125rem'
            }}
          >
            <ShieldCheck size={18} color="#059669" />
            <span>Verified Public Record for MB Automotives India (A Unit of Metro Basket)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
