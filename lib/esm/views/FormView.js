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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Lock, LockOpen } from "@mui/icons-material";
import { Backdrop, Box, Button, CircularProgress, Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { uuidv4, SnackBarComponent, useWarnIfUnsavedChanges, useMuiPrinting, decrypt, encrypt, formIsValid, AlertDialog, AlertDialogButton, PrintButton } from "..";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
var useStyles = makeStyles(function (theme) {
    return createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
        displayNone: {
            display: "none"
        },
        marginOne: {
            margin: "0.25em"
        },
        marginLeftAuto: {
            marginLeft: "auto",
        },
        marginOneLeftAuto: {
            margin: "0.25em 0.25em 0.25em auto"
        },
        paddingThree: {
            padding: "1em"
        },
        marginYThree: {
            marginTop: "1em",
            marginBottom: "1em"
        },
        fullWidth: {
            width: "100%"
        }
    });
});
export function FormView(props) {
    var _this = this;
    var localStorageKey = props.title ? props.title.replace(" ", "") : uuidv4();
    var classes = useStyles();
    //const printComponentRef = useRef();
    var _a = useState(props.defaultLocked === undefined ? false : (props.defaultLocked ? (props.hideLockButton ? false : true) : false)), locked = _a[0], setLocked = _a[1];
    //const [printMode, setPrintMode] = useState(false);
    var _b = useState(false), pendingChanges = _b[0], setPendingChanges = _b[1];
    var _c = useState(false), loadLocal = _c[0], setLoadLocal = _c[1];
    var _d = useState(false), loadServer = _d[0], setLoadServer = _d[1];
    var snackbar = SnackBarComponent(8000);
    useWarnIfUnsavedChanges(pendingChanges);
    var _e = useMuiPrinting(), paperStyle = _e[0], printComponentRef = _e[1], printMode = _e[2], displayPrint = _e[3], handlePrintRef = _e[4];
    useEffect(function () {
        function loadData() {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!localStorage.getItem(localStorageKey)) return [3 /*break*/, 1];
                            setLoadLocal(true);
                            return [3 /*break*/, 4];
                        case 1:
                            setLoadServer(true);
                            _a = props.handleLoad;
                            if (!_a) return [3 /*break*/, 3];
                            return [4 /*yield*/, props.handleLoad(false)];
                        case 2:
                            _a = (_b.sent());
                            _b.label = 3;
                        case 3:
                            _a;
                            setLoadServer(false);
                            _b.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        loadData();
    }, []);
    var onChange = function (e, index, property, value) {
        var _a;
        if (locked)
            return;
        if (props.forms)
            props.forms[index] = __assign(__assign({}, props.forms[index]), (_a = {}, _a[property] = value, _a));
        !pendingChanges && setPendingChanges(true);
    };
    var onChangeList = function (index, listProperty, listIndex, property, value) { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            if (locked)
                return [2 /*return*/];
            // @ts-ignore
            props.forms[index][listProperty][listIndex] = __assign(__assign({}, props.forms[index][listProperty][listIndex]), (_a = {}, _a[property] = value, _a));
            !pendingChanges && setPendingChanges(true);
            return [2 /*return*/];
        });
    }); };
    var handleAddList = function (index, listProperty) { return __awaiter(_this, void 0, void 0, function () {
        var listIndex;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (locked)
                        return [2 /*return*/];
                    listIndex = props.forms[index][listProperty].length;
                    // @ts-ignore
                    props.forms[index][listProperty][listIndex] = __assign({}, props.forms[index][listProperty][listIndex]);
                    return [4 /*yield*/, handleChanges()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteList = function (index, listProperty, listIndex) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (locked)
                        return [2 /*return*/];
                    // @ts-ignore
                    props.forms[index][listProperty] = props.forms[index][listProperty].filter(function (_, i) { return i !== listIndex; });
                    return [4 /*yield*/, handleChanges()];
                case 1:
                    _a.sent();
                    clearLocalStorage();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLock = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setLocked(!locked);
            return [2 /*return*/];
        });
    }); };
    var handleChanges = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (locked)
                        return [2 /*return*/];
                    _a = props.handleSaveChanges;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, props.handleSaveChanges()];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    if (_a) {
                        snackbar.setAlert(__assign(__assign({}, snackbar.success), { message: "Successfully saved your changes locally." }));
                        setPendingChanges(false);
                    }
                    else {
                        snackbar.setAlert(__assign(__assign({}, snackbar.success), { message: "Unable to save your changes locally." }));
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLocalLoad = function (submit) { return __awaiter(_this, void 0, void 0, function () {
        var cipherText, plainText, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!submit) return [3 /*break*/, 4];
                    cipherText = localStorage.getItem(localStorageKey);
                    if (!(cipherText !== null)) return [3 /*break*/, 3];
                    plainText = decrypt(cipherText, localStorageKey);
                    _a = props.handleLoad;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, props.handleLoad(true, JSON.parse(plainText))];
                case 1:
                    _a = (_c.sent());
                    _c.label = 2;
                case 2:
                    if (_a) {
                        snackbar.setAlert(__assign(__assign({}, snackbar.success), { message: "Successfully loaded previous changes." }));
                    }
                    else {
                        snackbar.setAlert(__assign(__assign({}, snackbar.error), { message: "Unable to load previous changes." }));
                    }
                    _c.label = 3;
                case 3: return [3 /*break*/, 7];
                case 4:
                    clearLocalStorage();
                    setLoadServer(true);
                    _b = props.handleLoad;
                    if (!_b) return [3 /*break*/, 6];
                    return [4 /*yield*/, props.handleLoad(false)];
                case 5:
                    _b = (_c.sent());
                    _c.label = 6;
                case 6:
                    if (_b) {
                        snackbar.setAlert(__assign(__assign({}, snackbar.success), { message: "Successfully loaded your information." }));
                    }
                    else {
                        snackbar.setAlert(__assign(__assign({}, snackbar.error), { message: "Unable to load your information." }));
                    }
                    setLoadServer(false);
                    _c.label = 7;
                case 7:
                    setLoadLocal(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLocalChanges = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (locked)
                return [2 /*return*/];
            props.forms && localStorage.setItem(localStorageKey, encrypt(JSON.stringify(__spreadArray([], props.forms, true)), localStorageKey));
            handleChanges();
            return [2 /*return*/];
        });
    }); };
    var handleSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (locked)
                        return [2 /*return*/];
                    //Skip
                    if (!pendingChanges) {
                        if (props.forms && props.minNodes !== undefined && props.forms.length >= props.minNodes) {
                            props.onNext && props.onNext();
                            return [2 /*return*/];
                        }
                    }
                    if (!props.handleSubmit) return [3 /*break*/, 4];
                    return [4 /*yield*/, formIsValid()];
                case 1:
                    if (!!(_a.sent())) return [3 /*break*/, 2];
                    snackbar.setAlert(__assign(__assign({}, snackbar.error), { message: "A validation error was detected in the form" }));
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, props.handleSubmit()];
                case 3:
                    if (_a.sent()) {
                        if (props.minNodes !== undefined && props.forms && props.forms.length < props.minNodes) {
                            snackbar.setAlert(__assign(__assign({}, snackbar.error), { message: props.minNodes <= 1 ? "".concat(props.minNodes, " submission is required") : "".concat(props.minNodes, " submissions are required") }));
                        }
                        else {
                            snackbar.setAlert(__assign(__assign({}, snackbar.success), { message: "Successfully sent changes to the server" }));
                            clearLocalStorage();
                            setPendingChanges(false);
                            //Let setPendingCHanges Fire
                            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = props.onNext;
                                            if (!_a) return [3 /*break*/, 2];
                                            return [4 /*yield*/, props.onNext()];
                                        case 1:
                                            _a = (_b.sent());
                                            _b.label = 2;
                                        case 2:
                                            _a;
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                    }
                    else {
                        snackbar.setAlert(__assign(__assign({}, snackbar.error), { message: "Unsuccessfully sent changes to the server" }));
                    }
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleDelete = function (index) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (locked)
                        return [2 /*return*/];
                    if (!props.handleDelete) return [3 /*break*/, 2];
                    return [4 /*yield*/, props.handleDelete(index)];
                case 1:
                    if (_a.sent()) {
                        clearLocalStorage();
                        snackbar.setAlert(__assign(__assign({}, snackbar.success), { message: "Successfully deleted the item." }));
                    }
                    else {
                        snackbar.setAlert(__assign(__assign({}, snackbar.error), { message: "Unable to delete the item." }));
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    function clearLocalStorage() {
        if (localStorage.getItem(localStorageKey) !== null)
            localStorage.removeItem(localStorageKey);
    }
    if (loadLocal) {
        return (React.createElement(AlertDialog, { id: "loadingLocal", title: "Would you like to load your previous session?", description: "Selecting Cancel will remove your previous session.", color: "primary", backLabel: "Cancel", forwardLabel: "Continue", onSubmit: handleLocalLoad, backOnOutsideClick: false }));
    }
    else if (loadServer) {
        return (React.createElement(Backdrop, { className: classes.backdrop, open: true },
            React.createElement(CircularProgress, { color: "primary" })));
    }
    else {
        return (React.createElement(React.Fragment, null,
            React.createElement(snackbar.component, null),
            React.createElement(Box, { p: 1, display: "flex", flexWrap: "wrap", justifyContent: "space-between" },
                React.createElement(AlertDialogButton, { id: "refreshForm", style: props.hideLockButton ? { display: "none" } : {}, label: locked ? React.createElement(Lock, { color: "primary" }) : React.createElement(LockOpen, { color: "primary" }), title: locked ? "Unlock this form" : "Lock this form", description: locked ? "Unlocking this form will allow you to make changes." : "Lock this form to prevent unwanted changes.", color: "primary", backLabel: "Cancel", forwardLabel: locked ? "Unlock" : "Lock", onSubmit: handleLock }),
                React.createElement(Box, { display: "flex" },
                    React.createElement(AlertDialogButton, { id: "saveForm", style: locked || props.hideSaveProgressButton ? { display: "none" } : {}, label: "Save Progress", title: "You have selected to save your current process locally.", description: "Warning: If you have local storage disabled then your changes \r\n                                will not be saved and deleting your local storage will erase this data.", color: "primary", backLabel: "Cancel", forwardLabel: "Save Locally", onSubmit: handleLocalChanges, disabled: props.handleSaveChanges === undefined }),
                    React.createElement(Box, { ml: 1 },
                        React.createElement(PrintButton, { style: locked || props.hidePrintButton ? { display: "none" } : {}, displayPrint: displayPrint })))),
            React.createElement(Paper, { ref: printComponentRef, style: printMode ? paperStyle : {} },
                React.createElement(Box, { p: printMode ? 0 : 3 },
                    React.createElement(Grid, { item: true, xs: 12 },
                        React.createElement(Typography, { variant: "h3", align: "center" }, props.title)),
                    React.createElement(Box, { width: "100%", my: 3 },
                        React.createElement(Divider, null)),
                    React.createElement(Grid, { container: true, spacing: 3 },
                        React.createElement(Grid, { item: true, xs: 12 },
                            props.forms && props.forms.map(function (item, index) {
                                var key = props.handleGenerateKey ? props.handleGenerateKey(item) : "".concat(localStorageKey).concat(index);
                                if (props.FormElement) {
                                    return (React.createElement(props.FormElement, { key: key, index: index, locked: locked, printMode: printMode, values: item, handleAddList: handleAddList, handleDelete: handleDelete, handleDeleteList: handleDeleteList, handlePrintRef: handlePrintRef, onChangeList: onChangeList, onChange: onChange }));
                                }
                                else {
                                    return (React.createElement(React.Fragment, null));
                                }
                            }),
                            props.forms && props.forms.length < 1 &&
                                React.createElement(Grid, null,
                                    React.createElement(Typography, { align: "center", className: classes.paddingThree }, "There are currently no forms to edit.")),
                            !props.FormElement && React.createElement(Grid, null,
                                React.createElement(Typography, { align: "center", className: classes.paddingThree }, "Development Error: Form Element is not defined.")),
                            !props.forms && React.createElement(Grid, null,
                                React.createElement(Typography, { align: "center", className: classes.paddingThree }, "Development Error: Forms is not defined"))),
                        React.createElement(Grid, { item: true, xs: 12 },
                            props.forms && props.forms.length < (props.maxNodes ? props.maxNodes : 1) && (React.createElement(Grid, { container: true },
                                React.createElement(Button, { className: !locked ? classes.marginLeftAuto : classes.displayNone, variant: "contained", color: "primary", onClick: props.handleAddNewItem }, "Add New Item"))),
                            React.createElement(Box, { width: "100%", my: 3 },
                                React.createElement(Divider, null))),
                        React.createElement(Grid, { item: true, xs: 12, style: locked || props.submitButtonRef ? { display: "none" } : {} },
                            React.createElement(Grid, { container: true },
                                React.createElement(AlertDialogButton, { submitButtonRef: props.submitButtonRef, id: "saveForm", style: {
                                        display: "flex",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        marginBottom: "0.5em",
                                        width: "50%",
                                    }, btnStyle: { width: "100%" }, label: "Submit", title: "You have selected to submit your information.", description: "This action will save this information to your user account.", color: "primary", backLabel: "Cancel", forwardLabel: "Submit", onSubmit: handleSubmit, disabled: props.handleSubmit === undefined || locked, pendingChanges: pendingChanges, allowSkip: true }))))))));
    }
}
