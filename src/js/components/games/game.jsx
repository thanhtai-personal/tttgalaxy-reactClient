import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Phaser from 'phaser'

import { getParamFromUrl } from './utils'
import GameFactory from './gameData'

const GameFactor = GameFactory(getParamFromUrl('id', window.location.search))

export class PhaserHelloWorld extends PureComponent {
  
  constructor(props) {
    super(props)
    
    const gameConfig = GameFactor.getGameConfig() 
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
        create: this.create
      }
    }
  }

  componentDidMount() {
    new Phaser.Game(this.config)
  }

  preload () {
    const { baseUrl, images } = GameFactor.getGameData()
    this.load.setBaseURL(baseUrl || 'http://labs.phaser.io');
    images.forEach((img) => {
      this.load.image(img.name, img.path);
    })
  }

  create () {
    this.add.image(400, 300, 'sky')

    var particles = this.add.particles('red')

    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo')

    logo.setVelocity(100, 200)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)

    emitter.startFollow(logo)
  }

  render() {
    return (<div id="phaser-game" />)
  }
}


function mapStateToProps(state) {
  return {
    
  };
}

export default connect(
  mapStateToProps,
  {  }
)(PhaserHelloWorld);
