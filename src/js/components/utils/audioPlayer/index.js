
const errorMessage = {
  connectionUrl: 'null connection url'
}

const listPropertiesGet = [
  'audioTracks', 'buffered', 'controller', 'currentSrc', 'duration',
  'ended', 'error', 'networkState', 'paused', 'played', 'readyState',
  'seekable', 'seeking', 'startDate', 'textTracks', 'videoTracks'
]

const listPropertiesSet = [
  'autoplay', 'controls', 'crossOrigin', 'currentTime', 'defaultMuted',
  'defaultPlaybackRate', 'loop', 'mediaGroup', 'muted', 'playbackRate',
  'preload', 'src', 'volume'
]

const listEvents = [
  'abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied',
  'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'pause',
  'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled',
  'suspend', 'timeupdate', 'volumechange', 'waiting'
]

const listActions = [
  'addTextTrack', 'canPlayType', 'load', 'play', 'pause'
]

const AudioPlayer = (props) => {
  let returnData = {
    connectionUrl: props.src || '',
    error: {},
    isVideo: props.isVideo
  },
  player = {}

  const getPlayerData = (key) => {
    if (listPropertiesGet.includes(key)) {
      return player[key]
    }
    if (listPropertiesSet.includes(key)) {
      return player[key]
    }
    return ''
  }

  const setPlayerData = (key, value) => {
    if (listPropertiesGet.includes(key)) {
      player[key] = value
    }
  }
  if (!returnData.connectionUrl) {
    returnData.error.message = errorMessage.connectionUrl
  } else {
    if (props.isVideo) {
      player = document.createElement("video");
      player.setAttribute("src", returnData.connectionUrl);
    } else player = new Audio(returnData.connectionUrl)
    listPropertiesSet.forEach((key) => {
      if (props[key]) player[key] = props[key]
    })
    listEvents.forEach((key) => {
      if (props[key] && typeof props[key] === 'function') player.addEventListener(key, props[key])
    })
    returnData.renderedElement = player
  }
  
  const runPlayer = (actionName) => {
    if (listActions.includes(actionName)) {
      typeof player[actionName] === 'function' && player[actionName]()
    }
  }

  return {
    ...returnData,
    getData: getPlayerData,
    setData: setPlayerData,
    run: runPlayer
  }
}

export default AudioPlayer