
import helloWorldData from '../data.json'
import Phaser from 'phaser' 


const createLoader = (self) => {
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

const GameScenes = (self) => {
  return Object.keys(helloWorldData).map((key) => {
    
  })
}

export default GameScenes