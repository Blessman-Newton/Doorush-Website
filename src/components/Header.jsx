import React, { useState, useEffect } from 'react';
import { LAUNCH_DATE } from '../constants/data';

export const Header = ({ onNavigate }) => {
  const [countdownText, setCountdownText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const diffDays = Math.ceil((LAUNCH_DATE - new Date()) / 864e5);
      if (diffDays > 1) {
        setCountdownText(<span>Launching in <b>{diffDays}</b> days</span>);
      } else if (diffDays === 1) {
        setCountdownText(<span>Launching <b>tomorrow</b></span>);
      } else {
        setCountdownText(<b>We’re live!</b>);
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 36e5);
    return () => clearInterval(timer);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = (e, hash) => {
    closeMenu();
    if (onNavigate) {
      onNavigate(hash);
    }
  };

  return (
    <header className={menuOpen ? 'open' : ''}>
      <div className="tb">
        <div className="tw">
          <span id="cdt">{countdownText}</span>
          <a className="btn" href="#join" onClick={(e) => handleLinkClick(e, '#join')}>
            Join the waitlist
          </a>
        </div>
      </div>
      <div className="w">
        <a className="lg g" href="#top" onClick={(e) => handleLinkClick(e, '#top')}>
          <svg aria-hidden="true">
            <use href="#m" />
          </svg>
          doorush
        </a>
        <nav>
          <a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a>
          <a href="#how" onClick={(e) => handleLinkClick(e, '#how')}>How it works</a>
          <a href="#vendors" onClick={(e) => handleLinkClick(e, '#vendors')}>Merchants</a>
          <a href="#riders" onClick={(e) => handleLinkClick(e, '#riders')}>Riders</a>
          <a href="#hiring" onClick={(e) => handleLinkClick(e, '#hiring')}>Careers</a>
        </nav>
        <button
          className="mb"
          id="mb"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
