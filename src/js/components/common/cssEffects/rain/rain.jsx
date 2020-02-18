import React, { PureComponent } from 'react';
import _ from 'lodash'
import $ from 'jquery'

// import './rain.scss'
import { Rain } from './rainStyled'

class RainEffect extends PureComponent {

  constructor (props) {
    super(props)
    this.excuteEffect = this.excuteEffect.bind(this)
    this.makeItRain = this.makeItRain.bind(this)
  }

  makeItRain () {
    //clear out everything
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 5 and 2
      var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  }

  excuteEffect () {
    this.makeItRain()
  }

  componentDidMount () {
    this.excuteEffect()
  }

  render () {
    const { frontRow = true, backRow = true, single = false, className } = this.props
    return (
      <Rain>
        <div className={`back-row-toggle splat-toggle ${single ? 'single-toggle' : ''} ${className || ''}`}>
          {frontRow && <div className='rain front-row'></div>}
          {backRow && <div className='rain back-row'></div>}
        </div>
      </Rain>
    )
  }
}

export default RainEffect