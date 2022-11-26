import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline, Grid, ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';
import Navigation from '../components/navigation/Navigation';
import theme from '../theme';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Grid style={{minHeight: "100vh", minWidth: 320}}>
            <Head>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            </Head>
            <Navigation />
            <Grid className="mt-3">
              <Component {...pageProps} />
            </Grid>
          </Grid>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
