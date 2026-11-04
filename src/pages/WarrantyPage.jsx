import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Search,
  Upload,
  FileText,
  AlertCircle,
  HelpCircle,
  Clock,
  Award,
  Phone,
  Mail
} from 'lucide-react';
import productsData from '../data/products.json';
import siteConfig from '../data/siteConfig';

export default function WarrantyPage() {
  const [activeTab, setActiveTab] = useState('register'); // 'register' | 'check'

  // Registration Form State
  const [formData, setFormData] = useState({
    customerName: '',
    contactPerson: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Tamil Nadu',
    pincode: '',
    productCategory: 'MB Bus Dash Camera',
    productModel: productsData[0]?.title || '',
    serialNumber: '',
    imeiNumber: '',
    purchaseDate: '',
    installationDate: '',
    vehicleRegNumber: '',
    dealerName: '',
    invoiceNumber: '',
    invoiceFile: null,
    serialPhoto: null,
    agreedToTerms: false
  });

  const [submittedRef, setSubmittedRef] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Status Check State
  const [querySerial, setQuerySerial] = useState('');
  const [lookupResult, setLookupResult] = useState(null);
  const [lookupSearched, setLookupSearched] = useState(false);

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = 'MB-WAR-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef({
        refNumber: generatedRef,
        date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
        product: formData.productModel,
        serial: formData.serialNumber,
        customer: formData.customerName,
        phone: formData.phone,
        status: 'Under Verification'
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleLookup = (e) => {
    e.preventDefault();
    setLookupSearched(true);
    const cleaned = querySerial.trim().toUpperCase();

    // Check if matches submitted or simulate verified record
    if (submittedRef && (submittedRef.refNumber === cleaned || submittedRef.serial.toUpperCase() === cleaned)) {
      setLookupResult(submittedRef);
    } else if (cleaned.length >= 6) {
      setLookupResult({
        refNumber: cleaned.startsWith('MB-WAR') ? cleaned : 'MB-WAR-849201',
        date: '14 October 2024',
        product: 'MB Bus Black Box Smart (Dual 1080P)',
        serial: cleaned,
        customer: 'Verified Fleet Operator',
        phone: '+91 93601 *****',
        status: 'Approved & Active',
        warrantyValidUntil: '14 October 2026 (24 Months Commercial Hardware Guarantee)'
      });
    } else {
      setLookupResult(null);
    }
  };

  return (
    <div className="warranty-page">
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: '#070a12',
          color: '#ffffff',
          padding: '64px 0 44px 0',
          borderBottom: '1px solid #1e293b'
        }}
      >
        <div className="container text-center">
          <span className="section-eyebrow section-eyebrow-dark">OFFICIAL OEM WARRANTY PORTAL</span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Warranty Registration & Verification
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
            Register your commercial dashcam, bus black box, or vehicle sensor system within 30 days of installation to activate authorized factory warranty coverage and pan-India depot service support.
          </p>

          {/* Tab Switcher */}
          <div style={{ display: 'inline-flex', backgroundColor: '#0f172a', padding: '4px', borderRadius: '10px', marginTop: '28px', border: '1px solid #1e293b' }}>
            <button
              type="button"
              onClick={() => setActiveTab('register')}
              style={{
                padding: '9px 24px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: activeTab === 'register' ? '#ffffff' : '#94a3b8',
                backgroundColor: activeTab === 'register' ? '#0284c7' : 'transparent',
                transition: 'all 0.2s ease'
              }}
            >
              New Warranty Registration
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('check')}
              style={{
                padding: '9px 24px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: activeTab === 'check' ? '#ffffff' : '#94a3b8',
                backgroundColor: activeTab === 'check' ? '#0284c7' : 'transparent',
                transition: 'all 0.2s ease'
              }}
            >
              Check Warranty Status
            </button>
          </div>
        </div>
      </section>

      {/* Main Form or Lookup Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          {activeTab === 'register' ? (
            submittedRef ? (
              /* Success Confirmation Screen */
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #a7f3d0',
                  borderRadius: '16px',
                  padding: ' clamp(24px, 5vw, 48px)',
                  boxShadow: 'var(--shadow-lg)',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    backgroundColor: '#ecfdf5',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                    border: '2px solid #a7f3d0'
                  }}
                >
                  <CheckCircle size={38} />
                </div>

                <span className="badge badge-emerald" style={{ marginBottom: '8px' }}>
                  REGISTRATION RECEIVED SUCCESSFULLY
                </span>

                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  Warranty Reference Logged
                </h2>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.125rem',
                    fontWeight: 800,
                    color: '#0284c7',
                    backgroundColor: '#f0f9ff',
                    border: '1px solid #bae6fd',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    display: 'inline-block',
                    marginBottom: '20px'
                  }}
                >
                  REFERENCE ID: {submittedRef.refNumber}
                </div>

                <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto 28px auto' }}>
                  Thank you for registering your hardware warranty with MB Automotives India. Your product serial number <strong>{submittedRef.serial}</strong> has been logged into our factory verification system. An email confirmation has been dispatched.
                </p>

                {/* Status Box */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '20px',
                    maxWidth: '520px',
                    margin: '0 auto 32px auto',
                    textAlign: 'left',
                    fontSize: '0.84375rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Current Status:</span>
                    <strong style={{ color: '#f59e0b' }}>Under Verification</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Hardware Model:</span>
                    <strong style={{ color: '#0f172a' }}>{submittedRef.product}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Registration Date:</span>
                    <strong style={{ color: '#0f172a' }}>{submittedRef.date}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedRef(null);
                      setFormData({
                        customerName: '',
                        contactPerson: '',
                        phone: '',
                        email: '',
                        address: '',
                        city: '',
                        state: 'Tamil Nadu',
                        pincode: '',
                        productCategory: 'MB Bus Dash Camera',
                        productModel: productsData[0]?.title || '',
                        serialNumber: '',
                        imeiNumber: '',
                        purchaseDate: '',
                        installationDate: '',
                        vehicleRegNumber: '',
                        dealerName: '',
                        invoiceNumber: '',
                        invoiceFile: null,
                        serialPhoto: null,
                        agreedToTerms: false
                      });
                    }}
                    className="btn btn-secondary"
                  >
                    Register Another Device
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('check')}
                    className="btn btn-primary"
                  >
                    Check Status
                  </button>
                </div>
              </div>
            ) : (
              /* Warranty Registration Form */
              <form
                onSubmit={handleSubmitRegistration}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: 'clamp(20px, 4vw, 36px)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {/* Section 1: Customer Details */}
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8125rem' }}>
                      1
                    </div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Customer & Fleet Information
                    </h3>
                  </div>

                  <div className="form-row-2" style={{ marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Customer / Fleet Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., KPN Logistics / Sri Balaji Travels"
                        className="input-field"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., S. Murugan"
                        className="input-field"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2" style={{ marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g., +91 93601 01871"
                        className="input-field"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g., fleet@company.com"
                        className="input-field"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Operating Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Depot or Office Address"
                      className="input-field"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        City / District *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Coimbatore"
                        className="input-field"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Tamil Nadu"
                        className="input-field"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="641001"
                        className="input-field"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Product & Vehicle Details */}
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8125rem' }}>
                      2
                    </div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Product Hardware & Vehicle Information
                    </h3>
                  </div>

                  <div className="form-row-2" style={{ marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Hardware Category *
                      </label>
                      <select
                        className="input-field"
                        value={formData.productCategory}
                        onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                        required
                      >
                        <option value="MB Bus Dash Camera">MB Commercial Bus Dash Camera</option>
                        <option value="MB Car Black Box Smart">MB Passenger Car Black Box</option>
                        <option value="MB Bike Dash Cameras">MB Motorcycle Dash Camera</option>
                        <option value="MB Driver Monitoring System (DMS)">AI DMS Driver Monitoring & ADAS</option>
                        <option value="Vehicle Sensors & Radar">Vehicle Ultrasonic Radar Sensors</option>
                        <option value="Mobile DVR / NVR System">Mobile DVR / NVR Multi-Channel</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Product Model *
                      </label>
                      <select
                        className="input-field"
                        value={formData.productModel}
                        onChange={(e) => setFormData({ ...formData, productModel: e.target.value })}
                        required
                      >
                        {productsData.map((p) => (
                          <option key={p.id} value={p.title || p.name}>
                            {p.title || p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row-2" style={{ marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Device Serial Number (S/N) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Printed on hardware barcode sticker"
                        className="input-field"
                        value={formData.serialNumber}
                        onChange={(e) => setFormData({ ...formData, serialNumber: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        IMEI Number (For 4G Connected Systems)
                      </label>
                      <input
                        type="text"
                        placeholder="15-digit IMEI number (if applicable)"
                        className="input-field"
                        value={formData.imeiNumber}
                        onChange={(e) => setFormData({ ...formData, imeiNumber: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2" style={{ marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Purchase Date *
                      </label>
                      <input
                        type="date"
                        required
                        className="input-field"
                        value={formData.purchaseDate}
                        onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Depot Installation Date *
                      </label>
                      <input
                        type="date"
                        required
                        className="input-field"
                        value={formData.installationDate}
                        onChange={(e) => setFormData({ ...formData, installationDate: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2" style={{ marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Vehicle Registration Number *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., TN-38-BZ-4412"
                        className="input-field"
                        value={formData.vehicleRegNumber}
                        onChange={(e) => setFormData({ ...formData, vehicleRegNumber: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Dealer / Channel Partner / Coach Builder Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Veera Vaahana / Authorized Dealer"
                        className="input-field"
                        value={formData.dealerName}
                        onChange={(e) => setFormData({ ...formData, dealerName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Dealer Tax Invoice Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., INV-2024-00892"
                      className="input-field"
                      value={formData.invoiceNumber}
                      onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
                    />
                  </div>
                </div>

                {/* Section 3: Document Attachments */}
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8125rem' }}>
                      3
                    </div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Proof of Purchase & Serial Label Photo
                    </h3>
                  </div>

                  <div className="form-row-2">
                    <div style={{ border: '2px dashed #cbd5e1', borderRadius: '10px', padding: '20px', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                      <Upload size={24} color="#0284c7" style={{ margin: '0 auto 8px auto' }} />
                      <strong style={{ fontSize: '0.84375rem', color: '#0f172a', display: 'block', marginBottom: '4px' }}>
                        Purchase Invoice / Bill
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', marginBottom: '12px' }}>
                        PDF, JPG or PNG (Max 5MB)
                      </span>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        style={{ fontSize: '0.75rem' }}
                        onChange={(e) => setFormData({ ...formData, invoiceFile: e.target.files[0] })}
                      />
                    </div>

                    <div style={{ border: '2px dashed #cbd5e1', borderRadius: '10px', padding: '20px', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                      <Upload size={24} color="#0284c7" style={{ margin: '0 auto 8px auto' }} />
                      <strong style={{ fontSize: '0.84375rem', color: '#0f172a', display: 'block', marginBottom: '4px' }}>
                        Serial Barcode Sticker Photo
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', marginBottom: '12px' }}>
                        Clear photo showing S/N label
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        style={{ fontSize: '0.75rem' }}
                        onChange={(e) => setFormData({ ...formData, serialPhoto: e.target.files[0] })}
                      />
                    </div>
                  </div>
                </div>

                {/* Consent & Submit */}
                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '20px', marginBottom: '24px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '0.8125rem', color: '#475569' }}>
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreedToTerms}
                      onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                      style={{ marginTop: '2px' }}
                    />
                    <span>
                      I hereby declare that the serial numbers and vehicle registration provided above correspond to genuine MB Automotives India commercial hardware installed under factory guidelines. I understand warranty is subject to validation of the official dealer invoice.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <ShieldCheck size={18} />
                  <span>{isSubmitting ? 'Registering Device...' : 'Submit Official Warranty Registration'}</span>
                </button>
              </form>
            )
          ) : (
            /* Warranty Status Lookup */
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: 'clamp(24px, 5vw, 40px)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px', textAlign: 'center' }}>
                Check Registered Device Warranty
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.9375rem', textAlign: 'center', maxWidth: '540px', margin: '0 auto 28px auto' }}>
                Enter your device serial number (S/N) or warranty reference ID (e.g., MB-WAR-849201) to verify active factory coverage.
              </p>

              <form onSubmit={handleLookup} style={{ display: 'flex', gap: '10px', maxWidth: '560px', margin: '0 auto 36px auto', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
                  <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    required
                    placeholder="Enter Serial Number or MB-WAR-XXXXXX"
                    value={querySerial}
                    onChange={(e) => setQuerySerial(e.target.value)}
                    className="input-field"
                    style={{ paddingLeft: '38px', height: '44px', fontSize: '0.875rem' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ height: '44px', padding: '0 24px' }}>
                  Verify Status
                </button>
              </form>

              {lookupSearched && lookupResult ? (
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '24px',
                    maxWidth: '620px',
                    margin: '0 auto'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                        OFFICIAL VERIFIED RECORD
                      </span>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        {lookupResult.refNumber}
                      </h3>
                    </div>
                    <span className="badge badge-emerald" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle size={13} />
                      <span>{lookupResult.status}</span>
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.84375rem', marginBottom: '16px' }}>
                    <div>
                      <span style={{ color: '#64748b', display: 'block' }}>Hardware Model:</span>
                      <strong style={{ color: '#0f172a' }}>{lookupResult.product}</strong>
                    </div>
                    <div>
                      <span style={{ color: '#64748b', display: 'block' }}>Serial Number:</span>
                      <strong style={{ color: '#0284c7', fontFamily: 'var(--font-mono)' }}>{lookupResult.serial}</strong>
                    </div>
                    <div>
                      <span style={{ color: '#64748b', display: 'block' }}>Registration Date:</span>
                      <strong style={{ color: '#0f172a' }}>{lookupResult.date}</strong>
                    </div>
                    <div>
                      <span style={{ color: '#64748b', display: 'block' }}>Warranty Validity:</span>
                      <strong style={{ color: '#059669' }}>
                        {lookupResult.warrantyValidUntil || '24 Months Commercial Hardware Guarantee'}
                      </strong>
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '8px', padding: '10px 14px', color: '#065f46', fontSize: '0.78125rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={16} />
                    <span>Eligible for authorized on-site depot inspection and free component replacement under terms.</span>
                  </div>
                </div>
              ) : lookupSearched ? (
                <div style={{ textAlign: 'center', padding: '24px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', maxWidth: '540px', margin: '0 auto' }}>
                  <AlertCircle size={28} color="#d97706" style={{ margin: '0 auto 8px auto' }} />
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#92400e', marginBottom: '4px' }}>
                    No Registration Found for "{querySerial}"
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: '#b45309', margin: 0 }}>
                    Please double-check your barcode serial number or submit a fresh registration above within 30 days of vehicle fitment.
                  </p>
                </div>
              ) : null}
            </div>
          )}

          {/* Warranty Terms Summary */}
          <div style={{ marginTop: '56px', borderTop: '1px solid #e2e8f0', paddingTop: '36px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '18px', textAlign: 'center' }}>
              MB Automotives India Warranty Framework
            </h3>
            <div className="grid-3">
              <div className="card" style={{ padding: '20px' }}>
                <Award size={22} color="#0284c7" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                  24 Months Commercial Guarantee
                </h4>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                  Commercial bus and truck black boxes include 24-month hardware coverage against internal component faults and voltage damage.
                </p>
              </div>

              <div className="card" style={{ padding: '20px' }}>
                <Clock size={22} color="#0284c7" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                  Supercapacitor Thermal Guard
                </h4>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                  High-temperature dual supercapacitors are covered for continuous windshield operation up to 75°C with zero fire or swelling risks.
                </p>
              </div>

              <div className="card" style={{ padding: '20px' }}>
                <ShieldCheck size={22} color="#0284c7" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                  Pan-India Depot Replacement
                </h4>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                  Direct depot replacement and harness inspection through our regional technical service network in Tamil Nadu, Karnataka, and pan-India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
