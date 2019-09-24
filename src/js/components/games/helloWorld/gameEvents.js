const gameEvent = [
  {
    key: 'pause',
    eventFunction: (game) => {
      console.log('call pause')
    }
  },
  {
    key: 'resume',
    eventFunction: (game) => {
      console.log('call resume')
    }
  }
]

export default gameEvent