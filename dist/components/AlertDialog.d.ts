import React from 'react';
import { PropTypes } from '@material-ui/core';
export interface IAlertDialogProps {
    onSubmit: (submit?: boolean) => void;
    id?: string;
    title?: string;
    description?: string;
    color?: PropTypes.Color;
    backLabel?: string;
    forwardLabel?: string;
    backOnOutsideClick?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export declare function AlertDialog(props: IAlertDialogProps): JSX.Element;
