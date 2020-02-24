import React, { useState, Suspense, useEffect } from 'react'
import AudioPlayer from './../../utils/audioPlayer'
import { withEventEmitter } from '../../../middleware'
import { EVENT_EMITTER_COMMAND } from '../../../constants/enums'
import _ from 'lodash'

import musicFile from './sounds/sai-lam-cua-anh.mp3'

const Music = (props = {}) => {
  const [audioSrc, setAudioSrc] = useState(null)
  const [audioIndex, setAudioIndex] = useState(0)
  const [audioState, setAudioState] = useState('')
  const maxAudioIndex = props.listAudioUrl && props.listAudioUrl.length ? props.listAudioUrl.length : 0
  const loadMusic = (index) => {
    if (!props.listAudioUrl) return null
    const _url = props.listAudioUrl[index]
    if (!_url) return null
    const musicSrcLoading = React.lazy(() => import(_url))
    if (!musicSrcLoading) return
    setAudioSrc(musicSrcLoading)
    setAudioState('play')
  }

  useEffect(() => {
    let audioElm = document.getElementById('audio-element')
    if (audioElm) {
      switch (audioState) {
        case 'play':
          audioElm.play()
        case 'pause':
          audioElm.pause()
      }
    }
  })


  props.eventEmitter.on('promp-action', (message) => {
    if (message === EVENT_EMITTER_COMMAND.musicOn) {
      loadMusic(audioIndex)
    }
    if (message === EVENT_EMITTER_COMMAND.musicOff) {
      setAudioState('pause')
    }
    if (message === EVENT_EMITTER_COMMAND.musicPause) {
      setAudioState('pause')
    }
    if (message === EVENT_EMITTER_COMMAND.musicPlay) {
      setAudioState('play')
    }
    if (message === EVENT_EMITTER_COMMAND.musicNext) {
      if (audioIndex >= maxAudioIndex - 1) {
        setAudioIndex(0)
        loadMusic(0)
      } else {
        setAudioIndex(audioIndex + 1)
        loadMusic(audioIndex + 1)
      }
    }
    if (message === EVENT_EMITTER_COMMAND.musicPrev) {
      if (audioIndex <= 0) {
        setAudioIndex(maxAudioIndex - 1)
        loadMusic(maxAudioIndex - 1)
      } else {
        setAudioIndex(audioIndex - 1)
        loadMusic(audioIndex - 1)
      }
    }
  })

  return (
    <div style={{ display: props.display || 'none' }}>
      <Suspense fallback={() => { return (<div> loading ....</div>) }}>
        <audio id='audio-element' src={audioSrc}></audio>
      </Suspense>
    </div>
  )
}

export default withEventEmitter(Music)