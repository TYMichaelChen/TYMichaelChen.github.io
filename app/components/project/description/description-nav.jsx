import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './description-nav.scss';
import Scroll from 'react-scroll'
let Link = Scroll.Link;



class DescriptionNav extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
    this.setNavExpanded = this.setNavExpanded.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  setNavExpanded(navExpanded) {
    this.setState({ navExpanded });
  }
  closeNav() {
    this.setState({ navExpanded: false });
  }
  get links() {
    const links =  _.map(this.props.links, (link, idx) => (
      <li key={idx}> <Link onClick={this.closeNav} activeClass="active" to={`${link.link}`} spy={true} smooth={true} duration={1000}>{link.name}</Link></li>
    ));
    return (
      <ul className="nav navbar-nav navbar-right">
        {links}
        <li><a href="/#projects">All Projects</a></li>
      </ul>
    );
  }
  render() {
    return (
      <Navbar fixedTop collapseOnSelect className="nav-other" onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><span className="light-txt">T.Y.</span> Michael <span className="light-txt">Chen</span></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {this.links}
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

DescriptionNav.propTypes = {
    links: React.PropTypes.array,
};

export default DescriptionNav;
