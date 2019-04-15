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
      karmaResult: 'none', // 0 = N/A, 1 = fail, 2 = success
      rollResult: 'none',
      jobChoice: null
    }
  }

  handleOptionSelection = (jobIndex, thisJob) => {

    let challengeOption = 'none';
    let losingRoll = 'none';
    let cargoVal = thisJob.job.cargo_value;
    let jobResult = {
      cash: this.props.currentGamestate().cash,
      luck: this.props.currentGamestate().luck,
      karma: this.props.currentGamestate().karma,
      heat: this.props.currentGamestate().heat,
      streetcred: this.props.currentGamestate().streetcred,
      xships: this.props.currentGamestate().xships,
      ship_lvl: this.props.currentGamestate().ship_lvl,
      xmercs: this.props.currentGamestate().xmercs
    }

    //instant affects of decision:
    jobResult.karma += thisJob.job.job_options[jobIndex].morality
    jobResult.heat += thisJob.job.job_options[jobIndex].criminality

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
          break;
        case 'ShakedownRoll':
          jobResult.cash += Math.round(cargoVal * 0.5)
          break;
        case 'HeatRoll':
          jobResult.heat += 10
          jobResult.streetcred += thisJob.job.streetcred_mod
          break;
        case 'none':
          jobResult.cash += cargoVal;
          jobResult.streetcred += thisJob.job.streetcred_mod
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
    jobResult

    this.setState({rollResult: losingRoll, karmaResult: challengeOption, jobChoice: jobIndex});
    this.props.setLoopStage(1)
  }

  render() {

    return(
      <div>

      {this.props.loopStage === 0 ?
        <React.Fragment>
          <Npc name={this.props.nextJob.npc.name} shadiness={100 - this.props.nextJob.npc.npc_karma} />
          <Job handleOptionSelection={this.handleOptionSelection} nextJob={this.props.nextJob} />
        </React.Fragment> :
          <FeedbackPane setLoopStage={this.props.setLoopStage}/>}
      </div>
    )
  }
}
