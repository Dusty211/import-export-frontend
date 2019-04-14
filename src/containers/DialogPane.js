import React from 'react';
import Npc from '../components/Npc.js';
import Job from '../components/Job.js';
import FeedbackPane from '../components/FeedbackPane.js';

//gamelogic
import { karmaRoll } from '../DiceRolls.js'

export default class DialogPane extends React.Component {

  constructor() {
    super()
    this.state = {
      karmaResult: 0 // 0 = N/A, 1 = fail, 2 = success
    }
  }

  handleOptionSelection = (index, thisJob) => {
    let challengeOption = 'unselected';
    let jobResult = {
      cash: this.props.currentGamestate().cash,
      karma: this.props.currentGamestate().karma,
      heat: this.props.currentGamestate().heat,
      streetcred: this.props.currentGamestate().streetcred,
      xships: this.props.currentGamestate().xships
    }
    console.log('cash: ', jobResult.cash)
    console.log('karma: ', jobResult.karma)
    console.log('heat: ', jobResult.heat)
    console.log('streetcred: ', jobResult.streetcred)
    console.log('xships: ', jobResult.xships)
    if (index === 1) {  //challenge option
      if (karmaRoll(thisJob.npc.npc_karma, this.props.currentGamestate.karma)) {
        challengeOption = 'successful';
      }else{
        challengeOption = 'failed';
      }
    }

    console.log('challengeOption:', challengeOption)
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
