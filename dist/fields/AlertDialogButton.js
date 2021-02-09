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
    return (React.createElement("div", { className: props.className },
        React.createElement(Button, { className: props.btnClass, variant: props.variant || "outlined", color: props.color ? props.color : "primary", onClick: () => handleOpen(), disabled: props.disabled }, props === null || props === void 0 ? void 0 : props.label),
        React.createElement(Dialog, { open: open, onClose: () => handleClose(), "aria-labelledby": `alert-${props.id}-title`, "aria-describedby": `alert-${props.id}-description` },
            React.createElement(DialogTitle, { id: `alert-${props.id}-title` }, props === null || props === void 0 ? void 0 : props.title),
            React.createElement(DialogContent, null,
                React.createElement(DialogContentText, { id: `alert-${props.id}-description` }, props === null || props === void 0 ? void 0 : props.description)),
            React.createElement(DialogActions, null,
                React.createElement(Button, { onClick: () => handleClose(), color: props.color ? props.color : "primary" }, props === null || props === void 0 ? void 0 : props.backLabel),
                React.createElement(Button, { onClick: () => handleClose(true), color: props.color ? props.color : "primary", autoFocus: true }, props === null || props === void 0 ? void 0 : props.forwardLabel)))));
}
