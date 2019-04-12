import React from 'react';
import GameSave from './GameSave.js'

const GamesList = (props) => {
  return(
<div>
{props.user.gamestates.map((gamestate) => {
  return <GameSave key={gamestate.id} gamestate={gamestate} setCurrentGame={props.setCurrentGame} />
})}
</div>
  )
}

export default GamesList