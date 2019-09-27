import React, { PureComponent } from "react";
import styled, { keyframes } from 'styled-components'
import './home.scss'

const snowKF = keyframes`
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px; }
  50% {
    background-position: 500px 500px, 100px 200px, -100px 150px; }
  100% {
    background-position: 500px 1000px, 200px 400px, -100px 300px; }
`

const Snow = styled.div`
  background-color: transparent !important;
  opacity: 1 !important;
  z-index: 3;
  background-image: url(https://res.cloudinary.com/di6vua0hr/image/upload/v1562138473/web_images/snow1_p81pdd.png),
  url(https://res.cloudinary.com/di6vua0hr/image/upload/v1562138473/web_images/snow2_cdqown.png),
  url(https://res.cloudinary.com/di6vua0hr/image/upload/v1562138473/web_images/snow3_krwnc0.png);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  -webkit-animation: snow 10s linear infinite;
  animation: ${snowKF} 10s linear infinite;
`




class Home extends PureComponent {
  constructor (props) {
    super(props)
    // this.renderParticle = this.renderParticle.bind(this)
  }


  // renderParticle (numberOfPlane) {
  //   let rs = []
  //   for (let i = 0; i < numberOfPlane; i++) {
  //     rs.push(<div className="particle"></div>)
  //   }
  //   return rs;
  // }

  render () {
    // const {
    //   renderParticle
    // } = this
    // return (
    //   <div 
    //     //id="particle-container"
    //     id="snow"
    //   >
    //     {/*renderParticle(50)*/}
    //   </div>
    // )
    return <Snow />
  }
}

export default Home