import { SnackbarOrigin } from "@material-ui/core";
import { AlertProps } from "@material-ui/lab/Alert";
import { IRepoController } from "../interfaces";

export type AlertState = {
    open: boolean;
    message?:  string;
    severity?:  AlertProps["severity"];
    origin?: SnackbarOrigin;
    autoHideDuration?: number;
}

export type BreakPoint = boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto" | undefined;

export type FieldOption = {
    label: string;
    value: string;
}

export type FieldValidator = {
    pattern: RegExp;
    message: string;
}

export type FormArgs<T> = {
    controller: IRepoController<T>,
    state: [T[], React.Dispatch<React.SetStateAction<T[]>>]
}

export type PaperSize = {
    ratio: number,
    dpi: number,
    height: number,
    width: number
}

export type PaperMargin = {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
}