import React, { ChangeEvent, useState} from "react";
import { FormControlLabel, FormControl,  FormLabel, Radio, RadioGroup } from "@material-ui/core";
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
        >
            <FormLabel 
                component="legend"
            >
                {props.label}
            </FormLabel>
            <RadioGroup
                aria-label={props.name}
                name={props.name} 
                value={value} 
                onChange={onChange}
                row={props.row}
            >
                {props.options && props.options.map((item: FieldOption, id: number) => {
                    return (
                        <FormControlLabel 
                            key={`${item.value}_${id}`} 
                            value={item.value} 
                            control={<Radio  />} 
                            label={item.label} 
                        />
                    )
                })}
            </RadioGroup>
        </FormControl>
    )
}
