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
exports.RadioField = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
function RadioField(props) {
    const [value, setValue] = react_1.useState(props.value || (props.options && props.options[0].value));
    const onChange = (e, value) => {
        if (!props.locked) {
            props.onChange(e, e.target.name, value);
            setValue(value);
        }
    };
    return (react_1.default.createElement(core_1.FormControl, { component: "fieldset", variant: props.variant || "outlined", fullWidth: true },
        react_1.default.createElement(core_1.FormLabel, { component: "legend" }, props.label),
        react_1.default.createElement(core_1.RadioGroup, { "aria-label": props.name, name: props.name, value: value, onChange: onChange, row: props.row }, props.options && props.options.map((item, id) => {
            return (react_1.default.createElement(core_1.FormControlLabel, { key: `${item.value}_${id}`, value: item.value, control: react_1.default.createElement(core_1.Radio, null), label: item.label }));
        }))));
}
exports.RadioField = RadioField;
//# sourceMappingURL=RadioField.js.map