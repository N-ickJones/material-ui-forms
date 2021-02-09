import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PropTypes } from '@material-ui/core';


export interface IAlertDialogButtonProps {
  id?: string;
  className?: string;
  btnClass?: string;
  label?: any;
  title?: string;
  description?: string;
  color?: PropTypes.Color;
  backLabel?: string;
  forwardLabel?: string;
  onSubmit?: () => Promise<void>;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained" | undefined;
}

export function AlertDialogButton(props: IAlertDialogButtonProps) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  };

  function handleClose(submit?: boolean) {
    if (submit)
      props.onSubmit && props.onSubmit();
    setOpen(false);
  };

  return (
    <div className={props.className}>
      <Button
        className={props.btnClass} 
        variant={props.variant || "outlined"} 
        color={props.color ? props.color : "primary"} 
        onClick={() => handleOpen()}
        disabled={props.disabled}
      >
        {props?.label}
      </Button>
      <Dialog
        open={open}
        onClose={() => handleClose()}
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
          <Button onClick={() => handleClose()} color={props.color ? props.color : "primary"}>
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
