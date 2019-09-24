import Phaser from 'phaser'
import { preloadFunction } from './../../utils'

const HelloScene = (props) => {
  const config = {
    key: props.data.key,
      active: props.data.active,
      ...props.config,
      scene: {
        preload: preload,
        create: create
      }
  }
  const create = () => {
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

  const preload = () => {
    preloadFunction(this, props.data)
  }

  return new Phaser.scene(config)
} 

export default HelloScene