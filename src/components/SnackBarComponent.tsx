import { Snackbar, SnackbarOrigin } from "@material-ui/core";
import { Alert, AlertProps } from "@material-ui/lab";
import React, { useState } from "react";
import { AlertState } from "../types/types";

export function SnackBarComponent(autoHideDuration = 4000, options?: {
  initialAlert?: AlertState,
  handleCloseAlert?: (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => void
}) {
  const [alert, setAlert] = useState(options?.initialAlert || {
    open: false,
    message: "",
    autoHideDuration: autoHideDuration,
    origin: { vertical: "bottom", horizontal: "right" }
  } as AlertState);

  const error = {
    open: true,
    autoHideDuration: autoHideDuration,
    severity: "error" as AlertProps['severity'],
    origin: {
      vertical: "bottom", horizontal: "left"
    } as SnackbarOrigin
  };

  const success = {
    open: true,
    autoHideDuration: autoHideDuration,
    severity: "success" as AlertProps['severity'],
    origin: {
      vertical: "bottom", horizontal: "right"
    } as SnackbarOrigin
  };

  const handleCloseAlert = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setAlert({ ...alert, open: false });
  }

  function component() {
    return (
      <Snackbar
          open={alert.open}
          autoHideDuration={alert.autoHideDuration}
          onClose={options?.handleCloseAlert || handleCloseAlert}
          anchorOrigin={alert.origin}
      >
        <Alert severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    )
  }

  return {
    component: component,
    alert: alert, 
    setAlert: setAlert, 
    error: error, 
    success: success
  }
}