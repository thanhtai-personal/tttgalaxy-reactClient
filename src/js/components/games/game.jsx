import React, { PureComponent } from "react";
import Phaser from 'phaser'
import _ from 'lodash'

import { getParamFromUrl } from './utils'
import GameFactory from './gameData'

const GameFactor = GameFactory(getParamFromUrl('id', window.location.search))

export class PhaserHelloWorld extends PureComponent {
  
  constructor(props) {
    super(props)
    this.gameConfig = !_.isNil(GameFactor) ? GameFactor.getGameConfig() : {}
    this.config = {
      type: Phaser.CANVAS,
      width: props.gameWidth || this.gameConfig.width,
      height: props.gameHeight || this.gameConfig.height,
      physics: props.physics || this.gameConfig.physics,
      parent: props.parent || this.gameConfig.parent || 'phaser-game',
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
    this.load.setBaseURL(gameData.baseUrl);
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
    return (<div id={this.props.parent || this.gameConfig.parent || 'phaser-game'} />)
  }
}

export default PhaserHelloWorld
