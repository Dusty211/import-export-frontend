import React, { Component } from 'react';
import Header from './Header.js'
import ArtPane from './ArtPane.js'
import DialogPane from './DialogPane.js'
import FeedbackPane from './FeedbackPane.js'
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

  constructor() {
    super()
    this.state = {
      loopStage: 0,
      disabledButtons: true
    }
  }

  setLoopStage = (stage) => {
    this.setState({loopStage: stage})
    this.setState({disabledButtons: !this.state.disabledButtons})
  }

  currentGamestate = (id) => {
    return this.props.user.gamestates.find(state => state.id === id)
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
                <Header setCurrentGame={this.props.setCurrentGame} handleUpdateUser={this.props.handleUpdateUser} user={this.props.user}/>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <ArtPane />
                <Divider />
                {this.state.loopStage === 0 ? <DialogPane setLoopStage={this.setLoopStage} /> : <FeedbackPane setLoopStage={this.setLoopStage}/>}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <InfoPane currentGamestate={() => this.currentGamestate(this.props.currentGame)} />
                <Divider />
                <ActionPane disabledButtons={this.state.disabledButtons}/>
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
