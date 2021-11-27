import { PropTypes } from "@mui/material";
import React from "react";
export interface IAlertDialogButtonProps {
    submitButtonRef?: React.MutableRefObject<HTMLButtonElement>;
    onSubmit?: () => Promise<void>;
    id?: string;
    label?: any;
    title?: string;
    description?: string;
    color?: PropTypes.Color;
    backLabel?: string;
    forwardLabel?: string;
    disabled?: boolean;
    variant?: "text" | "outlined" | "contained" | undefined;
    allowSkip?: boolean;
    pendingChanges?: boolean;
    className?: string;
    style?: React.CSSProperties;
    btnClass?: string;
    btnStyle?: React.CSSProperties;
}
export declare function AlertDialogButton(props: IAlertDialogButtonProps): JSX.Element;
