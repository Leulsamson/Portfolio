import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

export const Intro = ({ role, title, description, image, highlights = [], buttons = [] }) => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <p className="hero-label mb-3">{role || 'Software Engineer'}</p>
            <h1 className="hero-title fw-bold mb-3">{title}</h1>
            <p className="hero-description mb-4">{description}</p>
            <div className="d-flex flex-wrap gap-3 mb-5">
              {buttons.map((value, index) =>
                value.isPrimary ? (
                  <Link key={index} href={value.link}>
                    <a className="btn btn-primary hero-btn d-inline-flex align-items-center gap-2">
                      <span>{value.title}</span>
                      <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                    </a>
                  </Link>
                ) : (
                  <Link key={index} href={value.link}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary hero-btn d-inline-flex align-items-center gap-2"
                    >
                      <FontAwesomeIcon icon={faFileArrowDown} aria-hidden="true" />
                      <span>{value.title}</span>
                    </a>
                  </Link>
                )
              )}
            </div>
            {highlights.length > 0 && (
              <div className="hero-metrics" aria-label="Academic and location highlights">
                {highlights.map((item) => (
                  <div className="hero-metric-item" key={item.label}>
                    <span className="hero-metric-label">{item.label}</span>
                    <span className="hero-metric-value">{item.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end">
            <div className="hero-photo-frame">
              <img
                className="hero-photo"
                src={image}
                alt="Portrait of Leul Samson"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About = ({ title, description = [], timeline = [] }) => {
  return (
    <section id="about" className="about-section section-pad">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-7">
            <h2 className="section-heading fw-bold mb-4">{title}</h2>
            <div className="about-content">
              {description.map((value, index) => (
                <p key={index}>{value}</p>
              ))}
            </div>
          </div>
          {timeline.length > 0 && (
            <div className="col-lg-5">
              <div className="timeline-panel">
                <h3 className="timeline-heading mb-4">Education &amp; Experience</h3>
                <div className="timeline-list">
                  {timeline.map((item, idx) => (
                    <div className="timeline-item" key={idx}>
                      <span className="timeline-period">{item.period}</span>
                      <h4 className="timeline-title">{item.title}</h4>
                      <p className="timeline-org">{item.org}</p>
                      <p className="timeline-detail mb-0">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
