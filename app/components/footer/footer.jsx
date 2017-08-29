import React from 'react';
import { DownArrow, Email, Github, LinkedIn, Resume } from '../../static/js/svgs.js';
import './footer.scss';


class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="row">
          <div className="col-md-6 text-box">
            <h1>T.Y. Michael Chen</h1>
            <h2>If you’d like to see more of what I’ve been up to reach out!</h2>
          </div>
          <div className="col-md-6 social-box">
            <a href="http://www.github.com/miketychen" target="_blank"><span className="icon"><Github /></span></a>
            <a href="mailto:miketychen@gmail.com" target="_blank"><span className="icon email-icon"><Email /></span></a>
            <a href="http://www.linkedin.com/in/miketychen" target="_blank"><span className="icon"><LinkedIn /></span></a>
            <a href="http://www.linkedin.com/in/miketychen" target="_blank"><span className="icon"><Resume /></span></a>
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
