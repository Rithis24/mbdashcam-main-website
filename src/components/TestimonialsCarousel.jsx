import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function TestimonialsCarousel() {
  const testimonials = siteConfig.testimonials || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Group into pages of 2 cards on desktop
  const itemsPerPage = 2;
  const maxPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + maxPages) % maxPages);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % maxPages);
  };

  const visibleReviews = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '28px'
        }}
      >
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="card"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#ffffff'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '14px'
                }}
              >
                <div style={{ display: 'flex', gap: '3px', color: '#f59e0b' }}>
                  {[...Array(review.rating || 5)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" />
                  ))}
                </div>
                <span className="badge badge-blue" style={{ fontSize: '0.6875rem' }}>
                  {review.category}
                </span>
              </div>

              <p
                style={{
                  fontSize: '0.9375rem',
                  color: '#334155',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '20px'
                }}
              >
                "{review.content}"
              </p>
            </div>

            <div
              style={{
                borderTop: '1px solid #f1f5f9',
                paddingTop: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.9375rem' }}>
                  {review.name}
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                  {review.role} • {review.location}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#059669', fontSize: '0.75rem', fontWeight: 600 }}>
                <ShieldCheck size={14} />
                <span>Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px'
        }}
      >
        <button
          onClick={handlePrev}
          aria-label="Previous testimonials"
          className="btn btn-secondary btn-sm"
          style={{ width: '36px', height: '36px', borderRadius: '50%', padding: 0 }}
        >
          <ChevronLeft size={18} />
        </button>

        <div style={{ display: 'flex', gap: '6px' }}>
          {[...Array(maxPages)].map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: currentIndex === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: currentIndex === idx ? 'var(--color-accent)' : '#cbd5e1',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next testimonials"
          className="btn btn-secondary btn-sm"
          style={{ width: '36px', height: '36px', borderRadius: '50%', padding: 0 }}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
