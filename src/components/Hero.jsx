import React from 'react';
import { WaitlistForm } from './WaitlistForm';

export const Hero = ({ onNavigate }) => {
  return (
    <div className="hero">
      <div className="w">
        <div>
          <span className="pill">Launching soon in Sunyani</span>
          <h1>Everything you need, <em>brought to your door.</em></h1>
          <p className="lead">
            Order food, gas refills, cosmetics and pickups from trusted local merchants, delivered by verified riders you can track live.
          </p>
          <WaitlistForm source="hero" defaultRole="customer" btnText="Join the waitlist" />
          <div className="stores">
            <a className="bd" href="#join" onClick={() => onNavigate && onNavigate('#join')}>
              <img className="gp" src="/images/google-play.png" alt="Google Play" />
              <span>
                <small>Coming soon on</small>
                <b>Google Play</b>
              </span>
            </a>
            <a className="bd" href="#join" onClick={() => onNavigate && onNavigate('#join')}>
              <img className="as" src="/images/app-store.png" alt="App Store" />
              <span>
                <small>Coming soon on the</small>
                <b>App Store</b>
              </span>
            </a>
          </div>
        </div>
        <div className="ph">
          <svg viewBox="0 0 300 580" role="img" aria-label="Doorush app showing a live order on the map">
            <rect x="4" y="4" width="292" height="572" rx="44" fill="#0B1A13" stroke="#29B573" strokeWidth="3" />
            <rect x="16" y="16" width="268" height="548" rx="34" fill="#F2FAF5" />
            <rect x="112" y="24" width="76" height="16" rx="8" fill="#0B1A13" />
            <text x="34" y="78" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="22" fill="#123526">
              doorush
            </text>
            <rect x="28" y="96" width="244" height="270" rx="22" fill="#DCEEE3" />
            <path d="M28 300 C90 280 110 210 160 200 S230 150 272 130" stroke="#fff" strokeWidth="14" fill="none" />
            <path
              d="M60 330 C110 300 130 240 170 225 S235 180 255 160"
              stroke="#29B573"
              strokeWidth="5"
              strokeDasharray="2 10"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="168" cy="224" r="14" fill="#123526" />
            <circle cx="168" cy="224" r="5" fill="#29B573" />
            <circle cx="256" cy="158" r="9" fill="#29B573" />
            <rect x="28" y="384" width="244" height="150" rx="22" fill="#fff" />
            <text x="46" y="418" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="18" fill="#123526">
              Your order is on its way
            </text>
            <text x="46" y="442" fontFamily="Inter, sans-serif" fontSize="13" fill="#4B6157">
              Rider picked up from the merchant
            </text>
            <rect x="46" y="462" width="208" height="8" rx="4" fill="#DCEEE3" />
            <rect x="46" y="462" width="136" height="8" rx="4" fill="#29B573" />
            <rect x="46" y="486" width="208" height="30" rx="15" fill="#123526" />
            <text x="150" y="506" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="13" fill="#fff">
              Track live
            </text>
          </svg>
          <div className="chip c1">Live tracking</div>
          <div className="chip c2">Delivered</div>
        </div>
      </div>
    </div>
  );
};
