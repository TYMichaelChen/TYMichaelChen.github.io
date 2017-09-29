import React from 'react';
import './description.scss';
import _ from 'lodash';
import Projects from './projects.json';


class Description extends React.Component {
  get features() {
    const project = this.props.project;
    if (project.features) {
      const features = _.map(project.features, (features, index) => {
          const featuresElem = _.map(features, (feature, idx) => {
            return (
              <li key={idx}>{feature}</li>
            );
          })
          return (
            <div key={index} className="text">
              <h2>{project.name} has the following features:</h2>
              <ul>
                {featuresElem}
              </ul>
            </div>
          );
        });
      return (
        <div>
          <h1 style={{color:project.color}}>Features</h1>
          {features}
        </div>
      );
    }
    return null;
  }
  get featuresPictures() {
    const project = this.props.project;
    if (project.features) {
      const pictures =  _.map(project.featuresPictures, (picture, idx) => {
        return <img key={idx} className="feature-picture" src={picture} />;
      });
      return (
        <div className="feature-images-box">
          {pictures}
        </div>
      );
    }
    return null;
  }
  get howItWorks() {
    const project = this.props.project;
    if (project.howItWorks) {
      const howItWorks = _.map(project.howItWorks, (work, index) => {
          return (
            <div key={index} className="work">
              <h2>{work.name}</h2>
              <img src={work.picture} />
              <h3>{work.description}</h3>
            </div>
          );
      });
      return (
        <div>
          <h1 style={{color:project.color}} className="work-txt">How Does {project.name} Work?</h1>
          {howItWorks}
        </div>
      );
    }
    return null;
  }
  get technology() {
    const project = this.props.project;
    return _.map(project.technology, (technology, index) => {
      const techElem = _.map(technology, (tech, idx) => {
        return (
          <li key={idx}>{tech}</li>
        );
      })
      return (
        <div key={index} className="text">
          <h1 style={{color:project.color}}>Technology</h1>
          <h2>I built {project.name} using:</h2>
          <ul>
            {techElem}
          </ul>
        </div>
      );
    });
  }
  get techPictures() {
    const project = this.props.project;
    const pictures =  _.map(project.techPictures, (picture, idx) => {
      return <img key={idx} className="feature-picture" src={picture} />;
    });
    return (
      <div className="feature-images-box">
        {pictures}
      </div>
    );
  }
  get appLink() {
    const project = this.props.project;
    if(project.link) {
      return (
        <a style={{color:project.color}} href={project.link} target="_blank">Visit the {project.name} App</a>
      );
    }
    return null;
  }
  get backLink() {
    const project = this.props.project;
    return (
        <a style={{color:project.color}} href="/#projects">Back to Other Projects</a>
    );
  }
  render() {
    const project = this.props.project;
    return (
      <div className="description-container">
        <div className="overview-box">
          <h1 style={{color:project.color}}>{project.name}</h1>
          <h2>{project.description}</h2>
          {this.appLink}
          <div className="pic-wrapper">
            <img className="main-picture" src={project.mainPicture} />
          </div>
        </div>
        <div className="text-box">
          {this.features}
        </div>
        {this.featuresPictures}
        <div className="text-box">
          {this.howItWorks}
        </div>
        {this.howPictures}
        <div className="text-box">
          {this.technology}
        </div>
        {this.techPictures}
        <div className="footer-box">
          {this.appLink}
          {this.backLink}
        </div>
      </div>
    );
  }
};

Description.propTypes = {
    project: React.PropTypes.object,
};

export default Description;
