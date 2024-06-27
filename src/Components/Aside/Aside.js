import React from 'react';
import './Aside.css';

const Aside = () => {
  return (
    <div className="vertical">
      <div className="actions">
        <button className="delete-button">Delete job</button>
        <button className="edit-button">Edit job</button>
      </div>
      
        <div className="card">
          <span className="icon">👥</span>
           <span className="name">Applicants</span>
           <p className="label">400</p>
        </div>

         <div className="card1">
          <span className="icon">🤝</span>
          <span className="name">Matches</span>
          <p className="label1">100</p>
        </div>

        <div className="card2">
          <span className="icon">💬</span>
          <span className="name">Messages</span>
          <span className="label2">147</span>
        </div>

        <div className="card3">
          <span className="icon">👁️</span>
          <span className="name">Views</span>
          <span className="label3">800</span>
        </div> 
       <div className="rectangle">
      <div className="quote">
        <p>"A quote from a Atlassian."</p>
        {/* <div className="info"> */}
          <span className="name">Name</span>
          <span className="description">Description</span>
        </div>
      
      </div>
      </div>
    
    
  );
};

export default Aside;