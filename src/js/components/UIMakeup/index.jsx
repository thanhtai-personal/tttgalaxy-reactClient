import React, { PureComponent, Suspense } from "react";
// import styled from './styled'
import $ from 'jquery'
import _ from 'lodash'
import Header from './header'
// import Banner from './banner'
const Banner = React.lazy(() => import('./banner'));
const Info = React.lazy(() => import('./info'));


class BlogCreator extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    $("body").css({ margin: '0 0 0 0' })
  }

  componentWillUnmount () {
    $("body").css({ margin: '18px 12vw 34px' })
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <div className="home-page-background-color"></div>
        <div className="home-page">
          <div className="home-page-body">
            <Suspense fallback={<div>Loading...</div>}>
              <Banner />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <Info />
            </Suspense>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BlogCreator