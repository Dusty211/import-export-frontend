import React from 'react';

//material-ui
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

const ActionButton = (props) => {

  const { classes } = props;

  return(
    <div id="action-button">
      <Button variant="contained" color="primary" className={classes.button}>
        {props.action}
        <Icon className={classes.rightIcon}>{props.actionIcon}</Icon>
      </Button>
      {`$${props.actionCost.toLocaleString()}`}
    </div>
  )
}

ActionButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionButton);
