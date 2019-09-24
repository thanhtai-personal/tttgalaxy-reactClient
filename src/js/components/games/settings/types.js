import helloWorld from '../helloWorld/'
import { GameId } from './enum'
import { SceneKey as HelloWorldSceneKey } from './../helloWorld/enum' 

const gameIdentityData = [
  {
    id: GameId.helloWorld,
    startScene: HelloWorldSceneKey.helloScene,
    data: helloWorld.data,
    config: helloWorld.config,
    scenes: helloWorld.scenes,
    gameEvents: helloWorld.gameEvents
  }
]

export default gameIdentityData