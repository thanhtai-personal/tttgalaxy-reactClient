import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { RequireAuth, UseLayout, Localization } from './middleware'

import Home from './App'
import News from './containers/news.container'

const publicRoute = [
  {
    path: '/home',
    component: Home,
    isExact: true,
    //layout: { header: Header, footer: Footer }
  },
  {
    path: '/news',
    component: News,
    isExact: false,
    //layout: { header: Header, footer: Footer }
  }
]

const privateRoute = [
]

const renderPublicRoute = () => {
  return publicRoute.map((route) =>
    <Route key={route.path} path={route.path} exact={route.isExact} component={Localization(route.layout ? UseLayout(route.layout, route.component) : route.component)} />
  )
}

const renderPrivateRoute = () => {
  return privateRoute.map((route) =>
    <Route key={route.path} path={route.path} exact={route.isExact} component={Localization(RequireAuth(route.layout ? UseLayout(route.layout, route.component) : route.component))} />
  )
}

const history = createBrowserHistory()
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={UseLayout({}, News)} />
      {renderPublicRoute()}
      {renderPrivateRoute()}
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);

export default Routes