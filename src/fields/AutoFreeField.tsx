import React, { ChangeEvent, useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteInputChangeReason, createFilterOptions } from "@material-ui/lab";
import { FieldOption, FieldValidator } from "../types/types";
import { useUpdateEffect } from "../hooks/useUpdateEffect";

export interface IAutoFreeFieldProps {
    name: string;
    value: string | undefined;
    onChange: (e: ChangeEvent<{}>, property: string, value: string) => void;
    label: string;
    validators?: FieldValidator[];
    placeholder?: string;
    variant?: "standard" | "outlined" | "filled" | undefined;
    options?: FieldOption[];
    locked?: boolean;
    required?: boolean;
    className?: string;
    style?: React.CSSProperties;

    inputClassName?: string;
    inputStyle?: React.CSSProperties;
}

export function AutoFreeField(props: IAutoFreeFieldProps) {
    const [value, setValue] = useState(props.value);
    const [error, setError] = useState("");

    useUpdateEffect(() => {
        validate()
    }, [value])

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

    //Without Initial Load Check the value will be set to blank;
    const [initialLoad, setInitLoad] = useState(false);
    function onInputChange(event: React.ChangeEvent<{}>, inputValue: string, reason: AutocompleteInputChangeReason) {
        if (props.locked) return;
        switch (reason) {
            case "input":
                props.onChange(event, props.name, inputValue);
                setValue(inputValue);
                break;
            case "reset":
                if (initialLoad) {
                    props.onChange(event, props.name, inputValue);
                    setValue(inputValue);
                }
                else {
                    setInitLoad(true);
                }
                break;
            case "clear":
                props.onChange(event, props.name, "");
                setValue(inputValue);
                break;
        }
    }

    return (
        <Autocomplete
            className={props.className}
            style={props.style}
            fullWidth
            placeholder={props.placeholder}
            options={props.options ? props.options : []}
            getOptionLabel={(option) => option.label}
            freeSolo={true}
            onInputChange={onInputChange}
            inputValue={value || ""}
            getOptionDisabled={() => props.locked || false}
            renderInput={(params) => (
                <TextField {...params}
                    label={props.label}
                    variant={props.variant || "outlined"}
                    inputProps={{ ...params.inputProps, autoComplete: 'new-password' }}
                    required={props.required}
                    helperText={error}
                    error={!!error}
                    className={props.inputClassName}
                    style={props.inputStyle}
                />
            )}
            filterOptions={createFilterOptions({
                ignoreCase: true
            })}
        />
    )
}