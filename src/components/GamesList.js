import React from 'react';
import GameSave from './GameSave.js'

const GamesList = (props) => {
  return(
<div>
<ul>
{props.user.gamestates.map((gamestate) => {
  return <GameSave key={gamestate.id} gamestate={gamestate} setCurrentGame={props.setCurrentGame} />
})}
</ul>
</div>
  )
}

export default GamesList
