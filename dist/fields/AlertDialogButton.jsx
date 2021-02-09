import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
export function AlertDialogButton(props) {
    const [open, setOpen] = useState(false);
    function handleOpen() {
        setOpen(true);
    }
    ;
    function handleClose(submit) {
        if (submit)
            props.onSubmit && props.onSubmit();
        setOpen(false);
    }
    ;
    return (<div className={props.className}>
      <Button className={props.btnClass} variant={props.variant || "outlined"} color={props.color ? props.color : "primary"} onClick={() => handleOpen()} disabled={props.disabled}>
        {props === null || props === void 0 ? void 0 : props.label}
      </Button>
      <Dialog open={open} onClose={() => handleClose()} aria-labelledby={`alert-${props.id}-title`} aria-describedby={`alert-${props.id}-description`}>
        <DialogTitle id={`alert-${props.id}-title`}>
          {props === null || props === void 0 ? void 0 : props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id={`alert-${props.id}-description`}>
            {props === null || props === void 0 ? void 0 : props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} color={props.color ? props.color : "primary"}>
            {props === null || props === void 0 ? void 0 : props.backLabel}
          </Button>
          <Button onClick={() => handleClose(true)} color={props.color ? props.color : "primary"} autoFocus>
            {props === null || props === void 0 ? void 0 : props.forwardLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>);
}
