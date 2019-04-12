import React from 'react';
import Npc from '../components/Npc.js';
import Job from '../components/Job.js';
import FeedbackPane from '../components/FeedbackPane.js';

export default class DialogPane extends React.Component {



  render() {

    return(
      <div>

      {this.props.loopStage === 0 ? <React.Fragment><Npc name={this.props.nextJob.npc.name} shadiness={100 - this.props.nextJob.npc.npc_karma} /><Job nextJob={this.props.nextJob} setLoopStage={this.props.setLoopStage}/></React.Fragment> : <FeedbackPane setLoopStage={this.props.setLoopStage}/>}
      </div>
    )
  }
}
