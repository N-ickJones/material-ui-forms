//Todo Generate random UID if no id supplied
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";
export function AlertDialog(props) {
    function handleClose(submit) {
        props.onSubmit(submit);
    }
    ;
    return (React.createElement(Dialog, { open: true, onClose: function () { return handleClose(!props.backOnOutsideClick || false); }, "aria-labelledby": "alert-".concat(props.id, "-title"), "aria-describedby": "alert-".concat(props.id, "-description"), className: props.className, style: props.style },
        React.createElement(DialogTitle, { id: "alert-".concat(props.id, "-title") }, props.title || "Alert"),
        React.createElement(DialogContent, null,
            React.createElement(DialogContentText, { id: "alert-".concat(props.id, "-description") }, props.description || "Are you sure?")),
        React.createElement(DialogActions, null,
            React.createElement(Button, { onClick: function () { return handleClose(false); }, sx: { color: props.color ? props.color : "primary" } }, props.backLabel || "Cancel"),
            React.createElement(Button, { onClick: function () { return handleClose(true); }, sx: { color: props.color ? props.color : "primary" }, autoFocus: true }, (props === null || props === void 0 ? void 0 : props.forwardLabel) || "Continue"))));
}
