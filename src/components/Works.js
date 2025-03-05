import React from 'react';
import '../styles/Works.css';

const Works = () => {
  return (
    <section className="works">
      <div className="works-header">
        <h2>✷ Works</h2>
        <a href="#">View All</a>
      </div>

      <div className="work-container">
        <div className="work-item">
          <img src="/image 23.jpg" alt="Analysis Application" />
          <div className="work-content">
            <h3>Analysis Application</h3>
            <p>With a user-centered approach...</p>
            <div className="tags">
              <span>FIGMA</span>
              <span>UX</span>
            </div>
            <button className="case-study-btn">View Case Study</button>
          </div>
        </div>
        <div className="work-item">
          <img src="/image 21.png" alt="Fortknox Application" />
          <div className="work-content">
            <h3>Fortknox Application</h3>
            <p>With a user-centered approach...</p>
            <div className="tags">
              <span>MOBILE</span>
              <span>WEB</span>
            </div>
            <button className="case-study-btn">View Case Study</button>
          </div>
        </div>
        <div className="work-item">
          <img src="/image 23.jpg" alt="Zenocide Application" />
          <div className="work-content">
            <h3>Zenocide Application</h3>
            <p>With a user-centered approach...</p>
            <div className="tags">
              <span>APP</span>
              <span>WEB</span>
            </div>
            <button className="case-study-btn">View Case Study</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
