import React, { useState, Suspense, useEffect, useLayoutEffect } from 'react'
import AudioPlayer from './../../utils/audioPlayer'
import { withEventEmitter } from '../../../middleware'
import { EVENT_EMITTER_COMMAND } from '../../../constants/enums'
import _ from 'lodash'
import './music.scss'
import { Player } from './playerStyled'
import { debug } from 'webpack'

const SoundDefault = { name: 'Sai lầm của anh', artist: 'Bell', path: './sounds/sai-lam-cua-anh.mp3' }

const PlayerManager = (listAudioUrl) => {
  let currentData = SoundDefault, index = 0, maxIndex = listAudioUrl.length - 1
  const next = () => {
    if (index++ > maxIndex) {
      index = 0
    }
    currentData = listAudioUrl[index] || SoundDefault
    return currentData
  }
  const prev = () => {
    if (index-- < 0) {
      index = maxIndex
    }
    currentData = listAudioUrl[index] || SoundDefault
    return currentData
  }
  return {
    prev, next
  }
}

const Music = (props = {}) => {
  const soundDefault = props.listAudioUrl && props.listAudioUrl[0] 
    ? props.listAudioUrl[0] 
    : SoundDefault
  let Player = null
  const PlayerManagerInstant = PlayerManager(props.listAudioUrl)

  const [audioPlayer, setAudioPlayer] = useState(soundDefault)
  const play = () => {
    let controlPanelObj = document.getElementById('control-panel'),
      infoBarObj = document.getElementById('info'),
      playCondition = false
    Array.from(controlPanelObj.classList).find(function (element) {
      playCondition = element !== 'active' 
      return playCondition ? controlPanelObj.classList.add('active') : controlPanelObj.classList.remove('active')
    })
    Array.from(infoBarObj.classList).find(function (element) {
      return playCondition ? infoBarObj.classList.add('active') : infoBarObj.classList.remove('active')
    })
    if (playCondition) {
      Player && Player.play()
    } else { //pause
      Player && Player.pause()
    }
  }

  const prev = () => {
    setAudioPlayer(PlayerManagerInstant.prev())
  }

  const next = () => {
    setAudioPlayer(PlayerManagerInstant.next())
  }

  useEffect(() => {
    Player = document.getElementById('hidden-audio-element')
  })
  return (
    <Player className={props.className || ''}>
      <div id='info' className='info'>
        <span className='artist'>{audioPlayer && audioPlayer.artist || ''}</span>
        <span className='name'>{audioPlayer && audioPlayer.name || ''}</span>
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
      {/* <audio style={{ display: 'none'}} id='hidden-audio-element' src={audioPlayer && audioPlayer.path}></audio> */}
    </Player>
  )
}

export default withEventEmitter(Music)


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