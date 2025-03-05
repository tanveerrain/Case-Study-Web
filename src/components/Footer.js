import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Scrolling Text */}
      <div className="scrolling-text">
        <span>FLOW ✶ FIGMA ✶ DESIGNER ✶ DEVELOPER ✶</span>
        <span>FLOW ✶ FIGMA ✶ DESIGNER ✶ DEVELOPER ✶</span>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2 className="contact-heading">LET’S TALK!</h2>
        <a href="mailto:rehanurraihan@gmail.com" className="contact-email">
          tanveerrain03@gmail.com ↗
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright">© Mo Tanveer Rain - 2025</p>
        <div className="social-links">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
