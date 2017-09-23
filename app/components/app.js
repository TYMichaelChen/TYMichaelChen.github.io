import React from 'react';

// import HomePage from './pages/HomePage.jsx';
// import ProjectPage from './pages/ProjectPage.jsx';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users" component={UsersPage} />
      </Switch>
    </main>
  </div>
)

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

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
