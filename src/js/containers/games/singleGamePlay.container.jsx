import React, { Component } from "react";
import { connect } from "react-redux";

import GamePlay from '../../components/games/game'
//import GamePlay from '../../components/games/gemMatch/gamePlay' //--> error


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