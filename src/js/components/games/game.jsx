import React, { PureComponent } from "react";
import Phaser from 'phaser'
import _ from 'lodash'

import { getParamFromUrl } from './utils'
import GameFactory from './factory'

import './game.scss'

export class PhaserGameComponent extends PureComponent {
  
  constructor(props) {
    super(props)
    this.gameFactor = GameFactory(getParamFromUrl('id', window.location.search))
    this.gameConfig = !_.isNil(this.gameFactor) ? this.gameFactor.getGameConfig() : {}
    this.config = {
      type: props.gameType || this.gameConfig.type || Phaser.CANVAS,
      width: props.gameWidth || this.gameConfig.width,
      height: props.gameHeight || this.gameConfig.height,
      physics: props.physics || this.gameConfig.physics,
      parent: props.parent || this.gameConfig.parent || 'phaser-game',
      plugins: props.plugins || this.gameConfig.plugins,
      scale: props.scale || this.gameConfig.scale
        || {
          mode: Phaser.Scale.NONE,
          autoCenter: Phaser.Scale.NO_CENTER
        },
      dom: props.dom || this.gameConfig.dom || {
        createContainer: false,
      },
      backgroundColor: props.backgroundColor || this.gameConfig.backgroundColor || '0x333333',
      autoRound: props.autoRound || this.gameConfig.autoRound || false,
      canvas: props.canvas || this.gameConfig.canvas,
      canvasStyle: props.canvasStyle || this.gameConfig.canvasStyle,
      callbacks: props.callbacks || this.gameConfig.callbacks
      || {
        preBoot: function () { console.log('I get called before all of the Game systems are created, but after Device is available')},
        postBoot: function () { console.log('I get called after all of the Game systems are running, immediately before raf starts')}
      },
      seed: props.seed || this.gameConfig.seed || [(Date.now() * Math.random()).toString()],
      title: props.title || this.gameConfig.title || '',
      url: props.url || this.gameConfig.url || '',
      version: props.version || this.gameConfig.version || '',
      input: props.input || this.gameConfig.input
        || {
          keyboard: {
            target: window
          },
          mouse: {
            target: null,
            capture: true
          },
          activePointers: 1,
          touch: {
            target: null,
            capture: true
          },
          smoothFactor: 0,
          gamepad: false,
          windowEvents: true,
        },
      render: props.render || this.gameConfig.render,
      // {
      //   antialias: true,
      //   pixelArt: false,
      //   roundPixels: false,
      //   transparent: false,
      //   clearBeforeRender: true,
      //   premultipliedAlpha: true,
      //   preserveDrawingBuffer: false,
      //   failIfMajorPerformanceCaveat: false,
      //   powerPreference: 'default', // 'high-performance', 'low-power' or 'default'
      //   batchSize: 2000,
      //   desynchronized: false,
      // },
      loader: props.loader || this.gameConfig.loader
        || {
          baseURL: 'http://labs.phaser.io/assets',
          path: '',
          enableParallel: true,
          maxParallelDownloads: 4,
          crossOrigin: undefined,
          responseType: '',
          async: true,
          user: '',
          password: '',
          timeout: 0
        },
      images: props.images || this.gameConfig.images
        || {
          default: 'data:image/png;base64....',
          missing: 'data:image/png;base64....'
        },
      fps: props.fps || this.gameConfig.fps || {
        min: 10,
        target: 60,
        forceSetTimeOut: false,
        deltaHistory: 10
      },
      disableContextMenu:  props.disableContextMenu || this.gameConfig.disableContextMenu,
      banner: props.banner || this.gameConfig.banner
        || {
          hidePhaser: false,
          text: '#ffffff',
          background: [
            '#ff0000',
            '#ffff00',
            '#00ff00',
            '#00ffff',
            '#000000'
          ]
        },
      scene: this.gameFactor.getScenes()[0]
    }
    this.state = {
      size: 'small' //'medium' , 'full'
    }
  }

  componentDidMount() {
    this.game = new Phaser.Game(this.config)
    console.log('game started!!', this.game)
  }

  render() {
    return (<div className={`phaser-game ${this.state.size}`} id={this.props.parent || this.gameConfig.parent || 'phaser-game'} />)
  }
}

export default PhaserGameComponent
