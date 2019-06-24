import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Profile from './js/containers/home.container'
import GameList from './js/containers/games/gameList.container'
import GamePlay from './js/containers/games/singleGamePlay.container'
import ItemList from './js/containers/shopping/itemList.container'
import ItemDetail from './js/containers/shopping/itemDetail.container'
import Login from './js/containers/login.container'
import SignUp from './js/containers/signup.container'

const Routes = () => (
  <Router >
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/owner" component={Profile} />
      <Route path="/games" component={GameList} />
      <Route path="/game/:id" component={GamePlay} />
      <Route path="/mpthaotrang" component={ItemList} />
      <Route path="/mpthaotrang/detail/:id" component={ItemDetail} />
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);


export default Routes