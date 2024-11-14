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
          borderColor: '#1A237E',
          color: '#1A237E',
          '&:hover': {
            borderWidth: '2px',
            borderColor: '#3F51B5',
            backgroundColor: 'rgba(26, 35, 126, 0.04)',
          },
        },
        text: {
          color: '#1A237E',
          '&:hover': {
            backgroundColor: 'rgba(26, 35, 126, 0.04)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            fontFamily: 'PingFang SC',
            '& fieldset': {
              borderColor: 'rgba(26, 35, 126, 0.2)',
              transition: 'all 0.3s ease',
            },
            '&:hover fieldset': {
              borderColor: '#1A237E',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1A237E',
              borderWidth: '2px',
            },
            '& input': {
              color: '#1A237E',
              '&::placeholder': {
                color: 'rgba(26, 35, 126, 0.5)',
                opacity: 1,
              },
            },
            '& textarea': {
              color: '#1A237E',
              '&::placeholder': {
                color: 'rgba(26, 35, 126, 0.5)',
                opacity: 1,
              },
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(26, 35, 126, 0.7)',
            '&.Mui-focused': {
              color: '#1A237E',
            },
          },
          '& .MuiInputAdornment-root': {
            color: 'rgba(26, 35, 126, 0.5)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            color: 'rgba(26, 35, 126, 0.5)',
            opacity: 1,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: 'rgba(26, 35, 126, 0.5)',
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
        outlined: {
          borderColor: 'rgba(26, 35, 126, 0.3)',
          color: '#1A237E',
          '&:hover': {
            backgroundColor: 'rgba(26, 35, 126, 0.04)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#1A237E',
          '&:hover': {
            backgroundColor: 'rgba(26, 35, 126, 0.04)',
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
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        expandIconWrapper: {
          color: '#1A237E',
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: 'rgba(26, 35, 126, 0.3)',
          '&.Mui-active': {
            color: '#1A237E',
          },
          '&.Mui-completed': {
            color: '#3F51B5',
          },
        },
        text: {
          fill: '#FFFFFF',
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: 'rgba(26, 35, 126, 0.7)',
          '&.Mui-active': {
            color: '#1A237E',
          },
          '&.Mui-completed': {
            color: '#3F51B5',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: 'rgba(0, 184, 148, 0.1)',
          color: '#00B894',
        },
        standardError: {
          backgroundColor: 'rgba(255, 71, 87, 0.1)',
          color: '#FF4757',
        },
        standardWarning: {
          backgroundColor: 'rgba(255, 177, 66, 0.1)',
          color: '#FFB142',
        },
        standardInfo: {
          backgroundColor: 'rgba(26, 35, 126, 0.1)',
          color: '#1A237E',
        },
      },
    },
  },
});

export default theme; 