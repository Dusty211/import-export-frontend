import React, { Component } from 'react';
import GamesList from '../components/GamesList.js'

class Games extends Component {

  render() {
    return(
      <div>
      <GamesList user={this.props.user}/>
      </div>
    )
  }

}

export default Games
