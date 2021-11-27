"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
var useUpdateEffect_1 = require("../hooks/useUpdateEffect");
function AutoFreeField(props) {
    var _a = react_1.useState(props.value), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(""), error = _b[0], setError = _b[1];
    useUpdateEffect_1.useUpdateEffect(function () {
        validate();
    }, [value]);
    function validate() {
        var error = runValidation();
        if (error)
            setError(error);
        else if (error !== "")
            setError("");
    }
    function runValidation() {
        if (!props.validators)
            return null;
        for (var i = 0; i < props.validators.length; i++) {
            if (!props.validators[i].pattern.test(value || ''))
                return props.validators[i].message;
        }
        return null;
    }
    //Without Initial Load Check the value will be set to blank;
    var _c = react_1.useState(false), initialLoad = _c[0], setInitLoad = _c[1];
    function onInputChange(event, inputValue, reason) {
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
    return (react_1.default.createElement(material_1.Autocomplete, { className: props.className, style: props.style, fullWidth: true, placeholder: props.placeholder, options: props.options ? props.options : [], getOptionLabel: function (option) { return option.label; }, freeSolo: true, onInputChange: onInputChange, inputValue: value || "", getOptionDisabled: function () { return props.locked || false; }, renderInput: function (params) { return (react_1.default.createElement(material_1.TextField, __assign({}, params, { label: props.label, variant: props.variant || "outlined", inputProps: __assign(__assign({}, params.inputProps), { autoComplete: 'new-password' }), required: props.required, helperText: error, error: !!error, className: props.inputClassName, style: props.inputStyle }))); }, filterOptions: material_1.createFilterOptions({
            ignoreCase: true
        }) }));
}
exports.AutoFreeField = AutoFreeField;
//# sourceMappingURL=AutoFreeField.js.map