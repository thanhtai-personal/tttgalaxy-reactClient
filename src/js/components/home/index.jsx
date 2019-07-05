import React, { PureComponent } from "react";

import './home.scss'


class Home extends PureComponent {
  constructor (props) {
    super(props)
    this.renderParticle = this.renderParticle.bind(this)
  }


  renderParticle (numberOfPlane) {
    let rs = []
    for (let i = 0; i < numberOfPlane; i++) {
      rs.push(<div className="particle"></div>)
    }
    return rs;
  }

  render () {
    // const {
    //   renderParticle
    // } = this
    return (
      <div 
        //id="particle-container"
        id="snow"
      >
        {/*renderParticle(50)*/}
      </div>
    )
  }
}

export default Home