import React, { ChangeEvent } from "react";
import { FieldOption, FieldValidator } from "../types/types";
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
    className?: string;
    style?: React.CSSProperties;
}
export declare function CustomTextField(props: ICustomTextFieldProps): JSX.Element;
