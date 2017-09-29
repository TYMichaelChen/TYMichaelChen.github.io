import React from 'react';
import './project.scss';

// Project Images
import Braindump from '../../static/images/projects/brain.png';
import Packhire from '../../static/images/projects/packhire.jpg';
import SEAM from '../../static/images/projects/seam.jpg';
import Twitter from '../../static/images/projects/twitter.jpg';
import Frontend from '../../static/images/projects/front.jpg';
import Data from '../../static/images/projects/data.jpg';


class Project extends React.Component {
  get projects() {
    return [
      {
        name: "Braindump",
        role: "Software Engineer (Full Stack)",
        technology: ['Ruby', 'Javascript', 'HTML5', 'CSS3', 'PostgreSQL', 'SASS'],
        image: Braindump,
        className: 'braindump',
      },
      {
        name: "PackHire",
        role: "Software Engineer (Full Stack)",
        technology: ['Ruby', 'Javascript', 'HTML5', 'CSS3', 'PostgreSQL', 'SASS'],
        image: Packhire,
        className: 'packhire',
      },
      {
        name: "SEAM",
        role: "Software Engineer (Full Stack)",
        technology: ['Ruby', 'Javascript', 'HTML5', 'CSS3', 'PostgreSQL', 'SASS'],
        image: SEAM,
        className: 'seam',
      },
      {
        name: "Data Science",
        role: "Software Engineer (Full Stack)",
        technology: ['Ruby', 'Javascript', 'HTML5', 'CSS3', 'PostgreSQL', 'SASS'],
        image: Data,
        className: 'data',
      },
      {
        name: "Frontend",
        role: "Software Engineer (Full Stack)",
        technology: ['Ruby', 'Javascript', 'HTML5', 'CSS3', 'PostgreSQL', 'SASS'],
        image: Frontend,
        className: 'frontend',
      },
    ];
  }
  get projectsComponent() {
    const projectsObj = this.projects;
    const projects = _.map(projectsObj, (project) => {
      const tags = _.map(project.technology, (tech) => (
        <span key={tech} className={`${tech}-tag`}>{tech}</span>
      ));
      return (
        <div className={`row project-row ${project.className}-row`} key={project.name}>
          <div className="col-md-3 img-box">
            <img className="project-img" src={project.image} />
          </div>
          <div className="col-md-9 text-box">
            <h1>{project.name}</h1>
            <h2>{project.role}</h2>
            <div className="tag-container">
              {tags}
            </div>
            <a href={`/project?project=${project.className}`}>
              <button className={`details-button ${project.className}-btn`}>
                VIEW DETAILS
              </button>
            </a>
          </div>
        </div>
      );
    });
    return  (
      <div>
        {projects}
      </div>
    );
  }
  render() {
    return (
      <div id="projects" className="project-container">
        <div className="overview-box">
          <h1>MY PROJECTS</h1>
          <h2>
            Im a software engineer working at Zanbato, creating a stock exchange for private markets (the first of its kind
            Alternative Trading System). I graduated from Northwestern University in 2015 studying Biological Sciences and Computer Science.
            During my time at Northwestern, I led EPIC, the entrepreneurship student group, and created programs such as
            WildHacks, an intercollegiate hackathon, and Project Pitch, an entrepreneurship development program.
          </h2>
        </div>
        <div className="filter-box">
        </div>
        {this.projectsComponent}
      </div>
    );
  }
};

export default Project;
