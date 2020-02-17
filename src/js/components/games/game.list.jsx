import React, { PureComponent } from "react";
// import _ from 'lodash'

import List from './../common/list'
import $ from 'jquery'

import './list.scss'


class GameList extends PureComponent {
  // constructor (props) {
  //   super(props)
  // }

  onClickGame (gameId) {
    window.open(`${window.location.origin}/gameplay?id=${gameId}`, `game-${gameId}`)
  }

  componentDidMount() {
    $("body").css({ margin: '0 0 0 0' })
  }

  componentWillUnmount() {
    $("body").css({ margin: '18px 12vw 34px' })
  }

  render () {
    const {
      onClickGame,
      props: { data }
    } = this
    return (
      <div className="games-list" id="games">
        <List
          onClickItem={onClickGame}
          dataList={data}
          maxItemInRow={6}
        />
      </div>

    )
  }
}

export default GameList