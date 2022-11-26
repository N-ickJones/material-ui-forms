import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { useState } from "react";
export function RadioField(props) {
    var _a = useState(props.value || (props.options && props.options[0].value)), value = _a[0], setValue = _a[1];
    var onChange = function (e, value) {
        if (!props.locked) {
            props.onChange(e, e.target.name, value);
            setValue(value);
        }
    };
    return (React.createElement(FormControl, { component: "fieldset", variant: props.variant || "outlined", fullWidth: true, className: props.outerClassName, style: props.outerStyle },
        React.createElement(FormLabel, { component: "legend", className: props.labelClassName, style: props.labelStyle }, props.label),
        React.createElement(RadioGroup, { "aria-label": props.name, name: props.name, value: value, onChange: onChange, row: props.row, className: props.groupClassName, style: props.groupStyle }, props.options && props.options.map(function (item, id) {
            return (React.createElement(FormControlLabel, { key: "".concat(item.value, "_").concat(id), value: item.value, control: React.createElement(Radio, null), label: item.label, className: props.className, style: props.style }));
        }))));
}
