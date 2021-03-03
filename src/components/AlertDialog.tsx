import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PropTypes } from '@material-ui/core';

//Todo Generate random UID if no id supplied

export interface IAlertDialogProps {
  onSubmit: (submit?: boolean) => void;
  id?: string;
  title?: string;
  description?: string;
  color?: PropTypes.Color;
  backLabel?: string;
  forwardLabel?: string;
  backOnOutsideClick?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function AlertDialog(props: IAlertDialogProps) {
  function handleClose(submit: boolean) {
    props.onSubmit(submit);
  };

  return (
    <Dialog
      open={true}
      onClose={() => handleClose(!props.backOnOutsideClick || false)}
      aria-labelledby={`alert-${props.id}-title`}
      aria-describedby={`alert-${props.id}-description`}
      className={props.className} 
      style={props.style}
    >
      <DialogTitle id={`alert-${props.id}-title`}>
        {props.title || "Alert"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={`alert-${props.id}-description`}>
          {props.description || "Are you sure?"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)} color={props.color ? props.color : "primary"}>
          {props.backLabel || "Cancel"}
        </Button>
        <Button onClick={() => handleClose(true)} color={props.color ? props.color : "primary"} autoFocus>
          {props?.forwardLabel || "Continue"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}