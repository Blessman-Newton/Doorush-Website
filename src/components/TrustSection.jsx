import React from 'react';
import { TRUST_POINTS } from '../constants/data';

export const TrustSection = () => {
  return (
    <section className="dk">
      <div className="w">
        <div className="k rv">Built on trust</div>
        <h2 className="rv">Know who, know where, know what you paid.</h2>
        <p className="sub rv">
          Calls and chats leave you with no record. Doorush puts every order on the record.
        </p>
        <div className="grid g4">
          {TRUST_POINTS.map((item, idx) => (
            <div className="tr rv" key={idx}>
              {item.icon}
              <div>
                <b>{item.title}</b>
                <span>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
