var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
export function SnackBarComponent(autoHideDuration, options) {
    if (autoHideDuration === void 0) { autoHideDuration = 4000; }
    var _a = useState((options === null || options === void 0 ? void 0 : options.initialAlert) || {
        open: false,
        message: "",
        autoHideDuration: autoHideDuration,
        origin: { vertical: "bottom", horizontal: "right" }
    }), alert = _a[0], setAlert = _a[1];
    var error = {
        open: true,
        autoHideDuration: autoHideDuration,
        severity: "error",
        origin: {
            vertical: "bottom", horizontal: "left"
        }
    };
    var success = {
        open: true,
        autoHideDuration: autoHideDuration,
        severity: "success",
        origin: {
            vertical: "bottom", horizontal: "right"
        }
    };
    var handleCloseAlert = function (event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(__assign(__assign({}, alert), { open: false }));
    };
    function component() {
        return (React.createElement(Snackbar, { open: alert.open, autoHideDuration: alert.autoHideDuration, onClose: (options === null || options === void 0 ? void 0 : options.handleCloseAlert) || handleCloseAlert, anchorOrigin: alert.origin },
            React.createElement(Alert, { severity: alert.severity }, alert.message)));
    }
    return {
        component: component,
        alert: alert,
        setAlert: setAlert,
        error: error,
        success: success
    };
}
