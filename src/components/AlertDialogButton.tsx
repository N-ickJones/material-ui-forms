import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, PropTypes } from '@mui/material';

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
    submit && (await handleSubmit());
    setOpen(false);
  };

  async function handleSubmit() {
    props.onSubmit && (await props.onSubmit());
  }

  return (
    <Grid className={props.className} style={props.style}>
      <Button
        ref={props.submitButtonRef}
        className={props.btnClass}
        style={props.btnStyle}
        variant={props.variant || "outlined"} 
        sx={{ color: props.color ? props.color : "primary" }}
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
          <Button onClick={() => handleClose()} sx={{ color: props.color ? props.color : "primary" }}>
            {props?.backLabel}
          </Button>
          <Button onClick={() => handleClose(true)} sx={{ color: props.color ? props.color : "primary" }} autoFocus>
            {props?.forwardLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}