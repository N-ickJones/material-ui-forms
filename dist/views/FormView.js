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
const react_to_print_1 = require("react-to-print");
const icons_1 = require("@material-ui/icons");
const lab_1 = require("@material-ui/lab");
const functions_1 = require("../functions/functions");
const useWarnIfUnsavedChanges_1 = require("../hooks/useWarnIfUnsavedChanges");
const AlertDialog_1 = require("../fields/AlertDialog");
const AlertDialogButton_1 = require("../fields/AlertDialogButton");
const useStyles = core_1.makeStyles((theme) => core_1.createStyles({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
function FormView(props) {
    const localStorageKey = props.title.replace(' ', '');
    const classes = useStyles();
    const printComponentRef = react_1.useRef();
    const [locked, setLocked] = react_1.useState(props.defaultLocked === undefined ? true : props.defaultLocked);
    const [printMode, setPrintMode] = react_1.useState(false);
    const [pendingChanges, setPendingChanges] = react_1.useState(false);
    const [loadLocal, setLoadLocal] = react_1.useState(false);
    const [loadServer, setLoadServer] = react_1.useState(false);
    const error = { open: true, severity: "error", origin: { vertical: "bottom", horizontal: "left" } };
    const success = { open: true, severity: "success", origin: { vertical: "bottom", horizontal: "right" } };
    const [alert, setAlert] = react_1.useState({
        open: false,
        message: "",
        autoHideDuration: 3000,
        origin: { horizontal: "right", vertical: "bottom" }
    });
    useWarnIfUnsavedChanges_1.useWarnIfUnsavedChanges(pendingChanges);
    react_1.useEffect(() => {
        async function loadData() {
            if (localStorage.getItem(localStorageKey)) {
                setLoadLocal(true);
            }
            else {
                setLoadServer(true);
                await props.handleLoad(false);
                setLoadServer(false);
            }
        }
        loadData();
    }, []);
    const displayPrint = react_to_print_1.useReactToPrint({
        bodyClass: "",
        copyStyles: true,
        documentTitle: `title`,
        content: () => printComponentRef.current || null,
    });
    const handlePrint = async () => {
        if (locked)
            return;
        setPrintMode(true);
        displayPrint && displayPrint();
        await functions_1.sleep(5000);
        setPrintMode(false);
    };
    const onChange = (e, index, property, value) => {
        if (locked)
            return;
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
            setAlert(Object.assign(Object.assign(Object.assign({}, alert), success), { message: "Successfully saved your changes locally." }));
            setPendingChanges(false);
        }
        else {
            setAlert(Object.assign(Object.assign(Object.assign({}, alert), success), { message: "Unable to save your changes locally." }));
        }
    };
    const handleLocalLoad = async (submit) => {
        if (submit) {
            var storage = localStorage.getItem(localStorageKey);
            if (storage !== null) {
                if (await props.handleLoad(true, JSON.parse(storage))) {
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
            if (await props.handleLoad(false)) {
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), success), { message: "Successfully loaded your information." }));
            }
            else {
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), error), { message: "Unable to load your information." }));
            }
            setLoadServer(false);
        }
        setLoadLocal(false);
    };
    const handleLocalChanges = async () => {
        if (locked)
            return;
        localStorage.setItem(localStorageKey, JSON.stringify([...props.forms]));
        handleChanges();
    };
    const handleSubmit = async () => {
        if (locked)
            return;
        if (props.handleSubmit) {
            if (!await formValid()) {
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), error), { message: "A validation error was detected in the form" }));
            }
            else if (await props.handleSubmit()) {
                clearLocalStorage();
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), success), { message: "Successfully sent changes to the server" }));
            }
            else {
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), error), { message: "Unsuccessfully sent changes to the server" }));
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
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), success), { message: "Successfully deleted the item." }));
            }
            else {
                setAlert(Object.assign(Object.assign(Object.assign({}, alert), error), { message: "Unable to delete the item." }));
            }
        }
    };
    function clearLocalStorage() {
        if (localStorage.getItem(localStorageKey) !== null)
            localStorage.removeItem(localStorageKey);
    }
    if (loadLocal) {
        return (react_1.default.createElement(AlertDialog_1.AlertDialog, { id: "loadingLocal", title: "Would you like to load your previous session?", description: "Selecting Cancel will remove your previous session.", color: "primary", backLabel: "Cancel", forwardLabel: "Continue", onSubmit: handleLocalLoad, backOnOutsideClick: false }));
    }
    else if (loadServer) {
        return (react_1.default.createElement(core_1.Backdrop, { className: classes.backdrop, open: true },
            react_1.default.createElement(core_1.CircularProgress, { color: "primary" })));
    }
    else {
        return (react_1.default.createElement(core_1.Container, { maxWidth: props.maxWidth },
            react_1.default.createElement(core_1.Snackbar, { open: alert.open, autoHideDuration: alert.autoHideDuration, onClose: () => { setAlert(Object.assign(Object.assign({}, alert), { open: false })); }, anchorOrigin: alert.origin },
                react_1.default.createElement(lab_1.Alert, { severity: alert.severity }, alert.message || '')),
            react_1.default.createElement(core_1.Grid, { className: "d-flex flex-wrap" },
                react_1.default.createElement(AlertDialogButton_1.AlertDialogButton, { id: "refreshForm", className: "m-1", label: locked ? react_1.default.createElement(icons_1.Lock, { color: "primary" }) : react_1.default.createElement(icons_1.LockOpen, { color: "primary" }), title: locked ? "Unlock this form" : "Lock this form", description: locked ? "Unlocking this form will allow you to make changes." : "Lock this form to prevent unwanted changes.", color: "primary", backLabel: "Cancel", forwardLabel: locked ? "Unlock" : "Lock", onSubmit: handleLock }),
                react_1.default.createElement(AlertDialogButton_1.AlertDialogButton, { id: "saveForm", className: !locked ? "m-1 ml-auto" : "d-none", label: "Save", title: "You have selected to save your current process locally.", description: "Warning: If you have local storage disabled then your changes \r\n            will not be saved and deleting your local storage will erase this data.", color: "primary", backLabel: "Cancel", forwardLabel: "Save Locally", onSubmit: handleLocalChanges, disabled: props.handleSaveChanges === undefined }),
                react_1.default.createElement(AlertDialogButton_1.AlertDialogButton, { id: "printForm", className: !locked ? "m-1" : "d-none", label: "Print", title: "You have selected to print the form.", description: "This print feature was developed to work with Chrome and Microsoft Print to PDF. Other browsers and print method may not display correctly.", color: "primary", backLabel: "Cancel", forwardLabel: "Print", onSubmit: handlePrint })),
            react_1.default.createElement(core_1.Paper, { className: "p-3 print-paper", ref: printComponentRef },
                react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                    react_1.default.createElement(core_1.Typography, { variant: "h3", className: "text-center" }, props.title)),
                react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                    react_1.default.createElement(core_1.Divider, { className: "my-3" })),
                react_1.default.createElement(core_1.Grid, { container: true, spacing: 3, className: "print-container" },
                    react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                        props.forms.map((item, index) => {
                            const key = props.handleGenerateKey(item);
                            return (react_1.default.createElement(props.FormElement, { key: key, index: index, onChange: onChange, values: item, printMode: printMode, locked: locked, handleDelete: handleDelete, onChangeList: onChangeList, handleAddList: handleAddList, handleDeleteList: handleDeleteList }));
                        }),
                        props.forms.length < 1 &&
                            react_1.default.createElement(core_1.Grid, null,
                                react_1.default.createElement(core_1.Typography, { className: "text-center p-3" }, "There are currently no forms avaiable to edit."))),
                    react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                        props.forms.length < props.maxNodes && (react_1.default.createElement(core_1.Grid, { className: "d-flex" },
                            react_1.default.createElement(core_1.Button, { className: !locked ? "ml-auto" : "d-none", variant: "contained", color: "primary", onClick: props.handleAddNewItem }, "Add New Item"))),
                        react_1.default.createElement(core_1.Divider, { className: "my-3" })),
                    !locked &&
                        react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                            react_1.default.createElement(core_1.Grid, { className: "d-flex" },
                                react_1.default.createElement(AlertDialogButton_1.AlertDialogButton, { id: "saveForm", className: "mx-auto d-flex w-50 mb-3", btnClass: "w-100", label: "Submit", title: "You have selected to submit your information.", description: "This action will save this information to your user account.", color: "primary", backLabel: "Cancel", forwardLabel: "Submit", onSubmit: handleSubmit, disabled: props.handleSubmit === undefined })))))));
    }
}
exports.FormView = FormView;
//# sourceMappingURL=FormView.js.map