import React, { PureComponent } from "react";
import Phaser from 'phaser'
import _ from 'lodash'

import { getParamFromUrl } from './utils'
import GameFactory from './gameData'

const GameFactor = GameFactory(getParamFromUrl('id', window.location.search))

export class PhaserHelloWorld extends PureComponent {
  
  constructor(props) {
    super(props)
    const gameConfig = !_.isNil(GameFactor) ? GameFactor.getGameConfig() : {}
    this.config = {
      type: Phaser.CANVAS,
      width: props.gameWidth || gameConfig.width || 800,
      height: props.gameHeight || gameConfig.height || 600,
      physics: props.physics || gameConfig.physics || {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      parent: props.parent || gameConfig.parent || 'phaser-game',
      scene: {
        preload: this.preload,
        create: this.create,
        update: this.update
      }
    }
  }

  componentDidMount() {
    new Phaser.Game(this.config)
  }

  preload () {
    if(_.isNil(GameFactor)) return
    const gameData = GameFactor.getGameData()
    this.load.setBaseURL(gameData.baseUrl || 'http://labs.phaser.io');
    gameData.images.forEach((img) => {
      this.load.image(img.name, img.path);
    })
  }

  create () {
    if(_.isNil(GameFactor)) return
    GameFactor.create(this)
  }

  update () {
    if(_.isNil(GameFactor)) return
    GameFactor.update(this)
  }

  render() {
    return (<div id="phaser-game" />)
  }
}

export default PhaserHelloWorld
