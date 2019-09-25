import helloWorldData from './data.json'
import helloWorldScenes from './scenes'

const helloWorld = {
  gameData: helloWorldData.data,
  gameConfig: helloWorldData.config,
  scenes: [ 
    helloWorldScenes
  ],
  startScene: helloWorldScenes[0].key
}

export default helloWorld