'use client';
import React, { useState } from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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

  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          elevation={0}
          sx={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid',
            borderColor: 'rgba(26, 35, 126, 0.1)',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ height: 70 }}>
              {/* Logo */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="img"
                  src="/react.svg"
                  alt="React Logo"
                  sx={{
                    height: 40,
                    width: 'auto',
                    mr: 1,
                    animation: 'spin 20s linear infinite',
                    '@keyframes spin': {
                      from: {
                        transform: 'rotate(0deg)',
                      },
                      to: {
                        transform: 'rotate(360deg)',
                      },
                    }
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textDecoration: 'none',
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                  }}
                >
                  天庭ERP
                </Typography>
              </Box>

              {/* 桌面端导航菜单 */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4, justifyContent: 'center' }}>
                {pages.map((page) => (
                  <Button
                    key={page.title}
                    href={page.href}
                    sx={{
                      mx: 1,
                      my: 2,
                      color: 'text.primary',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 500,
                      fontSize: '1rem',
                      position: 'relative',
                      minWidth: 100,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: 2,
                        bottom: -2,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'primary.main',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '&::after': {
                          width: '80%',
                        },
                      },
                    }}
                  >
                    {page.title}
                  </Button>
                ))}
              </Box>

              {/* 桌面端操作按钮 */}
              <Stack 
                direction="row" 
                spacing={2} 
                sx={{ 
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                }}
              >
                {/* <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    },
                  }}
                >
                  登录
                </Button> */}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                    boxShadow: '0 2px 10px rgba(26, 35, 126, 0.2)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #0D1642 30%, #1A237E 90%)',
                      boxShadow: '0 4px 15px rgba(26, 35, 126, 0.3)',
                    },
                  }}
                >
                  登录
                </Button>
              </Stack>

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
                sx={{ 
                  py: 2,
                  display: { md: 'none' },
                  background: 'rgba(255, 255, 255, 0.95)',
                }}
              >
                <Stack spacing={1}>
                  {pages.map((page) => (
                    <Button
                      key={page.title}
                      href={page.href}
                      fullWidth
                      sx={{
                        py: 1.5,
                        color: 'text.primary',
                        justifyContent: 'flex-start',
                        pl: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(26, 35, 126, 0.08)',
                        },
                      }}
                    >
                      {page.title}
                    </Button>
                  ))}
                  <Box sx={{ p: 2 }}>
                    <Stack spacing={2}>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="primary"
                        sx={{
                          borderWidth: 2,
                          py: 1,
                          '&:hover': {
                            borderWidth: 2,
                          },
                        }}
                      >
                        登录
                      </Button>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                          background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                          py: 1,
                          boxShadow: '0 2px 10px rgba(26, 35, 126, 0.2)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #0D1642 30%, #1A237E 90%)',
                            boxShadow: '0 4px 15px rgba(26, 35, 126, 0.3)',
                          },
                        }}
                      >
                        免费试用
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
} 