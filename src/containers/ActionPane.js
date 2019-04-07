import React, {Component} from 'react';
import ActionButton from '../components/ActionButton.js'

export default class ActionPane extends Component {

  render() {
    return(
      <div>
        <ActionButton action={"Send Bribe"} actionIcon={"card_travel"} actionCost={400000}/>
        <ActionButton action={"Hire Mercenaries"} actionIcon={"flash_on"} actionCost={70000}/>
        <ActionButton action={"Upgrade Ships"} actionIcon={"build"} actionCost={100000}/>
        <ActionButton action={"Buy Ship"} actionIcon={"directions_boat"} actionCost={2000000}/>
      </div>
    )
  }
}
