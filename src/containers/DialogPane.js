import React, {Component} from 'react';
import Npc from '../components/Npc.js';
import Job from '../components/Job.js';

export default class DialogPane extends Component {


  render() {
    return(
      <div>
      <Npc name={"Crazy Ed"}/>
      <Job />
      </div>
    )
  }
}
