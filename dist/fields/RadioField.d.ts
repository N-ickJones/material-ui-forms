import { ChangeEvent } from "react";
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
export declare function RadioField(props: IRadioFieldProps): JSX.Element;
