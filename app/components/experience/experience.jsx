import React from 'react';
import _ from 'lodash';
import Zanbato from '../../static/images/zanbato.png';
import IBM from '../../static/images/ibm.png';
import HealthEngine from '../../static/images/healthengine.png';
import Insights from '../../static/images/4cinsights.jpg';
import MDAnderson from '../../static/images/mdanderson.png';
import Northwestern from '../../static/images/northwestern.png';
import './experience.scss';


class Experience extends React.Component {
  get experiences() {
    return [
      {
        company: "Zanbato",
        title: "Software Engineer (Python)",
        description: "Created a computational pipeline  that sequenced human genetic data and Created a computational pipeline  that sequenced human genetic data and Created a computational pipeline",
        image: Zanbato,
        imgClass: 'zanbato',
      },
      {
        company: "IBM",
        title: "Software Engineer (Python)",
        description: "Created a computational pipeline  that sequenced human genetic data and Created a computational pipeline  that sequenced human genetic data and Created a computational pipeline",
        image: IBM,
        imgClass: 'ibm',
      },
      {
        company: "HealthEngine",
        title: "Software Engineer (Python)",
        description: "Created a computational pipeline  that sequenced human genetic data and Created a computational pipeline  that sequenced human genetic data and Created a computational pipeline",
        image: HealthEngine,
        imgClass: 'healthengine',
      },
      {
        company: "4C Insights",
        title: "Software Engineer (Python)",
        description: "Created a computational pipeline  that sequenced human genetic data and Created a computational pipeline  that sequenced human genetic data and Created a computational pipeline",
        image: Insights,
        imgClass: 'insights',
      },
      {
        company: "MD Anderson Cancer Center",
        title: "Software Engineer (Python)",
        description: "Created a computational pipeline  that sequenced human genetic data and Created a computational pipeline  that sequenced human genetic data and Created a computational pipeline",
        image: MDAnderson,
        imgClass: 'mdanderson',
      },
      {
        company: "Northwestern University",
        title: "Software Engineer (Python)",
        description: "Created a computational pipeline  that sequenced human genetic data and Created a computational pipeline  that sequenced human genetic data and Created a computational pipeline",
        image: Northwestern,
        imgClass: 'northwestern',
      },
    ];
  }
  get experienceComponents() {
    const experiencesObj = this.experiences;
    const experiences = _.map(experiencesObj, (experience, idx) => {
      const verticalLine = idx === experiencesObj.length - 1 ?
        null : <div className="vertical-line" />;
      return (
        <div className="row experience-row" key={experience.company}>
          <div className="col-md-3 timeline">
            <div className="img-box">
              <div className="img-bg">
                <img className={`${experience.imgClass}-img`} src={experience.image} />
              </div>
            </div>
            {verticalLine}
          </div>
          <div className="col-md-9">
            <h1>{experience.company}</h1>
            <h2>{experience.title}</h2>
            <h3>{experience.description}</h3>
          </div>
        </div>
      );
    });
    return  (
      <div>
        {experiences}
      </div>
    );
  }
  render() {
    return (
      <div className="experience-container">
        <div className="text-box">
          <h1>EXPERIENCE</h1>
          <h2>
            Im a software engineer working at Zanbato, creating a stock exchange for private markets (the first of its kind
            Alternative Trading System). I graduated from Northwestern University in 2015 studying Biological Sciences and Computer Science.
            During my time at Northwestern, I led EPIC, the entrepreneurship student group, and created programs such as
            WildHacks, an intercollegiate hackathon, and Project Pitch, an entrepreneurship development program.
          </h2>
        </div>
        <div className="experiences-box">
          {this.experienceComponents}
        </div>
      </div>
    );
  }
};

export default Experience;
