import React from 'react';

//material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';


import { Link } from "react-router-dom";


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,

  },
};

const logoutUser = (props) => {
  props.handleUpdateUser({})
  localStorage.removeItem('token')
}

const createGamestate = (props) => {
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
          user_id: props.user.id,
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
      // console.log("GET to profile success. Storing user state.")
      // console.log("props", props)
      // console.log("data:", data)
      props.handleUpdateGamestate(data.gamestate)
    })
  }
}

const NavBar = (props) => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          {/*Navbar text removed*/}
          {`Welcome, ${props.user.username}!`}
          </Typography>
          <Link to="/games"><Button color="inherit" >Games</Button></Link>
          <Button color="inherit" onClick={() => createGamestate(props)} >Create Gamestate</Button>
          <Button color="inherit" onClick={() => logoutUser(props)} >Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(NavBar);
