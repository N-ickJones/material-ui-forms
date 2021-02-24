import { ChangeEvent } from "react";
export interface ISwitchFieldProps {
    name: string;
    value: boolean | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>, property: string, value: boolean) => void;
    label: string;
    locked?: boolean;
}
export declare function SwitchField(props: ISwitchFieldProps): any;
