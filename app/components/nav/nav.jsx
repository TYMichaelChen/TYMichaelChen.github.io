import React from 'react';
import './nav.scss';
import Scroll from 'react-scroll'
let Link = Scroll.Link;



class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top" id="toggle-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><span className="light-txt">T.Y.</span> Michael <span className="light-txt">Chen</span></a>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>Projects</Link>
              </li>
              <li>
                <Link activeClass="active" to="experiences" spy={true} smooth={true} duration={1000}>Experience</Link>
              </li>
              <li>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>About</Link>
              </li>
              <li><a href="http://blog.miketychen.com" target="_blank">BLOG</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Nav;
