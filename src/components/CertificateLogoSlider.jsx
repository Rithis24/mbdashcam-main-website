import React from 'react';

// The 5 official accreditation logos matching the user's specification:
// 1. GeM (Government e Marketplace)
// 2. State Emblem of India (Satyamev Jayate)
// 3. Certified ISO 9001:2015 Company
// 4. Bureau of Indian Standards (BIS)
// 5. Made in India
const accreditationLogos = [
  {
    id: 'gem',
    name: 'Government e Marketplace (GeM)',
    src: '/assets/certificates/gem-logo.png',
    alt: 'GeM Government e Marketplace Registered Vendor',
    widthRatio: 1.8
  },
  {
    id: 'satyamev',
    name: 'State Emblem of India',
    src: '/assets/certificates/satyamev-logo.png',
    alt: 'Government of India State Emblem - Satyamev Jayate',
    widthRatio: 0.7
  },
  {
    id: 'iso',
    name: 'Certified ISO 9001:2015 Company',
    src: '/assets/certificates/iso-9001-logo.png',
    alt: 'Certified ISO 9001:2015 Company',
    widthRatio: 1
  },
  {
    id: 'bis',
    name: 'Bureau of Indian Standards (BIS)',
    src: '/assets/certificates/bis-logo.png',
    alt: 'Bureau of Indian Standards IS 616:2017 Certified',
    widthRatio: 1
  },
  {
    id: 'made-in-india',
    name: 'Made in India',
    src: '/assets/certificates/made-in-india-logo.png',
    alt: 'Made in India Commercial Automotive Vision',
    widthRatio: 1
  }
];

export default function CertificateLogoSlider() {
  // Multiply for continuous, silky-smooth marquee loop
  const loopLogos = [
    ...accreditationLogos,
    ...accreditationLogos,
    ...accreditationLogos,
    ...accreditationLogos
  ];

  return (
    <section className="accreditation-logo-ticker-section" id="accreditation-logos">
      <div className="container">
        <div className="accreditation-ticker-header">
          <span className="section-eyebrow">STATUTORY ACCREDITATIONS & REGULATORY RECOGNITION</span>
          <h2 className="accreditation-ticker-title">
            Certified Quality & Government Homologation
          </h2>
          <p className="accreditation-ticker-sub">
            Recognized under Government of India frameworks, BIS automotive safety standards, and ISO 9001:2015 quality control.
          </p>
        </div>
      </div>

      {/* Pure Logo Scrolling Strip (No Certificate Frames) */}
      <div className="accreditation-marquee-container">
        <div className="accreditation-marquee-track">
          {loopLogos.map((logo, idx) => (
            <div key={`${logo.id}-${idx}`} className="accreditation-logo-item" title={logo.name}>
              <img
                src={logo.src}
                alt={logo.alt || logo.name}
                className="accreditation-logo-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
