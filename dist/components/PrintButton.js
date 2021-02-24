"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintButton = void 0;
const react_1 = __importDefault(require("react"));
const AlertDialogButton_1 = require("./AlertDialogButton");
function PrintButton(props) {
    return (react_1.default.createElement(AlertDialogButton_1.AlertDialogButton, { id: props.id || "printForm", className: props.className || "m-1", label: "Print", title: "You have selected to print this document", description: "This feature was designed to be used in a Chrome Web Browser. Using a different browser might cause issues with printing.", color: "primary", backLabel: "Cancel", forwardLabel: "Print", onSubmit: props.displayPrint }));
}
exports.PrintButton = PrintButton;
//# sourceMappingURL=PrintButton.js.map