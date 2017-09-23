import React from 'react';
import Projects from './projects.json';


class Description extends React.Component {
  get project() {
    console.log(Projects['PackHire']);
  }
  render() {
    this.project;
    console.log("HI");
    return (
      <div className="project-container">
        <div className="overview-box">
          <h1>MY PROJECTS</h1>
        </div>
      </div>
    );
  }
};

export default Description;
