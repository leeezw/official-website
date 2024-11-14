'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { themes, ThemeName } from './themes';

interface ThemeContextType {
  currentTheme: ThemeName;
  changeTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'blue',
  changeTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const changeTheme = (theme: ThemeName) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  };

  const theme = createTheme(themes[currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
} 