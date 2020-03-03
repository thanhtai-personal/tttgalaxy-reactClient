import React from 'react'
import styled from 'styled-components'

const Youtube = styled.div`
  width: 789px;
  height: 579px;
`



const YoutubePanel = (props) => {
  const { video, frameborder, allow, allowfullscreen } = props
  const videoSrc = 'https://www.youtube.com/embed/' +
    video + '?autoplay='
  return (
    <Youtube className={`container ${props.className || ''}`}>
      <iframe width='100%' height='100%' src={videoSrc}
        frameborder={frameborder} allow={allow} allowfullscreen={allowfullscreen}></iframe>
    </Youtube>)
}

export default YoutubePanel