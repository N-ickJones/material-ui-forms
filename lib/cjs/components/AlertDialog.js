"use strict";
//Todo Generate random UID if no id supplied
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertDialog = void 0;
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
function AlertDialog(props) {
    function handleClose(submit) {
        props.onSubmit(submit);
    }
    ;
    return (react_1.default.createElement(material_1.Dialog, { open: true, onClose: function () { return handleClose(!props.backOnOutsideClick || false); }, "aria-labelledby": "alert-".concat(props.id, "-title"), "aria-describedby": "alert-".concat(props.id, "-description"), className: props.className, style: props.style },
        react_1.default.createElement(material_1.DialogTitle, { id: "alert-".concat(props.id, "-title") }, props.title || "Alert"),
        react_1.default.createElement(material_1.DialogContent, null,
            react_1.default.createElement(material_1.DialogContentText, { id: "alert-".concat(props.id, "-description") }, props.description || "Are you sure?")),
        react_1.default.createElement(material_1.DialogActions, null,
            react_1.default.createElement(material_1.Button, { onClick: function () { return handleClose(false); }, sx: { color: props.color ? props.color : "primary" } }, props.backLabel || "Cancel"),
            react_1.default.createElement(material_1.Button, { onClick: function () { return handleClose(true); }, sx: { color: props.color ? props.color : "primary" }, autoFocus: true }, (props === null || props === void 0 ? void 0 : props.forwardLabel) || "Continue"))));
}
exports.AlertDialog = AlertDialog;
