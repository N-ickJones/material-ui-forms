import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PropTypes } from '@material-ui/core';

/**
 * @OnSubmit Function called if alert is accepted. (required)
 * @id The unique id used for accessibility. default: none
 * @title The title display on the alert prompt. default: "Alert"
 * @description The description descibing the alert. default: "Are you sure?"
 * @color The color of the alert buttons. default: "primary"
 * @backLabel The back button label. default: "Cancel"
 * @forwardLabel The forward label. default: "Continue"
 * @backOnOutsideClick
 */
export interface IAlertDialogButtonProps {
  ref?: React.MutableRefObject<HTMLButtonElement>;

  onSubmit?: () => Promise<void>;
  id?: string;
  btnClass?: string;
  label?: any;
  title?: string;
  description?: string;
  color?: PropTypes.Color;
  backLabel?: string;
  forwardLabel?: string;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained" | undefined;
  className?: string;

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
        ref={props.ref}
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
