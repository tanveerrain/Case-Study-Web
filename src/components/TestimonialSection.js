import React from "react";
import "../styles/TestimonialSection.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">
        <span className="star-icon">✶</span> What they say
      </h2>

      <div className="testimonial-content">
        {/* User Info */}
        <div className="testimonial-user">
          <img src="Frame (1).png" alt="Floyd Miles" className="user-image" />
          <div className="user-details">
            <h3 className="user-name">Floyd Miles</h3>
            <p className="user-company">eBay</p>
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="testimonial-text">
          <span className="quote-symbol">“</span>
          <p>
            Synergy's resume builder is fantastic. It helped me create a
            professional resume that stood out to employers. Synergy's resume
            builder is fantastic. It helped me create a professional resume
            that stood out to employers.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="testimonial-navigation">
          <button className="nav-button">
            <FaArrowLeft />
          </button>
          <button className="nav-button">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
