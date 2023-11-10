import React, { useEffect, useState } from 'react';
import css from './Footer.module.css';
import { ReactComponent as Arrowtop } from '../image/arrowtop.svg';

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
  };

  return (
    <div className={css.footer}>
      <section id={css.contact}>
        <div className={css.contactContainer}>
          <a
            href="https://github.com/mpawlowski98"
            className={css.footerBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/micha%C5%82-piotr-paw%C5%82owski/"
            className={css.footerBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </section>
      {showScrollTop && (
        <button className={css.scrolltop} onClick={scrollToTop}>
          <Arrowtop />
        </button>
      )}
    </div>
  );
}

export default Footer;
