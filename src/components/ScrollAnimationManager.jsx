import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function ScrollAnimationManager() {
  const { pathname } = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 1. Back to top tracker
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowBackToTop((window.scrollY || document.documentElement.scrollTop || 0) > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // 2. Animated Number Counters
  const animateCounter = (el) => {
    if (el.dataset.counterAnimated === 'true') return;
    el.dataset.counterAnimated = 'true';

    const targetVal = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    if (isNaN(targetVal)) return;

    const duration = 1200;
    const startTime = performance.now();
    const isInteger = Number.isInteger(targetVal);

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Clean easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = targetVal * ease;

      const formattedNumber = isInteger
        ? Math.round(currentVal).toLocaleString()
        : currentVal.toFixed(1);

      el.textContent = `${prefix}${formattedNumber}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = `${prefix}${isInteger ? targetVal.toLocaleString() : targetVal}${suffix}`;
      }
    };

    requestAnimationFrame(updateCount);
  };

  // 3. Scroll Reveal Observer with Staggering
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const timer = setTimeout(() => {
      // Collect target elements for smooth scroll reveal
      const targets = document.querySelectorAll(
        '.section-header, .product-showcase-card, .category-card, .experience-step-card, .engineering-feature-item, .card, [data-count]'
      );

      if (prefersReducedMotion) {
        targets.forEach((el) => {
          el.classList.add('is-revealed');
          if (el.hasAttribute('data-count')) animateCounter(el);
        });
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              el.classList.add('is-revealed');

              if (el.hasAttribute('data-count')) {
                animateCounter(el);
              }
              observer.unobserve(el);
            }
          });
        },
        {
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.1
        }
      );

      targets.forEach((el, index) => {
        if (!el.classList.contains('reveal-on-scroll')) {
          el.classList.add('reveal-on-scroll');
          // Add stagger index if inside a container
          const parent = el.parentElement;
          if (parent && (parent.classList.contains('grid-2') || parent.classList.contains('grid-3') || parent.classList.contains('grid-4') || parent.classList.contains('product-showcase-grid') || parent.classList.contains('experience-story-grid'))) {
            const childIdx = Array.from(parent.children).indexOf(el);
            el.setAttribute('data-stagger', String(childIdx % 6));
          }
        }
        observer.observe(el);
      });

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-navy-dark)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 90,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-accent)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-navy-dark)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
