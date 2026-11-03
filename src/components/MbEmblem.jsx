import React from 'react';

/**
 * MbEmblem — 3D Rotating Automotive Precision Emblem
 * - Symmetrical dual-sided 3D coin/shield
 * - Both sides show the official MB logo emblem
 * - Metallic electric blue gradient with chrome border (no black border)
 * - Continuous 3D rotation with holographic shine sweep and interactive hover tilt
 */
export default function MbEmblem({ size = 42, className = '' }) {
  return (
    <div 
      className={`emblem-3d-scene ${className}`} 
      style={{ width: size, height: size }}
      title="MB Automotives India — Precision Telematics"
      aria-label="MB Automotives India"
    >
      <div className="emblem-3d-coin">
        {/* 3D Extruded Depth Rim */}
        <div className="emblem-3d-side-rim" />

        {/* Front Face: MB Logo Icon */}
        <div className="emblem-3d-face emblem-3d-face-front">
          <img
            src="/assets/branding/metrobasket-logo-icon.png"
            alt="MB Automotives Emblem"
            className="emblem-3d-img"
          />
          <div className="emblem-3d-shine" />
        </div>

        {/* Back Face: Identical MB Logo Icon */}
        <div className="emblem-3d-face emblem-3d-face-back">
          <img
            src="/assets/branding/metrobasket-logo-icon.png"
            alt="MB Automotives Emblem"
            className="emblem-3d-img"
          />
          <div className="emblem-3d-shine" />
        </div>
      </div>
    </div>
  );
}
