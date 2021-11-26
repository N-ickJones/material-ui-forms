/// <reference types="react" />
import { SnackbarOrigin } from "@mui/material";
import { AlertProps } from '@mui/material/Alert';
import { IRepoController } from "../interfaces";
export declare type AlertState = {
    open: boolean;
    message?: string;
    severity?: AlertProps["severity"];
    origin?: SnackbarOrigin;
    autoHideDuration?: number;
};
export declare type BreakPoint = boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto" | undefined;
export declare type FieldOption = {
    label: string;
    value: string;
};
export declare type FieldValidator = {
    pattern: RegExp;
    message: string;
};
export declare type FormArgs<T> = {
    controller: IRepoController<T>;
    state: [T[], React.Dispatch<React.SetStateAction<T[]>>];
};
export declare type PaperSize = {
    ratio: number;
    dpi: number;
    height: number;
    width: number;
};
export declare type PaperMargin = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
};
