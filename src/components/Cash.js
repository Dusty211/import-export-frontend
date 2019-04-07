import React from 'react';


const Cash = (props) => {
  return(
    <div id="cash">
      {`Cash: $${props.cash.toLocaleString()}`}
    </div>
  )
}

export default Cash
