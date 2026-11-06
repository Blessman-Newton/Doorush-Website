import React from 'react';
import { StorefrontIllustration } from './Icons';

export const PartnersSection = ({ onNavigate }) => {
  return (
    <section id="partners">
      <div className="w">
        <div className="k rv">Grow with Doorush</div>
        <h2 className="rv">Three ways to join us.</h2>
        <div className="grid g3">
          <div className="card rv pc">
            <div className="pic">
              <img
                className="pimg r r1"
                src="/images/rider.jpg"
                alt="Doorush rider in a green jacket with a delivery bag and motorbike"
              />
            </div>
            <div className="k" style={{ margin: '18px 0 6px' }}>
              Riders
            </div>
            <h3 style={{ margin: '0 0 8px' }}>Ride with us</h3>
            <p>
              Deliver on your own bike, scooter or car. Choose your hours, see your earnings before you accept and ride for your own community.
            </p>
            <a
              className="btn"
              style={{ marginTop: '18px' }}
              href="#riders"
              onClick={() => onNavigate && onNavigate('#riders')}
            >
              Join as a rider
            </a>
          </div>

          <div className="card rv pc">
            <div className="pic">
              <img
                className="pimg hn"
                src="/images/handover.jpg"
                alt="Doorush rider handing a food order to a smiling customer"
              />
            </div>
            <div className="k" style={{ margin: '18px 0 6px' }}>
              Merchants
            </div>
            <h3 style={{ margin: '0 0 8px' }}>Work with us</h3>
            <p>
              Put your business in front of local customers. Receive orders in one app and let verified riders handle the delivery.
            </p>
            <a
              className="btn"
              style={{ marginTop: '18px' }}
              href="#vendors"
              onClick={() => onNavigate && onNavigate('#vendors')}
            >
              Join as a merchant
            </a>
          </div>

          <div className="card rv pc">
            <div className="pic">
              <StorefrontIllustration />
            </div>
            <div className="k" style={{ margin: '18px 0 6px' }}>
              Restaurants and business owners
            </div>
            <h3 style={{ margin: '0 0 8px' }}>Partner with us</h3>
            <p>
              Own a restaurant or a business? Team up with Doorush to reach more customers and grow with us.
            </p>
            <a
              className="btn"
              style={{ marginTop: '18px' }}
              href="#vendors"
              onClick={() => onNavigate && onNavigate('#vendors')}
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
