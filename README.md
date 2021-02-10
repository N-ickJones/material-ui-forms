# material-ui-forms

## Author: Nicholas Jones

#### App is still in development. 
    It's not recommended to start using this package until it's first stable release.

#### Current Issues
    Need to decouple next router from package
    Need to add documentation to modules and readme
    Remove unused event in FormView then modify tsconfig.json
    Fully Test the print feature
    
    


#### Usage Example - FormView without sub forms
    The functions need to be modified to work with your api calls and data.
```ts
import React, { ChangeEvent, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { AlertDialogButton, AutoFreeField, CustomTextField, FormView, IFormProps, 
    isText, isValidId, usCityOptions, usStateOptions } from 'material-ui-forms';

//Custom Type for Agency Data
import Agency from '../../../models/profile/Agency';
//Controller that handles the Api Calls
import agenciesController from '../../../controllers/profile/AgenciesController';

export interface IAgencyFormViewProps { }

export default function AgencyFormView(props: IAgencyFormViewProps) {
  const [forms, setForms] = useState([] as Agency[]);
  
  //Unique ID to use until a server generated id is created. 
  //Since my server starts with the lowest integer number working up I start with the Highest working down.
  const [uid, setUid] = useState(Number.MAX_SAFE_INTEGER);

  const handleLoad = async (local: boolean, data?: any): Promise<boolean> => {
    if (local && data) {
      setForms(data);
    }
    else {
      const agencies = await agenciesController.getAll();
      if (!agencies) return false;
      setForms(agencies);
    }
    return true;
  }

  const handleAddNewItem = async () => {
    forms.push({ agencyId: uid } as Agency);
    setUid(uid - 1);
    setForms([...forms]);
  }

  const handleSubmit = async (): Promise<boolean> => {
    let success = true;
    forms.forEach(async (agency, index) => {
      if (agency.agencyId && isValidId(agency.agencyId)) {
        if (!await handleUpdate(agency.agencyId, agency)) {
          success = false;
        }
      }
      else {
        if (!await handleCreate(index, agency)) {
          success = false;
        }
      }
    });
    return success;
  }

  const handleCreate = async (index: number, agency: Agency): Promise<boolean> => {
    const agencyResponse = await agenciesController.create({ ...agency, agencyId: undefined });
    if (agencyResponse) {
      //Flush Forms temp key for real key
      const tForms = forms;
      tForms[index] = agencyResponse
      setForms([])
      setForms(tForms);
      return true;
    }
    return false;
  }

  const handleUpdate = async (id: number, agency: Agency): Promise<boolean> => {
    const response = await agenciesController.update(id, agency);
    return response;
  }

  const handleDelete = async (index: number): Promise<boolean> => {
    const agencyId = forms[index].agencyId;
    if (agencyId && isValidId(agencyId)) {
      const response = await agenciesController.delete(agencyId);
      if (!response) { return false; }
    }
    if (forms.length >= index) {
      setForms(forms.filter((_, i) => i !== index))
    }
    return true;
  }

  const handleSaveChanges = async (): Promise<boolean> => {
    setForms([...forms]);
    return true;
  }

  const handleGenerateKey = (item: Agency) => {
    return `Agency${item.agencyId}`;
  }

  return (
    <FormView<Agency>
      FormElement={AgencyForm}
      title={"Volunteer Agencies"}
      maxWidth={"md"}
      maxNodes={3}
      forms={forms}
      handleLoad={handleLoad}
      handleSubmit={handleSubmit}
      handleAddNewItem={handleAddNewItem}
      handleSaveChanges={handleSaveChanges}
      handleDelete={handleDelete}
      handleGenerateKey={handleGenerateKey}
    />
  )

}

//When creating the forms you must ensure that name and the generic object T (Agency in this case) fields match
export function AgencyForm(props: IFormProps<Agency>) {
  const title = "Agency";
  const {
    index,
    values,
    // use printMode to modify the look of material-ui when print is selected (using Grid breakpoints, chrome will use the xs value)
    printMode,
    locked,
  } = props;
  const handleChange = (e: ChangeEvent<HTMLInputElement | {}>, property: string, value: string | boolean) => {
    props.onChange(e, props.index, property, value);
  }
  const handleDelete = async () => {
    props.handleDelete && props.handleDelete(index);
  }
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid container item xs={12}>
          <Grid>
            <Typography variant="h5">{title} - {props.index + 1}</Typography>
          </Grid>
          <Grid className="ml-auto">
            <AlertDialogButton
              className={!locked ? "" : "d-none"}
              id="deleteForm"
              label="Delete"
              title={`Are you sure you want to delete this ${title}?`}
              description={`This will remove the ${title.toLowerCase()} from your profile.`}
              color="secondary"
              backLabel="Cancel"
              forwardLabel="Delete"
              onSubmit={handleDelete}
              disabled={props.handleDelete === undefined}
            />
          </Grid>
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CustomTextField
            placeholder="Enter a volunteer agency name"
            label="Name"
            
            {/* For this to work the name="here" and the property values.[here] must match */}
            name="name"
            onChange={handleChange}
            value={values.name}
            
            
            validators={[
              isText
            ]}
            locked={locked}
            required={true}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <AutoFreeField
            placeholder="Enter a city"
            label="City"
            name="city"
            onChange={handleChange}
            value={values.city}
            locked={locked}
            options={usCityOptions}
            required={true}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <AutoField
            label="State"
            name="state"
            onChange={handleChange}
            value={values.state}
            locked={locked}
            options={usStateOptions}
            required={true}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CustomTextField
            placeholder="Enter the duties performed"
            label="Duties"
            name="duties"
            onChange={handleChange}
            value={values.duties}
            validators={[
              isText
            ]}
            locked={locked}
            multiline={true}
            required={true}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CustomTextField
            placeholder="Enter your supervisor's name"
            label="Supervisor"
            name="supervisor"
            onChange={handleChange}
            value={values.supervisor}
            validators={[
              isText
            ]}
            locked={locked}
            required={true}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CustomTextField
            placeholder="Enter your start date"
            type="date"
            label="Start Date"
            name="startDate"
            onChange={handleChange}
            value={values.startDate}
            validators={[
            ]}
            locked={locked}
            required={true}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CustomTextField
            placeholder="Enter your end date"
            type="date"
            label="End Date"
            name="endDate"
            onChange={handleChange}
            value={values.endDate}
            validators={[
            ]}
            locked={locked}
            required={true}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

```
