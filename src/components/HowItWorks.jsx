import React from 'react';
import { STEPS } from '../constants/data';

export const HowItWorks = () => {
  return (
    <section id="how">
      <div className="w">
        <div className="k rv">How it works</div>
        <h2 className="rv">From tap to doorstep in three steps.</h2>
        <div className="grid g3">
          {STEPS.map((step) => (
            <div className="card rv" key={step.num}>
              <div className="n">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
