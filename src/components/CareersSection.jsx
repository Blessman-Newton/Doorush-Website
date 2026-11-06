import React from 'react';
import { CAREERS } from '../constants/data';

export const CareersSection = ({ onApply }) => {
  return (
    <section id="hiring">
      <div className="w">
        <div className="k rv">Careers</div>
        <h2 className="rv">We’re hiring.</h2>
        <p className="sub rv">
          Help us change how Ghana orders, one community at a time.
        </p>
        <div className="grid g4">
          {CAREERS.map((job, idx) => (
            <div className="card rv" key={idx}>
              <h3>{job.title}</h3>
              <p>{job.desc}</p>
              <a
                className="btn ap"
                style={{ marginTop: '16px' }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onApply) onApply(job.title);
                }}
              >
                Apply
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
