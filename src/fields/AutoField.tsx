import React, { ChangeEvent, useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteChangeReason, createFilterOptions } from "@material-ui/lab";
import { FieldOption } from "../types/types";

export interface IAutoFieldProps {
    name: string;
    value: string | undefined;
    onChange: (e: ChangeEvent<{}>, property: string, value: string) => void;
    label: string;
    variant?: "standard" | "outlined" | "filled" | undefined;
    options?: FieldOption[];
    locked?: boolean;
    required?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export function AutoField(props: IAutoFieldProps) {
    const [choiceValue, setChoiceValue] = useState(
        props.options ? props.options.find(item => item.value === props.value) : { label: "", value: "" } as FieldOption
    );

    const onChange = (
        e: React.ChangeEvent<{}>,
        changeValue: FieldOption | null,
        reason: AutocompleteChangeReason,
        //details?: AutocompleteChangeDetails<FieldOption | null>
    ) => {
        if (props.locked) return;
        switch (reason) {
            case "create-option":
                console.log('Autocomplete create-option not implemented')
                break;
            case "select-option":
                props.onChange(e, props.name, changeValue?.value || "");
                changeValue && setChoiceValue(changeValue)
                break;
            case "remove-option":
                console.log('Autocomplete remove-option not implemented')
                break;
            case "clear":
                props.onChange(e, props.name, "");
                setChoiceValue({ label: "", value: "" })
                break;
            case "blur":
                console.log('Autocomplete blur not implemented')
                break;
        }
    }

    const handleOptionSelected = (option: FieldOption, value: FieldOption) => {
        if (value.value === "")
            return true;
        else
            return value.value === option.value;
    }

    return (
        <Autocomplete
            className={props.className}
            style={props.style}
            options={props.options ? props.options : []}
            getOptionLabel={(option) => option.label}
            fullWidth
            getOptionSelected={handleOptionSelected}
            onChange={onChange}
            value={choiceValue || { label: "", value: "" }}
            getOptionDisabled={() => props.locked || false}
            renderInput={(params) => (
                <TextField {...params}
                    label={props.label}
                    variant={props.variant || "outlined"}
                    inputProps={{ ...params.inputProps, autoComplete: 'new-password' }}
                    required={props.required}
                />
            )}
            filterOptions={createFilterOptions({
                ignoreCase: true
            })}
        />
    )
}