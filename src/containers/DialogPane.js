import React from 'react';
import Npc from '../components/Npc.js';
import Job from '../components/Job.js';
import FeedbackPane from '../containers/FeedbackPane.js';

export default class DialogPane extends React.Component {


  render() {
    // debugger;
    return(
      <div>
      {this.props.loopStage === 0 ? <React.Fragment><Npc name={"Some guy"}/><Job setLoopStage={this.props.setLoopStage}/></React.Fragment> : <FeedbackPane setLoopStage={this.props.setLoopStage}/>}
      </div>
    )
  }
}
