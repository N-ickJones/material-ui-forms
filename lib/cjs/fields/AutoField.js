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
exports.AutoField = void 0;
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
function AutoField(props) {
    var _a = (0, react_1.useState)(props.options ? props.options.find(function (item) { return item.value === props.value; }) : { label: "", value: "" }), choiceValue = _a[0], setChoiceValue = _a[1];
    var onChange = function (e, changeValue, reason) {
        if (props.locked)
            return;
        switch (reason) {
            case "createOption":
                console.log('Autocomplete create-option not implemented');
                break;
            case "selectOption":
                props.onChange(e, props.name, (changeValue === null || changeValue === void 0 ? void 0 : changeValue.value) || "");
                changeValue && setChoiceValue(changeValue);
                break;
            case "removeOption":
                console.log('Autocomplete remove-option not implemented');
                break;
            case "clear":
                props.onChange(e, props.name, "");
                setChoiceValue({ label: "", value: "" });
                break;
            case "blur":
                console.log('Autocomplete blur not implemented');
                break;
        }
    };
    var handleOptionSelected = function (option, value) {
        if (value.value === "")
            return true;
        else
            return value.value === option.value;
    };
    return (react_1.default.createElement(material_1.Autocomplete, { className: props.className, style: props.style, options: props.options ? props.options : [], getOptionLabel: function (option) { return option.label; }, fullWidth: true, isOptionEqualToValue: handleOptionSelected, onChange: onChange, value: choiceValue || { label: "", value: "" }, getOptionDisabled: function () { return props.locked || false; }, renderInput: function (params) { return (react_1.default.createElement(material_1.TextField, __assign({}, params, { label: props.label, variant: props.variant || "outlined", inputProps: __assign(__assign({}, params.inputProps), { autoComplete: 'new-password' }), required: props.required }))); }, filterOptions: (0, material_1.createFilterOptions)({
            ignoreCase: true
        }) }));
}
exports.AutoField = AutoField;
