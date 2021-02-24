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
exports.CustomTextField = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const useUpdateEffect_1 = require("../hooks/useUpdateEffect");
function CustomTextField(props) {
    const [value, setValue] = react_1.useState(props.value);
    const [error, setError] = react_1.useState("");
    useUpdateEffect_1.useUpdateEffect(() => {
        validate();
    }, [value]);
    function handleShrink() {
        if (props.shrink || props.type === "date") {
            return { shrink: true };
        }
        else {
            return {};
        }
    }
    function validate() {
        const error = runValidation();
        if (error)
            setError(error);
        else if (error !== "")
            setError("");
    }
    function runValidation() {
        if (!props.validators)
            return null;
        for (let i = 0; i < props.validators.length; i++) {
            if (!props.validators[i].pattern.test(value || ''))
                return props.validators[i].message;
        }
        return null;
    }
    function onChange(e) {
        if (!props.locked) {
            props.onChange(e, e.target.name, e.target.value);
            setValue(e.target.value);
        }
    }
    return (react_1.default.createElement(core_1.TextField, { name: props.name, placeholder: props.placeholder || '', variant: props.variant || "outlined", label: props.label, fullWidth: true, value: value || '', onChange: onChange, helperText: error, error: !!error, type: props.type && props.type, autoComplete: props.autoComplete && props.autoComplete, autoFocus: props.autoFocus && props.autoFocus, multiline: props.multiline || false, InputLabelProps: handleShrink(), required: props.required, select: props.select || false },
        props.options && props.options.map((item, id) => {
            return react_1.default.createElement(core_1.MenuItem, { key: `${item.value}_${id}`, value: item.value }, item.label);
        }),
        props.options && !props.disableSelectNone && react_1.default.createElement(core_1.MenuItem, { value: '' }, 'None')));
}
exports.CustomTextField = CustomTextField;
//# sourceMappingURL=CustomTextField.js.map