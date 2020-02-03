import React, { PureComponent } from "react";
import PhaserGame from './game'
import CanvasGame from './canvasGame'
import { gameType } from './enum'

export class PhaserGameComponent extends PureComponent {
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }


  render() {
    switch (this.props.data.gameType) {
      case gameType.PHASER:
        return <PhaserGame {...this.props} />
      case gameType.CANVAS:
        return <CanvasGame {...this.props} />
      default:
        return <PhaserGame {...this.props} />
    }
  }
}

export default PhaserGameComponent
