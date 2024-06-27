import React from 'react';
import './About.css';

function About() {
  return (
    <div className="job">
        <div className="job1">
      <span>About the job</span>
      <ul class="ul-list">
        <li>1.Handle the UI/UX research design</li>
        <li>2.Work on researching on latest web applications designs & trends</li>
        <li>3.Work on conceptualizing and visualizing</li>
        <li>4.Work on creating graphics content and other graphic related works</li>
      </ul>
      </div>
      <div className="job2">
      <span>Benefits:</span>
      <ul class="ul-list1">
        <li>Health insurance</li>
        <li>Provident Fund</li>
      </ul>
      </div>
      <div className="job3">
        <span>Schedule:</span> 
      <ul class="ul-list2">
        <li>Day shift</li>
      </ul>
      </div>
      <div className="job4">
       <span>Supplemental pay types:</span> 
      <ul class="ul-list3">
        <li>Performance bonus..</li>
      </ul>
      </div>
    </div>
  );
}

export default About;