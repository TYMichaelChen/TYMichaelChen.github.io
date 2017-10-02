import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './nav.scss';
import Scroll from 'react-scroll';
let Link = Scroll.Link;


class Navs extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      atTop: true,
    };
    this.setNavExpanded = this.setNavExpanded.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const homeHeight = document.getElementById('home').clientHeight - 50;
      this.setState({ atTop: window.scrollY < homeHeight });
    });
  }
  setNavExpanded(navExpanded) {
    this.setState({ navExpanded });
  }
  closeNav() {
    this.setState({ navExpanded: false });
  }
  render() {
    const navClass = this.state.atTop ? 'nav-top' : 'nav-other';
    return (
      <Navbar fixedTop collapseOnSelect className={navClass} onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><span className="light-txt">T.Y.</span> Michael <span className="light-txt">Chen</span></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link onClick={this.closeNav} activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>PROJECTS</Link>
            </li>
            <li>
              <Link onClick={this.closeNav} activeClass="active" to="experiences" spy={true} smooth={true} duration={1000}>ABOUT</Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default Navs;
