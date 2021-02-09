import React, { ChangeEvent, useState} from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteInputChangeReason, createFilterOptions } from "@material-ui/lab";
import { FieldOption, FieldValidator, useUpdateEffect } from "..";

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
}

export function AutoFreeField(props: IAutoFreeFieldProps) {
    const [value, setValue] = useState(props.value);
    const [error, setError] = useState("");

    useUpdateEffect(() => {
        validate()
    }, [value])

    function validate(){
        const error = runValidation();
        if (error) 
            setError(error);
        else if (error !== "") 
            setError("");
    }

    function runValidation(): string | null {
        if (!props.validators) return null;
        for(let i = 0; i < props.validators.length; i++) {
            if (!props.validators[i].pattern.test(value || '')) 
                return props.validators[i].message;
        }
        return null;
    }

    function onInputChange(event: React.ChangeEvent<{}>, value: string, reason: AutocompleteInputChangeReason) {
        if (props.locked) return;
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

    return (
        <div>
            <Autocomplete
                placeholder={props.placeholder}
                options={props.options ? props.options : []}
                getOptionLabel={(option) => option.label}
                fullWidth
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
                    />
                )}
                filterOptions={createFilterOptions({
                    ignoreCase: true
                })}
            />
        </div>
    )
}