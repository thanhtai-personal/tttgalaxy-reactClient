import React, { PureComponent } from 'react'
import Phaser from 'phaser'

//var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

var GEM_SIZE = 64;
var GEM_SPACING = 2;
var GEM_SIZE_SPACED = GEM_SIZE + GEM_SPACING;
var BOARD_COLS;
var BOARD_ROWS;
var MATCH_MIN = 3; // min number of same color gems required in a row to be considered a match

var gems;
var selectedGem = null;
var selectedGemStartPos;
var selectedGemTween;
var tempShiftedGem = null;
var allowInput;

class GemMatch extends PureComponent {
  constructor (props) {
    super(props)
    this.config = {
      type: Phaser.CANVAS,
      width: 800,
      height: 600,
      parent: 'gem-match',
      scene: {
        preload: this.preload.bind(this),
        create: this.create.bind(this)
      }
    }
  }

  componentDidMount() {
    //new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });
    this.game = new Phaser.Game(this.config)
  }

  preload() {
    //this.game.load.spritesheet("GEMS", "assets/sprites/diamonds32x5.png", GEM_SIZE, GEM_SIZE);
  }

  create() {
    // fill the screen with as many gems as possible
    this.spawnBoard();
    // currently selected gem starting position. used to stop player form moving gems too far.
    selectedGemStartPos = { x: 0, y: 0 };
    // used to disable input while gems are dropping down and respawning
    allowInput = false;
    this.game.input.addMoveCallback(this.slideGem, this);
  }

  releaseGem() {
    if (tempShiftedGem === null) {
      selectedGem = null;
      return;
    }
    // when the mouse is released with a gem selected
    // 1) check for matches
    // 2) remove matched gems
    // 3) drop down gems above removed gems
    // 4) refill the board
    var canKill = this.checkAndKillGemMatches(selectedGem);
    canKill = this.checkAndKillGemMatches(tempShiftedGem) || canKill;
    if (!canKill) // there are no matches so swap the gems back to the original positions
    {
      var gem = selectedGem;
      if (gem.posX !== selectedGemStartPos.x || gem.posY !== selectedGemStartPos.y) {
        if (selectedGemTween !== null) {
          this.game.tweens.remove(selectedGemTween);
        }
        selectedGemTween = this.tweenGemPos(gem, selectedGemStartPos.x, selectedGemStartPos.y);
        if (tempShiftedGem !== null) {
          this.tweenGemPos(tempShiftedGem, gem.posX, gem.posY);
        }
        this.swapGemPosition(gem, tempShiftedGem);
        tempShiftedGem = null;
      }
    }
    this.removeKilledGems();
    var dropGemDuration = this.dropGems();
    // delay board refilling until all existing gems have dropped down
    this.game.time.events.add(dropGemDuration * 100, this.refillBoard);
    allowInput = false;
    selectedGem = null;
    tempShiftedGem = null;
  }

  slideGem(pointer, x, y) {
    // check if a selected gem should be moved and do it
    if (selectedGem && pointer.isDown) {
      var cursorGemPosX = this.getGemPos(x);
      var cursorGemPosY = this.getGemPos(y);
      if (this.checkIfGemCanBeMovedHere(selectedGemStartPos.x, selectedGemStartPos.y, cursorGemPosX, cursorGemPosY)) {
        if (cursorGemPosX !== selectedGem.posX || cursorGemPosY !== selectedGem.posY) {
          // move currently selected gem
          if (selectedGemTween !== null) {
            this.game.tweens.remove(selectedGemTween);
          }
          selectedGemTween = this.tweenGemPos(selectedGem, cursorGemPosX, cursorGemPosY);
          gems.bringToTop(selectedGem);
          // if we moved a gem to make way for the selected gem earlier, move it back into its starting position
          if (tempShiftedGem !== null) {
            this.tweenGemPos(tempShiftedGem, selectedGem.posX, selectedGem.posY);
            this.swapGemPosition(selectedGem, tempShiftedGem);
          }
          // when the player moves the selected gem, we need to swap the position of the selected gem with the gem currently in that position 
          tempShiftedGem = this.getGem(cursorGemPosX, cursorGemPosY);
          if (tempShiftedGem === selectedGem) {
            tempShiftedGem = null;
          }
          else {
            this.tweenGemPos(tempShiftedGem, selectedGem.posX, selectedGem.posY);
            this.swapGemPosition(selectedGem, tempShiftedGem);
          }
        }
      }
    }
  }

  spawnBoard() {
    BOARD_COLS = Math.floor(this.game.world.width / GEM_SIZE_SPACED);
    BOARD_ROWS = Math.floor(this.game.world.height / GEM_SIZE_SPACED);
    gems = this.game.add.group();
    for (var i = 0; i < BOARD_COLS; i++) {
      for (var j = 0; j < BOARD_ROWS; j++) {
        var gem = gems.create(i * GEM_SIZE_SPACED, j * GEM_SIZE_SPACED, "GEMS");
        gem.name = 'gem' + i.toString() + 'x' + j.toString();
        gem.inputEnabled = true;
        gem.events.onInputDown.add(this.selectGem, this);
        gem.events.onInputUp.add(this.releaseGem, this);
        this.randomizeGemColor(gem);
        this.setGemPos(gem, i, j); // each gem has a position on the board
        gem.kill();
      }
    }
    this.removeKilledGems();
    var dropGemDuration = this.dropGems();
    // delay board refilling until all existing gems have dropped down
    this.game.time.events.add(dropGemDuration * 100, this.refillBoard);
    allowInput = false;
    selectedGem = null;
    tempShiftedGem = null;
  }

  selectGem(gem) {
    if (allowInput) {
      selectedGem = gem;
      selectedGemStartPos.x = gem.posX;
      selectedGemStartPos.y = gem.posY;
    }
  }

  getGem(posX, posY) {
    return gems.iterate("id", this.calcGemId(posX, posY), Phaser.Group.RETURN_CHILD);
  }

  getGemPos(coordinate) {
    return Math.floor(coordinate / GEM_SIZE_SPACED);
  }

  setGemPos(gem, posX, posY) {
    gem.posX = posX;
    gem.posY = posY;
    gem.id = this.calcGemId(posX, posY);
  }

  calcGemId(posX, posY) {
    return posX + posY * BOARD_COLS;
  }

  getGemColor(gem) {
    return gem.frame;
  }

  randomizeGemColor(gem) {
    gem.frame = this.game.rnd.integerInRange(0, gem.animations.frameTotal - 1);
  }

  checkIfGemCanBeMovedHere(fromPosX, fromPosY, toPosX, toPosY) {
    if (toPosX < 0 || toPosX >= BOARD_COLS || toPosY < 0 || toPosY >= BOARD_ROWS) {
      return false;
    }
    if (fromPosX === toPosX && fromPosY >= toPosY - 1 && fromPosY <= toPosY + 1) {
      return true;
    }
    if (fromPosY === toPosY && fromPosX >= toPosX - 1 && fromPosX <= toPosX + 1) {
      return true;
    }
    return false;
  }

  countSameColorGems(startGem, moveX, moveY) {
    var curX = startGem.posX + moveX;
    var curY = startGem.posY + moveY;
    var count = 0;
    while (curX >= 0 && curY >= 0 && curX < BOARD_COLS && curY < BOARD_ROWS && this.getGemColor(this.getGem(curX, curY)) === this.getGemColor(startGem)) {
      count++;
      curX += moveX;
      curY += moveY;
    }
    return count;
  }
  // swap the position of 2 gems when the player drags the selected gem into a new location
  swapGemPosition(gem1, gem2) {
    var tempPosX = gem1.posX;
    var tempPosY = gem1.posY;
    this.setGemPos(gem1, gem2.posX, gem2.posY);
    this.setGemPos(gem2, tempPosX, tempPosY);
  }

  // count how many gems of the same color are above, below, to the left and right
  // if there are more than 3 matched horizontally or vertically, kill those gems
  // if no match was made, move the gems back into their starting positions
  checkAndKillGemMatches(gem) {
    if (gem === null) { return; }
    var canKill = false;
    // process the selected gem
    var countUp = this.countSameColorGems(gem, 0, -1);
    var countDown = this.countSameColorGems(gem, 0, 1);
    var countLeft = this.countSameColorGems(gem, -1, 0);
    var countRight = this.countSameColorGems(gem, 1, 0);
    var countHoriz = countLeft + countRight + 1;
    var countVert = countUp + countDown + 1;
    if (countVert >= MATCH_MIN) {
      this.killGemRange(gem.posX, gem.posY - countUp, gem.posX, gem.posY + countDown);
      canKill = true;
    }
    if (countHoriz >= MATCH_MIN) {
      this.killGemRange(gem.posX - countLeft, gem.posY, gem.posX + countRight, gem.posY);
      canKill = true;
    }
    return canKill;
  }

  // kill all gems from a starting position to an end position
  killGemRange(fromX, fromY, toX, toY) {
    fromX = Phaser.Math.clamp(fromX, 0, BOARD_COLS - 1);
    fromY = Phaser.Math.clamp(fromY, 0, BOARD_ROWS - 1);
    toX = Phaser.Math.clamp(toX, 0, BOARD_COLS - 1);
    toY = Phaser.Math.clamp(toY, 0, BOARD_ROWS - 1);
    for (var i = fromX; i <= toX; i++) {
      for (var j = fromY; j <= toY; j++) {
        var gem = this.getGem(i, j);
        gem.kill();
      }
    }

  }

  // move gems that have been killed off the board
  removeKilledGems() {
    gems.forEach(function (gem) {
      if (!gem.alive) {
        this.setGemPos(gem, -1, -1);
      }
    });
  }

  // animated gem movement
  tweenGemPos(gem, newPosX, newPosY, durationMultiplier) {
    console.log('Tween ', gem.name, ' from ', gem.posX, ',', gem.posY, ' to ', newPosX, ',', newPosY);
    if (durationMultiplier === null || typeof durationMultiplier === 'undefined') {
      durationMultiplier = 1;
    }
    return this.game.add.tween(gem).to({ x: newPosX * GEM_SIZE_SPACED, y: newPosY * GEM_SIZE_SPACED }, 100 * durationMultiplier, Phaser.Easing.Linear.None, true);
  }

  // look for gems with empty space beneath them and move them down
  dropGems() {
    var dropRowCountMax = 0;
    for (var i = 0; i < BOARD_COLS; i++) {
      var dropRowCount = 0;
      for (var j = BOARD_ROWS - 1; j >= 0; j--) {
        var gem = this.getGem(i, j);
        if (gem === null) {
          dropRowCount++;
        }
        else if (dropRowCount > 0) {
          gem.dirty = true;
          this.setGemPos(gem, gem.posX, gem.posY + dropRowCount);
          this.tweenGemPos(gem, gem.posX, gem.posY, dropRowCount);
        }
      }
      dropRowCountMax = Math.max(dropRowCount, dropRowCountMax);
    }
    return dropRowCountMax;
  }

  // look for any empty spots on the board and spawn new gems in their place that fall down from above
  refillBoard() {
    var maxGemsMissingFromCol = 0;
    for (var i = 0; i < BOARD_COLS; i++) {
      var gemsMissingFromCol = 0;
      for (var j = BOARD_ROWS - 1; j >= 0; j--) {
        var gem = this.getGem(i, j);
        if (gem === null) {
          gemsMissingFromCol++;
          gem = gems.getFirstDead();
          gem.reset(i * GEM_SIZE_SPACED, -gemsMissingFromCol * GEM_SIZE_SPACED);
          gem.dirty = true;
          this.randomizeGemColor(gem);
          this.setGemPos(gem, i, j);
          this.tweenGemPos(gem, gem.posX, gem.posY, gemsMissingFromCol * 2);
        }
      }
      maxGemsMissingFromCol = Math.max(maxGemsMissingFromCol, gemsMissingFromCol);
    }
    this.game.time.events.add(maxGemsMissingFromCol * 2 * 100, this.boardRefilled);
  }

  // when the board has finished refilling, re-enable player input
  boardRefilled() {
    var canKill = false;
    for (var i = 0; i < BOARD_COLS; i++) {
      for (var j = BOARD_ROWS - 1; j >= 0; j--) {
        var gem = this.getGem(i, j);

        if (gem.dirty) {
          gem.dirty = false;
          canKill = this.checkAndKillGemMatches(gem) || canKill;
        }
      }
    }
    if (canKill) {
      this.removeKilledGems();
      var dropGemDuration = this.dropGems();
      // delay board refilling until all existing gems have dropped down
      this.game.time.events.add(dropGemDuration * 100, this.refillBoard);
      allowInput = false;
    } else {
      allowInput = true;
    }
  }

  
  render() {
    return (<div id="gem-match" />)
  }
}


export default GemMatch;
