import { Container, Grid, useTheme } from '@mui/material';
import React from 'react';
import SimpleForm from '../components/SimpleForm';

export default function SimpleFormPage () {
  const theme = useTheme();
  return (
    <Container style={{marginTop: theme.spacing(5)}}>
      <Grid container justifyContent="center" alignItems="center">
        <div style={{maxWidth: 400}}>
          <SimpleForm />
        </div>
      </Grid>
    </Container>
  );
}
