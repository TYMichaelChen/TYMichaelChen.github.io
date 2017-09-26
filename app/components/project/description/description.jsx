import React from 'react';
import './description.scss';
import _ from 'lodash';
import Projects from './projects.json';


class Description extends React.Component {
  get features() {
    const project = this.props.project;
    return _.map(project.features, (features, project) => {
      const featuresElem = _.map(features, (feature, idx) => {
        return (
          <li key={idx}>{feature}</li>
        );
      })
      return (
        <div className="text">
          <h2>{project} has the following features:</h2>
          <ul>
            {featuresElem}
          </ul>
        </div>
      );
    });
  }
  get featuresPictures() {
    const project = this.props.project;
    const pictures =  _.map(project.featuresPictures, (picture, idx) => {
      return <img className="feature-picture" src={picture} />;
    });
    return (
      <div className="feature-images-box">
        {pictures}
      </div>
    );
  }
  get technology() {
    const project = this.props.project;
    return _.map(project.technology, (technology, project) => {
      const techElem = _.map(technology, (tech, idx) => {
        return (
          <li key={idx}>{tech}</li>
        );
      })
      return (
        <div className="text">
          <h2>I built {project} using:</h2>
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
      return <img className="feature-picture" src={picture} />;
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
          <h1 style={{color:project.color}}>Features</h1>
          {this.features}
          {this.featuresPictures}
        </div>
        <div className="text-box">
          <h1 style={{color:project.color}}>Technology</h1>
          {this.technology}
          {this.techPictures}
        </div>
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
