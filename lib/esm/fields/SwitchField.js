import { FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";
export function SwitchField(props) {
    var _a = useState(props.value || false), value = _a[0], setValue = _a[1];
    function onChange(e, checked) {
        if (!props.locked) {
            props.onChange(e, e.target.name, checked);
            setValue(checked);
        }
    }
    return (React.createElement(FormControlLabel, { label: props.label, className: props.labelClassName, style: props.labelStyle, control: React.createElement(Switch, { className: props.className, style: props.style, name: props.name, checked: value, onChange: onChange, value: props.value }) }));
}
