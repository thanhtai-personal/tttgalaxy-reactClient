import React, { Component } from "react";
import { connect } from "react-redux";

import GamePlay from '../../components/games/game'

class GamePlayContainer extends Component {
  render() {
    return (
      <GamePlay />
    )
  }
}

function mapStateToProps (state) {
  return {
  };
}

export default connect(
  mapStateToProps,
  {  }
)(GamePlayContainer);