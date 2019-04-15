import React from 'react';

//material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
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
  props.setCurrentGame(0)
  localStorage.removeItem('token')
}



const NavBar = (props) => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" color="inherit" className={classes.grow}>
          {/*Navbar text removed*/}
          {`Welcome, ${props.user.username}!`}
          </Typography>
          <Link style={{textDecoration: 'none', color: 'white'}} to="/games"><Button color="inherit" >Games</Button></Link>
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
