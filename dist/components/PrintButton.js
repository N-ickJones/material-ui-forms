"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintButton = void 0;
var react_1 = __importDefault(require("react"));
var AlertDialogButton_1 = require("./AlertDialogButton");
function PrintButton(props) {
    return (react_1.default.createElement(AlertDialogButton_1.AlertDialogButton, { id: props.id || "printForm", className: props.className, style: props.style, label: "Print", title: "You have selected to print this document", description: "This feature was designed to be used in a Chrome Web Browser. Select A4 paper type for the best results.", color: "primary", backLabel: "Cancel", forwardLabel: "Print", onSubmit: props.displayPrint }));
}
exports.PrintButton = PrintButton;
//# sourceMappingURL=PrintButton.js.map