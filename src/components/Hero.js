import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        I AM A <span className="image-text"><img src="/Rectangle.png" alt="Profile Image" /></span> FREELANCE <br />
        DESIGNER<span className="image-text"><img src="/Rectangle.jpg" alt="Portfolio Image" /></span> FROM <br />
        SAN FRANCISCO
      </h1>
      <div className="clients">
        <span>dorodesign</span>
        <span>wave</span>
        <span>SIMILA</span>
      </div>
      <p className="description">
        Welcome to my portfolio. Here, artistry meets functionality. <br />
        Dive into a curated showcase of distinctive branding and <br />
        web designs, each crafted to captivate and inspire.
      </p>
    </section>
  );
}

export default Hero;
