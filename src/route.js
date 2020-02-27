import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { RequireAuth, UserLayout, Localization } from './js/middleware'

import PortfolioV2Header from './js/components/partials/portfolioHeader'
import PortfolioV2Footer from './js/components/partials/portfolioFooter'
import PortfolioV2 from './js/containers/portfolioV2'

const publicRoute = [
  {
    path: '/public/portfolio',
    component: PortfolioV2,
    isExact: false,
    layout: { header: PortfolioV2Header, footer: PortfolioV2Footer }
  },
]


const renderPublicRoute = () => {
  return publicRoute.map((route) =>
    <Route key={route.path} path={route.path} exact={route.isExact} component={Localization(route.layout ? UserLayout(route.layout, route.component) : route.component)} />
  )
}

const history = createBrowserHistory()
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={UserLayout({ header: PortfolioV2Header, footer: PortfolioV2Footer }, PortfolioV2)} />
      {renderPublicRoute()}
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);

export default Routes