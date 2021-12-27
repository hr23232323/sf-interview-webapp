import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#00aff0',
    },
    secondary: {
      main: '#efb2b1',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: '#00aff0',
      contrastText: '#fff',
    },
  },
});

export default theme;
