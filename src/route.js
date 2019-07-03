import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GameList from './js/containers/games/gameList.container'
import GamePlay from './js/containers/games/singleGamePlay.container'
import ItemList from './js/containers/shopping/itemList.container'
import ItemDetail from './js/containers/shopping/itemDetail.container'
import Login from './js/containers/login.container'
import SignUp from './js/containers/signup.container'
import Home from './js/containers/home.container'
import Portfolio from './js/containers/portfolio.container'
import Header from './js/components/partials/header'

// const header1Path = [
//   'login', 'register', 'games', 'mpthaotrang', 'home'
// ]

// const checkHeader = () =>  {
//   let currentPath = window.location.pathname
//   if (header1Path.includes(currentPath.split('/')[1])) {
//     return (
//       <Header />
//     )
//   } else {
//     return ""
//   }
// }

const Routes = () => (
  <Router >
    {/* {checkHeader()} */}
    <Header />
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/games" component={GameList} />
      <Route path="/game/:id" component={GamePlay} />
      <Route path="/mpthaotrang" component={ItemList} />
      <Route path="/mpthaotrang/detail/:id" component={ItemDetail} />
      <Route path="/home" exact component={Home} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);


export default Routes