import React from 'react';
import Home from './home/home.jsx';
import Nav from './nav/nav.jsx';


import '../static/css/main.scss';


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
};

export default App;
