import { Alert, AlertProps, Snackbar, SnackbarCloseReason, SnackbarOrigin } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { AlertState } from "..";

export function SnackBarComponent(autoHideDuration = 4000, options?: {
  initialAlert?: AlertState,
  handleCloseAlert?: (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void
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

  const handleCloseAlert = (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
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