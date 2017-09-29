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
    if (project.featuresPictures) {
      const length = project.featuresPictures.length;
      const pictures =  _.map(project.featuresPictures, (picture, idx) => {
        return <img key={idx} className={`feature-picture-${length}`} src={picture} />;
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
  get design() {
    const project = this.props.project;
    if (project.design) {
      const designInfo = project.design;
      const design = (
        <div className="work">
          <h3>{designInfo.description}</h3>
        </div>
      );
      return (
        <div>
          <div className="text-box">
            <h1 style={{color:project.color}} className="design-txt">{project.name} Designs</h1>
            {design}
          </div>
          {this.designPictures}
        </div>
      );
    }
    return null;
  }
  get designPictures() {
    const project = this.props.project;
    const length = project.designPictures.length;
    if (project.designPictures) {
      const pictures =  _.map(project.designPictures, (picture, idx) => {
        return <img key={idx} className={`feature-picture-${length}`} src={picture} />;
      });
      return (
        <div className="feature-images-box design-images-box">
          {pictures}
        </div>
      );
    }
  }
  get technology() {
    const project = this.props.project;
    let content = null;
    if (project.technology.description) {
      content = (
        <div className="work">
          <h3>{project.technology.description}</h3>
        </div>
      );
    } else {
      content = _.map(project.technology, (technology, index) => {
        const techElem = _.map(technology, (tech, idx) => {
          return (
            <li key={idx}>{tech}</li>
          );
        })
        return (
          <div>
            <h2>I built {project.name} using:</h2>
            <ul>
              {techElem}
            </ul>
          </div>
        );
      });
    }
    return (
      <div className="text">
          <h1 style={{color:project.color}}>Technology</h1>
          {content}
      </div>
    );
  }
  get techPictures() {
    const project = this.props.project;
    const length = project.techPictures.length;
    const pictures =  _.map(project.techPictures, (picture, idx) => {
      return <img key={idx} className={`feature-picture-${length}`} src={picture} />;
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
        {this.design}
        <div className="text-box">
          {this.technology}
        </div>
        {this.techPictures}
        <div className="text-box">
          {this.howItWorks}
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
