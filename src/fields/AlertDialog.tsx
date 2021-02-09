import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PropTypes } from '@material-ui/core';


export interface IAlertDialogProps {
  onSubmit: (submit?: boolean) => void;
  id?: string;
  className?: string;
  title?: string;
  description?: string;
  color?: PropTypes.Color;
  backLabel?: string;
  forwardLabel?: string;
  backOnOutsideClick?: boolean;
}

export function AlertDialog(props: IAlertDialogProps) {
  function handleClose(submit: boolean) {
    props.onSubmit(submit);
  };

  return (
    <div className={props.className}>
      <Dialog
        open={true}
        onClose={() => handleClose(!props.backOnOutsideClick || false)}
        aria-labelledby={`alert-${props.id}-title`}
        aria-describedby={`alert-${props.id}-description`}
      >
        <DialogTitle id={`alert-${props.id}-title`}>
          {props?.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id={`alert-${props.id}-description`}>
            {props?.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color={props.color ? props.color : "primary"}>
            {props?.backLabel}
          </Button>
          <Button onClick={() => handleClose(true)} color={props.color ? props.color : "primary"} autoFocus>
            {props?.forwardLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}