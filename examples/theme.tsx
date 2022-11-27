import { createTheme, responsiveFontSizes, adaptV4Theme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#002856",
    },
    secondary: {
      main: "#e66c17",
    },
  },
});
 
theme = responsiveFontSizes(theme);

export default theme;