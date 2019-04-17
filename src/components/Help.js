import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

    const DialogTitle = withStyles(theme => ({
      root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
      },
      closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
      },
    }))(props => {
      const { children, classes, onClose } = props;
      return (
        <MuiDialogTitle disableTypography className={classes.root}>
          <Typography variant="h6">{children}</Typography>
          {onClose ? (
            <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
      );
    });

    const DialogContent = withStyles(theme => ({
      root: {
        margin: 0,
        padding: theme.spacing.unit * 2,
      },
    }))(MuiDialogContent);

    const DialogActions = withStyles(theme => ({
      root: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit,
      },
    }))(MuiDialogActions);

class Help extends React.Component {
  state = {
    open: false,
    first: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
      first: false,
     });
  };

  componentDidMount() {
    if(this.props.firstGame === true) {
      this.setState({ first: true });
      this.handleClickOpen();
    }
  }

  render() {

    return (
      <div>
        <Icon onClick={this.handleClickOpen} >help</Icon>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {this.state.first ?
              <React.Fragment>
                <p>
                  Hello! Welcome to Import/Export!
                </p>
                <p>
                  This quickguide can always be opened at a later time
                  by clicking the question mark in the top corner of the pane to the right.
                </p>
              </React.Fragment>
               : 'Quickguide:'
             }
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
            Do you want to be on the up and up, or do you want to be on a one-way train to Shadytown? In Import/Export,
            the choice is yours.
            </Typography>
            <Typography gutterBottom>
              Each decision you make will shape your character differently. Everything you do has both benefits and consequences.
            </Typography>
            <Typography gutterBottom>
            Shady people work better with shady people. The same goes for the less criminally inclined.
            </Typography>
            <br />

            <Typography gutterBottom>
            Luck:  Luck has influence on the chance that ships are effected by things like pirates, weather, mechanical and navigational problems. Luck is dependent on the amount of money you spend on Mercenaries.
            </Typography>
            <br />


            <Typography gutterBottom>
            Karma:  Karma is affected by your decisions in the game. If your karma is low, you are more likely to have positive outcomes when haggling with shady people. Non-shady people are better influenced by people with high karma.
            </Typography>
            <br />


            <Typography gutterBottom>
            Heat:  The criminality of your decisions has either a positive, negative, or neutral affect on your heat. You can decrease heat by using the Send Bribes action. Having a high heat makes your shipments more likely to be seized.
            </Typography>
            <br />


            <Typography gutterBottom>
            Streetcred:  Street Cred will go up if you complete illegal jobs, and down if you complete legal jobs. Having low Street Cred will make you more likely to encounter a shakedown. All customers require a certain range of streetcred.
            </Typography>
            <br />


            <Typography gutterBottom>
            Ships:  Your shipment value is multiplied by your number of ships.
            </Typography>
            <br />


            <Typography gutterBottom>
            Ship lvl:  Upgraded ships are less likely to have shipments seized by law enforcement.
            </Typography>
            <br />


            <Typography gutterBottom>
            Mercenaries:  Mercenaries increase your luck stat and also decrease the chance of a shakedown.
            </Typography>
            <br />


            <Typography gutterBottom>
            Bribes:  Bribes will decrease your heat level, but will make you appear suspect in the eyes of law abiding customers.
            </Typography>
            <br />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Help;
