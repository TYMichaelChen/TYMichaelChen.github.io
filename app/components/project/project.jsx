import React from 'react';
import './project.scss';


class Project extends React.Component {
  render() {
    return (
      <div className="project-container">
        <div className="text-box">
          <h1>MY PROJECTS</h1>
          <h2>
            Im a software engineer working at Zanbato, creating a stock exchange for private markets (the first of its kind
            Alternative Trading System). I graduated from Northwestern University in 2015 studying Biological Sciences and Computer Science.
            During my time at Northwestern, I led EPIC, the entrepreneurship student group, and created programs such as
            WildHacks, an intercollegiate hackathon, and Project Pitch, an entrepreneurship development program.
          </h2>
          <h2 className="filter-title">FILTER BY LANGUAGE:</h2>
        </div>
        <div className="filter-box">
        </div>
      </div>
    );
  }
};

export default Project;
