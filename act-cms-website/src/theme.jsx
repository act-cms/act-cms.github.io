import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'DIN, Arial, sans-serif',
    body1: {
      fontSize: '1.05rem',
    },
    h1: {
      fontFamily: 'DIN Condensed Bold, Arial, sans-serif',
      fontSize: '3.5rem',
      textAlign: 'center',
      paddingBottom: '3rem',
      paddingTop: '3rem',
    },
    h2: {
      fontFamily: 'DIN Condensed Bold, Arial, sans-serif',
      fontSize: '2rem',
    },
    h3: {
      fontFamily: 'DIN Condensed Bold, Arial, sans-serif',
      fontSize: '1.5rem',
    },
    h4: {
      fontFamily: 'DIN, Arial, sans-serif',
      fontSize: '1.15rem',
    },
  },

  palette: {
    mode: 'dark',
    primary: {
      main: '#ed1c24',
    },
    secondary: {
      main: '#1d35e7',
    },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#ffffff', 
          textDecoration: 'underline',
          textUnderlineOffset: '4px', 
          '&:hover': {
            fontWeight: 'bold', 
            textDecoration: 'underline',
            textDecorationThickness: '3px', 
            color: '#ffffff', 
          },
        },
      },
    },
  },
});

export default theme;
