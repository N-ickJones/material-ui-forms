import { ChangeEvent } from "react";
import { FieldOption, FieldValidator } from "..";
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
export declare function AutoFreeField(props: IAutoFreeFieldProps): JSX.Element;
