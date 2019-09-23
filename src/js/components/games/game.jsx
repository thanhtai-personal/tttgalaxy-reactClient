import React, { PureComponent } from "react";
import Phaser from 'phaser'
import _ from 'lodash'

import { getParamFromUrl } from './utils'
import GameFactory from './settings'

import './game.scss'

const GameFactor = GameFactory(getParamFromUrl('id', window.location.search))

export class PhaserGameComponent extends PureComponent {
  
  constructor(props) {
    super(props)
    this.gameConfig = !_.isNil(GameFactor) ? GameFactor.getGameConfig() : {}
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
      scene: {
        preload: this.preload,
        scenes: GameFactor.scenes,
        ...props.scene
      }
    }
    this.state = {
      size: 'small' //'medium' , 'full'
    }
  }

  componentDidMount() {
    if(!_.isNil(this.config.scene.scenes)) this.config.scene.scenes.forEach((scn) => {
      if (scn !== 'preload') {
        this.config.scene[scn] = () => {
          this.sceneFunction(scn)
        }
      }
    })
    this.game = new Phaser.Game(this.config)
  }

  preload () {
    if(_.isNil(GameFactor)) return
    const gameData = GameFactor.getGameData()
    this.load.setBaseURL(gameData.baseUrl)
    // this.load.setPath(gameData.path)
    if (!_.isNil(gameData.image)) {
      gameData.image.forEach((img) => {
        this.load.image(img.key, img.url)
      })
    }
    if (!_.isNil(gameData.rexWebFont)) {
      gameData.rexWebFont.forEach((rwf) => {
        this.load.rexWebFont(rwf)
        // ex: rwf = {
        //   google: {
        //     families: ['Bangers']
        //   }
        // }
      })
    }
    if (!_.isNil(gameData.svg)) {
      gameData.svg.forEach((s) => {
        this.load.svg(s.key, s.url)
      })
    }
    if (!_.isNil(gameData.htmlTexture)) {
      gameData.htmlTexture.forEach((hT) => {
        this.load.htmlTexture(hT.key, hT.url, hT.width, hT.height)
      })
    }
    if (!_.isNil(gameData.spriteSheet)) {
      gameData.spriteSheet.forEach((spr) => {
        this.load.spritesheet(spr.name, spr.path, spr.options
          // {
          // frameWidth: frameWidth,
          // frameHeight: frameHeight,
          // startFrame: startFrame,
          // endFrame: endFrame,
          // margin: margin,
          // spacing: spacing
        // }
        )
      })
    }
    if (!_.isNil(gameData.multiAtlas)) {
      gameData.multiAtlas.forEach((mat) => {
        this.load.multiatlas(mat.key, mat.textureURL, mat.atlasURL)
      })
    }
    if (!_.isNil(gameData.unityAtlas)) {
      gameData.unityAtlas.forEach((uat) => {
        this.load.unityAtlas(uat.key, uat.textureURL, uat.atlasURL)
      })
    }
    if (!_.isNil(gameData.animation)) {
      gameData.animation.forEach((anim) => {
        this.load.animation(anim.key, anim.url)
      })
    }
    if (!_.isNil(gameData.audio)) {
      gameData.audio.forEach((au) => {
        this.load.audio(au.key, au.urls)
      })
    }
    if (!_.isNil(gameData.audioSprite)) {
      gameData.audioSprite.forEach((aus) => {
        this.load.audioSprite(aus.key, aus.urls, aus.json, aus.config)
      })
    }
    if (!_.isNil(gameData.bitmapFont)) {
      gameData.bitmapFont.forEach((bmf) => {
        this.load.bitmapFont(bmf.key, bmf.textureURL, bmf.xmlURL)
      })
    }
    if (!_.isNil(gameData.tilemapWeltmeister)) {
      gameData.tilemapWeltmeister.forEach((tw) => {
        this.load.tilemapWeltmeister(tw.key, tw.url)
      })
    }
    if (!_.isNil(gameData.tilemapCSV)) {
      gameData.tilemapCSV.forEach((tc) => {
        this.load.tilemapCSV(tc.key, tc.url)
      })
    }
    if (!_.isNil(gameData.text)) {
      gameData.text.forEach((txt) => {
        this.load.text(txt.key, txt.url)
      })
    }
    if (!_.isNil(gameData.json)) {
      gameData.json.forEach((js) => {
        this.load.json(js.key, js.url)
      })
    }
    if (!_.isNil(gameData.html)) {
      gameData.html.forEach((ht) => {
        this.load.html(ht.key, ht.url)
      })
    }
    if (!_.isNil(gameData.css)) {
      gameData.css.forEach((c) => {
        this.load.css(c.key, c.url)
      })
    }
    if (!_.isNil(gameData.sceneFile)) {
      gameData.sceneFile.forEach((sf) => {
        this.load.sceneFile(sf.key, sf.url)
      })
    }
    if (!_.isNil(gameData.scripts)) {
      gameData.scripts.forEach((scr) => {
        this.load.scripts(scr.key, scr.urlArray)
      })
    }
    if (!_.isNil(gameData.glsl)) {
      gameData.glsl.forEach((g) => {
        this.load.glsl(g.key, g.url)
      })
    }
    if (!_.isNil(gameData.binary)) {
      gameData.binary.forEach((bin) => {
        this.load.binary(bin.key, bin.url, bin.dataType)
      })
    }
    if (!_.isNil(gameData.plugin)) {
      gameData.plugin.forEach((plu) => {
        this.load.plugin(plu.key, plu.url, plu.start) // start = true --> start plugin when loaded
      })
    }
    if (!_.isNil(gameData.scenePlugin)) {
      gameData.scenePlugin.forEach((sPlu) => {
        this.load.scenePlugin(sPlu.key, sPlu.url, sPlu.systemKey, sPlu.sceneKey)
      })
    }
    if (!_.isNil(gameData.pack)) {
      gameData.pack.forEach((p) => {
        this.load.pack(p.key, p.url, p.dataKey)
      })
    }
  }

  
  sceneFunction (key) {
    if(_.isNil(GameFactor) || typeof GameFactor.sceneFunction !== 'function') return null
    GameFactor.sceneFunction(this, key)
  }

  render() {
    return (<div className={`phaser-game ${this.state.size}`} id={this.props.parent || this.gameConfig.parent || 'phaser-game'} />)
  }
}

export default PhaserGameComponent
