import React, { useEffect } from 'react';
import { ReactComponent as Arrow } from '../image/icons.svg#arrowheader';
import css from '../Header/Header.module.css';

function Header() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    document.getElementById('particles-container').appendChild(canvas);

    const particles = [];
    const canvasElement = document.getElementById('particles-canvas');
    const ctx = canvasElement.getContext('2d');

    const width = (canvasElement.width = window.innerWidth);
    const height = (canvasElement.height = window.innerHeight);

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    class Particle {
      constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.radius = random(1, 5);
        this.speedX = random(-0.5, 0.5);
        this.speedY = random(-0.5, 0.5);
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) {
          this.speedX *= -1;
        }

        if (this.y < 0 || this.y > height) {
          this.speedY *= -1;
        }
      }

      draw() {
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 3);
        ctx.fill();
      }
    }
    const infoText = document.querySelector(`.${css.infotext}`);
    infoText.style.position = 'relative';
    infoText.style.zIndex = '3';
    infoText.style.top = '-125%';
    function createParticles() {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animateParticles);
    }

    createParticles();
    animateParticles();
  }, []);

  return (
    <header>
      <div id="particles-container" className={css.particlesContainer}></div>
      <div className={css.infotext}>
        <h1>Michał Pawłowski</h1>
        <h3>Web Design Porfolio</h3>
        <a href="#about" className={css.scroll}>
          <Arrow />
        </a>
      </div>
    </header>
  );
}

export default Header;
