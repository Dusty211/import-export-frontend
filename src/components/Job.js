import React from 'react';

const Job = (props) => {
  return(
    <div id="job">
    {console.log(props.nextJob)}
    job component
    <button onClick={() => props.setLoopStage(1)}>loopstage</button>
    </div>
  )
}

export default Job
