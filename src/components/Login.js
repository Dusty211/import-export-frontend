import React, {Component} from 'react';

//material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

//material paper
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

//material text fields
import TextField from '@material-ui/core/TextField';

//buttons
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    //paper
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  //text fields
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  //button
  button: {
  margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Login extends Component {

  constructor() {
    super()
    this.state = {
    }
  }

  handleChange = name => event => {
  this.setState({ [name]: event.target.value });

};

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers:{"Content-Type":"application/json", "Accept": "application/json"},
      body:JSON.stringify({
        user:{
          username: this.state.username,
          password:this.state.password}
        })
      }).then(r => r.json())
      .then(data => {
        if (data.authenticated){
          this.props.handleUpdateUser(data.user)
          localStorage.setItem('token', data.jwt)
        }else{
          alert("Invalid Credentials")
        }
      }).catch(error=> console.log("Failed to Fetch:", error))
  }

  handleCreate = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: this.state.createUsername,
          password: this.state.createPassword,
        }
      })
    })
  .then(r => r.json())
  .then(data => {
    this.props.handleUpdateUser(data.user)
    localStorage.setItem('token', data.jwt)
  }).catch(error=> console.log("Failed to Post:", error))
  }

  render() {

    const { classes } = this.props;

    return(
      <div id="login-panel">
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            Login
          </Typography>
          <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>

              <TextField
                id="standard-name"
                label="Username"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('username')}
                margin="normal"
              />
              <TextField
                id="standard-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                onChange={this.handleChange('password')}
                margin="normal"
              />

              <Button type="submit" variant="contained" color="primary" className={classes.button}>
                Submit
              </Button>

          </form>
          <br/>
          <br/>
          <br/>
          <Typography variant="h5" component="h3">
            Create New Account
          </Typography>
          <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleCreate}>

              <TextField
                id="standard-name"
                label="New Username"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('createUsername')}
                margin="normal"
              />
              <TextField
                id="standard-password-input"
                label="New Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                onChange={this.handleChange('createPassword')}
                margin="normal"
              />

              <Button type="submit" variant="contained" color="primary" className={classes.button}>
                Create
              </Button>

          </form>
        </Paper>

      </div>
    )
  }

}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
