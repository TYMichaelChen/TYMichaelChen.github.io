import React from 'react';
import MainPicture from '../../static/images/main-picture.png';
import ProfilePicture from '../../static/images/profile-picture.png';
import BackgroundImg from '../../static/images/header.png';
import { DownArrow, Email, Github, LinkedIn, Resume } from '../../static/js/svgs.js';
import './home.scss';
import Scroll from 'react-scroll';
let Link = Scroll.Link;


class Home extends React.Component {
  render() {
    return (
      <div id="home" className="home-container">
        <div className="main-panel" style={{backgroundImage: `url(${BackgroundImg})`}}>
            <div className="layer"/>
            <div className="row">
              <div className="col-xs-12">
                <img className="profile-picture" src={ProfilePicture} />
                <div className="img-divider" />
              </div>
              <div className="col-xs-12">
                <h1>HI, I'M MICHAEL.</h1>
              </div>
              <div className="col-xs-12">
                <h2>Software Engineer</h2>
              </div>
              <div className="col-xs-12">
                <div className="social-box">
                  <a href="http://www.github.com/miketychen" target="_blank"><span className="icon"><Github /></span></a>
                  <a href="mailto:miketychen@gmail.com" target="_blank"><span className="icon email-icon"><Email /></span></a>
                  <a href="http://www.linkedin.com/in/miketychen" target="_blank"><span className="icon"><LinkedIn /></span></a>
                  <a href="http://www.linkedin.com/in/miketychen" target="_blank"><span className="icon"><Resume /></span></a>
                </div>
              </div>
              <div className="col-xs-12 down-box">
                <Link to="projects" spy={true} smooth={true} duration={1000}>
                  <div className="down-txt move-down">
                    <span className="icon"><DownArrow /></span>
                  </div>
                </Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
};

export default Home;
