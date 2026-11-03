import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: 'Fleet Equipment Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Banner */}
      <section
        style={{
          backgroundColor: '#070a12',
          color: '#ffffff',
          padding: '56px 0',
          borderBottom: '1px solid #1e293b'
        }}
      >
        <div className="container">
          <div className="section-eyebrow section-eyebrow-dark">DIRECT FACTORY CONTACT</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Contact MB Automotives India
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '720px', lineHeight: 1.6 }}>
            Connect with our engineering and commercial sales division for fleet deployments, trade quotations, and depot installation support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Form */}
            <div>
              <span className="section-eyebrow">SEND US A MESSAGE</span>
              <h2 className="section-title">Commercial & Fleet Inquiry</h2>
              <p style={{ color: '#64748b', fontSize: '0.9375rem', marginBottom: '28px' }}>
                Fill out the form below and an automotive fleet advisor will review your vehicle specifications and respond promptly.
              </p>

              {formSubmitted ? (
                <div
                  style={{
                    backgroundColor: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    borderRadius: '12px',
                    padding: '36px',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px auto'
                    }}
                  >
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#065f46', marginBottom: '8px' }}>
                    Inquiry Received Successfully
                  </h3>
                  <p style={{ color: '#047857', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    Thank you for contacting MB Automotives India. Our regional fleet manager has received your inquiry and will contact you via phone or email within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', company: '', phone: '', email: '', subject: 'Fleet Equipment Inquiry', message: '' });
                    }}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="form-row-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Rajesh Kumar"
                        className="input-field"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Company / Fleet Name
                      </label>
                      <input
                        type="text"
                        placeholder="Transport Logistics Ltd."
                        className="input-field"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Phone Number *
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
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        className="input-field"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Inquiry Category *
                    </label>
                    <select
                      className="input-field"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    >
                      <option value="Fleet Equipment Inquiry">Commercial Fleet Equipment (Bus / Truck Black Box)</option>
                      <option value="AI DMS & ADAS Integration">AI DMS Driver Monitoring & ADAS Systems</option>
                      <option value="Dealership & Channel Partner">Dealership / OEM Channel Partnership</option>
                      <option value="Warranty & Technical Support">Depot Installation & Technical Support</option>
                      <option value="General Inquiry">General Product Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Message / Vehicle Specifications *
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Specify vehicle types (e.g., 25 commercial buses), camera channel requirements, or custom cable lengths..."
                      className="input-field"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start' }}>
                    <Send size={16} />
                    <span>Send Commercial Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Verified Facilities & Map */}
            <div>
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '32px',
                  marginBottom: '28px'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>
                  Facility Addresses & Telephones
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <MapPin size={20} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ fontSize: '0.9375rem', color: '#0f172a', display: 'block', marginBottom: '2px' }}>
                        Headquarters & Registered Facility:
                      </strong>
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                        14/145, Niton Estate, Club Road, Kotagiri, Tamil Nadu - 643217, India
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <MapPin size={20} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ fontSize: '0.9375rem', color: '#0f172a', display: 'block', marginBottom: '2px' }}>
                        Regional Operations Base:
                      </strong>
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                        Industrial Corridor, Guindy, Chennai, Tamil Nadu - 600032, India
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Phone size={20} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ fontSize: '0.9375rem', color: '#0f172a', display: 'block', marginBottom: '2px' }}>
                        Direct Telephones:
                      </strong>
                      <div style={{ fontSize: '0.875rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <a href="tel:+918489880444" style={{ color: '#0284c7' }}>Primary: +91-8489880444</a>
                        <a href="tel:+918220955966" style={{ color: '#0284c7' }}>Secondary: +91-8220955966</a>
                        <span>Office: +91-9360101871 / +91-9751141147</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Mail size={20} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ fontSize: '0.9375rem', color: '#0f172a', display: 'block', marginBottom: '2px' }}>
                        Email Correspondence:
                      </strong>
                      <div style={{ fontSize: '0.875rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <a href="mailto:mbautomotivesindia@gmail.com" style={{ color: '#0284c7' }}>
                          Corporate: mbautomotivesindia@gmail.com
                        </a>
                        <a href="mailto:metrobasketin@gmail.com" style={{ color: '#0284c7' }}>
                          Commercial: metrobasketin@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Clock size={20} color="#0284c7" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ fontSize: '0.9375rem', color: '#0f172a', display: 'block' }}>
                        Business Operations:
                      </strong>
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                        Monday – Saturday: 9:00 AM – 7:00 PM IST
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <iframe
                  title="MB Automotives India Kotagiri Facility Map"
                  src={siteConfig.locations[0].googleMapsEmbedUrl}
                  width="100%"
                  height="260"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
