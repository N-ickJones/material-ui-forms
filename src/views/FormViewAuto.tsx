import React, { ChangeEvent, useEffect, useState } from 'react';
import {
    Backdrop,
    Box,
    Button,
    CircularProgress,
    Divider,
    Grid,
    Paper,
    Theme,
    Typography,
} from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { Lock, LockOpen } from '@mui/icons-material';
import { decrypt, encrypt, formIsValid, uuidv4 } from '../functions/functions';
import { IFormProps } from '../interfaces/IFormProps';
import { useWarnIfUnsavedChanges } from '../hooks/useWarnIfUnsavedChanges';
import { AlertDialog } from '../components/AlertDialog';
import { AlertDialogButton } from '../components/AlertDialogButton';
import { PrintButton } from '../components';
import { useMuiPrinting } from '../hooks';
import { SnackBarComponent } from '../components/SnackBarComponent';
import { FormHandler } from '../handlers/FormHandler';

export interface IFormViewAutoProps<T> {
    title?: string;
    defaultLocked?: boolean;
    maxNodes?: number;
    minNodes?: number;
    FormElement?: (props: IFormProps<T>) => JSX.Element;

    formHandlerRef: React.MutableRefObject<FormHandler<T>>
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

export function FormViewAuto<T>(props: IFormViewAutoProps<T>) {
    const handler = props.formHandlerRef;
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
    const snackbar = SnackBarComponent(8000);

    useWarnIfUnsavedChanges(pendingChanges);
    const [paperStyle, printComponentRef, printMode, displayPrint, handlePrintRef] = useMuiPrinting();

    useEffect(() => {
        async function loadData() {
            if (localStorage.getItem(localStorageKey)) {
                setLoadLocal(true);
            }
            else {
                setLoadServer(true);
                await handler.current.load(false);
                setLoadServer(false);
            }
        }
        loadData();
    }, [])

    const onChange = (e: ChangeEvent<HTMLInputElement | {}>, index: number, property: string, value: string | boolean) => {
        if (locked) return;
        if (handler.current.forms)
            handler.current.forms[index] = { ...handler.current.forms[index], [property]: value }
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

        if (await handler.current.saveChanges()) {
            snackbar.setAlert({ ...snackbar.success, message: "Successfully saved your changes locally." });
            setPendingChanges(false);
        }
        else {
            snackbar.setAlert({ ...snackbar.success, message: "Unable to save your changes locally." });
        }
    }

    const handleLocalLoad = async (submit?: boolean) => {
        if (submit) {
            var cipherText = localStorage.getItem(localStorageKey);
            if (cipherText !== null) {
                const plainText = decrypt(cipherText, localStorageKey);
                if (await handler.current.load(true, JSON.parse(plainText))) {
                    snackbar.setAlert({ ...snackbar.success, message: "Successfully loaded previous changes." })
                }
                else {
                    snackbar.setAlert({ ...snackbar.error, message: "Unable to load previous changes." })
                }
            }
        }
        else {
            clearLocalStorage();
            setLoadServer(true);
            if (await handler.current.load(false)) {
                snackbar.setAlert({ ...snackbar.success, message: "Successfully loaded your information." })
            }
            else {
                snackbar.setAlert({ ...snackbar.error, message: "Unable to load your information." })
            }
            setLoadServer(false)
        }
        setLoadLocal(false);
    }

    const handleLocalChanges = async () => {
        if (locked) return;
        handler.current.forms && localStorage.setItem(localStorageKey, encrypt(JSON.stringify([...handler.current.forms]), localStorageKey))
        handleChanges();
    }

    const handleSubmit = async () => {
        if (locked) return;

        //Skip
        if (!pendingChanges) {
            if (handler.current.forms && props.minNodes !== undefined && handler.current.forms.length >= props.minNodes) {
                props.onNext && props.onNext();
                return;
            }
        }

        if (!(await formIsValid())) {
            snackbar.setAlert({ ...snackbar.error, message: "A validation error was detected in the form" })
        }
        else if (await handler.current.submit()) {
            if (props.minNodes !== undefined && handler.current.forms && handler.current.forms.length < props.minNodes) {
                snackbar.setAlert({ ...snackbar.error, message: props.minNodes <= 1 ? `${props.minNodes} submission is required` : `${props.minNodes} submissions are required` })
            }
            else {
                snackbar.setAlert({ ...snackbar.success, message: "Successfully sent changes to the server" })

                clearLocalStorage();
                setPendingChanges(false);

                //Let setPendingCHanges Fire
                setTimeout(async () => {
                    props.onNext && (await props.onNext());
                })
            }
        }
        else {
            snackbar.setAlert({ ...snackbar.error, message: "Unsuccessfully sent changes to the server" })
        }

    }

    const handleDelete = async (index: number) => {
        if (locked) return;

        if (await handler.current.delete(index)) {
            clearLocalStorage();
            snackbar.setAlert({ ...snackbar.success, message: "Successfully deleted the item." })
        }
        else {
            snackbar.setAlert({ ...snackbar.error, message: "Unable to delete the item." })
        }
    }

    function clearLocalStorage() {
        if (localStorage.getItem(localStorageKey) !== null)
            localStorage.removeItem(localStorageKey);
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
                <snackbar.component />

                {/* Button Group */}
                <Box p={1} display="flex" flexWrap="wrap" justifyContent="space-between">
                    <AlertDialogButton
                        id="refreshForm"
                        style={props.hideLockButton ? { display: "none" } : {}}
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
                            style={locked || props.hideSaveProgressButton ? { display: "none" } : {}}
                            label="Save Progress"
                            title="You have selected to save your current process locally."
                            description="Warning: If you have local storage disabled then your changes 
                                will not be saved and deleting your local storage will erase this data."
                            color="primary"
                            backLabel="Cancel"
                            forwardLabel="Save Locally"
                            onSubmit={handleLocalChanges}
                        //disabled={handler.current.saveChanges === undefined}
                        />
                        <Box ml={1}>
                            <PrintButton
                                style={locked || props.hidePrintButton ? { display: "none" } : {}}
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
                                {handler.current.forms && handler.current.forms.map((item: any, index: number) => {
                                    const key = handler.current.generateKey(item);
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

                                })} </Grid>


                            <Grid item xs={12}>
                                {handler.current.forms && handler.current.forms.length < (props.maxNodes ? props.maxNodes : 1) && (
                                    <Grid container>
                                        <Button
                                            className={!locked ? classes.marginLeftAuto : classes.displayNone}
                                            variant="contained"
                                            color="primary"
                                            onClick={handler.current.addNew}
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
                                        disabled={locked}
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