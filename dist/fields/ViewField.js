"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewField = void 0;
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
function ViewField(props) {
    return (react_1.default.createElement(material_1.Grid, { item: true, xs: props.xs || 12, ref: props.printRef, className: props.outerClassName, style: props.outerStyle },
        react_1.default.createElement(material_1.TextField, { className: props.className, style: props.style, fullWidth: true, label: props.label, value: props.value, variant: props.variant, InputLabelProps: { shrink: true }, multiline: true })));
}
exports.ViewField = ViewField;
//# sourceMappingURL=ViewField.js.map