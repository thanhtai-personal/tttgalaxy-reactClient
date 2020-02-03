import helloCanvas from './helloCanvas'
import { gameName } from './../../enum'

let listGames = {}
listGames[gameName.helloCanvas] = helloCanvas

const start = (context, gameImportedName) => {
  listGames[gameImportedName] ? listGames[gameImportedName].start(context) : helloCanvas.start(context)
}

export default {
  start
}