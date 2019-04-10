import React, { Component } from 'react';
import Header from "./Header.js"
import GamesList from '../components/GamesList.js'

//react-router
import { Link } from "react-router-dom";

//material-ui
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
  headerPaper: {
    padding: 0,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    },
});

class Games extends Component {

  createGamestate = (props) => {
    // if (e) {e.preventDefault()}
    let token = localStorage.getItem('token')
    if(token){
      fetch('http://localhost:3000/api/v1/gamestates',{
        method: 'POST',
        headers:{
          "Authentication": `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          gamestate: {
            company_name: 'test company',
            cash: 70000,
            luck: 50,
            karma: 50,
            heat: 0,
            streetcred: 0,
            xships: 1,
            ship_lvl: 1,
            xmercs: 0,
            user_id: this.props.user.id,
            savename: 'New Game',
            // company_name: this.state.company_name,
            // cash: this.state.cash,
            // luck: this.state.luck,
            // karma: this.state.karma,
            // heat: this.state.heat,
            // streetcred: this.state.heat,
            // xships: this.state.xships,
            // ship_lvl: this.state.ship_lvl,
            // xmercs: this.state.xmercs,
            // user_id: this.state.user_id,
            // savename: this.state.savename,
          }
        })
      })
      .then(r => r.json())
      .then(data => {
        this.props.handleUpdateGamestate(data.gamestate)
      })
    }
  }

  render() {

    const { classes } = this.props;

    return(
<div id="gamepage" >
      <div style={{ padding: 10 }} className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Paper className={classes.headerPaper}><Header handleUpdateUser={this.props.handleUpdateUser} user={this.props.user}/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <GamesList setCurrentGame={this.props.setCurrentGame} user={this.props.user}/>
            <Link to="/profile"><button onClick={() => this.createGamestate(this.props)}>New Game</button></Link>
          </Paper>

        </Grid>
      </Grid>
    </div>
    </div>
    )
  }

}

Games.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Games);
