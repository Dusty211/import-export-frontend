import React from 'react';

const Job = (props) => {
  return(
    <div id="job">
    {console.log(props.nextJob)}
    <p>
    {`Cargo: ${props.nextJob.cargo}`}<br/>
    {`Profit per shipment: ${props.nextJob.cargo_value}`}<br/><br/>
    {`${props.nextNpc.name} says: ${props.nextJob.job_text}`}<br/>
    </p>
    job component
    <button onClick={() => props.setLoopStage(1)}>loopstage</button>
    </div>
  )
}

export default Job
