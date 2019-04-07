import React, {Component} from 'react';
import StatBar from '../components/StatBar.js'
import Cash from '../components/Cash.js'
import ItemCount from '../components/ItemCount.js'

export default class InfoPane extends Component {


  render() {
    return(
      <div>
        <Cash />
        <StatBar stat={"Luck"} statValue={40}/>
        <StatBar stat={"Karma"} statValue={50}/>
        <StatBar stat={"Heat"} statValue={30}/>
        <StatBar stat={"Street Cred"} statValue={80}/>
        <ItemCount item={"Ships"} itemValue={3}/>
        <ItemCount item={"Ship level"} itemValue={4}/>
        <ItemCount item={"Mercenaries"} itemValue={34}/>
      </div>
    )
  }
}
