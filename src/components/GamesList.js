import React from 'react';
import GameSave from './GameSave.js'

const GamesList = (props) => {
  return(
<React.Fragment>
  {props.user.gamestates.length === 0 ?
    <div>
      <h1>{`You have no saved games!`}</h1>
      <h3>{`Select "New Game" to start a game.`}</h3>
    </div> :
      props.user.gamestates.map((gamestate) => {
      return <GameSave key={gamestate.id} gamestate={gamestate} setCurrentGame={props.setCurrentGame} />
    })
  }
</React.Fragment>
  )
}

export default GamesList
