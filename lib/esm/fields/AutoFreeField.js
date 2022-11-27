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
import { useUpdateEffect } from "../hooks/useUpdateEffect";
export function AutoFreeField(props) {
    var _a = useState(props.value), value = _a[0], setValue = _a[1];
    var _b = useState(""), error = _b[0], setError = _b[1];
    useUpdateEffect(function () {
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
    var _c = useState(false), initialLoad = _c[0], setInitLoad = _c[1];
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
    return (React.createElement(Autocomplete, { className: props.className, style: props.style, fullWidth: true, placeholder: props.placeholder, options: props.options ? props.options : [], getOptionLabel: function (option) { return typeof option === 'string' ? option : option.label; }, freeSolo: true, onInputChange: onInputChange, inputValue: value || "", getOptionDisabled: function () { return props.locked || false; }, renderInput: function (params) { return (React.createElement(TextField, __assign({}, params, { label: props.label, variant: props.variant || "outlined", inputProps: __assign(__assign({}, params.inputProps), { autoComplete: 'new-password' }), required: props.required, helperText: error, error: !!error, className: props.inputClassName, style: props.inputStyle }))); }, filterOptions: createFilterOptions({
            ignoreCase: true
        }) }));
}
