import React, { ChangeEvent, useEffect, useState } from 'react';
import {
    Backdrop,
    Box,
    Button,
    CircularProgress,
    Divider,
    Grid,
    Paper,
    Snackbar,
    SnackbarOrigin,
    Theme,
    Typography,
} from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { Lock, LockOpen } from '@mui/icons-material';
import { Alert } from '@mui/material';
import { AlertProps } from '@mui/lab';
import { decrypt, encrypt, uuidv4 } from 'material-ui-forms';
import { IFormProps } from 'material-ui-forms';
import { AlertState } from 'material-ui-forms';
import { useWarnIfUnsavedChanges } from 'material-ui-forms';
import { AlertDialog } from 'material-ui-forms';
import { AlertDialogButton } from 'material-ui-forms';
import { PrintButton } from 'material-ui-forms';
import { useMuiPrinting } from 'material-ui-forms';

export interface IFormViewProps<T> {
    title?: string;
    forms?: T[];
    defaultLocked?: boolean;
    maxNodes?: number;
    minNodes?: number;
    FormElement?: (props: IFormProps<T>) => JSX.Element;
    handleLoad?: (local: boolean, data?: T[]) => Promise<boolean>;
    handleGenerateKey?: (item: T) => string;
    handleSubmit?: () => Promise<boolean>;
    handleAddNewItem?: () => Promise<void>;
    handleSaveChanges?: () => Promise<boolean>;
    handleDelete?: (index: number) => Promise<boolean>;
    onNext?: () => Promise<void>;

    submitButtonRef?: React.MutableRefObject<HTMLButtonElement>;
    hideLockButton?: boolean;
    hideSaveProgressButton?: boolean;
    hidePrintButton?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    }),
);

export function FormView<T>(props: IFormViewProps<T>) {
    const localStorageKey = props.title ? props.title.replace(" ", "") : uuidv4();
    const classes = useStyles();
    //const printComponentRef = useRef();
    const [locked, setLocked] = useState(
        props.defaultLocked === undefined ? false : (
            props.defaultLocked ? (
                props.hideLockButton ? false : true
            ) : false
        )
    );
    //const [printMode, setPrintMode] = useState(false);
    const [pendingChanges, setPendingChanges] = useState(false);
    const [loadLocal, setLoadLocal] = useState(false);
    const [loadServer, setLoadServer] = useState(false);
    const autoHideDuration = 8000;
    const [alert, setAlert] = useState({
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

    useWarnIfUnsavedChanges(pendingChanges);
    const [paperStyle, printComponentRef, printMode, displayPrint, handlePrintRef] = useMuiPrinting();

    useEffect(() => {
        async function loadData() {
            if (localStorage.getItem(localStorageKey)) {
                setLoadLocal(true);
            }
            else {
                setLoadServer(true);
                props.handleLoad && (await props.handleLoad(false));
                setLoadServer(false);
            }
        }
        loadData();
    }, [])

    const onChange = (e: ChangeEvent<HTMLInputElement | {}>, index: number, property: string, value: string | boolean) => {
        if (locked) return;
        if (props.forms)
            props.forms[index] = { ...props.forms[index], [property]: value }
        !pendingChanges && setPendingChanges(true);
    }

    const onChangeList = async (index: number, listProperty: string, listIndex: number, property: string, value: string | boolean) => {
        if (locked) return;

        // @ts-ignore
        props.forms[index][listProperty][listIndex] = { ...props.forms[index][listProperty][listIndex], [property]: value }
        !pendingChanges && setPendingChanges(true);
    }

    const handleAddList = async (index: number, listProperty: string) => {
        if (locked) return;
        // @ts-ignore
        let listIndex = props.forms[index][listProperty].length;
        // @ts-ignore
        props.forms[index][listProperty][listIndex] = { ...props.forms[index][listProperty][listIndex], }
        await handleChanges();
    }

    const handleDeleteList = async (index: number, listProperty: string, listIndex: number) => {
        if (locked) return;
        // @ts-ignore
        props.forms[index][listProperty] = props.forms[index][listProperty].filter((_, i) => i !== listIndex);
        await handleChanges();
        clearLocalStorage();
    }

    const handleLock = async () => {
        setLocked(!locked);
    }

    const handleChanges = async () => {
        if (locked) return;

        if (props.handleSaveChanges && (await props.handleSaveChanges())) {
            setAlert({ ...success, message: "Successfully saved your changes locally." });
            setPendingChanges(false);
        }
        else {
            setAlert({ ...success, message: "Unable to save your changes locally." });
        }
    }

    const handleLocalLoad = async (submit?: boolean) => {
        if (submit) {
            var cipherText = localStorage.getItem(localStorageKey);
            if (cipherText !== null) {
                const plainText = decrypt(cipherText, localStorageKey);
                if (props.handleLoad && (await props.handleLoad(true, JSON.parse(plainText)))) {
                    setAlert({ ...success, message: "Successfully loaded previous changes." })
                }
                else {
                    setAlert({ ...error, message: "Unable to load previous changes." })
                }
            }
        }
        else {
            clearLocalStorage();
            setLoadServer(true);
            if (props.handleLoad && (await props.handleLoad(false))) {
                setAlert({ ...success, message: "Successfully loaded your information." })
            }
            else {
                setAlert({ ...error, message: "Unable to load your information." })
            }
            setLoadServer(false)
        }
        setLoadLocal(false);
    }

    const handleLocalChanges = async () => {
        if (locked) return;
        props.forms && localStorage.setItem(localStorageKey, encrypt(JSON.stringify([...props.forms]), localStorageKey))
        handleChanges();
    }

    const handleSubmit = async () => {
        if (locked) return;

        if (!pendingChanges) {
            if (props.forms && props.minNodes && props.forms.length >= props.minNodes) {
                props.onNext && props.onNext();
                return;
            }
        }

        if (props.handleSubmit) {
            if (!(await formValid())) {
                setAlert({ ...error, message: "A validation error was detected in the form" })
            }
            else if (await props.handleSubmit()) {
                if (props.minNodes && props.forms && props.forms.length < props.minNodes) {
                    setAlert({ ...error, message: props.minNodes <= 1 ? `${props.minNodes} submission is required` : `${props.minNodes} submissions are required` })
                }
                else {
                    clearLocalStorage();
                    setAlert({ ...success, message: "Successfully sent changes to the server" })
                    setPendingChanges(false);
                    props.onNext && (await props.onNext());
                }
            }
            else {
                setAlert({ ...error, message: "Unsuccessfully sent changes to the server" })
            }
        }
    }

    const formValid = async () => {
        const inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];

            if (input.hasAttribute('aria-invalid') && input.getAttribute('aria-invalid') === "true") {
                const parent = input.parentElement;
                if (parent)
                    parent.classList.add('Mui-focused')
                return false;
            }

            if ((input.hasAttribute('required') && input.value === "")) {
                const inputParent = input.parentElement;
                //Outer Div
                if (inputParent) {
                    inputParent.classList.add('Mui-focused', 'Mui-error')
                    //Outer Label
                    const componentParent = inputParent.parentElement;
                    if (componentParent) {
                        componentParent.firstElementChild?.classList.add('Mui-focused', 'Mui-error')
                    }
                }
                return false;
            }

        }
        return true;
    }

    const handleDelete = async (index: number) => {
        if (locked) return;

        if (props.handleDelete) {
            if (await props.handleDelete(index)) {
                clearLocalStorage();
                setAlert({ ...success, message: "Successfully deleted the item." })
            }
            else {
                setAlert({ ...error, message: "Unable to delete the item." })
            }
        }
    }

    function clearLocalStorage() {
        if (localStorage.getItem(localStorageKey) !== null)
            localStorage.removeItem(localStorageKey);
    }

    const handleCloseAlert = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert({ ...alert, open: false });
    }

    if (loadLocal) {
        return (
            <AlertDialog
                id="loadingLocal"
                title="Would you like to load your previous session?"
                description="Selecting Cancel will remove your previous session."
                color="primary"
                backLabel="Cancel"
                forwardLabel="Continue"
                onSubmit={handleLocalLoad}
                backOnOutsideClick={false}
            />
        )
    }
    else if (loadServer) {
        return (
            <Backdrop className={classes.backdrop} open={true}>
                <CircularProgress color="primary" />
            </Backdrop>
        )
    }
    else {

        return (
            <>
                {/* Alert Snackbar */}
                <Snackbar
                    open={alert.open}
                    autoHideDuration={alert.autoHideDuration}
                    onClose={handleCloseAlert}
                    anchorOrigin={alert.origin}
                >
                    <Alert severity={alert.severity}>
                        {alert.message}
                    </Alert>
                </Snackbar>

                {/* Button Group */}
                <Box p={1} display="flex" flexWrap="wrap" justifyContent="space-between">
                    <AlertDialogButton
                        id="refreshForm"
                        style={props.hideLockButton ? {display: "none"} : {}}
                        label={locked ? <Lock color="primary" /> : <LockOpen color="primary" />}
                        title={locked ? "Unlock this form" : "Lock this form"}
                        description={locked ? "Unlocking this form will allow you to make changes." : "Lock this form to prevent unwanted changes."}
                        color="primary"
                        backLabel="Cancel"
                        forwardLabel={locked ? "Unlock" : "Lock"}
                        onSubmit={handleLock}
                    />
                    <Box display="flex">
                        <AlertDialogButton
                            id="saveForm"
                            style={locked || props.hideSaveProgressButton ? {display: "none"} : {}}
                            label="Save Progress"
                            title="You have selected to save your current process locally."
                            description="Warning: If you have local storage disabled then your changes 
                                will not be saved and deleting your local storage will erase this data."
                            color="primary"
                            backLabel="Cancel"
                            forwardLabel="Save Locally"
                            onSubmit={handleLocalChanges}
                            disabled={props.handleSaveChanges === undefined}
                        />
                        <Box ml={1}>
                            <PrintButton
                                style={locked || props.hidePrintButton ? {display: "none"} : {}}
                                displayPrint={displayPrint}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Printable Form Area */}
                <Paper ref={printComponentRef} style={printMode ? paperStyle : {}}>
                    <Box p={printMode ? 0 : 3}>

                        <Grid item xs={12}>
                            <Typography variant="h3" align="center">{props.title}</Typography>
                        </Grid>

                        <Box width="100%" my={3}>
                            <Divider />
                        </Box>

                        <Grid container spacing={3}>

                            {/* Forms */}
                            <Grid item xs={12}>
                                {props.forms && props.forms.map((item: any, index: number) => {
                                    const key = props.handleGenerateKey ? props.handleGenerateKey(item) : `${localStorageKey}${index}`
                                    if (props.FormElement) {
                                        return (
                                            <props.FormElement
                                                key={key}
                                                index={index}
                                                locked={locked}
                                                printMode={printMode}
                                                values={item}
                                                handleAddList={handleAddList}
                                                handleDelete={handleDelete}
                                                handleDeleteList={handleDeleteList}
                                                handlePrintRef={handlePrintRef}
                                                onChangeList={onChangeList}
                                                onChange={onChange}
                                            />
                                        )
                                    }
                                    else {
                                        return (<></>)
                                    }
                                })}
                                {props.forms && props.forms.length < 1 &&
                                    <Grid>
                                        <Typography align="center" className={classes.paddingThree}>There are currently no forms to edit.</Typography>
                                    </Grid>
                                }
                                {!props.FormElement && <Grid><Typography align="center" className={classes.paddingThree}>Development Error: Form Element is not defined.</Typography></Grid>}
                                {!props.forms && <Grid><Typography align="center" className={classes.paddingThree}>Development Error: Forms is not defined</Typography></Grid>}
                            </Grid>
                            <Grid item xs={12}>
                                {props.forms && props.forms.length < (props.maxNodes ? props.maxNodes : 1) && (
                                    <Grid container>
                                        <Button
                                            className={!locked ? classes.marginLeftAuto : classes.displayNone}
                                            variant="contained"
                                            color="primary"
                                            onClick={props.handleAddNewItem}
                                        >Add New Item</Button>
                                    </Grid>
                                )}
                                <Box width="100%" my={3}>
                                    <Divider />
                                </Box>
                            </Grid>

                            {/* Bottom Submit Button */}
                            <Grid item xs={12} style={locked || props.submitButtonRef ? { display: "none" } : {}}>
                                <Grid container>
                                    <AlertDialogButton
                                        submitButtonRef={props.submitButtonRef}
                                        id="saveForm"
                                        style={{
                                            display: "flex",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            marginBottom: "0.5em",
                                            width: "50%",
                                        }}
                                        btnStyle={{ width: "100%" }}
                                        label="Submit"
                                        title="You have selected to submit your information."
                                        description="This action will save this information to your user account."
                                        color="primary"
                                        backLabel="Cancel"
                                        forwardLabel="Submit"
                                        onSubmit={handleSubmit}
                                        disabled={props.handleSubmit === undefined || locked}
                                        pendingChanges={pendingChanges}
                                        allowSkip={true}
                                    />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Box>
                </Paper>
            </>
        );
    }
}

/*
.padding-xs { padding: .25em; }
.padding-sm { padding: .5em; }
.padding-md { padding: 1em; }
.padding-lg { padding: 1.5em; }
.padding-xl { padding: 3em; }

.padding-x-xs { padding: .25em 0; }
.padding-x-sm { padding: .5em 0; }
.padding-x-md { padding: 1em 0; }
.padding-x-lg { padding: 1.5em 0; }
.padding-x-xl { padding: 3em 0; }

.padding-y-xs { padding: 0 .25em; }
.padding-y-sm { padding: 0 .5em; }
.padding-y-md { padding: 0 1em; }
.padding-y-lg { padding: 0 1.5em; }
.padding-y-xl { padding: 0 3em; }

.padding-top-xs { padding-top: .25em; }
.padding-top-sm { padding-top: .5em; }
.padding-top-md { padding-top: 1em; }
.padding-top-lg { padding-top: 1.5em; }
.padding-top-xl { padding-top: 3em; }

.padding-right-xs { padding-right: .25em; }
.padding-right-sm { padding-right: .5em; }
.padding-right-md { padding-right: 1em; }
.padding-right-lg { padding-right: 1.5em; }
.padding-right-xl { padding-right: 3em; }

.padding-bottom-xs { padding-bottom: .25em; }
.padding-bottom-sm { padding-bottom: .5em; }
.padding-bottom-md { padding-bottom: 1em; }
.padding-bottom-lg { padding-bottom: 1.5em; }
.padding-bottom-xl { padding-bottom: 3em; }

.padding-left-xs { padding-left: .25em; }
.padding-left-sm { padding-left: .5em; }
.padding-left-md { padding-left: 1em; }
.padding-left-lg { padding-left: 1.5em; }
.padding-left-xl { padding-left: 3em; }

.margin-xs { margin: .25em; }
.margin-sm { margin: .5em; }
.margin-md { margin: 1em; }
.margin-lg { margin: 1.5em; }
.margin-xl { margin: 3em; }

.margin-x-xs { margin: .25em 0; }
.margin-x-sm { margin: .5em 0; }
.margin-x-md { margin: 1em 0; }
.margin-x-lg { margin: 1.5em 0; }
.margin-x-xl { margin: 3em 0; }

.margin-y-xs { margin: 0 .25em; }
.margin-y-sm { margin: 0 .5em; }
.margin-y-md { margin: 0 1em; }
.margin-y-lg { margin: 0 1.5em; }
.margin-y-xl { margin: 0 3em; }

.margin-top-xs { margin-top: .25em; }
.margin-top-sm { margin-top: .5em; }
.margin-top-md { margin-top: 1em; }
.margin-top-lg { margin-top: 1.5em; }
.margin-top-xl { margin-top: 3em; }

.margin-right-xs { margin-right: .25em; }
.margin-right-sm { margin-right: .5em; }
.margin-right-md { margin-right: 1em; }
.margin-right-lg { margin-right: 1.5em; }
.margin-right-xl { margin-right: 3em; }

.margin-bottom-xs { margin-bottom: .25em; }
.margin-bottom-sm { margin-bottom: .5em; }
.margin-bottom-md { margin-bottom: 1em; }
.margin-bottom-lg { margin-bottom: 1.5em; }
.margin-bottom-xl { margin-bottom: 3em; }

.margin-left-xs { margin-left: .25em; }
.margin-left-sm { margin-left: .5em; }
.margin-left-md { margin-left: 1em; }
.margin-left-lg { margin-left: 1.5em; }
.margin-left-xl { margin-left: 3em; }


*/