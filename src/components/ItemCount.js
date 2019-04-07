import React from 'react';

const ItemCount = (props) => {

  return(
    <div id="item-count">
    {`${props.item}: ${props.itemValue}`}
    </div>
  )

}

export default ItemCount
