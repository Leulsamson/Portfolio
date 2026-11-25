import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../components/Footer';
import { links, SEO } from '../config/config';
import { Header } from '../components/Header';

export default function LinksPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = window.localStorage.getItem('portfolio-theme') === 'dark';
    setIsDarkMode(darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  }, []);

  const toggleTheme = () => {
    const nextDarkMode = !isDarkMode;
    setIsDarkMode(nextDarkMode);
    document.body.classList.toggle('dark-mode', nextDarkMode);
    window.localStorage.setItem('portfolio-theme', nextDarkMode ? 'dark' : 'light');
  };

  return (
    <Fragment>
      <Header seo={SEO} />
      <div className="links-page d-flex flex-column justify-content-between min-vh-100">
        <div className="links-content py-5 px-4 container text-center">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Link href="/">
              <a className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
                <span>Back to Portfolio</span>
              </a>
            </Link>
            <button
              type="button"
              className="theme-toggle m-0"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} aria-hidden="true" />
            </button>
          </div>
          <img
            className="links-avatar my-3"
            width="132"
            height="132"
            src={links.image}
            alt="Portrait of Leul Samson"
          />
          <h1 className="h3 fw-bold mt-2 mb-1">{links.title}</h1>
          <p className="links-subtitle mb-4">{links.description}</p>
          <div className="links-stack mx-auto">
            {links.cards.map((value, index) => (
              <Link key={index} href={value.link}>
                <a target="_blank" rel="noreferrer" className="link-card">
                  {value.icon && <FontAwesomeIcon icon={value.icon} aria-hidden="true" />}
                  <span>{value.title}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
