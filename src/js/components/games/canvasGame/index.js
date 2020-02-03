import React, { PureComponent } from "react";
import _ from 'lodash'
import styled from 'styled-components'

const GameWrapper = styled.div`position: fixed;
margin-top: 30px;
padding-top: 20px;`

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
  }


  render () {
    return <GameWrapperSmall id={this.props.data.id || 'canvas-game-default'} />
  }
}

export default CanvasGameComponent
