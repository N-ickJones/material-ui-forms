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
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import React, { useState } from "react";
export function AutoField(props) {
    var _a = useState(props.options ? props.options.find(function (item) { return item.value === props.value; }) : { label: "", value: "" }), choiceValue = _a[0], setChoiceValue = _a[1];
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
    return (React.createElement(Autocomplete, { className: props.className, style: props.style, options: props.options ? props.options : [], getOptionLabel: function (option) { return option.label; }, fullWidth: true, isOptionEqualToValue: handleOptionSelected, onChange: onChange, value: choiceValue || { label: "", value: "" }, getOptionDisabled: function () { return props.locked || false; }, renderInput: function (params) { return (React.createElement(TextField, __assign({}, params, { label: props.label, variant: props.variant || "outlined", inputProps: __assign(__assign({}, params.inputProps), { autoComplete: 'new-password' }), required: props.required }))); }, filterOptions: createFilterOptions({
            ignoreCase: true
        }) }));
}
