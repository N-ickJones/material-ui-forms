import React, { ChangeEvent } from "react";
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
export declare function AutoField(props: IAutoFieldProps): JSX.Element;
