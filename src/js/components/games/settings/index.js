import gameIdentityData from './types' 
import _ from 'lodash'

const GameFactory = (gameId) => {

  let gameData = gameIdentityData.find((gm) => gm.id === gameId)
  if (_.isNil(gameData)) {
    gameData = gameIdentityData.find((gm) => gm.id === 'helloWorld')
  }

  const getGameConfig = () => {
    return gameData.config 
  }

  const getGameData = () => {
    return gameData.data 
  }

  const sceneFunction = (self, key) => {
    if (typeof gameData.scenes[key] === 'function') gameData.scenes[key](self.game.scene.scenes[0]) //need retest with multi-scenes
  }


  return {
    getGameConfig: getGameConfig,
    getGameData: getGameData,
    scenes: ['create', 'update'],
    sceneFunction: sceneFunction
  }
}

export default GameFactory