import React, { ChangeEvent, useEffect, useState } from 'react';
import { Backdrop, Button, CircularProgress, createStyles, Divider, Grid, makeStyles, Paper, Snackbar, SnackbarOrigin, Theme, Typography } from '@material-ui/core';
import { Lock, LockOpen } from '@material-ui/icons';
import { Alert, AlertProps } from '@material-ui/lab';
import { decrypt, encrypt, uuidv4 } from '../functions/functions';
import { IFormProps } from '../interfaces/IFormProps';
import { AlertState } from '../types/types';
import { useWarnIfUnsavedChanges } from '../hooks/useWarnIfUnsavedChanges';
import { AlertDialog } from '../components/AlertDialog';
import { AlertDialogButton } from '../components/AlertDialogButton';
import { PrintButton } from '../components';
import { useMuiPrinting } from '../hooks';

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
  }),
);

export function FormView<T>(props: IFormViewProps<T>) {
  const localStorageKey = props.title ? props.title.replace(" " , "") : uuidv4();
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
    origin: { vertical: "bottom", horizontal: "left" 
  } as SnackbarOrigin };
  const success = { 
    open: true, 
    autoHideDuration: autoHideDuration,
    severity: "success" as AlertProps['severity'], 
    origin: { vertical: "bottom", horizontal: "right" 
  } as SnackbarOrigin };

  useWarnIfUnsavedChanges(pendingChanges);
  const [ paperStyle, printComponentRef, printMode, displayPrint, handlePrintRef ] = useMuiPrinting();

  useEffect(() => {
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
    props.forms[index][listProperty][listIndex] = { ...props.forms[index][listProperty][listIndex],  }
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

    if (props.handleSaveChanges && await props.handleSaveChanges()) {
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
        if (props.handleLoad && await props.handleLoad(true, JSON.parse(plainText))) {
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
      if (props.handleLoad && await props.handleLoad(false)) {
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
      if (!await formValid()) {
        setAlert({ ...error, message: "A validation error was detected in the form" })
      }
      else if (await props.handleSubmit()) {
        if (props.minNodes && props.forms && props.forms.length < props.minNodes) {
          setAlert({ ...error, message: props.minNodes <= 1 ? `${props.minNodes} submission is required` : `${props.minNodes} submissions are required` })
        }
        else {
          clearLocalStorage();
          setAlert({ ...success, message: "Successfully sent changes to the server" })
          props.onNext && await props.onNext();
        }
      }
      else {
        setAlert({ ...error, message: "Unsuccessfully sent changes to the server" })
      }
    }
  }

  const formValid = async () => {
    const inputs = document.getElementsByTagName('input');
    for(let i = 0; i < inputs.length; i++) {
      const input = inputs[i];

      if(input.hasAttribute('aria-invalid') && input.getAttribute('aria-invalid') === "true") {
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
    setAlert({...alert, open: false});
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
      <Grid>
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
        <Grid className="d-flex flex-wrap">
          <AlertDialogButton
            id="refreshForm"
            className={props.hideLockButton ? "d-none" : "m-1"}
            label={locked ? <Lock color="primary" /> : <LockOpen color="primary" />}
            title={locked ? "Unlock this form" : "Lock this form"}
            description={locked ? "Unlocking this form will allow you to make changes." : "Lock this form to prevent unwanted changes."}
            color="primary"
            backLabel="Cancel"
            forwardLabel={locked ? "Unlock" : "Lock"}
            onSubmit={handleLock}
          />
          <AlertDialogButton
            id="saveForm"
            className={locked || props.hideSaveProgressButton ? "d-none" : "m-1 ml-auto"}
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

          <PrintButton 
            className={locked || props.hidePrintButton ? "d-none" : "m-1"}
            displayPrint={displayPrint}
          />
        </Grid>

        <Paper className={"p-3 print-paper"} ref={printComponentRef} style={paperStyle}>
          <Grid item xs={12}>
            <Typography variant="h3" className="text-center">{props.title}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider className="my-3" />
          </Grid>
          <Grid container spacing={3} className="print-container">

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
                  <Typography className="text-center p-3">There are currently no forms to edit.</Typography>
                </Grid>
              }
              {!props.FormElement && <Grid><Typography className="text-center p-3">Development Error: Form Element is not defined.</Typography></Grid>}
              {!props.forms && <Grid><Typography className="text-center p-3">Development Error: Forms is not defined</Typography></Grid>}
            </Grid>
            <Grid item xs={12}>
              {props.forms && props.forms.length < (props.maxNodes ? props.maxNodes : 1) && (
                <Grid className="d-flex">
                  <Button
                    className={!locked ? "ml-auto" : "d-none"}
                    variant="contained"
                    color="primary"
                    onClick={props.handleAddNewItem}
                  >Add New Item</Button>
                </Grid>
              )}
              <Divider className="my-3" />
            </Grid>
            
            {/* Bottom Submit Button */}
            <Grid item xs={12} className={locked || props.submitButtonRef ? "d-none" : ""}>
              <Grid className="d-flex">
                <AlertDialogButton
                  submitButtonRef={props.submitButtonRef}
                  id="saveForm"
                  className="mx-auto d-flex w-50 mb-3"
                  btnClass="w-100"
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
        </Paper>
      </Grid>
    );
  }
}