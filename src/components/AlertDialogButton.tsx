import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, PropTypes } from '@material-ui/core';

export interface IAlertDialogButtonProps {
  submitButtonRef?: React.MutableRefObject<HTMLButtonElement>;

  onSubmit?: () => Promise<void>;
  id?: string;
  label?: any;
  title?: string;
  description?: string;
  color?: PropTypes.Color;
  backLabel?: string;
  forwardLabel?: string;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained" | undefined;
  allowSkip?: boolean
  pendingChanges?: boolean;
  className?: string;
  style?: React.CSSProperties;
  btnClass?: string;
  btnStyle?: React.CSSProperties;
}

export function AlertDialogButton(props: IAlertDialogButtonProps) {
  const [open, setOpen] = useState(false);

  async function handleClick() {
    if (!props.pendingChanges && props.allowSkip) {
      await handleSubmit();
    }
    else {
      setOpen(true);
    }
  };

  async function handleClose (submit?: boolean) {
    submit && await handleSubmit();
    setOpen(false);
  };

  async function handleSubmit() {
    props.onSubmit && await props.onSubmit();
  }

  return (
    <Grid className={props.className} style={props.style}>
      <Button
        ref={props.submitButtonRef}
        className={props.btnClass}
        style={props.btnStyle}
        variant={props.variant || "outlined"} 
        color={props.color ? props.color : "primary"} 
        onClick={() => handleClick()}
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
    </Grid>
  );
}