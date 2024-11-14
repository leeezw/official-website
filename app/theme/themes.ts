import { ThemeOptions } from '@mui/material';

// 蓝色主题（默认）
export const blueTheme: ThemeOptions = {
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
  },
};

// 紫色主题
export const purpleTheme: ThemeOptions = {
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
  },
};

// 绿色主题
export const greenTheme: ThemeOptions = {
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
  },
};

// 深色主题
export const darkTheme: ThemeOptions = {
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
  },
};

export const themes = {
  blue: blueTheme,
  purple: purpleTheme,
  green: greenTheme,
  dark: darkTheme,
};

export type ThemeName = keyof typeof themes; 