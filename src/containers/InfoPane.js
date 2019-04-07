import React, {Component} from 'react';
import StatBar from '../components/StatBar.js'

export default class InfoPane extends Component {


  render() {
    return(
      <div>
      Info Pane
      <StatBar stat={"Luck"} statValue={40}/>
      <StatBar stat={"Karma"} statValue={50}/>
      <StatBar stat={"Heat"} statValue={30}/>
      <StatBar stat={"Street Cred"} statValue={80}/>
      </div>
    )
  }
}
