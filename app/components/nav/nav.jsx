import React from 'react';
import './nav.scss';
import Scroll from 'react-scroll'
let Link = Scroll.Link;



class Nav extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      atTop: true,
    };
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const homeHeight = document.getElementById('home-container').clientHeight;
      console.log(homeHeight);
      this.setState({ atTop: window.scrollY < homeHeight });
    });
  }
  render() {
    const navClass = "navbar navbar-fixed-top " + (this.state.atTop ? 'nav-top' : 'nav-other');
    return (
      <nav className={navClass} id="toggle-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/"><span className="dark-txt">T.Y.</span> Michael <span className="dark-txt">Chen</span></a>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>PROJECTS</Link>
              </li>
              <li>
                <Link activeClass="active" to="experiences" spy={true} smooth={true} duration={1000}>ABOUT</Link>
              </li>
              <li><a href="https://medium.com/@TYMichaelChen" target="_blank">BLOG</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Nav;
