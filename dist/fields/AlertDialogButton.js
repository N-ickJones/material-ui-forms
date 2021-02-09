"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertDialogButton = void 0;
const react_1 = __importStar(require("react"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
const DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
const DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
const DialogContentText_1 = __importDefault(require("@material-ui/core/DialogContentText"));
const DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
function AlertDialogButton(props) {
    const [open, setOpen] = react_1.useState(false);
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
    return (react_1.default.createElement("div", { className: props.className },
        react_1.default.createElement(Button_1.default, { className: props.btnClass, variant: props.variant || "outlined", color: props.color ? props.color : "primary", onClick: () => handleOpen(), disabled: props.disabled }, props === null || props === void 0 ? void 0 : props.label),
        react_1.default.createElement(Dialog_1.default, { open: open, onClose: () => handleClose(), "aria-labelledby": `alert-${props.id}-title`, "aria-describedby": `alert-${props.id}-description` },
            react_1.default.createElement(DialogTitle_1.default, { id: `alert-${props.id}-title` }, props === null || props === void 0 ? void 0 : props.title),
            react_1.default.createElement(DialogContent_1.default, null,
                react_1.default.createElement(DialogContentText_1.default, { id: `alert-${props.id}-description` }, props === null || props === void 0 ? void 0 : props.description)),
            react_1.default.createElement(DialogActions_1.default, null,
                react_1.default.createElement(Button_1.default, { onClick: () => handleClose(), color: props.color ? props.color : "primary" }, props === null || props === void 0 ? void 0 : props.backLabel),
                react_1.default.createElement(Button_1.default, { onClick: () => handleClose(true), color: props.color ? props.color : "primary", autoFocus: true }, props === null || props === void 0 ? void 0 : props.forwardLabel)))));
}
exports.AlertDialogButton = AlertDialogButton;
//# sourceMappingURL=AlertDialogButton.js.map