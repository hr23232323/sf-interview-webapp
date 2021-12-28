import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#00aff0',
    },
    secondary: {
      main: '#ef5350',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: '#ef5350',
      contrastText: '#fff',
    },
  },
});

export default theme;
