import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import { useUpdateEffect } from "..";
export function AutoFreeField(props) {
    const [value, setValue] = useState(props.value);
    const [error, setError] = useState("");
    useUpdateEffect(() => {
        validate();
    }, [value]);
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
    function onInputChange(event, value, reason) {
        if (props.locked)
            return;
        switch (reason) {
            case "input":
                props.onChange(event, props.name, value);
                setValue(value);
                break;
            case "reset":
                props.onChange(event, props.name, value);
                setValue(value);
                break;
            case "clear":
                props.onChange(event, props.name, "");
                setValue(value);
                break;
        }
    }
    return (<div>
            <Autocomplete placeholder={props.placeholder} options={props.options ? props.options : []} getOptionLabel={(option) => option.label} fullWidth freeSolo={true} onInputChange={onInputChange} inputValue={value || ""} getOptionDisabled={() => props.locked || false} renderInput={(params) => (<TextField {...params} label={props.label} variant={props.variant || "outlined"} inputProps={Object.assign(Object.assign({}, params.inputProps), { autoComplete: 'new-password' })} required={props.required} helperText={error} error={!!error}/>)} filterOptions={createFilterOptions({
        ignoreCase: true
    })}/>
        </div>);
}
