import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useScroll, animated } from '@react-spring/web';
import css from './Footer.module.css';
import { motion, useAnimation } from 'framer-motion';
import { ReactComponent as Arrowtop } from '../image/arrowtop.svg';

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();
  const [ref, inView] = useInView();

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
  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 200,
          damping: 30,
        },
      });
    }
  }, [controls, inView]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
  };

  return (
    <div className={css.footer}>
      <section id={css.contact}>
        <motion.div
          ref={ref}
          initial={{ y: -200, scale: 1 }}
          animate={controls}
        >
          <div className={css.contactContainer}>
            <animated.a
              style={{
                opacity: scrollYProgress,
              }}
              href="https://github.com/mpawlowski98"
              className={css.footerBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </animated.a>

            <animated.a
              style={{
                opacity: scrollYProgress,
              }}
              href="https://www.linkedin.com/in/micha%C5%82-piotr-paw%C5%82owski/"
              className={css.footerBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </animated.a>
          </div>
        </motion.div>
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
