import React from 'react';
import JobOptions from './JobOptions.js'

const Job = (props) => {
  return(
    <div id="job">
    {console.log(props.nextJob.job)}
    <p>
    {`Cargo: ${props.nextJob.job.cargo}`}<br/>
    {`Profit per shipment: ${props.nextJob.job.cargo_value}`}<br/><br/>
    {`${props.nextJob.npc.name} says: ${props.nextJob.job.job_text}`}<br/>
    </p>
    <JobOptions currentGamestate={props.currentGamestate} handleOptionSelection={props.handleOptionSelection} nextJob={props.nextJob} />
    </div>
  )
}

export default Job
