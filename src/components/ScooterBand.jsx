import React from 'react';

export const ScooterBand = () => {
  return (
    <div className="band">
      <svg viewBox="0 0 900 250" role="img" aria-label="Illustration of a Doorush rider on a scooter with a delivery box">
        <path d="M0 214H900" stroke="#2F7A58" strokeWidth="3" />
        <path d="M90 120h150M40 150h170M110 180h120" stroke="#29B573" strokeWidth="6" strokeLinecap="round" opacity=".7" />
        <circle cx="360" cy="188" r="30" fill="none" stroke="#fff" strokeWidth="9" />
        <circle cx="560" cy="188" r="30" fill="none" stroke="#fff" strokeWidth="9" />
        <path d="M360 188l55-60h70l75 60M480 128l-22-38h-34" fill="none" stroke="#29B573" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M425 128c0-40 20-58 55-62" fill="none" stroke="#fff" strokeWidth="16" strokeLinecap="round" />
        <circle cx="500" cy="52" r="22" fill="#fff" />
        <path d="M478 50a22 22 0 0 1 44 0z" fill="#29B573" />
        <rect x="318" y="62" width="86" height="68" rx="10" fill="#29B573" />
        <use href="#m" x="332" y="66" width="58" height="58" style={{ color: '#123526' }} />
      </svg>
    </div>
  );
};
