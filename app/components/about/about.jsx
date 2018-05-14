import React from 'react';
import _ from 'lodash';

import AboutImg from '../../static/images/about.png';
import './about.scss';


class About extends React.Component {
  get aboutComponent() {
    return (
      <div className="about-box">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="img-box">
              <img className="bio-img" src={AboutImg} />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
              <div className="bio-box">
                <div className="txt-box">
                  <h4>
                    I am a software engineer currently living in San Francisco. I studied Biological Science and Computer Science at Northwestern University.
                    I fell in love with creating software at Northwestern when I was leading EPIC, an entrepreneurship student organization.
                    Since then, I decided to turn down my medical school offer to pursue software engineering. I am deeply passionate about
                    the intersection of software and medicine. I currently work at Zanbato, creating the first alternative trading system
                    to trade shares in pre-IPO companies. Please reach out if you would like to know more about what I am up to or would like
                    to collaborate. I look forward build great products together!
                  </h4>
                  <div className="resume-box">
                    <a href="http://www.tymichaelchen.com/TYMichaelChen_Resume.pdf" target="_blank">View Resume</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div id="about" className="about-container">
        <div className="page-title-box">
          <h1>ABOUT</h1>
          <h2>My background and journey as an engineer</h2>
        </div>
        {this.aboutComponent}
      </div>
    );
  }
};

export default About;
