import React, {Component} from 'react';
import StatBar from '../components/StatBar.js'
import Cash from '../components/Cash.js'
import ItemCount from '../components/ItemCount.js'
import {luckPercent, heatPercent, shakedownPercent} from '../DiceRolls.js'


export default class InfoPane extends Component {

  render() {

    const luck = this.props.currentGamestate().luck
    const karma = this.props.currentGamestate().karma
    const heat = this.props.currentGamestate().heat
    const streetcred = this.props.currentGamestate().streetcred
    const xships = this.props.currentGamestate().xships
    const ship_lvl = this.props.currentGamestate().ship_lvl
    const xmercs = this.props.currentGamestate().xmercs

    return(

      <div>
        <Cash cash={this.props.currentGamestate().cash}/>
        <StatBar tooltipText={`${luckPercent(luck)}% chance for unlucky accident.`} stat={"Luck"} statValue={luck}/>
        <StatBar tooltipText={'Karma affects haggling ability. The chance for a successful haggle is shown on the corresponding haggle dialog option.'} stat={"Karma"} statValue={karma}/>
        <StatBar tooltipText={`${heatPercent(heat, ship_lvl)}% chance for law enforcement action.`} stat={"Heat"} statValue={heat}/>
        <StatBar tooltipText={`${shakedownPercent(streetcred, xmercs)}% chance someone will shake you down.`} stat={"Street Cred"} statValue={streetcred}/>
        <ItemCount item={"Ships"} itemValue={xships}/>
        <ItemCount item={"Ship level"} itemValue={ship_lvl}/>
        <ItemCount item={"Mercenaries"} itemValue={xmercs}/>
      </div>
    )
  }
}
