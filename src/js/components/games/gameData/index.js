import helloWorld from './data/helloWorld.json'

const GameFactory = (gameId) => {

  const getGameConfig = () => {
    console.log('gameData', helloWorld)
    switch (gameId) {
      default:
        return helloWorld.config
    }
  }

  const getGameData = () => {
    console.log('gameData', helloWorld)
    switch (gameId) {
      default:
        return helloWorld.data
    }
  }

  const create = () => {
    
  }

  return {
    id: gameId,
    getGameConfig: getGameConfig,
    getGameData: getGameData,
    create: create
  }
}

export default GameFactory