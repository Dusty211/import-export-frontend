import React, { Component } from 'react';
import Header from './containers/Header.js'
import ArtPane from './containers/ArtPane.js'
import DialogPane from './containers/DialogPane.js'
import InfoPane from './containers/InfoPane.js'
import ActionPane from './containers/ActionPane.js'
import GamePage from './containers/ActionPane.js'

//material-ui:
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

//react router
import { BrowserRouter, Route, Link } from "react-router-dom";


const styles = theme => ({
root: {
  flexGrow: 1,
},
paper: {
  padding: theme.spacing.unit * 2,
  textAlign: 'left',
  color: theme.palette.text.secondary,
  },
  headerPaper: {
    padding: 0,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    },
});

class App extends Component {

  componentDidMount() {
  //
  //   //login:
  //
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers:{"Content-Type":"application/json", "Accept": "application/json"},
      body:JSON.stringify({
        user:{
          username:"Just One Guy",
          password:"password"}
        })
      }).then(r => r.json())
      .then(console.log)

  //   //create new user:
  //
  //   fetch('http://localhost:3000/api/v1/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         username: 'Just One Guy',
  //         password: 'password',
  //       }
  //     })
  //   })
  // .then(r => r.json())
  // .then(console.log)
  }

  render() {

    const { classes } = this.props;

    return (
<GamePage/>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
