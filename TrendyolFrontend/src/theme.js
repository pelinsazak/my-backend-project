import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c06e9f',
      dark: '#95535D',
    },
    background: {
      default: '#ce90b8',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#3A2E31',
      secondary: '#8B7377',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;