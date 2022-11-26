import React, { ChangeEvent } from "react";
export interface ISwitchFieldProps {
    name: string;
    value: boolean | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>, property: string, value: boolean) => void;
    label: string;
    locked?: boolean;
    className?: string;
    style?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
}
export declare function SwitchField(props: ISwitchFieldProps): JSX.Element;
