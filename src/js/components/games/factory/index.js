import gameIdentityData from './types'
import { GameId } from './../enum'
import _ from 'lodash'

const GameFactory = (gameId) => {

  let gameData = gameIdentityData.find((gm) => gm.id === gameId)
  if (_.isNil(gameData)) {
    gameData = gameIdentityData.find((gm) => gm.id === GameId.helloWorld)
  }

  const getGameConfig = () => {
    return gameData.gameConfig 
  }

  const getStartScene = () => {
    return gameData.startScene
  }

  const getScenes = () => {
    return gameData.scenes
  }

  const getScenesData = () => {
    return {}
  }
  


  return {
    getGameConfig: getGameConfig,
    getScenes: getScenes,
    getScenesData: getScenesData,
    getStartScene: getStartScene,
  }
}

export default GameFactory