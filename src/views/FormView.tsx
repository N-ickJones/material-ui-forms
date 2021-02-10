import React, { useEffect, useRef, useState } from 'react';
import { Backdrop, Button, CircularProgress, Container, createStyles, Divider, Grid, makeStyles, Paper, Snackbar, SnackbarOrigin, Theme, Typography } from '@material-ui/core';
import { useReactToPrint } from 'react-to-print';
import { Lock, LockOpen } from '@material-ui/icons';
import { Alert, AlertProps } from '@material-ui/lab';
import { sleep } from '../functions/functions';
import { IFormProps } from '../interfaces/IFormProps';
import { AlertState } from '../types/types';
import { useWarnIfUnsavedChanges } from '../hooks/useWarnIfUnsavedChanges';
import { AlertDialog } from '../fields/AlertDialog';
import { AlertDialogButton } from '../fields/AlertDialogButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

export interface IFormViewProps<T> {
  title: string;
  defaultLocked?: boolean;
  maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  maxNodes: number;
  FormElement: (props: IFormProps<T>) => JSX.Element;
  forms: T[];
  handleLoad: (local: boolean, data?: T[]) => Promise<boolean>;
  handleSubmit?: () => Promise<boolean>;
  handleAddNewItem?: () => Promise<void>;
  handleSaveChanges?: () => Promise<boolean>;
  handleDelete?: (index: number) => Promise<boolean>;
  handleGenerateKey: (item: T) => string;

}

export function FormView<T>(props: IFormViewProps<T>) {
  const localStorageKey = props.title.replace(' ' , '');
  const classes = useStyles();
  const printComponentRef = useRef();
  const [locked, setLocked] = useState(props.defaultLocked === undefined ? true : props.defaultLocked);
  const [printMode, setPrintMode] = useState(false);
  const [pendingChanges, setPendingChanges] = useState(false);
  const [loadLocal, setLoadLocal] = useState(false);
  const [loadServer, setLoadServer] = useState(false);
  const error = { open: true, severity: "error" as AlertProps['severity'], origin: { vertical: "bottom", horizontal: "left" } as SnackbarOrigin };
  const success = { open: true, severity: "success" as AlertProps['severity'],  origin: { vertical: "bottom", horizontal: "right" } as SnackbarOrigin };

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    autoHideDuration: 3000,
    origin: { horizontal: "right", vertical: "bottom" }
  } as AlertState);

  useWarnIfUnsavedChanges(pendingChanges);

  useEffect(() => {
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
  }, [])

  const displayPrint = useReactToPrint({
    bodyClass: "",
    copyStyles: true,
    documentTitle: `title`,
    content: () => printComponentRef.current || null,
  });

  const handlePrint = async () => {
    setPrintMode(true);
    displayPrint && displayPrint();
    await sleep(5000)
    setPrintMode(false);
  }

  const onChange = (index: number, property: string, value: string | boolean) => { //e: ChangeEvent<HTMLInputElement | {}>, 
    props.forms[index] = { ...props.forms[index], [property]: value }
    !pendingChanges && setPendingChanges(true);
  }

  const onChangeList = async (index: number, listProperty: string, listIndex: number, property: string, value: string | boolean) => {
    // @ts-ignore
    props.forms[index][listProperty][listIndex] = { ...props.forms[index][listProperty][listIndex], [property]: value }
    !pendingChanges && setPendingChanges(true);
  }

  const handleAddList = async (index: number, listProperty: string) => {
    // @ts-ignore
    let listIndex = props.forms[index][listProperty].length;
    // @ts-ignore
    props.forms[index][listProperty][listIndex] = { ...props.forms[index][listProperty][listIndex],  }
    await handleChanges();
  }

  const handleDeleteList = async (index: number, listProperty: string, listIndex: number) => {
    // @ts-ignore
    props.forms[index][listProperty] = props.forms[index][listProperty].filter((_, i) => i !== listIndex);
    await handleChanges();
    clearLocalStorage();
  }

  const handleLock = async () => {
    setLocked(!locked);
  }

  const handleChanges = async () => {
    if (props.handleSaveChanges && await props.handleSaveChanges()) {
      setAlert({ ...alert, ...success, message: "Successfully saved your changes locally." });
      setPendingChanges(false);
    }
    else {
      setAlert({ ...alert, ...success, message: "Unable to save your changes locally." });
    }
  }

  const handleLocalLoad = async (submit?: boolean) => {
    if (submit) {
      var storage = localStorage.getItem(localStorageKey);
      if (storage !== null) {
        if (await props.handleLoad(true, JSON.parse(storage))) {
          setAlert({ ...alert, ...success, message: "Successfully loaded previous changes." })
        }
        else {
          setAlert({ ...alert, ...error, message: "Unable to load previous changes." })
        }
      }
    }
    else {
      clearLocalStorage();
      setLoadServer(true);
      if (await props.handleLoad(false)) {
        setAlert({ ...alert, ...success, message: "Successfully loaded your information." })
      }
      else {
        setAlert({ ...alert, ...error, message: "Unable to load your information." })
      }
      setLoadServer(false)
    }
    setLoadLocal(false);
  }

  const handleLocalChanges = async () => {
    localStorage.setItem(localStorageKey, JSON.stringify([...props.forms]))
    handleChanges();
  }

  const handleSubmit = async () => {
    if (props.handleSubmit) {
      if (!await formValid()) {
        setAlert({ ...alert, ...error, message: "A validation error was detected in the form" })
      }
      else if (await props.handleSubmit()) {
        clearLocalStorage();
        setAlert({ ...alert, ...success, message: "Successfully sent changes to the server" })
      }
      else {
        setAlert({ ...alert, ...error, message: "Unsuccessfully sent changes to the server" })
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
    if (props.handleDelete) {
      if (await props.handleDelete(index)) {
        clearLocalStorage();
        setAlert({ ...alert, ...success, message: "Successfully deleted the item." })
      }
      else {
        setAlert({ ...alert, ...error, message: "Unable to delete the item." })
      }
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
      <Container maxWidth={props.maxWidth}>
        {/* Alert Snackbar */}
        <Snackbar
          open={alert.open}
          autoHideDuration={alert.autoHideDuration}
          onClose={() => { setAlert({ ...alert, open: false }) }}
          anchorOrigin={alert.origin}
        >
            <Alert severity={alert.severity}>
                {alert.message || ''}
            </Alert>
        </Snackbar>

        {/* Button Group */}
        <Grid className="d-flex flex-wrap">
          <AlertDialogButton
            id="refreshForm"
            className="m-1"
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
            className={!locked ? "m-1 ml-auto" : "d-none"}
            label="Save"
            title="You have selected to save your current process locally."
            description="Warning: If you have local storage disabled then your changes 
            will not be saved and deleting your local storage will erase this data."
            color="primary"
            backLabel="Cancel"
            forwardLabel="Save Locally"
            onSubmit={handleLocalChanges}
            disabled={props.handleSaveChanges === undefined}
          />
          <AlertDialogButton
            id="printForm"
            className={!locked ? "m-1" : "d-none"}
            label="Print"
            title="You have selected to print the form."
            description="This print feature was developed to work with Chrome and Microsoft Print to PDF. Other browsers and print method may not display correctly."
            color="primary"
            backLabel="Cancel"
            forwardLabel="Print"
            onSubmit={handlePrint}
          />
        </Grid>

        <Paper className={"p-3 print-paper"} ref={printComponentRef}>
          <Grid item xs={12}>
            <Typography variant="h3" className="text-center">{props.title}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider className="my-3" />
          </Grid>
          <Grid container spacing={3} className="print-container">

            {/* Form */}
            <Grid item xs={12}>

              {props.forms.map((item: any, index: number) => {
                const key = props.handleGenerateKey(item);
                return (
                  <props.FormElement
                    key={key}
                    index={index}
                    onChange={onChange}
                    values={item}
                    printMode={printMode}
                    locked={locked}
                    handleDelete={handleDelete}

                    onChangeList={onChangeList}
                    handleAddList={handleAddList}
                    handleDeleteList={handleDeleteList}
                  />
                )
              })}

              {props.forms.length < 1 && 
                <Grid>
                  <Typography className="text-center p-3">There are currently no forms avaiable to edit.</Typography>
                </Grid>
              }

            </Grid>
            <Grid item xs={12}>
              {props.forms.length < props.maxNodes && (
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
            {!locked &&
              <Grid item xs={12}>
                <Grid className="d-flex">
                  <AlertDialogButton
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
                    disabled={props.handleSubmit === undefined}
                  />
                </Grid>
              </Grid>
            }

          </Grid>
        </Paper>
      </Container>
    );
  }
}
