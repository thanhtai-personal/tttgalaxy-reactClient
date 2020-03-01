import React, { useState, Suspense, useEffect, useLayoutEffect } from 'react'
import { withEventEmitter } from '../../../middleware'
// import { EVENT_EMITTER_COMMAND } from '../../../constants/enums'
import _ from 'lodash'
import './music.scss'
import { PlayerStyled } from './playerStyled'
import AudioPlayer from './../../utils/audioPlayer'

import background1 from './../../data/sounds/khacviet-yeu.mp3'
import background2 from './../../data/sounds/Hondacodon.mp3'
import background3 from './../../data/sounds/ToiMuonYeuMotNguoi-KhoiMy.mp3'

const defaultMusicList = [
  {
    name: 'Yêu',
    artist: 'beat',
    src: background1
  },
  {
    name: 'Hòn đá cô đơn',
    artist: 'beat',
    src: background2
  },
  {
    name: 'Tôi muốn yêu một người',
    artist: 'Một chút nhớ...',
    src: background3
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