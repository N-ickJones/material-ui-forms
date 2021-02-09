import { SnackbarOrigin } from "@material-ui/core";
import { AlertProps } from "@material-ui/lab/Alert";

export type BreakPoint = boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto" | undefined;

export type AlertState = {
    open: boolean;
    message?:  string;
    severity?:  AlertProps["severity"];
    origin?: SnackbarOrigin;
    autoHideDuration?: number;
}

export type FieldValidator = {
    pattern: RegExp;
    message: string;
}

export type FieldOption = {
    label: string;
    value: string;
}