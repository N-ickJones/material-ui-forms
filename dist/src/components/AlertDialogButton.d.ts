import React from 'react';
import { PropTypes } from '@material-ui/core';
/**
 * @OnSubmit Function called if alert is accepted. (required)
 * @id The unique id used for accessibility. default: none
 * @title The title display on the alert prompt. default: "Alert"
 * @description The description descibing the alert. default: "Are you sure?"
 * @color The color of the alert buttons. default: "primary"
 * @backLabel The back button label. default: "Cancel"
 * @forwardLabel The forward label. default: "Continue"
 * @backOnOutsideClick
 */
export interface IAlertDialogButtonProps {
    ref?: React.MutableRefObject<HTMLButtonElement>;
    onSubmit?: () => Promise<void>;
    id?: string;
    btnClass?: string;
    label?: any;
    title?: string;
    description?: string;
    color?: PropTypes.Color;
    backLabel?: string;
    forwardLabel?: string;
    disabled?: boolean;
    variant?: "text" | "outlined" | "contained" | undefined;
    className?: string;
}
export declare function AlertDialogButton(props: IAlertDialogButtonProps): any;
