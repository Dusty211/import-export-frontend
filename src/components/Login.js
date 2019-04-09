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
    width: 200,
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
      something: null
    }
  }

  handleChange = name => event => {
  this.setState({ [name]: event.target.value });
  console.log(this.state)
};

  componentDidMount() {
    console.log('Props:', this.props)
  }

  handleSubmit = () => {
    console.log(this.state)
  }

  render() {

    const { classes } = this.props;

    return(
      <div id="login-panel">
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            Login
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
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
              margin="normal"
            />

          </form>
          <div>
          <Button onClick={this.handleSubmit} variant="contained" color="primary" className={classes.button}>
            Submit
          </Button>
          </div>
        </Paper>
      </div>
    )
  }

}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
