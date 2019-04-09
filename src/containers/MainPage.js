import React, { Component } from 'react';
import Header from './Header.js'
import ArtPane from './ArtPane.js'
import DialogPane from './DialogPane.js'
import InfoPane from './InfoPane.js'
import ActionPane from './ActionPane.js'

//material-ui:
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

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

class MainPage extends Component {

  componentDidMount() {
    console.log('Props:', this.props)
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
      <div id="mainpage">
        <CssBaseline />
        <div style={{ padding: 10 }} className={classes.root}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Paper className={classes.headerPaper}>
                <Header />
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <ArtPane />
                <Divider />
                <DialogPane />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <InfoPane />
                <Divider />
                <ActionPane />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
