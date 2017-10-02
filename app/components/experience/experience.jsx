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
        title: "Software Engineer (Python) // Jun 2016 - Present",
        descriptions: [
          "Core engineer in creating the first alternate trading system (ATS) to trade pre-IPO companies. Designed and developed a scalable system to handle and display $5bn+ of private market volume. Architected and drove development for the real-time core messaging service, which is responsible for over 90% daily user visit and time spent on platform.",
        ],
        image: Zanbato,
        imgClass: 'zanbato',
      },
      {
        company: "IBM",
        title: "Software Engineer & Product Designer (Java) // Jun 2015 - Jun 2016",
        descriptions: [
          "Engineer & product designer on Analytics Platform. Launched a new data science workbench solution and contributed to Apache Zeppelin. Rapidly prototyped mobile apps, conducted 20+ user research interviews to understand business needs, helped align design & engineering, led discussions on technical feasibility and tradeoffs."
        ],
        image: IBM,
        imgClass: 'ibm',
      },
      {
        company: "HealthEngine",
        title: "Software Engineering Intern (Ruby on Rails) // Sep 2014 - Dec 2014",
        descriptions: [
          "Built features for the Search Platform like location mapping & mobile rendering to provide users with accurate insurance and doctors. Refactored legacy code, improved test coverage and participated in architecture discussions regarding optimizing platform performance."
        ],
        image: HealthEngine,
        imgClass: 'healthengine',
      },
      {
        company: "4C Insights",
        title: "Software Engineering Intern (Python) // Jun 2014 - Sep 2014",
        descriptions: [
          "Developed algorithms and modeled data for auto-optimization on ad buying based on user engagement and behavior. Created a pipeline that collects Facebook ad activity & statistics to be used to train and optimize the ad purchasing proprietary algorithm."
        ],
        image: Insights,
        imgClass: 'insights',
      },
      {
        company: "MD Anderson Cancer Center",
        title: "Software Bioinformatics Intern (Python)  // Jun 2013 - Sep 2013",
        descriptions: [
          "Developed an algorithm based on previous research and statistical algorithms to explore detection of cancer related to genomic architecture and chromosomal interactions. Created a computational pipeline reads genomic data and provide insights & visual plots about spatial architecture of the chromosome."
        ],
        image: MDAnderson,
        imgClass: 'mdanderson',
      },
      {
        company: "Northwestern University",
        title: "Graduated June 2015 // GPA: 3.84 // Magna Cum Laude",
        descriptions: [
          "Studied Biological Science and Computer Science while doing 3+ years of doing biomedical research on genetics regarding COPD and figuring the genetic pathway. Led and recruited over 40 students in EPIC (Northwestern's entrepreneurship Organization) to create development programs and pitch competitions. Raised and managed over $150,000 of sponsorship dollars for the organization and its programs. Founded Northwestern’s largest hackathon (WildHacks), which had 450+ students participate & over $70,000 of funding from sponsors."
        ],
        image: Northwestern,
        imgClass: 'northwestern',
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
      const empty = <div className="col-md-5 txt-box" />;
      const info = (
        <div className="col-md-9 txt-box">
          <h1>{experience.company}</h1>
          <h2>{experience.title}</h2>
          {description}
        </div>
      );
      const descriptionEven = info;
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
          {descriptionEven}
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
        <div className="text-container">
          <div className="text-box">
            <h1>ABOUT ME</h1>
            <h2>
              I am a recent graduate of Northwestern University where I studied Biological Sciences and Computer Science. At Northwestern, I
              led EPIC, the entrepreneurship student group. I led a group of 40 students to create programs like Project Pitch (an entrepreneurship development program)
              and WildHacks (an intercollegiate hackathon).<br/><br/>Post graduation, I worked at IBM Design as a software engineer and product designer working on creating a data science
              solutions for IBM. <br/><br/>Most recently, I moved to San Francisco to join Zanbato, a finanical technology startup as a core engineer creating a stock exchange for private
              companies. My professional interests include finance, big data, and the intersection of medicine and technology.
            </h2>
          </div>
        </div>
        <div className="experiences-box">
          {this.experienceComponents}
        </div>
      </div>
    );
  }
};

export default Experience;
