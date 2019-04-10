import React from 'react';

//material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//react-router
import { Link } from "react-router-dom";

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 275,
    display: 'inline-block',
    background: 'lightgray'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const GameSave = (props) => {

  const { classes } = props;

  return(
    <React.Fragment>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {`${props.gamestate.savename}`}
        </Typography>
        <Typography variant="h5" component="h2">
{`${props.gamestate.company_name}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`Created: ${props.gamestate.created_at} -- Last Played: ${props.gamestate.updated_at}`}
        </Typography>
        <Typography component="p">
          {`Cash: ${props.gamestate.cash}`}<br />
          {`Ships: ${props.gamestate.xships}`}<br />
          {`Ship lvl: ${props.gamestate.ship_lvl}`}<br />
          {`Mercs: ${props.gamestate.xmercs}`}<br />

        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/profile">
        <Button onClick={() => props.setCurrentGame(props.gamestate.id)} size="small">Load Game</Button>
        </Link>
      </CardActions>
    </Card>

    </ React.Fragment>
  )

}

GameSave.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameSave);
