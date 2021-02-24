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
}
/**
 * Creates an Alert dialog prompt with back/foward options
 * @props IAlertDialogProps
 */
export declare function AlertDialog(props: IAlertDialogProps): any;
