import React, { useState } from "react";
import { MenuItem, TextField } from "@material-ui/core";
import { useUpdateEffect } from "..";
export function CustomTextField(props) {
    const [value, setValue] = useState(props.value);
    const [error, setError] = useState("");
    useUpdateEffect(() => {
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
    function onChange(e) {
        if (!props.locked) {
            props.onChange(e, e.target.name, e.target.value);
            setValue(e.target.value);
        }
    }
    return (<TextField name={props.name} placeholder={props.placeholder || ''} variant={props.variant || "outlined"} label={props.label} fullWidth value={value || ''} onChange={onChange} helperText={error} error={!!error} type={props.type && props.type} autoComplete={props.autoComplete && props.autoComplete} autoFocus={props.autoFocus && props.autoFocus} multiline={props.multiline || false} InputLabelProps={handleShrink()} required={props.required} select={props.select || false}>
            {props.options && props.options.map((item, id) => {
        return <MenuItem key={`${item.value}_${id}`} value={item.value}>{item.label}</MenuItem>;
    })}
            {props.options && !props.disableSelectNone && <MenuItem value={''}>{'None'}</MenuItem>}
        </TextField>);
}
