"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackBarComponent = void 0;
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
function SnackBarComponent(autoHideDuration, options) {
    if (autoHideDuration === void 0) { autoHideDuration = 4000; }
    var _a = react_1.useState((options === null || options === void 0 ? void 0 : options.initialAlert) || {
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
        return (react_1.default.createElement(material_1.Snackbar, { open: alert.open, autoHideDuration: alert.autoHideDuration, onClose: (options === null || options === void 0 ? void 0 : options.handleCloseAlert) || handleCloseAlert, anchorOrigin: alert.origin },
            react_1.default.createElement(material_1.Alert, { severity: alert.severity }, alert.message)));
    }
    return {
        component: component,
        alert: alert,
        setAlert: setAlert,
        error: error,
        success: success
    };
}
exports.SnackBarComponent = SnackBarComponent;
//# sourceMappingURL=SnackBarComponent.js.map