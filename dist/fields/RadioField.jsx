import React, { useState } from "react";
import { FormControlLabel, FormControl, FormLabel, Radio, RadioGroup } from "@material-ui/core";
export function RadioField(props) {
    const [value, setValue] = useState(props.value || (props.options && props.options[0].value));
    const onChange = (e, value) => {
        if (!props.locked) {
            props.onChange(e, e.target.name, value);
            setValue(value);
        }
    };
    return (<FormControl component="fieldset" variant={props.variant || "outlined"} fullWidth>
            <FormLabel component="legend">
                {props.label}
            </FormLabel>
            <RadioGroup aria-label={props.name} name={props.name} value={value} onChange={onChange} row={props.row}>
                {props.options && props.options.map((item, id) => {
        return (<FormControlLabel key={`${item.value}_${id}`} value={item.value} control={<Radio />} label={item.label}/>);
    })}
            </RadioGroup>
        </FormControl>);
}
