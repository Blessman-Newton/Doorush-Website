import React from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../constants/data';

export const Footer = ({ onNavigate }) => {
  const handleLinkClick = (e, hash) => {
    if (onNavigate) {
      onNavigate(hash);
    }
  };

  return (
    <footer id="contact">
      <div className="w ft">
        <div>
          <a
            className="lg g"
            href="#top"
            style={{ color: '#fff', fontSize: '24px' }}
            onClick={(e) => handleLinkClick(e, '#top')}
          >
            <svg aria-hidden="true" style={{ width: '30px', height: '30px' }}>
              <use href="#m" />
            </svg>
            doorush
          </a>
          <p>Delivery. Pickup. Everything in between.</p>
          <div className="soc">
            <a href="#">Instagram</a>
            <a href="#">X</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
            <a href="#">LinkedIn</a>
          </div>
          <div className="stores">
            <a className="bd" href="#join" onClick={(e) => handleLinkClick(e, '#join')}>
              <img className="gp" src="/images/google-play.png" alt="Google Play" />
              <span>
                <small>Coming soon on</small>
                <b>Google Play</b>
              </span>
            </a>
            <a className="bd" href="#join" onClick={(e) => handleLinkClick(e, '#join')}>
              <img className="as" src="/images/app-store.png" alt="App Store" />
              <span>
                <small>Coming soon on the</small>
                <b>App Store</b>
              </span>
            </a>
          </div>
        </div>

        <div>
          <h4>Services</h4>
          <a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Food</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Pickups</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Gas refill</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Cosmetics</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About us</a>
          <a href="#hiring" onClick={(e) => handleLinkClick(e, '#hiring')}>Careers</a>
          <a href="#our-partners" onClick={(e) => handleLinkClick(e, '#our-partners')}>Partners</a>
          <a href="#vendors" onClick={(e) => handleLinkClick(e, '#vendors')}>Become a merchant</a>
          <a href="#riders" onClick={(e) => handleLinkClick(e, '#riders')}>Become a rider</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')}>Help and FAQ</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact us</a>
          <a href="#riders" onClick={(e) => handleLinkClick(e, '#riders')}>Rider support</a>
          <a href="#vendors" onClick={(e) => handleLinkClick(e, '#vendors')}>Merchant support</a>
        </div>

        <div>
          <h4>Find us</h4>
          <span>Sunyani, Bono Region, Ghana</span>
          <span id="fe">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </span>
          <span id="fp">
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>{CONTACT_PHONE}</a>
          </span>
        </div>
      </div>

      <div className="w fl" style={{ display: 'flex' }}>
        <span>© 2026 Doorush. All rights reserved.</span>
        <span>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </span>
      </div>
    </footer>
  );
};
