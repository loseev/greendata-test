import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogContent,
  Slide,
} from '@material-ui/core';
import clsx from 'clsx';
import style from './style';

const useStyles = makeStyles(style);

const Transition = React.forwardRef((props, ref) => <Slide direction="left" ref={ref} {...props} />);

function Modal({ children, openMode, close }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.modal)}>
      <Dialog
        open={openMode}
        TransitionComponent={Transition}
        onClose={close}
        aria-labelledby="form-dialog-title"
        fullWidth="50%"
      >
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Modal;
