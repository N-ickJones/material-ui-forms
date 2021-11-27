import { SnackbarOrigin } from "@mui/material";
import React from "react";
import { AlertState } from "..";
export declare function SnackBarComponent(autoHideDuration?: number, options?: {
    initialAlert?: AlertState;
    handleCloseAlert?: (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => void;
}): {
    component: () => JSX.Element;
    alert: AlertState;
    setAlert: React.Dispatch<React.SetStateAction<AlertState>>;
    error: {
        open: boolean;
        autoHideDuration: number;
        severity: "error" | "success" | "info" | "warning" | undefined;
        origin: SnackbarOrigin;
    };
    success: {
        open: boolean;
        autoHideDuration: number;
        severity: "error" | "success" | "info" | "warning" | undefined;
        origin: SnackbarOrigin;
    };
};
