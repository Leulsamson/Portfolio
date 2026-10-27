import '../styles/custom.global.scss'
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const darkMode = window.localStorage.getItem('portfolio-theme') === 'dark';
    document.body.classList.toggle('dark-mode', darkMode);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
