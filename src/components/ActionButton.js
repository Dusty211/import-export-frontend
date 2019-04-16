import React from 'react';

//material-ui
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

//material-ui tooltip
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const ActionButton = (props) => {

  const { classes } = props;
  const tooltipText = props.tooltipText;

  const isDisabled = (disabledProp) => {
    if (disabledProp || props.actionCost > props.currentGamestate.cash) {
      return true
    }
  }

  return(
    <div id="action-button">
    <Tooltip title={tooltipText} placement="top">
      <Icon>info</Icon>
    </Tooltip>
      <Button
        onClick={props.clickCb}
        disabled={isDisabled(props.disabledButtons)}
        variant="contained" color="primary"
        className={classes.button}>
        {props.action}
        <Icon
          className={classes.rightIcon}
          >
        {props.actionIcon}
        </Icon>
      </Button>
      {`$${props.actionCost.toLocaleString()}`}
    </div>
  )
}

ActionButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionButton);
