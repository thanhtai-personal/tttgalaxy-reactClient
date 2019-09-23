import gameIndentityData from './types' 
import _ from 'lodash'

const GameFactory = (gameId) => {

  let gameData = gameIndentityData.find((gm) => gm.id === gameId)
  if (_.isNil(gameData)) {
    return null
  }

  const getGameConfig = () => {
    return gameData.config 
  }

  const getGameData = () => {
    return gameData.data 
  }

  const create = (self) => {
    if (typeof gameData.events.create === 'function') gameData.events.create(self)
  }

  const update = (self) => {
    if (typeof gameData.events.update === 'function') gameData.events.update(self)
  }


  return {
    getGameConfig: getGameConfig,
    getGameData: getGameData,
    create: create,
    update: update
  }
}

export default GameFactory