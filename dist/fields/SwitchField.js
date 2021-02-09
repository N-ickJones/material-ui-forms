import React, { useState } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
export function SwitchField(props) {
    const [value, setValue] = useState(props.value || false);
    function onChange(e, checked) {
        if (!props.locked) {
            props.onChange(e, e.target.name, checked);
            setValue(checked);
        }
    }
    return (React.createElement(FormControlLabel, { label: props.label, control: React.createElement(Switch, { name: props.name, checked: value, onChange: onChange, value: props.value }) }));
}
