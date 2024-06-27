import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="contain">
      <div className="logo">
        <div className="triangle"></div>
        <span>Atlassian</span>
        <button className="follow-button">Follow</button>
      </div>

      <div className="info">
      <div className="info-items">
          <span className="info-label">Company size</span> 
          <span className="info-labela">Type</span>
          <p className="info-value">1k-2k Employers</p>
          <p className="info-valuea">Private</p>

        </div>
        <div className="info-item">
          <span className="info-label1">Sector</span>
          <span className="info-labelb">Funding</span>
          <p className="info-value1">Information Technology, Infrastructure</p>
          <p className="info-valueb">Bootstrapped</p>
        </div>
        <div className="info-item">
          <span className="info-label2">Founded in</span>
          <span className="info-labelc">Founded By</span>
          <p className="info-value2">2019</p>
          <p className="info-valuec">Scott Farquhar,Mike Cannon-Brookes</p>
        </div>
      
        {/* <div className="info-item">
          <span className="info-label3">Type</span>
          <span className="info-value3">Private</span>
        </div>
        
        <div className="info-item">
          <span className="info-label4">Funding</span>
          <span className="info-value4">Bootstrapped</span>
        </div>
        <div className="info-item">
          <span className="info-label5">Founded By</span>
          <span className="info-value5">Scott Farquhar, Mike Cannon-Brookes</span>
        </div> */}
        </div>
    </div>
  );
};

export default Footer;