import React from 'react';
import { HOME_FAQ } from '../constants/data';

export const FaqSection = ({ faqList = HOME_FAQ, kicker = "Questions", heading = "Good to know." }) => {
  return (
    <section id="faq">
      <div className="w" style={{ maxWidth: '820px' }}>
        <div className="k">{kicker}</div>
        <h2 style={{ marginBottom: '24px' }}>{heading}</h2>
        {faqList.map((item, idx) => (
          <details key={idx}>
            <summary>{item.q || item[0]}</summary>
            <p>{item.a || item[1]}</p>
          </details>
        ))}
      </div>
    </section>
  );
};
