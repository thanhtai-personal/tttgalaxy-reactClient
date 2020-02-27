import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { RequireAuth, UserLayout, Localization } from './js/middleware'

import Login from './js/containers/login.container'
import SignUp from './js/containers/signup.container'
import HomeShop from './js/containers/shop.container'
import Header from './js/components/partials/header'
import Footer from './js/components/partials/footer'

const publicRoute = [
  {
    path: '/login',
    component: Login,
    isExact: false,
    layout: { footer: Footer }
  },
  {
    path: '/register',
    component: SignUp,
    isExact: false,
    layout: { footer: Footer }
  }
]

const privateRoute = [
]


const renderPublicRoute = () => {
  return publicRoute.map((route) =>
    <Route key={route.path} path={route.path} exact={route.isExact} component={Localization(route.layout ? UserLayout(route.layout, route.component) : route.component)} />
  )
}

const renderPrivateRoute = () => {
  return privateRoute.map((route) =>
    <Route key={route.path} path={route.path} exact={route.isExact} component={Localization(RequireAuth(route.layout ? UserLayout(route.layout, route.component) : route.component))} />
  )
}

const history = createBrowserHistory()
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={UserLayout({ header: Header, footer: Footer }, HomeShop)} />
      {renderPublicRoute()}
      {renderPrivateRoute()}
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);

export default Routes