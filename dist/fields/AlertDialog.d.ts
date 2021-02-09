/// <reference types="react" />
import { PropTypes } from '@material-ui/core';
export interface IAlertDialogProps {
    onSubmit: (submit?: boolean) => void;
    id?: string;
    className?: string;
    title?: string;
    description?: string;
    color?: PropTypes.Color;
    backLabel?: string;
    forwardLabel?: string;
    backOnOutsideClick?: boolean;
}
export declare function AlertDialog(props: IAlertDialogProps): JSX.Element;
