/// <reference types="react" />
import { PropTypes } from '@material-ui/core';
export interface IAlertDialogButtonProps {
    id?: string;
    className?: string;
    btnClass?: string;
    label?: any;
    title?: string;
    description?: string;
    color?: PropTypes.Color;
    backLabel?: string;
    forwardLabel?: string;
    onSubmit?: () => Promise<void>;
    disabled?: boolean;
    variant?: "text" | "outlined" | "contained" | undefined;
}
export declare function AlertDialogButton(props: IAlertDialogButtonProps): JSX.Element;
