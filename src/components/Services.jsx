import React from 'react';
import { SERVICES } from '../constants/data';

export const Services = () => {
  return (
    <section id="services">
      <div className="w">
        <div className="k rv">What we deliver</div>
        <h2 className="rv">Four services, one app.</h2>
        <p className="sub rv">
          From dinner to a gas refill, everything you usually chase by phone is now a few taps away.
        </p>
        <div className="grid g4">
          {SERVICES.map((s, idx) => (
            <div className="card rv" key={idx}>
              <div className="ico">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
