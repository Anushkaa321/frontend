import React from 'react';
import './Skills.css';

function Skills () {
  return (
    <div className="app">
      <div className="section">
        <span>Skills Required</span>
        <ul className="list">
          <li>Figma</li>
          <li>Adobe Illustrator</li>
          <li>Adobe XD</li>
        </ul>
      </div>
      <div className="section1">
        <span>Preferred Language</span>
        <p>English</p>
      </div>
      <div className="section2">
        <span>Type</span>
        <p>Full time</p>
      </div>
      <div className="section3">
        <span>Years of Experience</span>
        <p>3+ Years of Experience</p>
      </div>
    </div>
  );
}

export default Skills;