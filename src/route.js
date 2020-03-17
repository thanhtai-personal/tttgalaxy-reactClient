import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { RequireAuth, UserLayout, Localization } from './js/middleware'

// import GameList from './js/containers/games/gameList.container'
// import GamePlay from './js/containers/games/singleGamePlay.container'
// import ItemList from './js/containers/shopping/itemList.container'
// import ItemDetail from './js/containers/shopping/itemDetail.container'
import Login from './js/containers/login.container'
// import SignUp from './js/containers/signup.container'
import Home from './js/containers/home.container'
// import Portfolio from './js/containers/portfolio.container'
// import Novals from './js/containers/novals/novals.container'
import Header from './js/components/partials/header'
// import PortfolioV2Header from './js/components/partials/portfolioHeader'
// import PortfolioV2Footer from './js/components/partials/portfolioFooter'
import Footer from './js/components/partials/footer'
// import Blog from './js/containers/blog/blog.container'
import BlogEditor from './js/containers/blogCreator/blogCreator.container'
// import BlogView from './js/containers/blogCreator/blogView.container'
// import BlogsView from './js/containers/blogCreator/blogsView.container'
// import UIMakeupContainer from './js/containers/UIMakeup'
// import PortfolioV2 from './js/containers/portfolioV2'

const publicRoute = [
  {
    path: '/login',
    component: Login,
    isExact: false,
    layout: { footer: Footer }
  },
  // {
  //   path: '/novals',
  //   component: Novals,
  //   isExact: false,
  //   layout: { header: Header, footer: Footer }
  // },
  // {
  //   path: '/register',
  //   component: SignUp,
  //   isExact: false,
  //   layout: { footer: Footer }
  // },
  // {
  //   path: '/games',
  //   component: GameList,
  //   isExact: true,
  //   layout: { header: Header, footer: Footer }
  // },
  // {
  //   path: '/gameplay',
  //   component: GamePlay,
  //   isExact: false,
  //   layout: { header: Header, footer: Footer }
  // },
  // {
  //   path: '/mpthaotrang',
  //   component: ItemList,
  //   isExact: true,
  //   layout: { header: Header, footer: Footer }
  // },
  // {
  //   path: '/mpthaotrang/detail/:id',
  //   component: ItemDetail,
  //   isExact: false,
  //   layout: { header: Header, footer: Footer }
  // },
  // {
  //   path: '/portfolio/public/:publicKey',
  //   component: Portfolio,
  //   isExact: false
  // },
  // {
  //   path: '/blog',
  //   component: Blog,
  //   isExact: false
  // },
  // {
  //   path: '/blog/:blogId',
  //   component: BlogView,
  //   isExact: false
  // },
  // {
  //   path: '/blogs/:userId',
  //   component: BlogsView,
  //   isExact: false
  // },
  {
    path: '/home',
    component: Home,
    isExact: false,
    layout: { header: Header }
  },
  // {
  //   path: '/about',
  //   component: Blog,
  //   isExact: false
  // },
  // {
  //   path: '/public/portfolio',
  //   component: PortfolioV2,
  //   isExact: false,
  //   layout: { header: PortfolioV2Header, footer: PortfolioV2Footer }
  // },
]

const privateRoute = [
  // {
  //   path: '/homeprivate',
  //   component: Home,
  //   isExact: false,
  //   layout: { header: Header, footer: Footer }
  // },
  // {
  //   path: '/portfolio',
  //   component: Portfolio,
  //   isExact: false
  // },
  // {
  //   path: '/blogEditor',
  //   component: BlogEditor,
  //   isExact: false,
  //   layout: { header: Header }
  // }
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
      <Route path="/" exact component={UserLayout({ header: Header }, Home)} />
      {renderPublicRoute()}
      {renderPrivateRoute()}
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);

export default Routes