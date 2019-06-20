import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import App from "./js/components/App.jsx";
import PhaserHelloWorld from './js/components/phaser/game.jsx'
import Home from './js/containers/home.container'

const Routes = () => (
  <Router >
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/game" component={PhaserHelloWorld} />
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);


export default Routes