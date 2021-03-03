import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
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