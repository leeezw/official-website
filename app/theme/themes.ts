import { ThemeOptions, Theme } from '@mui/material';

// 在 baseTheme 中添加通用样式变量
const baseTheme = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-contained': {
            background: (props: { theme: Theme }) => 
              `linear-gradient(45deg, ${props.theme.palette.primary.main} 30%, ${props.theme.palette.primary.light} 90%)`,
            '&:hover': {
              background: (props: { theme: Theme }) => 
                `linear-gradient(45deg, ${props.theme.palette.primary.dark} 30%, ${props.theme.palette.primary.main} 90%)`,
            },
          },
        },
      },
    },
  },
};

// 蓝色主题（默认）
export const blueTheme: ThemeOptions = {
  ...baseTheme,
  palette: {
    primary: {
      main: '#1A237E',
      light: '#3F51B5',
      dark: '#0D1642',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    gradients: {
      primary: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
      background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
    },
  },
};

// 紫色主题
export const purpleTheme: ThemeOptions = {
  ...baseTheme,
  palette: {
    primary: {
      main: '#4A148C',
      light: '#7B1FA2',
      dark: '#2A0054',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    gradients: {
      primary: 'linear-gradient(45deg, #4A148C 30%, #7B1FA2 90%)',
      background: 'linear-gradient(135deg, rgba(74, 20, 140, 0.05) 0%, rgba(123, 31, 162, 0.08) 100%)',
    },
  },
};

// 绿色主题
export const greenTheme: ThemeOptions = {
  ...baseTheme,
  palette: {
    primary: {
      main: '#1B5E20',
      light: '#2E7D32',
      dark: '#0D3311',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    gradients: {
      primary: 'linear-gradient(45deg, #1B5E20 30%, #2E7D32 90%)',
      background: 'linear-gradient(135deg, rgba(27, 94, 32, 0.05) 0%, rgba(46, 125, 50, 0.08) 100%)',
    },
  },
};

// 深色主题
export const darkTheme: ThemeOptions = {
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90CAF9',
      light: '#BBDEFB',
      dark: '#42A5F5',
    },
    background: {
      default: '#0A1929',
      paper: '#0A1929',
    },
    gradients: {
      primary: 'linear-gradient(45deg, #90CAF9 30%, #BBDEFB 90%)',
      background: 'linear-gradient(135deg, rgba(10, 25, 41, 0.95) 0%, rgba(10, 25, 41, 0.8) 100%)',
    },
  },
};

export const themes = {
  blue: blueTheme,
  purple: purpleTheme,
  green: greenTheme,
  dark: darkTheme,
};

export type ThemeName = keyof typeof themes; 