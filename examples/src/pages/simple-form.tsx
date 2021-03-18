import { Container, Grid, useTheme } from '@material-ui/core';
import React from 'react';
import SimpleForm from '../components/SimpleForm';

export default function SimpleFormPage () {
  const theme = useTheme();
  return (
    <Container style={{marginTop: theme.spacing(5)}}>
      <Grid container justify="center" alignItems="center">
        <div style={{maxWidth: 400}}>
          <SimpleForm />
        </div>
      </Grid>
    </Container>
  );
}
