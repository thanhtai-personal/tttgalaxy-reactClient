import helloWorld from '../helloWorld'
import { GameId } from './../enum'

const gameIdentityData = [
  {
    id: GameId.helloWorld,
    ...helloWorld
  }
]

export default gameIdentityData