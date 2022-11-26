import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { useUpdateEffect } from "../hooks/useUpdateEffect";
export function CustomTextField(props) {
    var _a = useState(props.value), value = _a[0], setValue = _a[1];
    var _b = useState(""), error = _b[0], setError = _b[1];
    useUpdateEffect(function () {
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
    return (React.createElement(TextField, { className: props.className, style: props.style, name: props.name, placeholder: props.placeholder || '', variant: props.variant || "outlined", label: props.label, fullWidth: true, value: value || '', onChange: onChange, helperText: error, error: !!error, type: props.type && props.type, autoComplete: props.autoComplete && props.autoComplete, autoFocus: props.autoFocus && props.autoFocus, multiline: props.multiline || false, InputLabelProps: handleShrink(), required: props.required, select: props.select || false },
        props.options && props.options.map(function (item, id) {
            return React.createElement(MenuItem, { key: "".concat(item.value, "_").concat(id), value: item.value }, item.label);
        }),
        props.options && !props.disableSelectNone && React.createElement(MenuItem, { value: '' }, 'None')));
}
