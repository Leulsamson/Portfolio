import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    const darkMode = savedTheme === 'dark';
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
    <nav className="navbar navbar-expand-md sticky-top">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand d-flex align-items-center gap-2">
            <span className="brand-dot" aria-hidden="true" />
            <span>{title}</span>
          </a>
        </Link>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          aria-controls="mainNavbar"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="mainNavbar"
        >
          <div className="navbar-nav ms-md-auto align-items-md-center">
            {links.map((value, index) => (
              <Link key={index} href={value.link}>
                <a
                  className="nav-link"
                  onClick={() => setIsNavCollapsed(true)}
                >
                  {value.title}
                </a>
              </Link>
            ))}
          </div>
          <button
            type="button"
            className="theme-toggle ms-md-3"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
};
