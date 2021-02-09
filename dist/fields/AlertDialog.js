import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
export function AlertDialog(props) {
    function handleClose(submit) {
        props.onSubmit(submit);
    }
    ;
    return (React.createElement("div", { className: props.className },
        React.createElement(Dialog, { open: true, onClose: () => handleClose(!props.backOnOutsideClick || false), "aria-labelledby": `alert-${props.id}-title`, "aria-describedby": `alert-${props.id}-description` },
            React.createElement(DialogTitle, { id: `alert-${props.id}-title` }, props === null || props === void 0 ? void 0 : props.title),
            React.createElement(DialogContent, null,
                React.createElement(DialogContentText, { id: `alert-${props.id}-description` }, props === null || props === void 0 ? void 0 : props.description)),
            React.createElement(DialogActions, null,
                React.createElement(Button, { onClick: () => handleClose(false), color: props.color ? props.color : "primary" }, props === null || props === void 0 ? void 0 : props.backLabel),
                React.createElement(Button, { onClick: () => handleClose(true), color: props.color ? props.color : "primary", autoFocus: true }, props === null || props === void 0 ? void 0 : props.forwardLabel)))));
}
