import React, { ChangeEvent, useState} from "react";
import { FormControlLabel, Switch } from "@material-ui/core";

export interface ISwitchFieldProps {
    name: string;
    value: boolean | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>, property: string, value: boolean) => void;
    label: string;
    locked?: boolean;
}

export function SwitchField(props: ISwitchFieldProps) {
    const [value, setValue] = useState(props.value || false);
    function onChange(e: ChangeEvent<HTMLInputElement>, checked: boolean) {
        if (!props.locked) {
            props.onChange(e, e.target.name, checked);
            setValue(checked);
        }
    }
    return (
        <FormControlLabel
            label={props.label}
            control={
                <Switch
                    name={props.name}
                    checked={value}
                    onChange={onChange}
                    value={props.value}
                />
            }
        />
    )
    
}