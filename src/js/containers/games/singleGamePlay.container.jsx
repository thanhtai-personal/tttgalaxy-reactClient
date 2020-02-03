import React, { Component } from "react";
import { connect } from "react-redux";
import ActionService from './../../actions'

import GamePlay from '../../components/games'


class GamePlayContainer extends Component {

  componentDidMount () {
    this.props.getGameData && typeof this.props.getGameData === 'function' && this.props.getGameData(new URL(window.location.href).searchParams.get('id'))
  }

  render() {
    return (
      <GamePlay data={this.props.data} />
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state.listGame.gameDetail || {}
  };
}

export default connect(
  mapStateToProps,
  { 
    getGameData: ActionService.getGameData
  }
)(GamePlayContainer);