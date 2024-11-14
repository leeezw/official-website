'use client';
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Stack, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Header() {
  const router = useRouter();

  return (
    <AppBar position="fixed" color="default">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 80 }}>
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              alignItems: 'center',
              cursor: 'pointer',
              gap: 1
            }}
            onClick={() => router.push('/')}
          >
            <Box
              sx={{
                position: 'relative',
                width: 40,
                height: 40,
                animation: 'spin 20s linear infinite',
                '@keyframes spin': {
                  '0%': {
                    transform: 'rotate(0deg)',
                  },
                  '100%': {
                    transform: 'rotate(360deg)',
                  },
                },
              }}
            >
              <Image
                src="/react.svg"
                alt="天庭ERP Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
            <Typography
              variant="h5"
              component="div"
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              天庭ERP
            </Typography>
          </Box>
          
          <Stack direction="row" spacing={1} alignItems="center">
            <Button 
              color="inherit" 
              onClick={() => router.push('/')}
              sx={{ 
                px: 3,
                color: 'text.primary',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 2,
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
              首页
            </Button>
            <Button 
              color="inherit" 
              onClick={() => router.push('/products')}
              sx={{ 
                px: 3,
                color: 'text.primary',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 2,
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
              产品
            </Button>
            <Button 
              color="inherit" 
              onClick={() => router.push('/about')}
              sx={{ 
                px: 3,
                color: 'text.primary',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 2,
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
              关于
            </Button>
            <Button 
              color="inherit" 
              onClick={() => router.push('/news')}
              sx={{ 
                px: 3,
                color: 'text.primary',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 2,
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
              新闻
            </Button>
            <Button 
              color="inherit" 
              onClick={() => router.push('/help')}
              sx={{ 
                px: 3,
                color: 'text.primary',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 2,
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
              帮助
            </Button>

            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

            {/* 登录注册按钮 */}
            <Button
              variant="outlined"
              color="primary"
              startIcon={<PersonOutlineIcon />}
              onClick={() => router.push('/auth/login')}
              sx={{
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              登录
            </Button>
            <Button 
              variant="contained" 
              onClick={() => router.push('/auth/register')}
              sx={{ 
                px: 4,
                background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                color: 'white',
                boxShadow: '0 2px 8px rgba(26, 35, 126, 0.25)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #0D1642 30%, #1A237E 90%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(26, 35, 126, 0.35)',
                },
              }}
            >
              注册
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
} 