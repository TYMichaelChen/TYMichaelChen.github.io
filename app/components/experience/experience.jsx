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
        company: "ZANBATO",
        title: "Software Engineer (June 2016 - Present)",
        descriptions: ["Creating the first alternative trading system for trading shares in pre-IPO companies."],
        website: "www.zanbato.com",
        image: Zanbato,
        imgClass: 'zanbato',
      },
      {
        company: "IBM Data Analytics Platform",
        title: "Software Engineer (Jun 2015 - Jun 2016)",
        descriptions: ["Created a new data science workbench solution (like iPython) & contribute to open source Apache Zeppelin."],
        website: "www.ibm.com/partnerworld/cloud/public-cloud/watson-data-platform",
        image: IBM,
        imgClass: 'ibm',
      },
      {
        company: "Northwestern University",
        title: "Class of 2015 (Magna Cum Laude)",
        descriptions: ["Studied Biological Science & Computer Science. Led EPIC (Student Entreprenuership Organization) and created hackathons (WildHacks)."],
        website: "www.northwestern.edu",
        image: Northwestern,
        imgClass: 'northwestern',
      },
      {
        company: "HealthEngine",
        title: "Software Engineering Intern (Sep - Dec 2014)",
        descriptions: ["Created a platform to help make healthcare more affordable by showing patients upfront costs."],
        website: "www.healthengine.com",
        image: HealthEngine,
        imgClass: 'healthengine',
      },
      {
        company: "4C Insights",
        title: "Software Engineering Intern (Jun - Sep 2014)",
        descriptions: ["Developed algorithms and modeled data for auto-optimization on ad buying based on userengagement."],
        website: "www.4cinsights.com",
        image: Insights,
        imgClass: 'insights',
      },
      {
        company: "MD Anderson Cancer Center",
        title: "Software Engineering Intern (Jun - Sep 2013)",
        descriptions: ["Developed new analytics services to automatically collect Facebook Ads activity to analyze correlations with advertisement engagement."],
        website: "www3.mdanderson.org/",
        image: MDAnderson,
        imgClass: 'mdanderson',
      },
    ];
  }
  get experienceComponents() {
    const experiencesObj = this.experiences;
    const experiences = _.map(experiencesObj, (experience, idx) => {
      const verticalLine = idx === experiencesObj.length - 1 ?
        null : <div className="vertical-box"><div className="vertical-line" /></div>;
      const description = _.map(experience.descriptions, (description, index) => {
        return (
          <h3 key={index}>{description}</h3>
        );
      })
      const evenOdd = idx % 2 === 0;
      const txtBoxStyle = evenOdd ? 'even': 'odd';
      const empty = <div className="col-md-5 txt-box" />;
      const info = (
        <div className={`col-md-5 txt-box-${txtBoxStyle}`}>
          <a href={`http://${experience.website}`} target="_blank">
            <h1>{experience.company}</h1>
          </a>
          <h2>{experience.title}</h2>
          <h3>{experience.date}</h3>
          {description}
        </div>
      );
      return (
        <div className="row experience-row" key={experience.company}>
          {evenOdd ? empty : info}
          <div className="col-md-2 timeline">
            <div className="img-box">
              <a href={`https://${experience.website}`} target="_blank">
                <div className={`img-bg ${experience.imgClass}-img-bg`}>
                <img className={`${experience.imgClass}-img`} src={experience.image} />
              </div>
              </a>
            </div>
            {verticalLine}
          </div>
          {evenOdd ? info : empty}
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
      <div id="experiences" className="experience-container">
        <div className="page-title-box">
          <h1>EXPERIENCE</h1>
          <h2>My latest professional engineering experience</h2>
        </div>
        <div className="experiences-box">
          {this.experienceComponents}
        </div>
      </div>
    );
  }
};

export default Experience;
