"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTextField = void 0;
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
var useUpdateEffect_1 = require("../hooks/useUpdateEffect");
function CustomTextField(props) {
    var _a = (0, react_1.useState)(props.value), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(""), error = _b[0], setError = _b[1];
    (0, useUpdateEffect_1.useUpdateEffect)(function () {
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
    function onChange(e) {
        if (!props.locked) {
            props.onChange(e, e.target.name, e.target.value);
            setValue(e.target.value);
        }
    }
    return (react_1.default.createElement(material_1.TextField, { className: props.className, style: props.style, name: props.name, placeholder: props.placeholder || '', variant: props.variant || "outlined", label: props.label, fullWidth: true, value: value || '', onChange: onChange, helperText: error, error: !!error, type: props.type && props.type, autoComplete: props.autoComplete && props.autoComplete, autoFocus: props.autoFocus && props.autoFocus, multiline: props.multiline || false, InputLabelProps: handleShrink(), required: props.required, select: props.select || false },
        props.options && props.options.map(function (item, id) {
            return react_1.default.createElement(material_1.MenuItem, { key: "".concat(item.value, "_").concat(id), value: item.value }, item.label);
        }),
        props.options && !props.disableSelectNone && react_1.default.createElement(material_1.MenuItem, { value: '' }, 'None')));
}
exports.CustomTextField = CustomTextField;
