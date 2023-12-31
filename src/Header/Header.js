import React from 'react';
import { ReactComponent as Arrow } from '../image/icons.svg#arrowheader';
import css from '../Header/Header.module.css';
import back from '../image/back.mp4';
import { useSpring, animated } from '@react-spring/web';

function Header() {
  const nameSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { duration: 1000 },
  });

  const subtitleSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { duration: 1000 },
    delay: 500,
  });
  return (
    <header>
      <div id="particles-container"></div>
      <div className={css.videobackground}>
        <video autoPlay loop muted playbackRate={0.5}>
          <source src={back} type="video/mp4" />
        </video>

        <div className={css.headerTitle}>
          <animated.h1 style={nameSpring}>Michał Pawłowski</animated.h1>
          <animated.h3 style={subtitleSpring}>Web Design Porfolio</animated.h3>
          <a href="#about" className={css.scroll}>
            <Arrow />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
