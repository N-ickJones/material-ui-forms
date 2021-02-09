var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useRef, useState } from 'react';
import { Backdrop, Button, CircularProgress, Container, createStyles, Divider, Grid, makeStyles, Paper, Snackbar, Typography } from '@material-ui/core';
import { useReactToPrint } from 'react-to-print';
import { Lock, LockOpen } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { AlertDialog, AlertDialogButton, useWarnIfUnsavedChanges } from '..';
import { sleep } from '../functions/functions';
const useStyles = makeStyles((theme) => createStyles({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
export function FormView(props) {
    const localStorageKey = props.title.replace(' ', '');
    const classes = useStyles();
    const printComponentRef = useRef();
    const [locked, setLocked] = useState(!true);
    const [printMode, setPrintMode] = useState(false);
    const [pendingChanges, setPendingChanges] = useState(false);
    const [loadLocal, setLoadLocal] = useState(false);
    const [loadServer, setLoadServer] = useState(false);
    const error = { open: true, severity: "error", origin: { vertical: "bottom", horizontal: "left" } };
    const success = { open: true, severity: "success", origin: { vertical: "bottom", horizontal: "right" } };
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        autoHideDuration: 3000,
        origin: { horizontal: "right", vertical: "bottom" }
    });
    useWarnIfUnsavedChanges(pendingChanges);
    useEffect(() => {
        function loadData() {
            return __awaiter(this, void 0, void 0, function* () {
                if (localStorage.getItem(localStorageKey)) {
                    setLoadLocal(true);
                }
                else {
                    setLoadServer(true);
                    yield props.handleLoad(false);
                    setLoadServer(false);
                }
            });
        }
        loadData();
    }, []);
    const displayPrint = useReactToPrint({
        bodyClass: "",
        copyStyles: true,
        documentTitle: `title`,
        content: () => printComponentRef.current || null,
    });
    const handlePrint = () => __awaiter(this, void 0, void 0, function* () {
        setPrintMode(true);
        displayPrint && displayPrint();
        yield sleep(5000);
        setPrintMode(false);
    });
    const onChange = (e, index, property, value) => {
        props.forms[index] = Object.assign(Object.assign({}, props.forms[index]), { [property]: value });
        !pendingChanges && setPendingChanges(true);
    };
    const onChangeList = (index, listProperty, listIndex, property, value) => __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        props.forms[index][listProperty][listIndex] = Object.assign(Object.assign({}, props.forms[index][listProperty][listIndex]), { [property]: value });
        !pendingChanges && setPendingChanges(true);
    });
    const handleAddList = (index, listProperty) => __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        let listIndex = props.forms[index][listProperty].length;
        // @ts-ignore
        props.forms[index][listProperty][listIndex] = Object.assign({}, props.forms[index][listProperty][listIndex]);
        yield handleChanges();
    });
    const handleDeleteList = (index, listProperty, listIndex) => __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        props.forms[index][listProperty] = props.forms[index][listProperty].filter((_, i) => i !== listIndex);
        yield handleChanges();
        clearLocalStorage();
    });
    const handleLock = () => __awaiter(this, void 0, void 0, function* () {
        setLocked(!locked);
    });
    const handleChanges = () => __awaiter(this, void 0, void 0, function* () {
        if (props.handleSaveChanges && (yield props.handleSaveChanges())) {
            setAlert(Object.assign(Object.assign(Object.assign({}, alert), success), { message: "Successfully saved your changes locally." }));
            setPendingChanges(false);
        }
        else {
            setAlert(Object.assign(Object.assign(Object.assign({}, alert), success), { message: "Unable to save your changes locally." }));
        }
    });
    const handleLocalLoad = (submit) => __awaiter(this, void 0, void 0, function* () {
        if (submit) {
            var storage = localStorage.getItem(localStorageKey);
            if (storage !== null) {
                if (yield props.handleLoad(true, JSON.parse(storage))) {
                    setAlert(Object.assign(Object.assign(Object.assign({}, alert), success), { message: "Successfully loaded previous changes." }));
                }
                else {
                    setAlert(Object.assign(Object.assign(Object.assign({}, alert), error), { message: "Unable to load previous changes." }));
                }
            }
        }
        else {
            clearLocalStorage();
            setLoadServer(true);
            if (yield props.handleLoad(false)) {
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), success), { message: "Successfully loaded your information." }));
            }
            else {
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), error), { message: "Unable to load your information." }));
            }
            setLoadServer(false);
        }
        setLoadLocal(false);
    });
    const handleLocalChanges = () => __awaiter(this, void 0, void 0, function* () {
        localStorage.setItem(localStorageKey, JSON.stringify([...props.forms]));
        handleChanges();
    });
    const handleSubmit = () => __awaiter(this, void 0, void 0, function* () {
        if (props.handleSubmit) {
            if (!(yield formValid())) {
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), error), { message: "A validation error was detected in the form" }));
            }
            else if (yield props.handleSubmit()) {
                clearLocalStorage();
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), success), { message: "Successfully sent changes to the server" }));
            }
            else {
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), error), { message: "Unsuccessfully sent changes to the server" }));
            }
        }
    });
    const formValid = () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            if (input.hasAttribute('aria-invalid') && input.getAttribute('aria-invalid') === "true") {
                const parent = input.parentElement;
                if (parent)
                    parent.classList.add('Mui-focused');
                return false;
            }
            if ((input.hasAttribute('required') && input.value === "")) {
                const inputParent = input.parentElement;
                //Outer Div
                if (inputParent) {
                    inputParent.classList.add('Mui-focused', 'Mui-error');
                    //Outer Label
                    const componentParent = inputParent.parentElement;
                    if (componentParent) {
                        (_a = componentParent.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add('Mui-focused', 'Mui-error');
                    }
                }
                return false;
            }
        }
        return true;
    });
    const handleDelete = (index) => __awaiter(this, void 0, void 0, function* () {
        if (props.handleDelete) {
            if (yield props.handleDelete(index)) {
                clearLocalStorage();
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), success), { message: "Successfully deleted the item." }));
            }
            else {
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), error), { message: "Unable to delete the item." }));
            }
        }
    });
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
        return (React.createElement(Container, { maxWidth: props.maxWidth },
            React.createElement(Snackbar, { open: alert.open, autoHideDuration: alert.autoHideDuration, onClose: () => { setAlert(Object.assign(Object.assign({}, alert), { open: false })); }, anchorOrigin: alert.origin },
                React.createElement(Alert, { severity: alert.severity }, alert.message || '')),
            React.createElement(Grid, { className: "d-flex flex-wrap" },
                React.createElement(AlertDialogButton, { id: "refreshForm", className: "m-1", label: locked ? React.createElement(Lock, { color: "primary" }) : React.createElement(LockOpen, { color: "primary" }), title: locked ? "Unlock this form" : "Lock this form", description: locked ? "Unlocking this form will allow you to make changes." : "Lock this form to prevent unwanted changes.", color: "primary", backLabel: "Cancel", forwardLabel: locked ? "Unlock" : "Lock", onSubmit: handleLock }),
                React.createElement(AlertDialogButton, { id: "saveForm", className: !locked ? "m-1 ml-auto" : "d-none", label: "Save", title: "You have selected to save your current process locally.", description: "Warning: If you have local storage disabled then your changes \r\n            will not be saved and deleting your local storage will erase this data.", color: "primary", backLabel: "Cancel", forwardLabel: "Save Locally", onSubmit: handleLocalChanges, disabled: props.handleSaveChanges === undefined }),
                React.createElement(AlertDialogButton, { id: "printForm", className: !locked ? "m-1" : "d-none", label: "Print", title: "You have selected to print the form.", description: "This print feature was developed to work with Chrome and Microsoft Print to PDF. Other browsers and print method may not display correctly.", color: "primary", backLabel: "Cancel", forwardLabel: "Print", onSubmit: handlePrint })),
            React.createElement(Paper, { className: "p-3 print-paper", ref: printComponentRef },
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Typography, { variant: "h3", className: "text-center" }, props.title)),
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Divider, { className: "my-3" })),
                React.createElement(Grid, { container: true, spacing: 3, className: "print-container" },
                    React.createElement(Grid, { item: true, xs: 12 },
                        props.forms.map((item, index) => {
                            const key = props.handleGenerateKey(item);
                            return (React.createElement(props.FormElement, { key: key, index: index, onChange: onChange, values: item, printMode: printMode, locked: locked, handleDelete: handleDelete, onChangeList: onChangeList, handleAddList: handleAddList, handleDeleteList: handleDeleteList }));
                        }),
                        props.forms.length < 1 &&
                            React.createElement(Grid, null,
                                React.createElement(Typography, { className: "text-center p-3" }, "There are currently no forms avaiable to edit."))),
                    React.createElement(Grid, { item: true, xs: 12 },
                        props.forms.length < props.maxNodes && (React.createElement(Grid, { className: "d-flex" },
                            React.createElement(Button, { className: !locked ? "ml-auto" : "d-none", variant: "contained", color: "primary", onClick: props.handleAddNewItem }, "Add New Item"))),
                        React.createElement(Divider, { className: "my-3" })),
                    !locked &&
                        React.createElement(Grid, { item: true, xs: 12 },
                            React.createElement(Grid, { className: "d-flex" },
                                React.createElement(AlertDialogButton, { id: "saveForm", className: "mx-auto d-flex w-50 mb-3", btnClass: "w-100", label: "Submit", title: "You have selected to submit your information.", description: "This action will save this information to your user account.", color: "primary", backLabel: "Cancel", forwardLabel: "Submit", onSubmit: handleSubmit, disabled: props.handleSubmit === undefined })))))));
    }
}
