import React from "react";
import { BreakPoint } from "../types/types";
export interface IViewField {
    type?: string;
    shrink?: boolean;
    xs?: BreakPoint;
    label?: string;
    value?: any;
    variant?: "filled" | "outlined" | "standard" | undefined;
    printRef?: (el: HTMLDivElement | null) => void;
    className?: string;
    style?: React.CSSProperties;
    outerClassName?: string;
    outerStyle?: React.CSSProperties;
}
export declare function ViewField(props: IViewField): JSX.Element;
