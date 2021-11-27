import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { FieldOption } from "..";


export interface IRadioFieldProps {
    name: string;
    value: string | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>, property: string, value: any) => void;
    label: string;
    variant?: "standard" | "outlined" | "filled" | undefined;
    options?: FieldOption[];
    row?: boolean;
    locked?: boolean;
    className?: string;
    style?: React.CSSProperties;
    outerClassName?: string;
    outerStyle?: React.CSSProperties;
    groupClassName?: string;
    groupStyle?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
}
export function RadioField(props: IRadioFieldProps) {
    const [value, setValue] = useState(props.value || (props.options && props.options[0].value));
    const onChange = (e: ChangeEvent<HTMLInputElement>, value: string) => {
        if (!props.locked) {
            props.onChange(e, e.target.name, value);
            setValue(value);
        }
    }
    return (
        <FormControl
            component="fieldset"
            variant={props.variant || "outlined"}
            fullWidth
            className={props.outerClassName}
            style={props.outerStyle}
        >
            <FormLabel
                component="legend"
                className={props.labelClassName}
                style={props.labelStyle}
            >
                {props.label}
            </FormLabel>
            <RadioGroup
                aria-label={props.name}
                name={props.name}
                value={value}
                onChange={onChange}
                row={props.row}
                className={props.groupClassName}
                style={props.groupStyle}
            >
                {props.options && props.options.map((item: FieldOption, id: number) => {
                    return (
                        <FormControlLabel
                            key={`${item.value}_${id}`}
                            value={item.value}
                            control={<Radio />}
                            label={item.label}
                            className={props.className}
                            style={props.style}
                        />
                    )
                })}
            </RadioGroup>
        </FormControl>
    )
}
