import React, { useState, Suspense, useEffect, useLayoutEffect } from 'react'
import { withEventEmitter } from '../../../middleware'
// import { EVENT_EMITTER_COMMAND } from '../../../constants/enums'
import _ from 'lodash'
import './music.scss'
import { PlayerStyled } from './playerStyled'

import AudioPlayer from './../../utils/audioPlayer'
import saiLamCuanAnh from '../../data/sounds/sai-lam-cua-anh.mp3'
import chiViQuaYen from '../../data/sounds/Nhac-chuong-Chi-vi-qua-yeu-em-Lac-Vu-www_nhacchuongvui_com.mp3'
import dungNhuThoiQuen from '../../data/sounds/Nhac-chuong-Dung-nhu-thoi-quen-doan-JayKii-www_nhacchuongvui_com.mp3'
import duyenTroiLay from '../../data/sounds/Nhac-chuong-Duyen-troi-lay-2-Chung-Thanh-Duy-www_nhacchuongvui_com.mp3'
import trongTriNhoCuaAnh from '../../data/sounds/trong-tri-nho-cua-anh.mp3'
import noiMinhDungChan from '../../data/sounds/noi_minh_dung_chan.mp3'
import honCaYeu from '../../data/sounds/honcayeu.mp3'
import tkme from '../../data/sounds/tu-khi-mat-em.mp3'
import emluonotrongtamtrianh from '../../data/sounds/em-luon-o-trong-tam-tri-anh.mp3'
import nguoitacothuongminhdau from '../../data/sounds/nguoitacothuongminhdau.mp3'
import tamsutuoi30 from '../../data/sounds/tamsutuoi30.mp3'
import triki from '../../data/sounds/triki.mp3'
import muonmanglatuluc from '../../data/sounds/muonmanglatuluc.mp3'
import ngoisaoleloi from '../../data/sounds/ngoisaoleloi.mp3'
import bacphan from '../../data/sounds/bacphan.mp3'
import tungyeu from '../../data/sounds/tungyeu.mp3'
import yeumotnguoicole from '../../data/sounds/yeumotnguoicole.mp3'
import toidaquenthatroi from '../../data/sounds/toidaquenthatroi.mp3'
import ngamhoaleroi from '../../data/sounds/ngamhoaleroi.mp3'
import thattinh from '../../data/sounds/thattinh.mp3'
import neungayay from '../../data/sounds/neungayay.mp3'
import nguoiay from '../../data/sounds/nguoiay.mp3'
import hoacovangnoiay from '../../data/sounds/hoacovangnoiay.mp3'
import voivayeunhauvoivaroi from '../../data/sounds/voivayeunhauvoivaroi.mp3'
import yeu from '../../data/sounds/yeu.mp3'
import sautatca from '../../data/sounds/sautatca.mp3'
import doidaytoi from '../../data/sounds/doidaytoi.mp3'
import emthenao from '../../data/sounds/emthenao.mp3'
import maimailabaoxa from '../../data/sounds/maimailabaoxa.mp3'
import khovenucuoi from '../../data/sounds/khovenucuoi.mp3'

const defaultMusicList = [
  {
    name: 'Trong trí nhớ của anh',
    artist: 'NTTrung Quân',
    src: trongTriNhoCuaAnh
  },
  {
    name: 'Yêu',
    artist: 'Khắc Việt',
    src: yeu
  },
  {
    name: 'Tôi đã quên thật rồi',
    artist: 'Issac',
    src: toidaquenthatroi
  },
  {
    name: 'Khó vẽ nụ cười',
    artist: '___',
    src: khovenucuoi
  },
  {
    name: 'Vội vã yêu nhau vội vã rời',
    artist: 'LBH',
    src: voivayeunhauvoivaroi
  },
  {
    name: 'Sau tất cả',
    artist: '___',
    src: sautatca
  },
  {
    name: 'Em thế nào',
    artist: '___',
    src: emthenao
  },
  {
    name: 'Ngắm hoa lệ rơi',
    artist: 'Châu Khải Phong',
    src: ngamhoaleroi
  },
  {
    name: 'Muộn màng là từ lúc',
    artist: 'Mỹ Tâm',
    src: muonmanglatuluc
  },
  {
    name: 'Yêu một người có lẽ',
    artist: 'v2',
    src: yeumotnguoicole
  },
  {
    name: 'Đời dạy tôi',
    artist: 'mp3.zing.vn',
    src: doidaytoi
  },
  {
    name: 'Thất tình',
    artist: 'Trịnh Đình Quang',
    src: thattinh
  },
  {
    name: 'Tâm sự tuổi 30',
    artist: 'Trịnh Thăng Bình',
    src: tamsutuoi30
  },
  {
    name: 'Nếu ngày ấy',
    artist: '____',
    src: neungayay
  },
  {
    name: 'Người ấy',
    artist: 'Trịnh Thăng Bình',
    src: nguoiay
  },
  {
    name: 'Mãi mãi là bao xa',
    artist: 'LBH',
    src: maimailabaoxa
  },
  {
    name: 'Em luôn ở trong tâm trí anh',
    artist: 'The men',
    src: emluonotrongtamtrianh
  },
  {
    name: 'Người ta có thương mình đâu',
    artist: 'The men',
    src: nguoitacothuongminhdau
  },
  {
    name: 'Bạc phận',
    artist: '&&&',
    src: bacphan
  },
  {
    name: 'Từng yêu',
    artist: '&&&',
    src: tungyeu
  },
  {
    name: 'Ngôi sao lẽ loi',
    artist: 'PDT',
    src: ngoisaoleloi
  },
  {
    name: 'Hơn cả yêu',
    artist: 'Đức Phúc',
    src: honCaYeu
  },
  {
    name: 'Nơi mình dừng chân',
    artist: 'My Tâm',
    src: noiMinhDungChan
  },
  {
    name: 'Tri kỹ',
    artist: 'PMạnh Quỳnh',
    src: triki
  },
  {
    name: 'Chi vì quá yêu',
    artist: 'nhacchuongvui.com',
    src: chiViQuaYen
  },
  {
    name: 'Từ khi mất em',
    artist: 'The men',
    src: tkme
  },
  {
    name: 'Sai lầm của anh',
    artist: 'nhacchuongvui.com',
    src: saiLamCuanAnh
  },
  {
    name: 'Đừng như thói quen',
    artist: 'nhacchuongvui.com',
    src: dungNhuThoiQuen
  },
  {
    name: 'Duyên trời lấy',
    artist: 'nhacchuongvui.com',
    src: duyenTroiLay
  },
  {
    name: 'Hoa có vàng nơi ấy',
    artist: '___',
    src: hoacovangnoiay
  },
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