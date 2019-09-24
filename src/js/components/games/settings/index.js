import gameIdentityData from './types'
import { GameId } from './enum'
import _ from 'lodash'

const GameFactory = (gameId) => {

  let gameData = gameIdentityData.find((gm) => gm.id === gameId)
  if (_.isNil(gameData)) {
    gameData = gameIdentityData.find((gm) => gm.id === GameId.helloWorld)
  }

  const getGameConfig = () => {
    return gameData.config 
  }

  const getGameData = () => {
    return gameData.data(gameData)
  }

  const getScenes = () => {
    return gameData.scenes.map((scn) => {
      let data = gameData.data.scenes.find((dt) => dt.key === scn.key)
      return scn.functionComponent(data)
    })
  }

  return {
    getGameConfig: getGameConfig,
    getGameData: getGameData,
    getScenes: getScenes,
  }
}

export default GameFactory