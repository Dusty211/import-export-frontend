import React from 'react';

//material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
});

const JobOptions = (props) => {

  const { classes } = props;
  // debugger;

  return(
    <List component="nav" className={classes.root}>
    {props.jobOptions.map((option, index) => {
      return (
        /*<ListItem key={option.id} button divider onClick={() => props.setLoopStage(1)} >*/
        <ListItem key={option.id} button divider onClick={() => props.handleOptionSelection(index, props.currentGamestate())} >
          <ListItemText secondary={option.option_text} />
        </ListItem>
      )
    })}
    </List>
  )
}

JobOptions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobOptions);
