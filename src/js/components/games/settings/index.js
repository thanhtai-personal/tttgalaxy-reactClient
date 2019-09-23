import gameIdentityData from './types'
import _ from 'lodash'

const GameFactory = (gameId) => {

  let gameData = gameIdentityData.find((gm) => gm.id === gameId)
  if (_.isNil(gameData)) {
    gameData = gameIdentityData.find((gm) => gm.id === 'helloWorld')
  }

  const getGameConfig = () => {
    return gameData.config 
  }

  const getGameData = () => {
    return gameData.data 
  }

  const preload = () => {
    if(_.isNil(GameFactor)) return
    const gameData = GameFactor.getGameData()
    this.load.setBaseURL(gameData.baseUrl)
    // this.load.setPath(gameData.path)
    if (!_.isNil(gameData.image)) {
      gameData.image.forEach((img) => {
        this.load.image(img.key, img.url)
      })
    }
    if (!_.isNil(gameData.rexWebFont)) {
      gameData.rexWebFont.forEach((rwf) => {
        this.load.rexWebFont(rwf)
        // ex: rwf = {
        //   google: {
        //     families: ['Bangers']
        //   }
        // }
      })
    }
    if (!_.isNil(gameData.svg)) {
      gameData.svg.forEach((s) => {
        this.load.svg(s.key, s.url)
      })
    }
    if (!_.isNil(gameData.htmlTexture)) {
      gameData.htmlTexture.forEach((hT) => {
        this.load.htmlTexture(hT.key, hT.url, hT.width, hT.height)
      })
    }
    if (!_.isNil(gameData.spriteSheet)) {
      gameData.spriteSheet.forEach((spr) => {
        this.load.spritesheet(spr.name, spr.path, spr.options
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
        this.load.multiatlas(mat.key, mat.textureURL, mat.atlasURL)
      })
    }
    if (!_.isNil(gameData.unityAtlas)) {
      gameData.unityAtlas.forEach((uat) => {
        this.load.unityAtlas(uat.key, uat.textureURL, uat.atlasURL)
      })
    }
    if (!_.isNil(gameData.animation)) {
      gameData.animation.forEach((anim) => {
        this.load.animation(anim.key, anim.url)
      })
    }
    if (!_.isNil(gameData.audio)) {
      gameData.audio.forEach((au) => {
        this.load.audio(au.key, au.urls)
      })
    }
    if (!_.isNil(gameData.audioSprite)) {
      gameData.audioSprite.forEach((aus) => {
        this.load.audioSprite(aus.key, aus.urls, aus.json, aus.config)
      })
    }
    if (!_.isNil(gameData.bitmapFont)) {
      gameData.bitmapFont.forEach((bmf) => {
        this.load.bitmapFont(bmf.key, bmf.textureURL, bmf.xmlURL)
      })
    }
    if (!_.isNil(gameData.tilemapWeltmeister)) {
      gameData.tilemapWeltmeister.forEach((tw) => {
        this.load.tilemapWeltmeister(tw.key, tw.url)
      })
    }
    if (!_.isNil(gameData.tilemapCSV)) {
      gameData.tilemapCSV.forEach((tc) => {
        this.load.tilemapCSV(tc.key, tc.url)
      })
    }
    if (!_.isNil(gameData.text)) {
      gameData.text.forEach((txt) => {
        this.load.text(txt.key, txt.url)
      })
    }
    if (!_.isNil(gameData.json)) {
      gameData.json.forEach((js) => {
        this.load.json(js.key, js.url)
      })
    }
    if (!_.isNil(gameData.html)) {
      gameData.html.forEach((ht) => {
        this.load.html(ht.key, ht.url)
      })
    }
    if (!_.isNil(gameData.css)) {
      gameData.css.forEach((c) => {
        this.load.css(c.key, c.url)
      })
    }
    if (!_.isNil(gameData.sceneFile)) {
      gameData.sceneFile.forEach((sf) => {
        this.load.sceneFile(sf.key, sf.url)
      })
    }
    if (!_.isNil(gameData.scripts)) {
      gameData.scripts.forEach((scr) => {
        this.load.scripts(scr.key, scr.urlArray)
      })
    }
    if (!_.isNil(gameData.glsl)) {
      gameData.glsl.forEach((g) => {
        this.load.glsl(g.key, g.url)
      })
    }
    if (!_.isNil(gameData.binary)) {
      gameData.binary.forEach((bin) => {
        this.load.binary(bin.key, bin.url, bin.dataType)
      })
    }
    if (!_.isNil(gameData.plugin)) {
      gameData.plugin.forEach((plu) => {
        this.load.plugin(plu.key, plu.url, plu.start) // start = true --> start plugin when loaded
      })
    }
    if (!_.isNil(gameData.scenePlugin)) {
      gameData.scenePlugin.forEach((sPlu) => {
        this.load.scenePlugin(sPlu.key, sPlu.url, sPlu.systemKey, sPlu.sceneKey)
      })
    }
    if (!_.isNil(gameData.pack)) {
      gameData.pack.forEach((p) => {
        this.load.pack(p.key, p.url, p.dataKey)
      })
    }
  }


  return {
    getGameConfig: getGameConfig,
    getGameData: getGameData,
    scenes: gameData.scenes,
    sceneFunction: sceneFunction
  }
}

export default GameFactory