import React from 'react';
import { Link } from "react-router-dom";

const GameSave = (props) => {

  return(
    <React.Fragment>

    <li>
    {`Savename:
      ${props.gamestate.savename}  --  Company Name:
      ${props.gamestate.company_name}  --  Saved:
      ${props.gamestate.updated_at}`}
        <Link to="/profile">
          <button onClick={() => props.setCurrentGame(props.gamestate.id)}>Load Game
          </button>
        </Link>
    </li>

    </ React.Fragment>
  )

}

export default GameSave
