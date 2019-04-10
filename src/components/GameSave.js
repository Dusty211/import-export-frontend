import React from 'react';

const GameSave = (props) => {

  return(
    <React.Fragment>

    <li>
    {`Savename: ${props.gamestate.savename}  --  Company Name: ${props.gamestate.company_name}  --  Saved: ${props.gamestate.updated_at}`}
    </li>

    </ React.Fragment>
  )

}

export default GameSave
