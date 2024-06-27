import React from 'react';
import './JobDesc.css';

function JobDesc() {
  return (
    
      <div className="job-card">
        <div className="job-title">
          Senior Product Designer
          <span className="posted">posted 2 days ago</span>
          <span className="status">Open</span>
        </div>
        <div className="job-details">
          <span className="location">Delaware,USA</span>
          <span className="salary">$300k-$400k</span>
        </div>
      </div>
      
    
  );
};

export default JobDesc;