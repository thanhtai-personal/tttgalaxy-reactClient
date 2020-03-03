import React, { Suspense } from 'react'
import styled from 'styled-components'
import LoadingPage from './../../common/loadingPage'
import { useState } from 'react'

const Youtube = React.lazy(() => import('./../../common/youtube'))

const Slider = styled.div`
  display: none;
  .slider {
    &.moving-button {
      opacity: 0.5;
      width: 25%;
    }
    &.main {
      width: 50%;
    }
  }
  
`

const dataDefault = [
  {
    video: 'ARMlcfGxIwQ',
    frameborder: '0',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    allowfullscreen: false,
    name: 'JS Coder'
  },
  {
    video: 'y6NSdGL8czw',
    frameborder: '0',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    allowfullscreen: false,
    name: 'Software engineer song'
  },
  {
    video: 'qYodWEKCuGg',
    frameborder: '0',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    allowfullscreen: false,
    name: 'Code Monkey'
  },
  {
    video: 't5trXhAmWWk',
    frameborder: '0',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    allowfullscreen: false,
    name: 'Code authem'
  },
  {
    video: 'Eq3CuMDXaPs',
    frameborder: '0',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    allowfullscreen: false,
    name: 'And so you code'
  },
  {
    video: '7Qk8gXH9_9c',
    frameborder: '0',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    allowfullscreen: false,
    name: 'Coding superStar'
  },
  {
    video: 'WiJczH3cr48',
    frameborder: '0',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    allowfullscreen: false,
    name: 'I wanna be an engineer'
  },
  {
    video: 'fnWypQz6X2U',
    frameborder: '0',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    allowfullscreen: false,
    name: 'Technologic'
  }
]

const YoutubeSlider = (props) => {
  const data = props.listData || dataDefault
  const [target, setTarget] = useState({})

  const renderLoading = () => {
    return (
      <LoadingPage width='100%' height='100%' position='relative' />
    )
  }

  const changeVideo = (valueChange) => {
    const { prevIndex, index, nextIndex } = target
    const newValue = index + parseInt(valueChange)
    if (newValue < 0) {
      setTarget({
        prevIndex: data.count - 2,
        index: data.count - 1,
        nextIndex: 0
      })
    } else if (newValue >= data.count) {
      setTarget({
        prevIndex: data.count - 1,
        index: 0,
        nextIndex: 1
      })
    } else {
      setTarget({
        prevIndex: newValue - 1,
        index: newValue,
        nextIndex: newValue + 1
      })
    }
  }


  const dataDetail = {
    prevData: data[target.prevIndex] || {},
    mainData: data[target.index] || {},
    nextData: data[target.nextIndex] || {}
  }

  return (
    <Slider>
      <div className='slider moving-button' onClick={() => { changeVideo(-1) }}>
        <Suspense fallback={renderLoading()}>
          <Youtube {...dataDetail.prevData}/>
        </Suspense>
      </div>
      <div className='slider main'>
        <Suspense fallback={renderLoading()}>
          <Youtube {...dataDetail.mainData}/>
        </Suspense>
      </div>
      <div className='slider moving-button' onClick={() => { changeVideo(1) }}>
        <Suspense fallback={renderLoading()}>
          <Youtube {...dataDetail.nextData}/>
        </Suspense>
      </div>
    </Slider>
  )
}

export default YoutubeSlider