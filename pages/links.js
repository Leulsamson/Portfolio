import React, { Fragment, useEffect, useState } from 'react';
import getConfig from 'next/config'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../components/Footer';
import { links, SEO, } from '../config/config';
import { Header } from '../components/Header';

const { publicRuntimeConfig } = getConfig()

export default function Home() {
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
      <div className="links-page d-flex flex-column justify-content-between bg-secondary min-vh-100">
        <div className="links-content py-5 px-5 container text-center">
          <div className="links-theme-control">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} aria-hidden="true" />
            </button>
          </div>
          <img className="img-fluid my-3 card-image" width="150" height="150" src={links.image} alt="profile of Leul Samson" />
          <h3 className="mt-3">{links.title}</h3>
          <p>{links.description}</p>
          {links.cards.map((value, index) => (
            <Button key={index} title={value.title} link={value.link} />
          ))}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}


function Button({ title, link }) {
  return (
    <div className="row justify-content-center">
      <div className="card card-work link-card mx-sm-4 my-2" style={{ width: "20rem" }}>
        <Link href={link}>
          <a target="_blank" rel="noreferrer">
            <h4 className="text-primary py-3 px-3">{title}</h4>
          </a>
        </Link>
      </div>
    </div>
  );
}