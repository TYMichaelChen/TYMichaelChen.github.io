import React from 'react';

import Experience from '../experience/experience.jsx';
import Home from '../home/home.jsx';
import Nav from '../nav/nav.jsx';
import Description from '../project/description/description.jsx';
import Footer from '../footer/footer.jsx';
import '../../static/css/main.scss';
import Projects from '../project/description/projects.json';


class ProjectPage extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            project: '',
        };
    }
    componentWillMount() {
        const name = this.props.location.search.split('?project=')[1];
        const project = this.project(name);
        if (project) {
          this.setState({ project });
        } else {
          this.props.history.push("/");
        }
    }
    project(name) {
      if(name) {
        return Projects[name];
      }
      return null;
    }
    render() {
        if (this.state.project) {
            return (
              <div>
                <Nav />
                <Description project={this.state.project} />
              </div>
            );
        }
        return null;
    }
};

export default ProjectPage;
