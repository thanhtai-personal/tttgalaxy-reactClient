import helloWorldData from './data/helloWorld.json'
import helloWorldEvent from './cycle/helloWorld'

const gameIndentityData = [
  {
    id: 'helloWorld',
    data: helloWorldData.data,
    config: helloWorldData.config,
    events: {
      create: helloWorldEvent.create
    }
  },
  {
    id: 'helloWorld2',
    data: helloWorldData.data,
    config: helloWorldData.config,
    events: {
      create: helloWorldEvent.create
    }
  },
  {
    id: 'helloWorld3',
    data: helloWorldData.data,
    config: helloWorldData.config,
    events: {
      create: helloWorldEvent.create
    }
  },
]

export default gameIndentityData