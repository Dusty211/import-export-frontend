import React from 'react';
import Npc from '../components/Npc.js';
import Job from '../components/Job.js';
import FeedbackPane from '../components/FeedbackPane.js';

//gamelogic
import { karmaRoll, heatRoll, shakedownRoll, luckRoll } from '../DiceRolls.js'

export default class DialogPane extends React.Component {

  constructor() {
    super()
    this.state = {
      karmaResult: 'none',
      rollResult: 'none',
      jobChoice: null,
      jobProfit: 0
    }
  }

  handleOptionSelection = (jobIndex, thisJob) => {

    let challengeOption = 'none';
    let losingRoll = 'none';
    let profit = 0;
    let cargoVal = thisJob.job.cargo_value;
    let jobResult = {
      cash: this.props.currentGamestate().cash,
      luck: this.props.currentGamestate().luck,
      karma: this.props.currentGamestate().karma,
      heat: this.props.currentGamestate().heat,
      streetcred: this.props.currentGamestate().streetcred,
      xships: this.props.currentGamestate().xships,
      ship_lvl: this.props.currentGamestate().ship_lvl,
      xmercs: this.props.currentGamestate().xmercs,
    }

    const validateStatValue = (value) => {
      if (value > 100) {
        value = 100
      }
      if (value < 0) {
        value = 0
      }
      return value
    }

    //instant affects of decision:
    jobResult.karma += thisJob.job.job_options[jobIndex].morality
    jobResult.karma = validateStatValue(jobResult.karma)
    jobResult.heat += thisJob.job.job_options[jobIndex].criminality
    jobResult.heat = validateStatValue(jobResult.heat)

    cargoVal *= jobResult.xships

    let rollArgs = [
      {roll:"LuckRoll", value: jobResult.luck, value2: jobResult.xmercs, func: luckRoll},
      {roll:"ShakedownRoll", value: jobResult.streetcred, value2: jobResult.xmercs, func: shakedownRoll},
      {roll:"HeatRoll", value: jobResult.heat, value2: jobResult.ship_lvl, func: heatRoll}
    ];

    //sort so that we always roll the most likely to fail roll first.
    rollArgs = rollArgs.sort(function(a, b){return b.value - a.value});

    if (jobIndex === 1) {  //challenge option
      if (karmaRoll(thisJob.npc.npc_karma, jobResult.karma)) {
        challengeOption = 'successful';
        cargoVal = Math.round(cargoVal *= 1.5)
      }else{
        challengeOption = 'failed';
        cargoVal = Math.round(cargoVal *= 0.3)
      }
    }

    if (jobIndex !== 2) { //not the skip option
      rollArgs.forEach( arg => {
        if (losingRoll === 'none' && arg.func(arg.value, arg.value2)) {  //roll for each possible hazard. first one gets set to losingRoll
           losingRoll = arg.roll
        }
      })
      switch(losingRoll) {
        default:
          console.log('Bug in job switch statement, or with arguments')
          break;
        case 'LuckRoll':
          jobResult.cash += Math.round(cargoVal * 0.2)
          jobResult.streetcred += thisJob.job.streetcred_mod
          jobResult.streetcred = validateStatValue(jobResult.streetcred)
          break;
        case 'ShakedownRoll':
          jobResult.cash += Math.round(cargoVal * 0.5)
          break;
        case 'HeatRoll':
          jobResult.heat += 10
          jobResult.heat = validateStatValue(jobResult.heat)
          jobResult.streetcred += thisJob.job.streetcred_mod
          jobResult.streetcred = validateStatValue(jobResult.streetcred)
          break;
        case 'none':
          jobResult.cash += cargoVal;
          jobResult.streetcred += thisJob.job.streetcred_mod
          jobResult.streetcred = validateStatValue(jobResult.streetcred)
          break;
      }
    }

    if (jobIndex === 3) {
      jobResult.cash -= cargoVal
    }

    console.log('original cargo value:', thisJob.job.cargo_value)
    console.log('original cash:', this.props.currentGamestate().cash)
    console.log('final cash:', jobResult.cash)
    console.log('losing roll:', losingRoll)
    console.log('challengeOption:', challengeOption)

    //sending
    // jobResult

    profit = jobResult.cash - this.props.currentGamestate().cash

    this.setState({rollResult: losingRoll, karmaResult: challengeOption, jobChoice: jobIndex, jobProfit: profit });
    this.props.patchGamestate(jobResult, 1)

  }

  render() {

    return(
      <div id="inner-dialog-pane">

      {this.props.loopStage === 0 ?
        <React.Fragment>
          <Npc name={this.props.nextJob.npc.name}
            shadiness={100 - this.props.nextJob.npc.npc_karma} />
          <Job handleOptionSelection={this.handleOptionSelection}
            nextJob={this.props.nextJob}
            karma={this.props.currentGamestate().karma }/>
        </React.Fragment> :
          <FeedbackPane
            results={this.state}
            />
          }
      </div>
    )
  }
}
