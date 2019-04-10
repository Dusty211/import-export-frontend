import React, {Component} from 'react';
import NavBar from '../components/NavBar.js';

export default class Header extends Component {


  render() {
    return(
      <div>
      <NavBar  handleUpdateGamestate={this.props.handleUpdateGamestate} handleUpdateUser={this.props.handleUpdateUser} user={this.props.user}/>
      </div>
    )
  }
}
