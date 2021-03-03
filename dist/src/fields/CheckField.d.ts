import React, { ChangeEvent } from "react";
export interface ICheckFieldProps {
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
export declare function CheckField(props: ICheckFieldProps): JSX.Element;
