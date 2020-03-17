
// import Phaser from 'phaser'
// import { SceneKey } from './enum'
// import { preloadData } from '../../utils'
// import gameData from './../data.json'


// class helloScene extends Phaser.Scene
// {
//   constructor() {
//     super(SceneKey.helloScene)
//     const config = gameData.data.scenes.find((scn) => scn.key === SceneKey.helloScene)
//     this.config = {
//       key: SceneKey.helloScene,
//       ...config
//     }
//   }

//   preload () {
//     preloadData(this, gameData.data.scenes.find((scn) => scn.key === SceneKey.helloScene).data)
//   }

//   create () {
//     this.add.image(400, 300, 'sky')

//     var particles = this.add.particles('red')

//     var emitter = particles.createEmitter({
//       speed: 100,
//       scale: { start: 1, end: 0 },
//       blendMode: 'ADD'
//     });

//     var logo = this.physics.add.image(400, 100, 'logo')

//     logo.setVelocity(100, 200)
//     logo.setBounce(1, 1)
//     logo.setCollideWorldBounds(true)

//     emitter.startFollow(logo)
//   }
// }

// export default helloScene