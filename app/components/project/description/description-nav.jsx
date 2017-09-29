import React from 'react';
import './description-nav.scss';
import Scroll from 'react-scroll'
let Link = Scroll.Link;



class DescriptionNav extends React.Component {
  get links() {
    const links =  _.map(this.props.links, (link) => (
      <li> <Link activeClass="active" to={`${link.link}`} spy={true} smooth={true} duration={1000}>{link.name}</Link></li>
    ));
    return (
      <ul className="nav navbar-nav navbar-right">
        {links}
        <li><a href="/#projects">All Projects</a></li>
      </ul>
    );
  }
  render() {
    console.log(this.props.links);
    return (
      <nav className="navbar navbar-fixed-top nav-other" id="toggle-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/"><span className="light-txt">T.Y.</span> Michael <span className="light-txt">Chen</span></a>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            {this.links}
          </div>
        </div>
      </nav>
    );
  }
};

DescriptionNav.propTypes = {
    links: React.PropTypes.array,
};

export default DescriptionNav;
