"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertDialog = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Dialog_1 = __importDefault(require("@mui/material/Dialog"));
const DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
const DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
const DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
const DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
function AlertDialog(props) {
    function handleClose(submit) {
        props.onSubmit(submit);
    }
    ;
    return (react_1.default.createElement(Dialog_1.default, { open: true, onClose: () => handleClose(!props.backOnOutsideClick || false), "aria-labelledby": `alert-${props.id}-title`, "aria-describedby": `alert-${props.id}-description`, className: props.className, style: props.style },
        react_1.default.createElement(DialogTitle_1.default, { id: `alert-${props.id}-title` }, props.title || "Alert"),
        react_1.default.createElement(DialogContent_1.default, null,
            react_1.default.createElement(DialogContentText_1.default, { id: `alert-${props.id}-description` }, props.description || "Are you sure?")),
        react_1.default.createElement(DialogActions_1.default, null,
            react_1.default.createElement(Button_1.default, { onClick: () => handleClose(false), sx: { color: props.color ? props.color : "primary" } }, props.backLabel || "Cancel"),
            react_1.default.createElement(Button_1.default, { onClick: () => handleClose(true), sx: { color: props.color ? props.color : "primary" }, autoFocus: true }, (props === null || props === void 0 ? void 0 : props.forwardLabel) || "Continue"))));
}
exports.AlertDialog = AlertDialog;
//# sourceMappingURL=AlertDialog.js.map