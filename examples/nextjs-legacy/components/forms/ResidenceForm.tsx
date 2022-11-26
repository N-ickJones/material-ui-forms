import React, { ChangeEvent } from 'react';
import { Box, Grid, Typography } from "@mui/material";
import { AlertDialogButton, AutoField, AutoFreeField, countryOptions, CustomTextField, 
    getOrdinal, IFormProps, isZip, residenceOptions, usCityOptions, usStateOptions } from 'material-ui-forms';
import Residence from '../../models/Residence';


export function ResidenceForm(props: IFormProps<Residence>) {
    const title = "Residence";
    const {
      index,
      values,
      onChange,
      printMode,
      locked,
    } = props;
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | {}>, property: string, value: string | boolean) => {
      onChange(e, props.index, property, value);
    }
    const handleDelete = async () => {
      props.handleDelete && props.handleDelete(index);
    }
  
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid container item xs={12}>
            <Grid>
              <Typography variant="h5">{title} - {props.index + 1 !== 1 && `${getOrdinal(props.index + 1)} `}Most Recent</Typography>
            </Grid>
            <Box ml="auto">
              <AlertDialogButton
                style={locked ? {display: "none"} : {}}
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
            </Box>
          </Grid>
          <Grid item xs={props.printMode ? 12 : 12}>
            <AutoField
              label="Type"
              name="type"
              onChange={handleChange}
              value={values.type}
              locked={locked}
              required={false}
              options={residenceOptions}
            />
          </Grid>
          <Grid item xs={props.printMode ? 12 : 12}>
            <CustomTextField
              placeholder="Enter the address line 1"
              label="Address Line 1"
              name="addressLine1"
              onChange={handleChange}
              value={values.addressLine1}
              validators={[
              ]}
              locked={locked}
              required={false}
            />
          </Grid>
          <Grid item xs={props.printMode ? 12 : 12}>
            <CustomTextField
              placeholder="Enter the address line 2"
              label="Address Line 2"
              name="addressLine2"
              onChange={handleChange}
              value={values.addressLine2}
              validators={[
              ]}
              locked={locked}
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
              required={false}
              options={usCityOptions}
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
              required={false}
            />
          </Grid>
          <Grid item xs={props.printMode ? 12 : 12}>
            <CustomTextField
              placeholder="Enter the zip code"
              label="Zip Code"
              name="zipCode"
              onChange={handleChange}
              value={values.zipCode}
              validators={[
                isZip
              ]}
              locked={locked}
              required={false}
            />
          </Grid>
          <Grid item xs={props.printMode ? 12 : 12}>
            <AutoField
              label="Country"
              name="country"
              onChange={handleChange}
              value={values.country}
              locked={locked}
              required={false}
              options={countryOptions}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }