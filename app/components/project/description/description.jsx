import React from 'react';
import './description.scss';
import _ from 'lodash';
import Projects from './projects.json';


class Description extends React.Component {
  get features() {
    const project = this.props.project;
    return _.map(project.features, (feature, idx) => {
      return (
        <ul key={idx}><li>{feature}</li></ul>
      );
    })
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
    return _.map(project.technology, (technology, idx) => {
      return (
        <ul key={idx}><li>{technology}</li></ul>
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
    return (
        <a href={project.link} target="_blank">Visit the {project.name} App</a>
    );
  }
  render() {
    const project = this.props.project;
    return (
      <div className="description-container">
        <div className="overview-box">
          <h1>{project.name}</h1>
          <h2>{project.description}</h2>
          {this.appLink}
          <div className="pic-wrapper">
            <img className="main-picture" src={project.mainPicture} />
          </div>
        </div>
        <div className="text-box">
          <h1>Features</h1>
          <h2>{project.name} has the following features:</h2>
          {this.features}
          {this.featuresPictures}
        </div>
        <div className="text-box">
          <h1>Technology</h1>
          <h2>I built {project.name} with the following:</h2>
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
