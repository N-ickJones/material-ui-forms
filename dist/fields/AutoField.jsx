import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";
export function AutoField(props) {
    const [choiceValue, setChoiceValue] = useState(props.options ? props.options.find(item => item.value === props.value) : { label: "", value: "" });
    const onChange = (event, value, reason, details) => {
        if (props.locked)
            return;
        switch (reason) {
            case "create-option":
                console.log('Autocomplete create-option not implemented');
                break;
            case "select-option":
                props.onChange(event, props.name, (value === null || value === void 0 ? void 0 : value.value) || "");
                value && setChoiceValue(value);
                break;
            case "remove-option":
                console.log('Autocomplete remove-option not implemented');
                break;
            case "clear":
                props.onChange(event, props.name, "");
                setChoiceValue({ label: "", value: "" });
                break;
            case "blur":
                console.log('Autocomplete blur not implemented');
                break;
        }
    };
    const handleOptionSelected = (option, value) => {
        if (value.value === "")
            return true;
        else
            return value.value === option.value;
    };
    return (<div>
            <Autocomplete options={props.options ? props.options : []} getOptionLabel={(option) => option.label} fullWidth getOptionSelected={handleOptionSelected} onChange={onChange} value={choiceValue || { label: "", value: "" }} getOptionDisabled={() => props.locked || false} renderInput={(params) => (<TextField {...params} label={props.label} variant={props.variant || "outlined"} inputProps={Object.assign(Object.assign({}, params.inputProps), { autoComplete: 'new-password' })} required={props.required}/>)} filterOptions={createFilterOptions({
        ignoreCase: true
    })}/>
        </div>);
}
