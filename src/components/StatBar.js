import React from 'react';

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

//material-ui tooltip
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';


const styles = {
  root: {
    flexGrow: 1
  }
};

const StatBar = (props) => {

  const { classes } = props;
  const tooltipText = props.tooltipText;

  return (
    <div id="stat-bar" className={classes.root}>
        <Tooltip title={tooltipText} placement="top">
          <Icon>info</Icon>
        </Tooltip>
      {` ${props.stat}: ${props.statValue}%`}
      <LinearProgress
        color="primary"
        variant="determinate"
        value={props.statValue}
      />
    </div>
  )
}

StatBar.propTypes = {
classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StatBar);
