import React, { Component } from 'react';
import Header from "./Header.js"
import GamesList from '../components/GamesList.js'

//material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//material-ui create game dialog
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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


  constructor(){
    super();
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    if (this.props.user.gamestates.length === 0) {
      this.props.setFirstGame(true)
    }else{
      this.props.setFirstGame(false)
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleCreateClick = (e) => {
    e.preventDefault()
    this.createGamestate(this.props, this.state.company, this.state.save)
  }

  handleDeleteClick = (e, id) => {
    this.deleteCurrentGame(id)
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  createGamestate = (props, company='Import/Export Inc.', save='default save') => {
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
            company_name: company,
            cash: 70000,
            luck: 50,
            karma: 50,
            heat: 0,
            streetcred: 20,
            xships: 1,
            ship_lvl: 1,
            xmercs: 0,
            user_id: this.props.user.id,
            savename: save,
          }
        })
      })
      .then(r => r.json())
      .then(data => {
        this.props.setCurrentGame(data.gamestate.id)
        this.props.handleUpdateGamestate(data.gamestate)
        this.props.history.push('/profile')
      })
    }
  }

  deleteCurrentGame = (id) => {
    let token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3000/api/v1/gamestates/${id}`,{
        method: 'DELETE',
        headers:{
          "Authentication": `Bearer ${token}`,
        },
      })
      .then(r => r.json())
      .then(data => {
        // if (data)
        if (data.destroyed) {
          this.props.handleDeleteGamestate(id);
        }else{
          alert('The gamesave was not deleted.')
        }
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
          <Paper className={classes.headerPaper}>
            <Header
              setCurrentGame={this.props.setCurrentGame}
              handleUpdateUser={this.props.handleUpdateUser}
              user={this.props.user}/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <GamesList
              setCurrentGame={this.props.setCurrentGame}
              deleteCurrentGame={this.handleDeleteClick}
              user={this.props.user}/>
            <div>
              <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                New Game
              </Button>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Create a New Game</DialogTitle>
                <form onSubmit={this.handleCreateClick}>
                <DialogContent>
                  <DialogContentText>
                    Supply information and submit to create a new game.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="company"
                    label="Company Name"
                    onChange={this.handleChange('company')}
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="save"
                    label="Save Name"
                    onChange={this.handleChange('save')}
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Create
                  </Button>
                </DialogActions>
                </form>
              </Dialog>
            </div>
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
