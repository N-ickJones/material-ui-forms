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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckField = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
function CheckField(props) {
    const [value, setValue] = react_1.useState(props.value || false);
    function onChange(e, checked) {
        if (!props.locked) {
            props.onChange(e, e.target.name, checked);
            setValue(checked);
        }
    }
    return (react_1.default.createElement(core_1.FormControlLabel, { label: props.label, className: props.labelClassName, style: props.labelStyle, control: react_1.default.createElement(core_1.Checkbox, { className: props.className, style: props.style, name: props.name, checked: value, onChange: onChange, value: props.value }) }));
}
exports.CheckField = CheckField;
//# sourceMappingURL=CheckField.js.map