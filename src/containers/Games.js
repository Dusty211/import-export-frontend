import React, { Component } from 'react';
import GamesList from '../components/GamesList.js'

class Games extends Component {

  createGamestate = (props) => {
    // if (e) {e.preventDefault()}
    let token = localStorage.getItem('token')
    if(token){
      fetch('http://localhost:3000/api/v1/gamestates',{
        method: 'POST',
        headers:{
          "Authentication": `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          gamestate: {
            company_name: 'test company',
            cash: 70000,
            luck: 50,
            karma: 50,
            heat: 0,
            streetcred: 0,
            xships: 1,
            ship_lvl: 1,
            xmercs: 0,
            user_id: this.props.user.id,
            savename: 'New Game',
            // company_name: this.state.company_name,
            // cash: this.state.cash,
            // luck: this.state.luck,
            // karma: this.state.karma,
            // heat: this.state.heat,
            // streetcred: this.state.heat,
            // xships: this.state.xships,
            // ship_lvl: this.state.ship_lvl,
            // xmercs: this.state.xmercs,
            // user_id: this.state.user_id,
            // savename: this.state.savename,
          }
        })
      })
      .then(r => r.json())
      .then(data => {
        this.props.handleUpdateGamestate(data.gamestate)
      })
    }
  }

  render() {
    return(
      <div>
      <button onClick={() => this.createGamestate(this.props)} >New Game</button>
      <GamesList setCurrentGame={this.props.setCurrentGame} user={this.props.user}/>
      </div>
    )
  }

}

export default Games
