import React, { useState } from 'react';
import { IFormViewProps, FormView, isValidId } from 'material-ui-forms';
import Residence from '../../models/Residence';
import residencesController from '../../controllers/ResidenceController';
import { ResidenceForm } from './ResidenceForm';

export default function ResidenceFormView(props: IFormViewProps) {
  const [forms, setForms] = useState([] as Residence[]);
  const [uid, setUid] = useState(Number.MAX_SAFE_INTEGER);

  const handleLoad = async (local: boolean, data?: any): Promise<boolean> => {
    if (local && data) {
      setForms(data);
    }
    else {
      const residences = await residencesController.getAll();
      if (!residences) return false;
      setForms(residences);
    }
    return true;
  }

  const handleAddNewItem = async () => {
    forms.push({ residenceId: uid  } as Residence);
    setUid(curr => curr - 1);
    setForms([...forms]);
  }

  const handleSubmit = async (): Promise<boolean> => {
    let success = true;
    forms.forEach(async (residence, index) => {
      if (residence.residenceId !== undefined && isValidId(residence.residenceId)) {
        if (!await handleUpdate(residence.residenceId, residence)) {
          success = false;
        }
      }
      else {
        if (!await handleCreate(index, residence)) {
          success = false;
        }
      }
    });
    return success;
  }

  const handleCreate = async (index: number, residence: Residence): Promise<boolean> => {
    const residenceResponse = await residencesController.create({ ...residence, residenceId: undefined });
    if (residenceResponse) {
      //Flush Forms temp key for real key
      const tForms = forms;
      tForms[index] = residenceResponse
      setForms([])
      setForms(tForms);
      return true;
    }
    return false;
  }

  const handleUpdate = async (id: number, residence: Residence): Promise<boolean> => {
    const response = await residencesController.update(id, residence);
    return response;
  }

  const handleDelete = async (index: number): Promise<boolean> => {
    const residenceId = forms[index].residenceId;
    if (residenceId !== undefined && isValidId(residenceId)) {
      const response = await residencesController.delete(residenceId);
      if (!response) { return false; }
    }

    setTimeout(() => {
      const filteredResults = forms.filter((item) => item.residenceId !== residenceId);
      setForms(filteredResults);
    })

    return true;
  }

  const handleSaveChanges = async (): Promise<boolean> => {
    setForms([...forms]);
    return true;
  }

  const handleGenerateKey = (item: Residence) => {
    return `Residence${item.residenceId}`;
  }

  return (
    <FormView<Residence>
      FormElement={ResidenceForm}
      title={"Residences"}
      minNodes={1}
      maxNodes={3}
      forms={forms}
      handleLoad={handleLoad}
      handleSubmit={handleSubmit}
      handleAddNewItem={handleAddNewItem}
      handleSaveChanges={handleSaveChanges}
      handleDelete={handleDelete}
      handleGenerateKey={handleGenerateKey}
      defaultLocked={props.defaultLocked}
      submitButtonRef={props.submitButtonRef}
      onNext={props.onNext}
      hideLockButton={props.hideLockButton}
      hideSaveProgressButton={props.hideSaveProgressButton}
      hidePrintButton={props.hidePrintButton}
    />
  )
}