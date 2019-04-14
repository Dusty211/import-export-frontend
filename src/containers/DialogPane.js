import React from 'react';
import Npc from '../components/Npc.js';
import Job from '../components/Job.js';
import FeedbackPane from '../components/FeedbackPane.js';

export default class DialogPane extends React.Component {

  constructor() {
    super()
    this.state = {
      karmaResult: 0 // 0 = N/A, 1 = fail, 2 = success
    }
  }

  handleOptionSelection = (index, currentGamestate, nextJob) => {
    if (index === 1) {  //risky option
      console.log('risk option')
      console.log('next job:', nextJob)
    }else{  //safe option
      console.log(currentGamestate)
      console.log('next job:', nextJob)
    }
    this.props.setLoopStage(1)
  }

  render() {

    return(
      <div>

      {this.props.loopStage === 0 ?
        <React.Fragment>
          <Npc name={this.props.nextJob.npc.name} shadiness={100 - this.props.nextJob.npc.npc_karma} />
          <Job currentGamestate={this.props.currentGamestate} handleOptionSelection={this.handleOptionSelection} nextJob={this.props.nextJob} />
        </React.Fragment> :
          <FeedbackPane setLoopStage={this.props.setLoopStage}/>}
      </div>
    )
  }
}
