import { SnackbarCloseReason, SnackbarOrigin } from "@mui/material";
import React, { SyntheticEvent } from "react";
import { AlertState } from "..";
export declare function SnackBarComponent(autoHideDuration?: number, options?: {
    initialAlert?: AlertState;
    handleCloseAlert?: (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void;
}): {
    component: () => JSX.Element;
    alert: AlertState;
    setAlert: React.Dispatch<React.SetStateAction<AlertState>>;
    error: {
        open: boolean;
        autoHideDuration: number;
        severity: import("@mui/material").AlertColor | undefined;
        origin: SnackbarOrigin;
    };
    success: {
        open: boolean;
        autoHideDuration: number;
        severity: import("@mui/material").AlertColor | undefined;
        origin: SnackbarOrigin;
    };
};
