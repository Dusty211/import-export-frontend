import React from 'react';

const Npc = (props) => {

  return(
    <div id="npc">
    <h2>{`Speaking with: ${props.name} - ${props.shadiness}% Shadiness`}</h2>
    </div>
  )
}

export default Npc
