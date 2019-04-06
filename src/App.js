import React, { Component } from 'react';
import Header from './containers/Header.js'
import ArtPane from './containers/ArtPane.js'
import DialogPane from './containers/DialogPane.js'
import InfoPane from './containers/InfoPane.js'
import ActionPane from './containers/ActionPane.js'

//material-ui:
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
root: {
  flexGrow: 1,
},
paper: {
  padding: theme.spacing.unit * 2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  },
});

class App extends Component {

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div style={{ padding: 10 }} className={classes.root}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>< Header /></Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}>< ArtPane />< DialogPane /></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>< InfoPane />< ActionPane /></Paper>
            </Grid>
          </Grid>
        </div>
      </ React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
