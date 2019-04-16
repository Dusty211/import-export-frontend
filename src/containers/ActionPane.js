import React, {Component} from 'react';
import ActionButton from '../components/ActionButton.js'

export default class ActionPane extends Component {



  render() {

    const bribeCost = 15000
    const mercenariesCost = 20000
    const upgradeCost = 40000
    const shipCost = 70000

    let jobResult = {
      cash: this.props.currentGamestate.cash,
      luck: this.props.currentGamestate.luck,
      karma: this.props.currentGamestate.karma,
      heat: this.props.currentGamestate.heat,
      streetcred: this.props.currentGamestate.streetcred,
      xships: this.props.currentGamestate.xships,
      ship_lvl: this.props.currentGamestate.ship_lvl,
      xmercs: this.props.currentGamestate.xmercs,
    }

    const sendBribe = () => {
      let clonedResults = {...jobResult}
      clonedResults.heat -= 20
      if (clonedResults.heat < 0) {
        clonedResults.heat = 0
      }
      clonedResults.streetcred += 5
      if (clonedResults.streetcred > 100) {
        clonedResults.streetcred = 100
      }
      clonedResults.cash -= bribeCost
      this.props.patchGamestate(clonedResults, 0)
    }

    const hireMercenaries = () => {
      let clonedResults = {...jobResult}
      clonedResults.xmercs += 2
      clonedResults.luck += 2
      if (clonedResults.luck > 100) {
        clonedResults.luck = 100
      }
      clonedResults.cash -= mercenariesCost
      this.props.patchGamestate(clonedResults, 0)
    }

    const upgradeShips = () => {
      let clonedResults = {...jobResult}
      clonedResults.ship_lvl += 1
      clonedResults.cash -= upgradeCost
      this.props.patchGamestate(clonedResults, 0)
    }

    const buyShip = () => {
      let clonedResults = {...jobResult}
      clonedResults.xships += 1
      clonedResults.cash -= shipCost
      this.props.patchGamestate(clonedResults, 0)
    }

    return(
      <div>
        <ActionButton tooltipText={'Decrease heat while slightly increasing streetcred'} disabledButtons={this.props.disabledButtons} clickCb={sendBribe} action={"Send Bribe"} actionIcon={"card_travel"} actionCost={bribeCost} currentGamestate={this.props.currentGamestate} />
        <ActionButton tooltipText={'Hire 2 more mercenaries. Decrease shakedowns while increasing your luck.'} disabledButtons={this.props.disabledButtons} clickCb={hireMercenaries} action={"Hire Mercenaries"} actionIcon={"flash_on"} actionCost={mercenariesCost} currentGamestate={this.props.currentGamestate} />
        <ActionButton tooltipText={'Ship level + 1. Your ships gain hiding spaces.'} disabledButtons={this.props.disabledButtons} clickCb={upgradeShips} action={"Upgrade Ships"} actionIcon={"build"} actionCost={upgradeCost} currentGamestate={this.props.currentGamestate} />
        <ActionButton tooltipText={'Buy 1 ship. Carry more cargo. Make more money.'} disabledButtons={this.props.disabledButtons} clickCb={buyShip} action={"Buy Ship"} actionIcon={"directions_boat"} actionCost={shipCost} currentGamestate={this.props.currentGamestate} />
      </div>
    )
  }
}
