import React, {Component} from 'react';

export default class FeedbackPane extends Component {


  render() {
    return(
      <div>
      Feedback Pane
      <button onClick={() => this.props.setLoopStage(0)}>loopstage</button>
      </div>
    )
  }
}
