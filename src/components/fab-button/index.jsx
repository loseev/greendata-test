import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  addButton: {
    marginRight: theme.spacing(1),
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const FabButton = ({ changeOpen }) => {
  const classes = useStyles();

  return (
    <Fab
      color="primary"
      aria-label="add"
      className={classes.addButton}
      zIndex="tooltip"
      onClick={() => changeOpen()}
    >
      <AddIcon />
    </Fab>
  );
};

export default FabButton;
