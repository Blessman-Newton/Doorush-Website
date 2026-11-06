import React, { useRef, useEffect } from 'react';
import { APP_SCREENS } from '../constants/data';

export const AppScreens = () => {
  const sliderRef = useRef(null);
  const hoverRef = useRef(false);

  const move = (direction) => {
    const sl = sliderRef.current;
    if (!sl) return;
    if (direction > 0 && sl.scrollLeft + sl.clientWidth >= sl.scrollWidth - 6) {
      sl.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      sl.scrollBy({ left: direction * 264, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      if (!hoverRef.current && !document.hidden) {
        move(1);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="screens" style={{ background: 'var(--surf)' }}>
      <div className="w">
        <div className="k rv">The app</div>
        <h2 className="rv">See Doorush in action.</h2>
        <p className="sub rv">
          Customers, merchants and riders each get their own simple, fast screens.
        </p>

        <div
          className="sl"
          id="sl"
          ref={sliderRef}
          onMouseEnter={() => { hoverRef.current = true; }}
          onMouseLeave={() => { hoverRef.current = false; }}
          onTouchStart={() => { hoverRef.current = true; }}
          onTouchEnd={() => { hoverRef.current = false; }}
        >
          {APP_SCREENS.map((s, idx) => (
            <div className="sd" key={idx}>
              <svg viewBox="0 0 220 440" role="img" aria-label={`${s.title} screen`}>
                <rect x="2" y="2" width="216" height="436" rx="32" fill="#0B1A13" stroke="#29B573" strokeWidth="2" />
                <rect x="10" y="10" width="200" height="420" rx="26" fill="#F2FAF5" />
                <text x="26" y="52" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="17" fill="#123526">
                  {s.title}
                </text>
                <rect x="26" y="64" width="168" height="36" rx="12" fill="#DCEEE3" />
                {s.items.map((item, itemIdx) => {
                  const y = 112 + itemIdx * 62;
                  return (
                    <g key={itemIdx}>
                      <rect x="26" y={y} width="168" height="50" rx="14" fill="#fff" />
                      <circle cx="48" cy={y + 25} r="10" fill="#29B573" />
                      <text x="68" y={y + 30} fontSize="12" fontWeight="600" fill="#123526" fontFamily="Inter, sans-serif">
                        {item}
                      </text>
                    </g>
                  );
                })}
                <rect x="26" y="376" width="168" height="34" rx="17" fill="#123526" />
                <text x="110" y="398" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" fontFamily="Inter, sans-serif">
                  {s.cta}
                </text>
              </svg>
              <b>{s.title}</b>
            </div>
          ))}
        </div>

        <div className="ctl">
          <button className="ar" id="pv" aria-label="Previous screen" onClick={() => move(-1)}>
            ‹
          </button>
          <button className="ar" id="nx" aria-label="Next screen" onClick={() => move(1)}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};
