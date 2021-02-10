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
exports.AutoFreeField = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const lab_1 = require("@material-ui/lab");
const useUpdateEffect_1 = require("../hooks/useUpdateEffect");
function AutoFreeField(props) {
    const [value, setValue] = react_1.useState(props.value);
    const [error, setError] = react_1.useState("");
    useUpdateEffect_1.useUpdateEffect(() => {
        validate();
    }, [value]);
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
    //Without Initial Load Check the value will be set to blank;
    const [initialLoad, setInitLoad] = react_1.useState(false);
    function onInputChange(event, inputValue, reason) {
        console.log(reason);
        if (props.locked)
            return;
        switch (reason) {
            case "input":
                props.onChange(event, props.name, inputValue);
                setValue(inputValue);
                break;
            case "reset":
                if (initialLoad) {
                    props.onChange(event, props.name, inputValue);
                    setValue(inputValue);
                }
                else {
                    setInitLoad(true);
                }
                break;
            case "clear":
                props.onChange(event, props.name, "");
                setValue(inputValue);
                break;
        }
    }
    return (react_1.default.createElement(lab_1.Autocomplete, { fullWidth: true, placeholder: props.placeholder, options: props.options ? props.options : [], getOptionLabel: (option) => option.label, freeSolo: true, onInputChange: onInputChange, inputValue: value || "", getOptionDisabled: () => props.locked || false, renderInput: (params) => (react_1.default.createElement(core_1.TextField, Object.assign({}, params, { label: props.label, variant: props.variant || "outlined", inputProps: Object.assign(Object.assign({}, params.inputProps), { autoComplete: 'new-password' }), required: props.required, helperText: error, error: !!error }))), filterOptions: lab_1.createFilterOptions({
            ignoreCase: true
        }) }));
}
exports.AutoFreeField = AutoFreeField;
//# sourceMappingURL=AutoFreeField.js.map