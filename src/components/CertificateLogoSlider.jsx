import React from 'react';

const certificateLogos = [
  {
    name: 'State Emblem of India',
    src: '/assets/certificates/cert-badge-satyamev-1.png',
    alt: 'Government of India State Emblem'
  },
  {
    name: 'Certified ISO 9001:2015 Company',
    src: '/assets/certificates/cert-badge-iso-9001.png',
    alt: 'Certified ISO 9001:2015 Company'
  },
  {
    name: 'BIS Standards & Homologation',
    src: '/assets/certificates/cert-badge-bis-standard.png',
    alt: 'Bureau of Indian Standards IS 616:2017'
  },
  {
    name: 'Made in India',
    src: '/assets/certificates/cert-badge-made-in-india.png',
    alt: 'Made in India Commercial Automotive Vision'
  },
  {
    name: 'MSME Govt. of India',
    src: '/assets/certificates/cert-badge-satyamev-2.jpg',
    alt: 'Ministry of MSME Government of India'
  }
];

export default function CertificateLogoSlider() {
  // Quadruple the array to ensure smooth continuous loop
  const loopLogos = [
    ...certificateLogos,
    ...certificateLogos,
    ...certificateLogos,
    ...certificateLogos
  ];

  return (
    <section className="our-certificates-section" id="certificates-slideshow">
      <div className="container">
        <h2 className="cert-section-heading">Our Certificates</h2>
        <p className="cert-section-subheading">
          Discover the accolades and recognition MetroBasket has earned in the industry.
        </p>
      </div>

      <div className="cert-marquee-container">
        <div className="cert-marquee-track">
          {loopLogos.map((logo, idx) => (
            <div key={idx} className="cert-marquee-logo-card">
              <img
                src={logo.src}
                alt={logo.alt || logo.name}
                title={logo.name}
                className="cert-marquee-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
