import React, { ChangeEvent } from "react";
import { FieldOption, FieldValidator } from "../types/types";
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
export declare function AutoFreeField(props: IAutoFreeFieldProps): JSX.Element;
