'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Collapse,
  Stack,
  useScrollTrigger,
  Slide,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ThemeToggle from './ThemeToggle';

const pages = [
  { title: '首页', href: '/' },
  { title: '产品功能', href: '/features' },
  { title: '解决方案', href: '/solutions' },
  { title: '客户案例', href: '/cases' },
  { title: '关于我们', href: '/about' },
];

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children || <div/>}
    </Slide>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          elevation={0}
          sx={(theme) => ({
            background: theme.palette.mode === 'dark' 
              ? 'rgba(10, 25, 41, 0.8)' 
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid',
            borderColor: theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(26, 35, 126, 0.1)',
          })}
        >
          <Container maxWidth="lg">
            <Toolbar 
              disableGutters 
              sx={{ 
                height: 70,
                px: { xs: 2, sm: 3 },
              }}
            >
              {/* Logo */}
              <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <Box
                  component="img"
                  src="/react.svg"
                  alt="React Logo"
                  sx={{
                    height: 36,
                    width: 'auto',
                    mr: 1,
                    animation: 'spin 20s linear infinite',
                    '@keyframes spin': {
                      from: { transform: 'rotate(0deg)' },
                      to: { transform: 'rotate(360deg)' },
                    }
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={(theme) => ({
                    fontWeight: 700,
                    background: theme.palette.gradients.primary,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textDecoration: 'none',
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                  })}
                >
                  天庭ERP
                </Typography>
              </Box>

              {/* 桌面端导航菜单 */}
              <Box sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex' }, 
                justifyContent: 'center',
                ml: 4 
              }}>
                {pages.map((page) => (
                  <Button
                    key={page.title}
                    href={page.href}
                    sx={(theme) => ({
                      mx: 1.5,
                      color: theme.palette.text.primary,
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: isActive(page.href) ? '80%' : '0%',
                        height: 2,
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: theme.palette.primary.main,
                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '&::after': {
                          width: '80%',
                        },
                      },
                    })}
                  >
                    {page.title}
                  </Button>
                ))}
              </Box>

              {/* 桌面端操作按钮 */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <ThemeToggle />
                <Button
                  variant="contained"
                  color="primary"
                  href="/auth/login"
                  sx={(theme) => ({
                    px: 3,
                    py: 1,
                    background: theme.palette.gradients.primary,
                    boxShadow: '0 2px 10px rgba(26, 35, 126, 0.2)',
                    borderRadius: 2,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    '&:hover': {
                      background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
                      boxShadow: '0 4px 15px rgba(26, 35, 126, 0.3)',
                      transform: 'translateY(-1px)',
                    },
                  })}
                >
                  登录
                </Button>
              </Box>

              {/* 移动端菜单按钮 */}
              <IconButton
                color="primary"
                aria-label="toggle menu"
                onClick={handleMenuToggle}
                sx={{ 
                  display: { md: 'none' },
                  ml: 'auto',
                }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Toolbar>

            {/* 移动端下拉菜单 */}
            <Collapse in={mobileOpen}>
              <Box 
                sx={(theme) => ({ 
                  py: 2,
                  px: 2,
                  display: { md: 'none' },
                  background: theme.palette.mode === 'dark'
                    ? 'rgba(10, 25, 41, 0.95)'
                    : 'rgba(255, 255, 255, 0.95)',
                })}
              >
                <Stack spacing={1}>
                  {pages.map((page) => (
                    <Button
                      key={page.title}
                      href={page.href}
                      fullWidth
                      sx={(theme) => ({
                        py: 1.5,
                        color: theme.palette.text.primary,
                        justifyContent: 'flex-start',
                        pl: 2,
                        borderRadius: 1,
                        backgroundColor: isActive(page.href) 
                          ? alpha(theme.palette.primary.main, 0.08)
                          : 'transparent',
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        },
                      })}
                    >
                      {page.title}
                    </Button>
                  ))}
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    href="/auth/login"
                    sx={(theme) => ({
                      mt: 2,
                      py: 1.5,
                      background: theme.palette.gradients.primary,
                      boxShadow: '0 2px 10px rgba(26, 35, 126, 0.2)',
                      '&:hover': {
                        background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
                        boxShadow: '0 4px 15px rgba(26, 35, 126, 0.3)',
                      },
                    })}
                  >
                    登录
                  </Button>
                </Stack>
              </Box>
            </Collapse>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
} 