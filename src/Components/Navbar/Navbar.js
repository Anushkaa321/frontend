import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="app-container">
      <div className="button1">Logo</div>

      <div className="btn">
      <div className="button2">Jobs</div>
      </div>
      
      <div className="box">
      <div className="nav-button">Messages</div>
      <div className="nav-button">Payments</div>
      <div className="nav-button">Application</div> 
      </div>
      <div className="icons">
      <div className="bell-icon"></div>
      <div className="arrow-icon"></div>
      </div>
    </div>
    
  );
}

export default Navbar;