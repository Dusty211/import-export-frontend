import React from 'react';

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  root: {
    flexGrow: 1
  }
};

const StatBar = (props) => {

  const { classes } = props;

  return (
    <div id="stat-bar" className={classes.root}>
      {`${props.stat}: ${props.statValue}%`}
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
