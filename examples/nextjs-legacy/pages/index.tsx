import { Container, Grid, Typography } from '@mui/material';
import Head from 'next/head'
import React from 'react'

export default function Index() {
  return (
    <Grid>
      <Head>
        <title>material-ui-forms - Examples</title>
      </Head>
      <Container maxWidth="lg">
        <Grid container>
          <Typography></Typography>
        </Grid>
      </Container>
    </Grid>
  )
}