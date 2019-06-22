import React, { Component } from "react";
import { connect } from "react-redux";
import Phaser from 'phaser'


export class PhaserHelloWorld extends Component {

  componentDidMount() {
    var config = {
      type: Phaser.CANVAS,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      parent: 'phaser-game',
      scene: {
        preload: this.preload,
        create: this.create
      }
    }
    new Phaser.Game(config)
  }

  preload () {
    this.load.setBaseURL('http://labs.phaser.io');
    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  create () {
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }

  shouldComponentUpdate() {
    return false
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
