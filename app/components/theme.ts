import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A237E',
      light: '#3F51B5',
      dark: '#0D1642',
    },
    secondary: {
      main: '#3F51B5',
      light: '#7986CB',
      dark: '#303F9F',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
    text: {
      primary: '#1A237E',
      secondary: '#3F51B5',
    },
  },
  typography: {
    fontFamily: [
      'PingFang SC',
      '-apple-system',
      'SF Pro SC',
      'SF Pro Text',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 600,
      letterSpacing: '-0.025em',
      fontFamily: 'PingFang SC',
      color: '#1A237E',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.025em',
      fontFamily: 'PingFang SC',
    },
    h3: {
      fontWeight: 500,
      fontFamily: 'PingFang SC',
    },
    h4: {
      fontWeight: 500,
      fontFamily: 'PingFang SC',
    },
    h5: {
      fontWeight: 500,
      fontFamily: 'PingFang SC',
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'PingFang SC',
    },
    body1: {
      fontFamily: 'PingFang SC',
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: 'PingFang SC',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: 'PingFang SC',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: 'PingFang SC',
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: 'PingFang SC',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '10px 24px',
          fontSize: '1rem',
          fontFamily: 'PingFang SC',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          boxShadow: '0 4px 6px rgba(26, 35, 126, 0.1)',
          '&:hover': {
            boxShadow: '0 6px 10px rgba(26, 35, 126, 0.2)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 10px rgba(26, 35, 126, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(26, 35, 126, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 8px 30px rgba(26, 35, 126, 0.15)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'PingFang SC',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'PingFang SC',
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#1A237E',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1A237E',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'PingFang SC',
          '&.Mui-focused': {
            color: '#1A237E',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'PingFang SC',
        },
        filled: {
          backgroundColor: 'rgba(26, 35, 126, 0.1)',
          color: '#1A237E',
          '&:hover': {
            backgroundColor: 'rgba(26, 35, 126, 0.2)',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#1A237E',
          '&:hover': {
            color: '#3F51B5',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(26, 35, 126, 0.1)',
        },
      },
    },
  },
});

export default theme; 