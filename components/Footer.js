import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const Footer = ({ links = [], description }) => {
  return (
    <footer id="contact" className="site-footer py-5 px-4">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4">
          <div>
            <p className="footer-kicker mb-2">Contact</p>
            <h2 className="text-white fw-bold mb-2">Let&apos;s work together</h2>
            <p className="footer-muted mb-0">
              {description || 'Leul Samson · Software Engineer · leuls4345@gmail.com'}
            </p>
          </div>
          {links.length > 0 && (
            <div className="footer-links" aria-label="Contact links">
              {links.map((value) => (
                <Link key={value.title} href={value.link}>
                  <a className="footer-link" target="_blank" rel="noreferrer">
                    {value.icon && <FontAwesomeIcon icon={value.icon} aria-hidden="true" />}
                    <span>{value.title}</span>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="footer-bottom mt-4 pt-3 d-flex flex-wrap justify-content-between gap-2">
          <small>&copy; {new Date().getFullYear()} Leul Samson. All rights reserved.</small>
          <small>Addis Ababa, Ethiopia · leuls4345@gmail.com</small>
        </div>
      </div>
    </footer>
  );
};
