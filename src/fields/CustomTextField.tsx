import React, { ChangeEvent, useState } from "react";
import { MenuItem, TextField } from "@material-ui/core";
import { FieldOption, FieldValidator } from "../types/types";
import { useUpdateEffect } from "../hooks/useUpdateEffect";

export interface ICustomTextFieldProps {
    name: string;
    value: string | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>, property: string, value: string) => void;
    label: string;
    validators?: FieldValidator[];
    placeholder?: string;
    type?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    multiline?: boolean;
    variant?: "standard" | "outlined" | "filled" | undefined;
    shrink?: boolean;

    select?: boolean;
    options?: FieldOption[];

    locked?: boolean;
    disableSelectNone?: boolean;

    required?: boolean;
}

export function CustomTextField(props: ICustomTextFieldProps) {
    const [value, setValue] = useState(props.value);
    const [error, setError] = useState("");

    useUpdateEffect(() => {
        validate()
    }, [value])

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

    function runValidation(): string | null {
        if (!props.validators) return null;
        for (let i = 0; i < props.validators.length; i++) {
            if (!props.validators[i].pattern.test(value || ''))
                return props.validators[i].message;
        }
        return null;
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        if (!props.locked) {
            props.onChange(e, e.target.name, e.target.value);
            setValue(e.target.value);
        }
    }

    return (
        <TextField
            name={props.name}
            placeholder={props.placeholder || ''}
            variant={props.variant || "outlined"}
            label={props.label}
            fullWidth
            value={value || ''}
            onChange={onChange}
            helperText={error}
            error={!!error}
            type={props.type && props.type}
            autoComplete={props.autoComplete && props.autoComplete}
            autoFocus={props.autoFocus && props.autoFocus}
            multiline={props.multiline || false}
            InputLabelProps={handleShrink()}
            required={props.required}
            select={props.select || false}

        >
            {props.options && props.options.map((item: FieldOption, id: number) => {
                return <MenuItem key={`${item.value}_${id}`} value={item.value}>{item.label}</MenuItem>;
            })}
            {props.options && !props.disableSelectNone && <MenuItem value={''}>{'None'}</MenuItem>}
        </TextField>
    )
}