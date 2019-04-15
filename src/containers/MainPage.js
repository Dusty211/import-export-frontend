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

  nextJob = (gameData, currentGamestate) => {
    let npc;
    npc = gameData[Math.floor(Math.random() * gameData.length)]
    while (npc.min_streetcred > currentGamestate.streetcred || npc.max_streetcred < currentGamestate.streetcred) {
      npc = gameData[Math.floor(Math.random() * gameData.length)]
    }
    let job = npc.jobs[Math.floor(Math.random() * npc.jobs.length)]
    let returnJob = {
      npc: {
        id: npc.id,
        max_streetcred: npc.max_streetcred,
        min_streetcred: npc.min_streetcred,
        name: npc.name,
        npc_karma: npc.npc_karma
      },
      job: {
        id: job.id,
        cargo: job.cargo,
        cargo_value: job.cargo_value,
        streetcred_mod: job.streetcred_mod,
        job_text: job.job_text,
        job_options: [...job.job_options]
      }
    }
    return returnJob
  }

  patchGamestate = (dataArgs) => {
    let token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3000/api/v1/gamestates/${this.props.currentGame}`,{
        method: 'PATCH',
        headers:{
          "Authentication": `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          gamestate: {
            cash: dataArgs.cash,
            luck: dataArgs.luck,
            karma: dataArgs.karma,
            heat: dataArgs.heat,
            streetcred: dataArgs.streetcred,
            xships: dataArgs.xships,
            ship_lvl: dataArgs.ship_lvl,
            xmercs: dataArgs.xmercs,
          }
        })
      })
      .then(r => r.json())
      .then(data => {
        this.props.handleUpdateGamestate(data.gamestate)
        this.setLoopStage(1)
        // this.props.history.push('/profile')
      })
    }
  }


  render() {
// debugger;

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
                <DialogPane patchGamestate={this.patchGamestate} nextJob={this.state.loopStage === 0 ? this.nextJob(this.props.gameData, this.currentGamestate(this.props.currentGame)) : null} loopStage={this.state.loopStage} currentGamestate={() => this.currentGamestate(this.props.currentGame)} setLoopStage={this.setLoopStage} />
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
