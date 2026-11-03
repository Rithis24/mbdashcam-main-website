import React from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../data/siteConfig';

export default function PartnerLogoSlider() {
  const partners = siteConfig.channelPartners || [];

  // Double array for seamless infinite CSS loop
  const loopList = [...partners, ...partners];

  return (
    <section className="logo-ticker-section">
      <div className="container">
        <div className="logo-ticker-title">
          TRUSTED OEM INTEGRATIONS & CHANNEL PARTNERS
        </div>
      </div>

      <div className="logo-loop-mask">
        <div className="logo-loop-track">
          {loopList.map((partner, idx) => (
            <div key={idx} className="logo-loop-item" title={`${partner.name} • ${partner.subtitle || 'OEM Partner'}`}>
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="logo-loop-img"
                  loading="lazy"
                />
              ) : null}
              <span className="logo-loop-text">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
