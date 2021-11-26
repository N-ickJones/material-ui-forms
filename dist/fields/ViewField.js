"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewField = void 0;
const react_1 = __importDefault(require("react"));
const Grid_1 = __importDefault(require("@mui/material/Grid/Grid"));
const TextField_1 = __importDefault(require("@mui/material/TextField/TextField"));
function ViewField(props) {
    return (react_1.default.createElement(Grid_1.default, { item: true, xs: props.xs || 12, ref: props.printRef, className: props.outerClassName, style: props.outerStyle },
        react_1.default.createElement(TextField_1.default, { className: props.className, style: props.style, fullWidth: true, label: props.label, value: props.value, variant: props.variant, InputLabelProps: { shrink: true }, multiline: true })));
}
exports.ViewField = ViewField;
//# sourceMappingURL=ViewField.js.map