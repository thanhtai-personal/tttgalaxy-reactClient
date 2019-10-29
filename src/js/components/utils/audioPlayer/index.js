
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
    return ''
  }

  const setPlayerData = (key, value) => {
    if (listPropertiesGet.includes(key)) {
      player[key] = value
    }
  }

  if (!connectionUrl) {
    returnData.error.message = errorMessage.connectionUrl
  } else {
    if (props.isVideo) {
      player = document.createElement("video");
      player.setAttribute("src", connectionUrl);
    } else player = new Audio(connectionUrl)
    listPropertiesSet.forEach((key) => {
      if (props[key]) player[key] = props[key]
    })
    listEvents.forEach((key) => {
      if (props[key] && typeof props[key] === 'function') player.addEventListener(key, props[key])
    })
    returnData.renderedElement = player
  }
  

  return {
    ...returnData,
    getData: getPlayerData,
    setData: setPlayerData
  }
}

export default AudioPlayer