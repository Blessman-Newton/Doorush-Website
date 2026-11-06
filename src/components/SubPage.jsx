import React, { useState } from 'react';
import { WaitlistForm } from './WaitlistForm';

export const SubPage = ({ config }) => {
  const [selectedChip, setSelectedChip] = useState(
    config.chips && config.chips.length > 0 ? config.chips[0] : ''
  );

  return (
    <div className="view" id={`v-${config.id}`}>
      {/* Top Banner Section */}
      <section className="dk vh">
        <div className="w">
          <div className="k">{config.kicker}</div>
          <h1>{config.heading}</h1>
          <p className="lead">{config.lead}</p>
          {config.chips && config.chips.length > 0 && (
            <div className="ch">
              {config.chips.map((chip, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={selectedChip === chip ? 'sel' : ''}
                  onClick={() => setSelectedChip(chip)}
                >
                  {chip}
                </button>
              ))}
            </div>
          )}
          <WaitlistForm
            source={config.id}
            defaultRole={config.role}
            selectedType={selectedChip}
            btnText={config.btnText}
          />
        </div>
      </section>

      {/* Dynamic Content Sections */}
      {config.sections.map((sec, idx) => (
        <section
          key={idx}
          style={idx % 2 === 0 ? { background: 'var(--surf)' } : {}}
        >
          <div className="w">
            {sec.kicker && <div className="k rv">{sec.kicker}</div>}
            <h2 className="rv">{sec.heading}</h2>
            {sec.sub && <p className="sub rv">{sec.sub}</p>}

            {/* Steps or Cards */}
            {sec.steps ? (
              <div className={`grid g${sec.steps.length}`}>
                {sec.steps.map((st, sIdx) => (
                  <div className="card rv" key={sIdx}>
                    <div className="n">{sIdx + 1}</div>
                    <h3>{st[0]}</h3>
                    <p>{st[1]}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`grid g${sec.cols || 3}`}>
                {sec.cards.map((c, cIdx) => (
                  <div className="card rv" key={cIdx}>
                    <h3>{c[0]}</h3>
                    <p>{c[1]}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section>
        <div className="w" style={{ maxWidth: '820px' }}>
          <div className="k">FAQ</div>
          <h2 style={{ marginBottom: '24px' }}>Frequently asked questions</h2>
          {config.faq.map((q, idx) => (
            <details key={idx}>
              <summary>{q[0]}</summary>
              <p>{q[1]}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="dk">
        <div className="w" style={{ textAlign: 'center' }}>
          <h2>{config.ctaHeading}</h2>
          <p className="sub" style={{ margin: '14px auto 28px' }}>
            {config.ctaSub}
          </p>
          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <WaitlistForm
              source={`${config.id}-cta`}
              defaultRole={config.role}
              selectedType={selectedChip}
              btnText={config.btnText}
              msgStyle={{ textAlign: 'center' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
