import Phaser from 'phaser'
import { preloadFunction } from './../../utils'
import GameFactory from './../../settings'

const HelloScene = (props) => {
  
  // let scene = new Phaser.Scene({
  //   key: props.data.key,
  //   active: props.data.active,
  //   ...props.config
  // })
  let scene = {}

  scene.create = (data) => {
    let self = GameFactory().getSelfScene(props.data.key)
    self.add.image(400, 300, 'sky')

    var particles = self.add.particles('red')

    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });

    var logo = self.physics.add.image(400, 100, 'logo')

    logo.setVelocity(100, 200)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)

    emitter.startFollow(logo)
  }

  scene.preload = () => {
    preloadFunction(GameFactory().getSelfScene(props.data.key), props.data)
  }

  scene.init = (data) => {
  }
  scene.update = (time, delta) => {}

  return {
    key: props.data.key,
    sceneConfig: {
      scene: {
        init: scene.init,
        update: scene.update,
        preload: scene.preload,
        create: scene.create
      },
      ...props.config
    }, 
    autoStart: props.autoStart, 
    data: props.data,
  }
} 

export default HelloScene