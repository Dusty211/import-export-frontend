import React from 'react';
import JobOptions from './JobOptions.js'

const Job = (props) => {
  return(
    <div id="job">
    <p>
    {`Cargo: ${props.nextJob.job.cargo}`}<br/>
    {`Profit per shipment: $${props.nextJob.job.cargo_value}`}<br/><br/>
    {`${props.nextJob.npc.name} says: ${props.nextJob.job.job_text}`}<br/>
    </p>
    <JobOptions karma={props.karma} handleOptionSelection={props.handleOptionSelection} nextJob={props.nextJob} />
    </div>
  )
}

export default Job
