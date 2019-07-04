import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { RequireAuth } from './js/middleware'

import GameList from './js/containers/games/gameList.container'
import GamePlay from './js/containers/games/singleGamePlay.container'
import ItemList from './js/containers/shopping/itemList.container'
import ItemDetail from './js/containers/shopping/itemDetail.container'
import Login from './js/containers/login.container'
import SignUp from './js/containers/signup.container'
import Home from './js/containers/home.container'
import Portfolio from './js/containers/portfolio.container'
import Header from './js/components/partials/header'


const publicRoute = [
  {
    path: '/login',
    component: Login,
    isExact: false
  },
  {
    path: '/register',
    component: SignUp,
    isExact: false
  },
  {
    path: '/games',
    component: GameList,
    isExact: true
  },
  {
    path: '/game/:id',
    component: GamePlay,
    isExact: false
  },
  {
    path: '/mpthaotrang',
    component: ItemList,
    isExact: true
  },
  {
    path: '/mpthaotrang/detail/:id',
    component: ItemDetail,
    isExact: false
  },
  {
    path: '/portfolio',
    component: Portfolio,
    isExact: false
  }
]

const privateRoute = [
  {
    path: '/home',
    component: Home,
    isExact: false
  }
]

const renderPublicRoute = () => {
  return publicRoute.map((route) =>
    <Route path={route.path} exact={route.isExact} component={route.component} />
  )
}

const renderPrivateRoute = () => {
  return privateRoute.map((route) =>
    <Route path={route.path} exact={route.isExact} component={RequireAuth(route.component)} />
  )
}

const history = createBrowserHistory()
const Routes = () => (
  <Router history={history}>
    {/* {checkHeader()} */}
    <Header />
    <Switch>
      <Route path="/" exact component={Login} />
      {renderPublicRoute()}
      {renderPrivateRoute()}
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);

export default Routes