import React, { PureComponent } from "react";
import styled from './styled'
import $ from 'jquery'



class Blog extends PureComponent {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    $('body').css({
        fontFamily: '"Permanent Marker", cursive',
        margin: '18px 12vw 34px',
        backgroundImage: 'none',
        backgroundColor: '#B2EBF2'
    })
}

componentWillUnmount() {
    $('body').css({
        background: 'url(https://res.cloudinary.com/di6vua0hr/image/upload/v1562129381/web_images/background_jath9x.png) center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    })
}



  render () {
    return (
      <div id='blog-page'>
        <styled.SideNavWrapper>
          <styled.Title>TTTGALAXY</styled.Title>
        </styled.SideNavWrapper>
        <styled.MainWrapper>
          Main content
        </styled.MainWrapper>
      </div>
    )
  }
}

export default Blog