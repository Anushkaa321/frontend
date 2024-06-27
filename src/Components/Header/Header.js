import React from 'react';
import './Header.css';

function Header() {
    return (
      <div className="container">
        <div className="header">
          <span className="job-preview">Job preview</span>
          <span className="applicants">Applicants</span>
          <span className="match">Match</span>
          <span className="messages">Messages</span>
        </div>
        <div className="separator"></div>
      </div>
    );
  };

  export default Header;