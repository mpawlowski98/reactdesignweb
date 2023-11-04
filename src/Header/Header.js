import React from 'react';
import { ReactComponent as Arrow } from '../image/icons.svg#arrowheader';
import css from '../Header/Header.module.css';
import back from '../image/back.mp4';

function Header() {
  return (
    <header>
      <div id="particles-container" className={css.particlesContainer}></div>
      <div className={css.videobackground}>
        <video autoPlay loading="lazy" loop muted>
          <source src={back} type="video/mp4" />
        </video>

        <div className={css.infotext}>
          <h1>Michał Pawłowski</h1>
          <h3>Web Design Porfolio</h3>
          <a href="#about" className={css.scroll}>
            <Arrow />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
