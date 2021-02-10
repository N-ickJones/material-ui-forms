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

#### Usage Example: FormView with Subform

```ts
import React, { ChangeEvent, useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import JobApplication from '../../../../models/profile/jobApplication/JobApplication';
import jobApplicationsController from '../../../../controllers/profile/jobApplication/JobApplicationsController';
import availableJobsController from '../../../../controllers/availableJobs/AvailableJobsController';
import { PreviousStateSubForm } from './PreviousStatesFormView';
import previousStatesController from '../../../../controllers/profile/jobApplication/PreviousStatesController';
import PreviousState from '../../../../models/profile/jobApplication/PreviousState';
import Qualification from '../../../../models/profile/jobApplication/Qualification';
import { QualificationSubForm } from './QualificationsFormView';
import qualificationsController from '../../../../controllers/profile/jobApplication/QualificationsController';
import { AlertDialogButton, CheckField, CustomTextField, FieldOption, FormView, IFormProps, isValidId } from 'material-ui-forms';

export interface IJobApplicationFormViewProps { }

export default function JobApplicationFormView(props: IJobApplicationFormViewProps) {
  const [forms, setForms] = useState([] as JobApplication[]);
  const [uid, setUid] = useState(Number.MAX_SAFE_INTEGER);

  const handleLoad = async (local: boolean, data?: any): Promise<boolean> => {
    if (local && data) {
      setForms(data);
    }
    else {
      const jobApplications = await jobApplicationsController.getAll();
      if (!jobApplications) return false;
      setForms(jobApplications);
    }
    return true;
  }

  const handleAddNewItem = async () => {
    forms.push({ 
      jobApplicationId: uid, 
      previousStates: [] as PreviousState[], 
      qualifications: [] as Qualification[] 
    } as JobApplication);
    setUid(uid - 1);
    setForms([...forms]);
  }

  const handleSubmit = async (): Promise<boolean> => {
    let success = true;
    forms.forEach(async (jobApplication, index) => {
      if (jobApplication.jobApplicationId && isValidId(jobApplication.jobApplicationId)) {
        if (!await handleUpdate(jobApplication.jobApplicationId, { ...jobApplication, previousStates: undefined })) {
          success = false;
        }
        else {
          if (success)
            success = await handleSubmit_PreviousStates(index, jobApplication);
          if (success)
            success = await handleSubmit_Qualfications(index, jobApplication);
        }
      }
      else {
        if (!await handleCreate(index, jobApplication)) {
          success = false;
        }
      }
    });

    return success;
  }

  const handleSubmit_PreviousStates = async (index: number, jobApplication: JobApplication) => {
    if (!jobApplication.previousStates) return true;
    let success = true;
    jobApplication.previousStates.forEach(async previousState => {
      if (previousState.previousStateId && isValidId(previousState.previousStateId)) {
        if(!await previousStatesController.update(previousState.previousStateId, previousState))
          success = false;
      }
      else {
        if(!await previousStatesController.create({ ...previousState, jobApplicationId: forms[index].jobApplicationId }))
          success = false;
      }
    });
    return success;
  }

  const handleSubmit_Qualfications = async (index: number, jobApplication: JobApplication) => {
    if (!jobApplication.qualifications) return true;
    let success = true;
    jobApplication.qualifications.forEach(async qualification => {
      if (qualification.qualificationId && isValidId(qualification.qualificationId)) {
        console.log('update')
        if(!await qualificationsController.update(qualification.qualificationId, qualification))
          success = false;
      }
      else {
        console.log('create')

        if(!await qualificationsController.create({ ...qualification, jobApplicationId: forms[index].jobApplicationId }))
          success = false;
      }
    });

    return success;
  }

  const handleCreate = async (index: number, jobApplication: JobApplication): Promise<boolean> => {
    const jobApplicationResponse = await jobApplicationsController.create({ ...jobApplication, jobApplicationId: undefined });
    if (jobApplicationResponse) {
      const tForms = forms;
      tForms[index] = jobApplicationResponse
      setForms([])
      setForms(tForms);
      return true;
    }
    return false;
  }

  const handleUpdate = async (id: number, jobApplication: JobApplication): Promise<boolean> => {
    const response = await jobApplicationsController.update(id, jobApplication);
    return response;
  }

  const handleDelete = async (index: number): Promise<boolean> => {
    const jobApplicationId = forms[index].jobApplicationId;
    if (jobApplicationId && isValidId(jobApplicationId)) {
      const response = await jobApplicationsController.delete(jobApplicationId);
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

  const handleGenerateKey = (item: JobApplication) => {
    return `JobApplication${item.jobApplicationId}`;
  }

  return (
    <FormView<JobApplication>
      FormElement={JobApplicationForm}
      title={"JobApplications"}
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

export function JobApplicationForm(props: IFormProps<JobApplication>) {
  const { index, values, printMode, locked } = props;
  const title = "JobApplication";
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>, property: string, value: string | boolean) => {
    props.onChange(e, props.index, property, value);
  }

  const handleDelete = async () => {
    props.handleDelete && props.handleDelete(index);
  }

  //#region AvailableJobs
  const [availableJobs, setAvailableJobs] = useState([] as FieldOption[]);
  useEffect(() => {
    const handleLoad = async () => {
      const availableJobs = await availableJobsController.getAll();
      if (!availableJobs) return false;
      let choices = [] as FieldOption[];
      availableJobs.forEach(job => {
        if (job.title && job.availableJobId)
          choices.push({ label: job.title, value: job.availableJobId?.toString() })
      })
      setAvailableJobs(choices);
    }
    handleLoad();
  }, []);
  //#endregion

  //#region CRUD Subform 
  const handleAddList = (listProperty: string) => (e: any) => {
    props.handleAddList && props.handleAddList(index, listProperty);
  }

  const handleChangeList = (listProperty: string, listIndex: number) => async (e: ChangeEvent<HTMLInputElement | {}>, property: string, value: string | boolean) => {
    props.onChangeList && props.onChangeList(index, listProperty, listIndex, property, value);
  }
  
  const handleDeleteList = (listProperty: string, listIndex: number, id?: number) => async () => {
    let success = true;
    if (id) {
      const switchResult = async (id: number) => {
        switch(listProperty) {
          case "previousStates":
            return await previousStatesController.delete(id) !== null;
          case "qualifications":
            return await qualificationsController.delete(id) !== null;
          default:
            return false;
        }
      }
      success = await switchResult(id);
    }

    if (success) {
      props.handleDeleteList && props.handleDeleteList(index, listProperty, listIndex);
    }
  }
  //#endregion

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
        {availableJobs.length > 0 ? (
          <CustomTextField
            placeholder="Select an available job"
            label="Job Position"
            name="availableJobId"
            onChange={handleChange}
            value={values.availableJobId?.toString()}
            locked={locked}
            select={true}
            options={availableJobs}
            disableSelectNone={true}
          />
          ) : <p>Loading available jobs</p>}
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CheckField
            label="PreDrugTest"
            name="preDrugTest"
            onChange={handleChange}
            value={values.preDrugTest}
            locked={locked}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CheckField
            label="AnnualDrugTest"
            name="annualDrugTest"
            onChange={handleChange}
            value={values.annualDrugTest}
            locked={locked}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CheckField
            label="MedicalExclusion"
            name="medicalExclusion"
            onChange={handleChange}
            value={values.medicalExclusion}
            locked={locked}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CustomTextField
            type="date"
            label="Start Date"
            name="startDate"
            onChange={handleChange}
            value={values.startDate}
            locked={locked}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CustomTextField
            placeholder="Enter your work length"
            label="Work Length"
            name="workLength"
            onChange={handleChange}
            value={values.workLength}
            validators={[
            ]}
            locked={locked}
            required={true}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CustomTextField
            placeholder="Enter your work schedule"
            label="Work Schedule"
            name="workSchedule"
            onChange={handleChange}
            value={values.workSchedule}
            validators={[
            ]}
            locked={locked}
            required={true}
          />
        </Grid>

        {/* Previous States */}
        <Grid container item xs={props.printMode ? 12 : 12}>
          <Typography className="mb-3">Enter your previous states</Typography>
          {values.previousStates?.map((item: PreviousState, listIndex: number) => (
            <PreviousStateSubForm
              key={`previousState${listIndex}`}
              locked={props.locked}
              listIndex={listIndex}
              item={item}
              handleChangeList={handleChangeList}
              handleDeleteList={handleDeleteList}
            />
          ))}
          <Button 
            className={values.previousStates && values.previousStates?.length < 3 ? "" : "d-none"} 
            onClick={handleAddList('previousStates')}
          >Add</Button>
        </Grid>

        {/* Qualifications */}
        <Grid container item xs={props.printMode ? 12 : 12}>
          <Typography className="mb-3">Enter any additional qualfications</Typography>
          {values.qualifications?.map((item: Qualification, listIndex: number) => (
            <QualificationSubForm
              key={`qualifications${listIndex}`}
              locked={props.locked}
              listIndex={listIndex}
              item={item}
              handleChangeList={handleChangeList}
              handleDeleteList={handleDeleteList}
            />
          ))}
          <Button 
            className={values.qualifications && values.qualifications?.length < 3 ? "" : "d-none"} 
            onClick={handleAddList('qualifications')}
          >Add</Button>
        </Grid>

        <Grid item xs={props.printMode ? 12 : 12}>
          <CheckField
            label="RequirementsAware"
            name="requirementsAware"
            onChange={handleChange}
            value={values.requirementsAware}
            locked={locked}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CheckField
            label="RequirementsAble"
            name="requirementsAble"
            onChange={handleChange}
            value={values.requirementsAble}
            locked={locked}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CheckField
            label="NeedAccomidation"
            name="needAccomidation"
            onChange={handleChange}
            value={values.needAccomidation}
            locked={locked}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CustomTextField
            placeholder="Enter your accomidation description"
            label="Accomidation Needed"
            name="accomidationNeeded"
            onChange={handleChange}
            value={values.accomidationNeeded}
            validators={[

            ]}
            locked={locked}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CheckField
            label="Signiture"
            name="signiture"
            onChange={handleChange}
            value={values.signiture}
            locked={locked}
          />
        </Grid>
        <Grid item xs={props.printMode ? 12 : 12}>
          <CustomTextField
            type="date"
            label="Last Updated"
            name="lastUpdated"
            onChange={handleChange}
            value={values.lastUpdated}
            locked={locked}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
```

#### SubForm example

```ts 
export function PreviousStateSubForm(props: ISubFormProps<PreviousState>) {
  return (
    <Grid className="d-flex mb-3 w-100">
      <AutoField 
          label="State"
          name="name"
          onChange={props.handleChangeList("previousStates", props.listIndex)}
          value={props.item.name}
          locked={props.locked}
          options={usStateOptions}
          required={true}
      />
      <AlertDialogButton
        className={!props.locked ? "" : "d-none"}
        variant="text"
        btnClass="h-100"
        id="deleteForm"
        label="Delete"
        title={`Are you sure you want to delete this previous state?`}
        description={`This will remove the previous state from your job Application.`}
        color="secondary"
        backLabel="Cancel"
        forwardLabel="Delete"
        onSubmit={props.handleDeleteList("previousStates", props.listIndex, props.item.previousStateId)}
        disabled={props.handleDeleteList === undefined}
      />
    </Grid>
  )
}


```