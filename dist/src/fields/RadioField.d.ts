import React, { ChangeEvent } from "react";
import { FieldOption } from "../types/types";
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
export declare function RadioField(props: IRadioFieldProps): JSX.Element;
