import gameIdentityData from './types'
import { GameId } from './enum'
import _ from 'lodash'

const GameFactory = () => {

  let instance = null

  const setGameId = (_gameId) => {
    if (_.isNil(instance)) instance = {}
    instance.gameId = _gameId
    instance.gameData = gameIdentityData.find((gm) => gm.id === _gameId)
    if (_.isNil(instance.gameData)) {
      instance.gameData = gameIdentityData.find((gm) => gm.id === GameId.helloWorld)
    }
  }

  const setGameInstant = (game, _gameId) => {
    if (_.isNil(instance)) { //init instance
      instance = {
        getGameConfig: getGameConfig,
        getGameData: getGameData,
        getScenes: getScenes,
        getEvents: getEvents,
        getStartScene: getStartScene,
        getSelfScene: getSelfScene,
        game: game,
      }
    } else if (_gameId !== instance.gameId && !_.isNil(_gameId)) { //change game
      instance.game = game
      setGameId(_gameId)
    }
  }


  const getGameConfig = () => {
    return instance.gameData.config 
  }

  const getGameData = () => {
    return instance.gameData.data
  }

  const getScenes = () => {
    return instance.gameData.scenes.map((scn) => {
      let data = instance.gameData.data.scenes.find((dt) => dt.key === scn.key)
      return scn.functionComponent(data)
    })
  }

  const getScene = (key) => {
    return instance.gameData.scenes.filter((scn) => scn.key === key)
  }

  const getEvents = () => {
    return instance.gameData.gameEvents
  }

  const getStartScene = () => {
    return {
      key: instance.gameData.startScene,
      data: getScene(instance.gameData.startScene).data
    }
  }

  const getSelfScene = (sceneKey) => {
    debugger
    if (_.isNil(instance)) return null
  }

  return {
    getInstance: () => {
      if (!instance) {
          return { isNullInstant: true, setGameInstant: setGameInstant, setGameId: setGameId } //need excute setGameInstance
      } else if (_.isNil(instance.gameId)) {
        return { isNoGameId: true, setGameId: setGameId }
      } else if (_.isNil(instance.game)) {
        return {
          isNoGame: true,
          getGameConfig: getGameConfig,
          getGameData: getGameData,
          getStartScene: getStartScene,
        }
      }
      return instance;
    }
  }
}

export default GameFactory