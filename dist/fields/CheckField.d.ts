import { ChangeEvent } from "react";
export interface ICheckFieldProps {
    name: string;
    value: boolean | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>, property: string, value: boolean) => void;
    label: string;
    locked?: boolean;
}
export declare function CheckField(props: ICheckFieldProps): JSX.Element;
