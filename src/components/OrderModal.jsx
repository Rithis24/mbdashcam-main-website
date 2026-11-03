import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Package, Truck, Phone, Mail, Building, FileText } from 'lucide-react';
import productsData from '../data/products.json';

export default function OrderModal({ isOpen, onClose, preselectedProduct }) {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '1-5 Units',
    customerName: '',
    companyName: '',
    phone: '',
    email: '',
    city: '',
    vehicleType: 'Commercial Bus / Coach',
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({
        ...prev,
        productName: preselectedProduct.title || preselectedProduct.name || ''
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        productName: prev.productName || (productsData[0]?.title || '')
      }));
    }
  }, [preselectedProduct, isOpen]);

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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = 'MB-ORD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderRef(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

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
          maxWidth: '580px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
          border: '1px solid #cbd5e1'
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
          <div>
            <span className="section-eyebrow" style={{ fontSize: '0.6875rem', marginBottom: '2px' }}>
              B2B & FLEET QUOTATION
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Place an Order / Request Quote
            </h3>
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
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 8px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#ecfdf5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  border: '2px solid #a7f3d0'
                }}
              >
                <CheckCircle size={36} />
              </div>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Quotation Request Logged
              </h3>
              <div
                style={{
                  fontSize: '0.9375rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#0284c7',
                  fontWeight: 700,
                  backgroundColor: '#f0f9ff',
                  display: 'inline-block',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  border: '1px solid #bae6fd',
                  marginBottom: '16px'
                }}
              >
                REFERENCE ID: {orderRef}
              </div>
              <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Thank you for your order request for <strong>{formData.productName}</strong>. Our commercial telematics team at MB Automotives India will review your vehicle requirements and dispatch the official price quotation and warranty specifications to your email/phone within 24 hours.
              </p>
              <button onClick={handleReset} className="btn btn-primary" style={{ minWidth: '160px' }}>
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Target Hardware Model *
                </label>
                <select
                  className="input-field"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  required
                >
                  {productsData.map((p) => (
                    <option key={p.id} value={p.title || p.name}>
                      {p.title || p.name} — ({p.category})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row-2">
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Deployment Quantity *
                  </label>
                  <select
                    className="input-field"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    required
                  >
                    <option value="1-5 Units">1 – 5 Units (Evaluation / Pilot)</option>
                    <option value="6-20 Units">6 – 20 Units (Fleet Fleet Depot)</option>
                    <option value="21-50 Units">21 – 50 Units (Commercial Transit)</option>
                    <option value="50+ Units">50+ Units (Enterprise OEM)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Vehicle Category *
                  </label>
                  <select
                    className="input-field"
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                    required
                  >
                    <option value="Commercial Bus / Coach">Commercial Bus / Intercity Coach</option>
                    <option value="Freight Truck / Trailer">Freight Truck / Heavy Trailer</option>
                    <option value="School / Institutional Bus">School / Institutional Bus</option>
                    <option value="Car / Passenger Vehicle">Car / SUV / Passenger Fleet</option>
                    <option value="Motorcycle / Delivery Fleet">Motorcycle / Delivery Two-Wheeler</option>
                  </select>
                </div>
              </div>

              <div className="form-row-2">
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="input-field"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Company / Fleet Name
                  </label>
                  <input
                    type="text"
                    placeholder="E.g., Southern Transit Lines"
                    className="input-field"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91-XXXXXXXXXX"
                    className="input-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="input-field"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  City / Depot Location *
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.g., Chennai / Coimbatore / Bangalore"
                  className="input-field"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Specific Requirements (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Need custom 12m aviation cable, GPS tracking, DMS fatigue camera..."
                  className="input-field"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ flex: 1 }}>
                  Submit Order / Quote Request
                </button>
                <button type="button" onClick={onClose} className="btn btn-secondary btn-lg">
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
