import React, {Component} from 'react';
import StatBar from '../components/StatBar.js'
import Cash from '../components/Cash.js'
import ItemCount from '../components/ItemCount.js'

export default class InfoPane extends Component {


  render() {

    return(

      <div>
        <Cash cash={this.props.currentGamestate().cash}/>
        <StatBar stat={"Luck"} statValue={this.props.currentGamestate().luck}/>
        <StatBar stat={"Karma"} statValue={this.props.currentGamestate().karma}/>
        <StatBar stat={"Heat"} statValue={this.props.currentGamestate().heat}/>
        <StatBar stat={"Street Cred"} statValue={this.props.currentGamestate().streetcred}/>
        <ItemCount item={"Ships"} itemValue={this.props.currentGamestate().xships}/>
        <ItemCount item={"Ship level"} itemValue={this.props.currentGamestate().ship_lvl}/>
        <ItemCount item={"Mercenaries"} itemValue={this.props.currentGamestate().xmercs}/>
      </div>
    )
  }
}
