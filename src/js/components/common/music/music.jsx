import React, { useState, Suspense, useEffect, useLayoutEffect } from 'react'
import { withEventEmitter } from '../../../middleware'
// import { EVENT_EMITTER_COMMAND } from '../../../constants/enums'
import _ from 'lodash'
import './music.scss'
import { PlayerStyled } from './playerStyled'

import AudioPlayer from './../../utils/audioPlayer'
import sailamcuaanh from './sounds/sai-lam-cua-anh.mp3'
import chiviquayeuem from './sounds/Nhac-chuong-Chi-vi-qua-yeu-em-Lac-Vu-www_nhacchuongvui_com.mp3'
import chungtakhonggiongnhau from './sounds/Nhac-chuong-Chung-ta-khong-giong-nhau-www_nhacchuongvui_com.mp3'
import dethuongbaby from './sounds/Nhac-chuong-de-thuong-baby-www_nhacchuongvui_com.mp3'
import dungnhuthoiquen from './sounds/Nhac-chuong-Dung-nhu-thoi-quen-doan-JayKii-www_nhacchuongvui_com.mp3'
import duyentroilay from './sounds/Nhac-chuong-Duyen-troi-lay-2-Chung-Thanh-Duy-www_nhacchuongvui_com.mp3'
import ido from './sounds/Nhac-chuong-I-Do-911-www_nhacchuongvui_com.mp3'
import zuneazunea from './sounds/Nhac-chuong-Zunea-zunea-www_nhacchuongvui_com.mp3'

const defaultMusicList = [
  {
    name: 'I do',
    artist: 'nhacchuongvui.com',
    src: ido
  },
  {
    name: 'Sai lầm của anh',
    artist: 'nhacchuongvui.com',
    src: sailamcuaanh
  },
  {
    name: 'Chi vì quá yêu',
    artist: 'nhacchuongvui.com',
    src: chiviquayeuem
  },
  {
    name: 'nhạc chuông dể thương',
    artist: 'nhacchuongvui.com',
    src: dethuongbaby
  },
  {
    name: 'Đừng như thói quen',
    artist: 'nhacchuongvui.com',
    src: dungnhuthoiquen
  },
  {
    name: 'Duyên trời lấy',
    artist: 'nhacchuongvui.com',
    src: duyentroilay
  },
  {
    name: 'Zunea Zunea',
    artist: 'nhacchuongvui.com',
    src: zuneazunea
  },
  {
    name: 'Chúng ta không giống nhau',
    artist: 'nhacchuongvui.com',
    src: chungtakhonggiongnhau
  }
]

const Player = AudioPlayer({ src: defaultMusicList, isVideo: false })

const MusicComponent = (props = {}) => {

  const [mData, setMData] = useState(defaultMusicList[0])

  Player.setAutoChangeMusicCallBack((data) => {
    setMData(data)
  })

  const play = (data = {}, isForcePlay = false) => {
    let controlPanelObj = document.getElementById('control-panel'),
      infoBarObj = document.getElementById('info'),
      playCondition = false
    Array.from(controlPanelObj.classList).find(function (element) {
      playCondition = element !== 'active'
      return playCondition || (isForcePlay && !playCondition) ? controlPanelObj.classList.add('active') : controlPanelObj.classList.remove('active')
    })
    Array.from(infoBarObj.classList).find(function (element) {
      playCondition = element !== 'active'
      return playCondition || (isForcePlay && !playCondition) ? infoBarObj.classList.add('active') : infoBarObj.classList.remove('active')
    })
    if (playCondition || isForcePlay) {
      Player.run('play')
    } else { //pause
      Player.run('pause')
    }
  }

  const prev = () => {
    Player.prev()
    setMData(Player.getCurrentSound())
  }

  const next = () => {
    Player.next()
    setMData(Player.getCurrentSound())
  }

  return (
    <PlayerStyled className={props.className || ''}>
      <div id='info' className='info'>
        <span className='artist'>{mData && mData.artist ? mData.artist : ''}</span>
        <span className='name'>{mData && mData.name ? mData.name : ''}</span>
        {props.isProgressBar && <div className='progress-bar'>
          <div className='bar'></div>
        </div>}
      </div>
      <div id='control-panel' className='control-panel'>
        <div className='album-art'></div>
        <div className='controls'>
          <div className='prev' onClick={prev}></div>
          <div id='play' className='play' onClick={play}></div>
          <div className='next' onClick={next}></div>
        </div>
      </div>
    </PlayerStyled>
  )
}

export const Music = withEventEmitter(MusicComponent)


// props.eventEmitter.on('promp-action', (message) => {
  //   if (message === EVENT_EMITTER_COMMAND.musicOn) {
  //     loadMusic(audioIndex)
  //   }
  //   if (message === EVENT_EMITTER_COMMAND.musicOff) {
  //     setAudioState('pause')
  //   }
  //   if (message === EVENT_EMITTER_COMMAND.musicPause) {
  //     setAudioState('pause')
  //   }
  //   if (message === EVENT_EMITTER_COMMAND.musicPlay) {
  //     setAudioState('play')
  //   }
  //   if (message === EVENT_EMITTER_COMMAND.musicNext) {
  //     if (audioIndex >= maxAudioIndex - 1) {
  //       setAudioIndex(0)
  //       loadMusic(0)
  //     } else {
  //       setAudioIndex(audioIndex + 1)
  //       loadMusic(audioIndex + 1)
  //     }
  //   }
  //   if (message === EVENT_EMITTER_COMMAND.musicPrev) {
  //     if (audioIndex <= 0) {
  //       setAudioIndex(maxAudioIndex - 1)
  //       loadMusic(maxAudioIndex - 1)
  //     } else {
  //       setAudioIndex(audioIndex - 1)
  //       loadMusic(audioIndex - 1)
  //     }
  //   }
  // })