import React from 'react';
import '../styles/Experience.css';
const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-title">✴ Experience</div>
      <div className="job">
        <div className="job-title">Lead Product Designer</div>
        <div>
          <div className="company">Fortknox</div>
          <div className="duration">Mar 2022 - Oct 2023</div>
        </div>
      </div>
      <div className="job">
        <div className="job-title">Intern Designer</div>
        <div>
          <div className="company">OmniSafe</div>
          <div className="duration">Mar 2022 - Oct 2023</div>
        </div>
      </div>
      <div className="job">
        <div className="job-title">UI Designer</div>
        <div>
          <div className="company">Doradesign</div>
          <div className="duration">Mar 2022 - Oct 2023</div>
        </div>
      </div>
      <div className="job">
        <div className="job-title">Frontend Developer</div>
        <div>
          <div className="company">OpacityAuthor</div>
          <div className="duration">Mar 2022 - Oct 2023</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
