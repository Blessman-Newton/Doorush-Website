import React from 'react';
import { WaitlistForm } from './WaitlistForm';

export const WaitlistSection = ({ onNavigate }) => {
  return (
    <section className="dk" id="join">
      <div className="w" style={{ textAlign: 'center' }}>
        <div className="k">Be first in line</div>
        <h2>Join the Doorush waitlist.</h2>
        <p className="sub" style={{ margin: '14px auto 28px' }}>
          Leave your email and we’ll tell you the moment we go live. Tell us how you’d like to use Doorush.
        </p>
        <WaitlistForm
          source="join"
          defaultRole="customer"
          hasRoleSelect={true}
          btnText="Join"
          style={{ margin: '0 auto' }}
          msgStyle={{ textAlign: 'center' }}
        />
        <div className="stores" style={{ justifyContent: 'center' }}>
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
    </section>
  );
};
