//Last Updated: Feb 10th, 2021 v_1.0.10

//... other imports here
import { AlertDialogButton, CheckField, CustomTextField, FieldOption, FormView, IFormProps, isValidId } from 'material-ui-forms';

export default function JobApplicationFormView() {
  const [forms, setForms] = useState([] as JobApplication[]);
  const [uid, setUid] = useState(Number.MAX_SAFE_INTEGER);

  const handleLoad = async (local: boolean, data?: any): Promise<boolean> => {
    if (local && data) {
      setForms(data);
    }
    else {
        //My API includes the PreviousState/Qualfication one-many relations automatically. You might need to do multiple calls for the sub form data.
      const jobApplications = await jobApplicationsController.getAll();
      if (!jobApplications) return false;
      setForms(jobApplications);
    }
    return true;
  }

  const handleAddNewItem = async () => {
      //Add Empty List for new form
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
//...etc everything else the same as no subforms example
  

export function JobApplicationForm(props: IFormProps<JobApplication>) {
  const { index, values, printMode, locked } = props;
  const title = "JobApplication";
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>, property: string, value: string | boolean) => {
    props.onChange(e, props.index, property, value);
  }

  const handleDelete = async () => {
    props.handleDelete && props.handleDelete(index);
  }

  //Example of Loading some fieldoptions used in the form...  
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

  //#region CRUD Subform operations required
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

        /* Loading option data from API */}
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

        {/*Insert this in place like a normal field inside your form */}
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

   //...etc the rest of your form
        
SubForm example uses ISubFormProps interface
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