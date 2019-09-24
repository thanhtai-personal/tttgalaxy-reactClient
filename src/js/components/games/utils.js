import _ from 'lodash'
import GameFactory from './settings'

export const getParamFromUrl = (path, url) => {
  let paramsStrings = url.split('?')[1]? url.split('?')[1].split('&') : []
  let paramString = paramsStrings.find((ps) => ps.includes(path))
  if (_.isNil(paramString)) return ''
  return paramString.split('=')[1] || ''
}

export const preloadFunction = (self, gameData) => {
  self.load.setBaseURL(gameData.baseUrl)
  // self.load.setPath(gameData.path)
  if (!_.isNil(gameData.image)) {
    gameData.image.forEach((img) => {
      self.load.image(img.key, img.url)
    })
  }
  if (!_.isNil(gameData.rexWebFont)) {
    gameData.rexWebFont.forEach((rwf) => {
      self.load.rexWebFont(rwf)
      // ex: rwf = {
      //   google: {
      //     families: ['Bangers']
      //   }
      // }
    })
  }
  if (!_.isNil(gameData.svg)) {
    gameData.svg.forEach((s) => {
      self.load.svg(s.key, s.url)
    })
  }
  if (!_.isNil(gameData.htmlTexture)) {
    gameData.htmlTexture.forEach((hT) => {
      self.load.htmlTexture(hT.key, hT.url, hT.width, hT.height)
    })
  }
  if (!_.isNil(gameData.spriteSheet)) {
    gameData.spriteSheet.forEach((spr) => {
      self.load.spritesheet(spr.name, spr.path, spr.options
        // {
        // frameWidth: frameWidth,
        // frameHeight: frameHeight,
        // startFrame: startFrame,
        // endFrame: endFrame,
        // margin: margin,
        // spacing: spacing
      // }
      )
    })
  }
  if (!_.isNil(gameData.multiAtlas)) {
    gameData.multiAtlas.forEach((mat) => {
      self.load.multiatlas(mat.key, mat.textureURL, mat.atlasURL)
    })
  }
  if (!_.isNil(gameData.unityAtlas)) {
    gameData.unityAtlas.forEach((uat) => {
      self.load.unityAtlas(uat.key, uat.textureURL, uat.atlasURL)
    })
  }
  if (!_.isNil(gameData.animation)) {
    gameData.animation.forEach((anim) => {
      self.load.animation(anim.key, anim.url)
    })
  }
  if (!_.isNil(gameData.audio)) {
    gameData.audio.forEach((au) => {
      self.load.audio(au.key, au.urls)
    })
  }
  if (!_.isNil(gameData.audioSprite)) {
    gameData.audioSprite.forEach((aus) => {
      self.load.audioSprite(aus.key, aus.urls, aus.json, aus.config)
    })
  }
  if (!_.isNil(gameData.bitmapFont)) {
    gameData.bitmapFont.forEach((bmf) => {
      self.load.bitmapFont(bmf.key, bmf.textureURL, bmf.xmlURL)
    })
  }
  if (!_.isNil(gameData.tilemapWeltmeister)) {
    gameData.tilemapWeltmeister.forEach((tw) => {
      self.load.tilemapWeltmeister(tw.key, tw.url)
    })
  }
  if (!_.isNil(gameData.tilemapCSV)) {
    gameData.tilemapCSV.forEach((tc) => {
      self.load.tilemapCSV(tc.key, tc.url)
    })
  }
  if (!_.isNil(gameData.text)) {
    gameData.text.forEach((txt) => {
      self.load.text(txt.key, txt.url)
    })
  }
  if (!_.isNil(gameData.json)) {
    gameData.json.forEach((js) => {
      self.load.json(js.key, js.url)
    })
  }
  if (!_.isNil(gameData.html)) {
    gameData.html.forEach((ht) => {
      self.load.html(ht.key, ht.url)
    })
  }
  if (!_.isNil(gameData.css)) {
    gameData.css.forEach((c) => {
      self.load.css(c.key, c.url)
    })
  }
  if (!_.isNil(gameData.sceneFile)) {
    gameData.sceneFile.forEach((sf) => {
      self.load.sceneFile(sf.key, sf.url)
    })
  }
  if (!_.isNil(gameData.scripts)) {
    gameData.scripts.forEach((scr) => {
      self.load.scripts(scr.key, scr.urlArray)
    })
  }
  if (!_.isNil(gameData.glsl)) {
    gameData.glsl.forEach((g) => {
      self.load.glsl(g.key, g.url)
    })
  }
  if (!_.isNil(gameData.binary)) {
    gameData.binary.forEach((bin) => {
      self.load.binary(bin.key, bin.url, bin.dataType)
    })
  }
  if (!_.isNil(gameData.plugin)) {
    gameData.plugin.forEach((plu) => {
      self.load.plugin(plu.key, plu.url, plu.start) // start = true --> start plugin when loaded
    })
  }
  if (!_.isNil(gameData.scenePlugin)) {
    gameData.scenePlugin.forEach((sPlu) => {
      self.load.scenePlugin(sPlu.key, sPlu.url, sPlu.systemKey, sPlu.sceneKey)
    })
  }
  if (!_.isNil(gameData.pack)) {
    gameData.pack.forEach((p) => {
      self.load.pack(p.key, p.url, p.dataKey)
    })
  }
}

export const getGameFactorInstance = (gameId) => {
  let instanceGame = GameFactory().getInstance()
  if (instanceGame.isNullInstant) {
    instanceGame.setGameId(gameId)
    debugger
    getGameFactorInstance(gameId)
  } else if (instanceGame.isNoGameId) {
    instanceGame.setGameId(gameId)
    return instanceGame
  } else {
    return instanceGame
  }
}

export const setGameToFactory = (factor, game) => {
  factor.setGameInstant(game)
  if (factor.isNoGame) {
    factor = GameFactory().getInstance
  }
  return factor
}