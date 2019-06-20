import React, { PureComponent } from "react";
import Banner from './banner'
import Content from './content'

import './home.scss'


class Home extends PureComponent {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="container-fluid" id="home">
        <Banner />
        <Content />
      </div>
    )
  }
}

export default Home