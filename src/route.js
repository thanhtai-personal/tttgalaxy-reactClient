import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from "./js/components/App.jsx";
import PhaserGameTest from './js/components/phaser/game.jsx'

const Routes = () => (
  <Router >
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" component={() => { return <div>login</div> }} />
      <Route path="/home" component={() => { return <div>home</div> }} />
      <Route path="/game" component={PhaserGameTest} />
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);


export default Routes