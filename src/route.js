import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import App from "./js/components/App.jsx";
import PhaserHelloWorld from './js/components/phaser/game.jsx'
import Profile from './js/containers/home.container'

const Routes = () => (
  <Router >
    <Switch>
      <Route path="/" exact component={Profile} />
      <Route path="/owner" component={Profile} />
      <Route path="/game" component={PhaserHelloWorld} />
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);


export default Routes