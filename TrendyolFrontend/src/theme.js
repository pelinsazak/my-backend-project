import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E86E8F',
    },
    secondary: {
      main: '#A97EE0',
    },
    background: {
      default: '#F0D9E3',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#3A2029',
      secondary: '#8F6E7E',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;