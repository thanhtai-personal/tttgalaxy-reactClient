import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from "./js/components/App.jsx";

const Routes = () => (
  <Router >
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" component={() => { return <div>login</div> }} />
      <Route path="/home" component={() => { return <div>home</div> }} />
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);
export default Routes