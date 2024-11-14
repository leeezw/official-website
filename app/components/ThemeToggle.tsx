'use client';
import React from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import CircleIcon from '@mui/icons-material/Circle';
import { useTheme } from '../theme/ThemeContext';
import { ThemeName } from '../theme/themes';

const themeOptions: { name: ThemeName; label: string; color: string }[] = [
  { name: 'blue', label: '深邃蓝', color: '#1A237E' },
  { name: 'purple', label: '优雅紫', color: '#4A148C' },
  { name: 'green', label: '自然绿', color: '#1B5E20' },
  { name: 'dark', label: '暗夜黑', color: '#90CAF9' },
];

export default function ThemeToggle() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { currentTheme, changeTheme } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme: ThemeName) => {
    changeTheme(theme);
    handleClose();
  };

  return (
    <>
      <Tooltip title="切换主题">
        <IconButton
          onClick={handleClick}
          sx={{
            position: 'fixed',
            right: 20,
            bottom: 20,
            bgcolor: 'background.paper',
            boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
            width: 48,
            height: 48,
            zIndex: 9999,
            '&:hover': {
              bgcolor: 'background.paper',
              transform: 'scale(1.1)',
            },
          }}
        >
          <PaletteIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        {themeOptions.map((theme) => (
          <MenuItem
            key={theme.name}
            onClick={() => handleThemeChange(theme.name)}
            selected={currentTheme === theme.name}
          >
            <ListItemIcon>
              <CircleIcon sx={{ color: theme.color }} />
            </ListItemIcon>
            <ListItemText>{theme.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
} 