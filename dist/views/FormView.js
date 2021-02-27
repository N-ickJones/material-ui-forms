"use strict";
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
exports.FormView = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
const lab_1 = require("@material-ui/lab");
const functions_1 = require("../functions/functions");
const useWarnIfUnsavedChanges_1 = require("../hooks/useWarnIfUnsavedChanges");
const AlertDialog_1 = require("../components/AlertDialog");
const AlertDialogButton_1 = require("../components/AlertDialogButton");
const components_1 = require("../components");
const hooks_1 = require("../hooks");
const useStyles = core_1.makeStyles((theme) => core_1.createStyles({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
function FormView(props) {
    const localStorageKey = props.title ? props.title.replace(" ", "") : functions_1.uuidv4();
    const classes = useStyles();
    //const printComponentRef = useRef();
    const [locked, setLocked] = react_1.useState(props.defaultLocked === undefined ? false : (props.defaultLocked ? (props.hideLockButton ? false : true) : false));
    //const [printMode, setPrintMode] = useState(false);
    const [pendingChanges, setPendingChanges] = react_1.useState(false);
    const [loadLocal, setLoadLocal] = react_1.useState(false);
    const [loadServer, setLoadServer] = react_1.useState(false);
    const autoHideDuration = 8000;
    const [alert, setAlert] = react_1.useState({
        open: false,
        message: "",
        autoHideDuration: autoHideDuration,
        origin: { vertical: "bottom", horizontal: "right" }
    });
    const error = {
        open: true,
        autoHideDuration: autoHideDuration,
        severity: "error",
        origin: { vertical: "bottom", horizontal: "left"
        }
    };
    const success = {
        open: true,
        autoHideDuration: autoHideDuration,
        severity: "success",
        origin: { vertical: "bottom", horizontal: "right"
        }
    };
    useWarnIfUnsavedChanges_1.useWarnIfUnsavedChanges(pendingChanges);
    const [paperStyle, printComponentRef, printMode, displayPrint, handlePrintRef] = hooks_1.useMuiPrinting();
    react_1.useEffect(() => {
        async function loadData() {
            if (localStorage.getItem(localStorageKey)) {
                setLoadLocal(true);
            }
            else {
                setLoadServer(true);
                props.handleLoad && await props.handleLoad(false);
                setLoadServer(false);
            }
        }
        loadData();
    }, []);
    const onChange = (e, index, property, value) => {
        if (locked)
            return;
        if (props.forms)
            props.forms[index] = Object.assign(Object.assign({}, props.forms[index]), { [property]: value });
        !pendingChanges && setPendingChanges(true);
    };
    const onChangeList = async (index, listProperty, listIndex, property, value) => {
        if (locked)
            return;
        // @ts-ignore
        props.forms[index][listProperty][listIndex] = Object.assign(Object.assign({}, props.forms[index][listProperty][listIndex]), { [property]: value });
        !pendingChanges && setPendingChanges(true);
    };
    const handleAddList = async (index, listProperty) => {
        if (locked)
            return;
        // @ts-ignore
        let listIndex = props.forms[index][listProperty].length;
        // @ts-ignore
        props.forms[index][listProperty][listIndex] = Object.assign({}, props.forms[index][listProperty][listIndex]);
        await handleChanges();
    };
    const handleDeleteList = async (index, listProperty, listIndex) => {
        if (locked)
            return;
        // @ts-ignore
        props.forms[index][listProperty] = props.forms[index][listProperty].filter((_, i) => i !== listIndex);
        await handleChanges();
        clearLocalStorage();
    };
    const handleLock = async () => {
        setLocked(!locked);
    };
    const handleChanges = async () => {
        if (locked)
            return;
        if (props.handleSaveChanges && await props.handleSaveChanges()) {
            setAlert(Object.assign(Object.assign({}, success), { message: "Successfully saved your changes locally." }));
            setPendingChanges(false);
        }
        else {
            setAlert(Object.assign(Object.assign({}, success), { message: "Unable to save your changes locally." }));
        }
    };
    const handleLocalLoad = async (submit) => {
        if (submit) {
            var cipherText = localStorage.getItem(localStorageKey);
            if (cipherText !== null) {
                const plainText = functions_1.decrypt(cipherText, localStorageKey);
                if (props.handleLoad && await props.handleLoad(true, JSON.parse(plainText))) {
                    setAlert(Object.assign(Object.assign({}, success), { message: "Successfully loaded previous changes." }));
                }
                else {
                    setAlert(Object.assign(Object.assign({}, error), { message: "Unable to load previous changes." }));
                }
            }
        }
        else {
            clearLocalStorage();
            setLoadServer(true);
            if (props.handleLoad && await props.handleLoad(false)) {
                setAlert(Object.assign(Object.assign({}, success), { message: "Successfully loaded your information." }));
            }
            else {
                setAlert(Object.assign(Object.assign({}, error), { message: "Unable to load your information." }));
            }
            setLoadServer(false);
        }
        setLoadLocal(false);
    };
    const handleLocalChanges = async () => {
        if (locked)
            return;
        props.forms && localStorage.setItem(localStorageKey, functions_1.encrypt(JSON.stringify([...props.forms]), localStorageKey));
        handleChanges();
    };
    const handleSubmit = async () => {
        if (locked)
            return;
        if (!pendingChanges) {
            if (props.forms && props.minNodes && props.forms.length >= props.minNodes) {
                props.onNext && props.onNext();
                return;
            }
        }
        if (props.handleSubmit) {
            if (!await formValid()) {
                setAlert(Object.assign(Object.assign({}, error), { message: "A validation error was detected in the form" }));
            }
            else if (await props.handleSubmit()) {
                if (props.minNodes && props.forms && props.forms.length < props.minNodes) {
                    setAlert(Object.assign(Object.assign({}, error), { message: props.minNodes <= 1 ? `${props.minNodes} submission is required` : `${props.minNodes} submissions are required` }));
                }
                else {
                    clearLocalStorage();
                    setAlert(Object.assign(Object.assign({}, success), { message: "Successfully sent changes to the server" }));
                    setPendingChanges(false);
                    props.onNext && await props.onNext();
                }
            }
            else {
                setAlert(Object.assign(Object.assign({}, error), { message: "Unsuccessfully sent changes to the server" }));
            }
        }
    };
    const formValid = async () => {
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
    };
    const handleDelete = async (index) => {
        if (locked)
            return;
        if (props.handleDelete) {
            if (await props.handleDelete(index)) {
                clearLocalStorage();
                setAlert(Object.assign(Object.assign({}, success), { message: "Successfully deleted the item." }));
            }
            else {
                setAlert(Object.assign(Object.assign({}, error), { message: "Unable to delete the item." }));
            }
        }
    };
    function clearLocalStorage() {
        if (localStorage.getItem(localStorageKey) !== null)
            localStorage.removeItem(localStorageKey);
    }
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(Object.assign(Object.assign({}, alert), { open: false }));
    };
    if (loadLocal) {
        return (react_1.default.createElement(AlertDialog_1.AlertDialog, { id: "loadingLocal", title: "Would you like to load your previous session?", description: "Selecting Cancel will remove your previous session.", color: "primary", backLabel: "Cancel", forwardLabel: "Continue", onSubmit: handleLocalLoad, backOnOutsideClick: false }));
    }
    else if (loadServer) {
        return (react_1.default.createElement(core_1.Backdrop, { className: classes.backdrop, open: true },
            react_1.default.createElement(core_1.CircularProgress, { color: "primary" })));
    }
    else {
        return (react_1.default.createElement(core_1.Grid, null,
            react_1.default.createElement(core_1.Snackbar, { open: alert.open, autoHideDuration: alert.autoHideDuration, onClose: handleCloseAlert, anchorOrigin: alert.origin },
                react_1.default.createElement(lab_1.Alert, { severity: alert.severity }, alert.message)),
            react_1.default.createElement(core_1.Grid, { className: "d-flex flex-wrap" },
                react_1.default.createElement(AlertDialogButton_1.AlertDialogButton, { id: "refreshForm", className: props.hideLockButton ? "d-none" : "m-1", label: locked ? react_1.default.createElement(icons_1.Lock, { color: "primary" }) : react_1.default.createElement(icons_1.LockOpen, { color: "primary" }), title: locked ? "Unlock this form" : "Lock this form", description: locked ? "Unlocking this form will allow you to make changes." : "Lock this form to prevent unwanted changes.", color: "primary", backLabel: "Cancel", forwardLabel: locked ? "Unlock" : "Lock", onSubmit: handleLock }),
                react_1.default.createElement(AlertDialogButton_1.AlertDialogButton, { id: "saveForm", className: locked || props.hideSaveProgressButton ? "d-none" : "m-1 ml-auto", label: "Save Progress", title: "You have selected to save your current process locally.", description: "Warning: If you have local storage disabled then your changes \r\n            will not be saved and deleting your local storage will erase this data.", color: "primary", backLabel: "Cancel", forwardLabel: "Save Locally", onSubmit: handleLocalChanges, disabled: props.handleSaveChanges === undefined }),
                react_1.default.createElement(components_1.PrintButton, { className: locked || props.hidePrintButton ? "d-none" : "m-1", displayPrint: displayPrint })),
            react_1.default.createElement(core_1.Paper, { className: printMode ? "" : "p-3", ref: printComponentRef, style: printMode ? paperStyle : {} },
                react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                    react_1.default.createElement(core_1.Typography, { variant: "h3", className: "text-center" }, props.title)),
                react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                    react_1.default.createElement(core_1.Divider, { className: "my-3" })),
                react_1.default.createElement(core_1.Grid, { container: true, spacing: 3 },
                    react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                        props.forms && props.forms.map((item, index) => {
                            const key = props.handleGenerateKey ? props.handleGenerateKey(item) : `${localStorageKey}${index}`;
                            if (props.FormElement) {
                                return (react_1.default.createElement(props.FormElement, { key: key, index: index, locked: locked, printMode: printMode, values: item, handleAddList: handleAddList, handleDelete: handleDelete, handleDeleteList: handleDeleteList, handlePrintRef: handlePrintRef, onChangeList: onChangeList, onChange: onChange }));
                            }
                            else {
                                return (react_1.default.createElement(react_1.default.Fragment, null));
                            }
                        }),
                        props.forms && props.forms.length < 1 &&
                            react_1.default.createElement(core_1.Grid, null,
                                react_1.default.createElement(core_1.Typography, { className: "text-center p-3" }, "There are currently no forms to edit.")),
                        !props.FormElement && react_1.default.createElement(core_1.Grid, null,
                            react_1.default.createElement(core_1.Typography, { className: "text-center p-3" }, "Development Error: Form Element is not defined.")),
                        !props.forms && react_1.default.createElement(core_1.Grid, null,
                            react_1.default.createElement(core_1.Typography, { className: "text-center p-3" }, "Development Error: Forms is not defined"))),
                    react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                        props.forms && props.forms.length < (props.maxNodes ? props.maxNodes : 1) && (react_1.default.createElement(core_1.Grid, { className: "d-flex" },
                            react_1.default.createElement(core_1.Button, { className: !locked ? "ml-auto" : "d-none", variant: "contained", color: "primary", onClick: props.handleAddNewItem }, "Add New Item"))),
                        react_1.default.createElement(core_1.Divider, { className: "my-3" })),
                    react_1.default.createElement(core_1.Grid, { item: true, xs: 12, className: locked || props.submitButtonRef ? "d-none" : "" },
                        react_1.default.createElement(core_1.Grid, { className: "d-flex" },
                            react_1.default.createElement(AlertDialogButton_1.AlertDialogButton, { submitButtonRef: props.submitButtonRef, id: "saveForm", className: "mx-auto d-flex w-50 mb-3", btnClass: "w-100", label: "Submit", title: "You have selected to submit your information.", description: "This action will save this information to your user account.", color: "primary", backLabel: "Cancel", forwardLabel: "Submit", onSubmit: handleSubmit, disabled: props.handleSubmit === undefined || locked, pendingChanges: pendingChanges, allowSkip: true })))))));
    }
}
exports.FormView = FormView;
//# sourceMappingURL=FormView.js.map