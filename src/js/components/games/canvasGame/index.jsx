import React, { PureComponent } from "react";
import _ from 'lodash'
import $ from 'jquery'
import styled from 'styled-components'
import canvasGameFactor from './canvasFactory'

const GameWrapper = styled.canvas`position: fixed;
margin-top: 30px;
padding-top: 20px;
width: 800px;
height: 600px;
background: #eee;
display: block;
`

const GameWrapperSmall = styled(GameWrapper)`
  margin-left: calc((100vw - 800px) / 2);
`
const GameWrapperMedium = styled(GameWrapper)`
  margin-left: 0px;
`
const GameWrapperFull = styled(GameWrapper)`
  margin-left: calc((100vw - 1024px) / 2);
`

export class CanvasGameComponent extends PureComponent {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.canvas = document.getElementById('game-canvas-element')
    let context = this.canvas.getContext('2d')
    canvasGameFactor.start(context, this.props.data.importedName)
  }

  componentWillUnmount() {
    $(this.canvas).remove()
  }


  render () {
    return <GameWrapperSmall id='game-canvas-element' />
  }
}

export default CanvasGameComponent
