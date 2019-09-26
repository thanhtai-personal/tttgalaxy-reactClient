import helloWorld from '../helloWorld'
import towerDefense from '../towerDefense'
import { GameId } from './../enum'

const gameIdentityData = [
  {
    id: GameId.helloWorld,
    ...helloWorld
  },
  {
    id: GameId.towerDefense,
    ...towerDefense
  }
]

export default gameIdentityData