import React from 'react';

export const LogoSymbol = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <symbol id="m" viewBox="0 0 100 100">
      <circle cx="34" cy="63" r="19" fill="none" stroke="currentColor" strokeWidth="9" />
      <path d="M53,63 L53,35 C53,22 63,15 76,17" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
      <circle cx="76" cy="17" r="5.5" fill="#29B573" />
    </symbol>
  </svg>
);

export const StorefrontIllustration = () => (
  <svg viewBox="0 0 400 240" role="img" aria-label="Illustration of a restaurant storefront">
    <rect width="400" height="240" fill="#DCEEE3" />
    <rect x="70" y="86" width="260" height="124" fill="#fff" />
    <path d="M60 86l16-44h248l16 44z" fill="#123526" />
    <path d="M80 42h40l-6 44H64zM160 42h40l0 44h-40zM240 42h40l6 44h-46z" fill="#29B573" />
    <rect x="92" y="108" width="100" height="62" rx="6" fill="#DCEEE3" />
    <rect x="226" y="116" width="62" height="94" rx="6" fill="#123526" />
    <circle cx="276" cy="166" r="4" fill="#29B573" />
    <rect x="120" y="180" width="44" height="30" rx="6" fill="#29B573" />
    <path d="M0 210H400" stroke="#29B573" strokeWidth="4" />
  </svg>
);
