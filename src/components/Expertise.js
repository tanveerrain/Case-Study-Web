import React from 'react';
import '../styles/Expertise.css';
const Expertise = () => {
  return (
    <section className="expertise">
      <h2 className="section-title">✷ Expertise</h2>

      <div className="expertise-container">
        <div className="expertise-box">
          <h3>▪ Branding</h3>
          <p>I create efficient, adaptable, and engaging websites...</p>
        </div>
        <div className="expertise-box">
          <h3>▪ UI Design</h3>
          <p>I create efficient, adaptable, and engaging websites...</p>
        </div>
        <div className="expertise-box">
          <h3>▪ UX Design</h3>
          <p>I comprehend and resolve digital product issues...</p>
        </div>
        <div className="expertise-box">
          <h3>▪ Development</h3>
          <p>I create user-friendly, adaptive, engaging websites...</p>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
