import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PropTypes } from '@material-ui/core';

//Todo Generate random UID if no id supplied

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
}

/**
 * Creates an Alert dialog prompt with back/foward options
 * @props IAlertDialogProps
 */
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
    </div>
  );
}