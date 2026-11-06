import React from 'react';
import { PARTNERS } from '../constants/data';

export const OurPartners = () => {
  return (
    <section id="our-partners">
      <div className="w">
        <div className="k rv">Our partners</div>
        <h2 className="rv">Working with the communities we serve.</h2>
      </div>
      <div className="mq">
        <div className="mt" id="mt">
          {PARTNERS.map((partner, idx) => (
            <span className="lgo" key={idx}>
              <img alt={partner.name} src={partner.logo} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
