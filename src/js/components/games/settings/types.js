import helloWorld from '../helloWorld/'
import { GameId } from './enum'

const gameIdentityData = [
  {
    id: GameId.helloWorld,
    data: helloWorld.data,
    config: helloWorld.config,
    scenes: helloWorld.scenes
  }
]

export default gameIdentityData