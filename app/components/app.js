import React from 'react';

import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



const PrimaryLayout = () => (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/project" component={ProjectPage} />
      </Switch>
    </main>
)

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <PrimaryLayout />
      </BrowserRouter>
    )
  }
};

export default App;
