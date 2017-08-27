import React from 'react';
import MainPicture from '../../static/images/main-picture.png';
import { DownArrow, Email, Github, LinkedIn } from '../../static/js/svgs.js';
import './home.scss';


class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="row">
          <div className="col-md-6 picture-box">
            <img className="main-picture" src={MainPicture} alt="Profile Picture" />
          </div>
          <div className="col-md-6 text-box">
            <h1>Hi! My name is Michael.</h1>
            <h2>SOFTWARE ENGINEER</h2>
            <h3>
              Im a software engineer working at Zanbato, creating a stock exchange for private markets (the first of its kind
              Alternative Trading System). I graduated from Northwestern University in 2015 studying Biological Sciences and Computer Science.
              During my time at Northwestern, I led EPIC, the entrepreneurship student group, and created programs such as
              WildHacks, an intercollegiate hackathon, and Project Pitch, an entrepreneurship development program.
            </h3>
            <div className="social-box">
              <a href="http://www.github.com/miketychen" target="_blank"><span className="icon"><Github /></span></a>
              <a href="mailto:miketychen@gmail.com" target="_blank"><span className="icon email-icon"><Email /></span></a>
              <a href="http://www.linkedin.com/in/miketychen" target="_blank"><span className="icon"><LinkedIn /></span></a>
            </div>
            <div className="down-box">
              <span className="icon"><DownArrow /></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
