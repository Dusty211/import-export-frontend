import React, {Component} from 'react';
import NavBar from '../components/NavBar.js';

export default class Header extends Component {


  render() {
    console.log('header', this.props.companyName)
    return(
      <div>
      <NavBar
          setCurrentGame={this.props.setCurrentGame}
          handleUpdateUser={this.props.handleUpdateUser}
          user={this.props.user}
          companyName={this.props.companyName} />
      </div>
    )
  }
}
