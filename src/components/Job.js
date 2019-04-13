import React from 'react';
import JobOptions from './JobOptions.js'

const Job = (props) => {
  return(
    <div id="job">
    {console.log(props.nextJob)}
    <p>
    {`Cargo: ${props.nextJob.cargo}`}<br/>
    {`Profit per shipment: ${props.nextJob.cargo_value}`}<br/><br/>
    {`${props.nextNpc.name} says: ${props.nextJob.job_text}`}<br/>
    </p>
    <JobOptions handleOptionSelection={props.handleOptionSelection} jobOptions={props.nextJob.job_options} setLoopStage={props.setLoopStage}/>
    </div>
  )
}

export default Job
