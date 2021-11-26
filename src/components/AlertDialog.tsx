import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PropTypes } from '@mui/material';

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
        <Button onClick={() => handleClose(false)} sx={{ color: props.color ? props.color : "primary" }}>
          {props.backLabel || "Cancel"}
        </Button>
        <Button onClick={() => handleClose(true)} sx={{ color: props.color ? props.color : "primary" }} autoFocus>
          {props?.forwardLabel || "Continue"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}