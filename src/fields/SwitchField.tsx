import { FormControlLabel, Switch } from "@mui/material";
import React, { ChangeEvent, useState } from "react";


export interface ISwitchFieldProps {
    name: string;
    value: boolean | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>, property: string, value: boolean) => void;
    label: string;
    locked?: boolean;
    className?: string;
    style?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
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
            className={props.labelClassName}
            style={props.labelStyle}
            control={
                <Switch
                    className={props.className}
                    style={props.style}
                    name={props.name}
                    checked={value}
                    onChange={onChange}
                    value={props.value}
                />
            }
        />
    )

}