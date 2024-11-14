'use client';
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              color="inherit" 
              onClick={() => router.push('/')}
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'rgba(0,0,0,0.03)',
                  color: 'secondary.main'
                }
              }}
            >
              首页
            </Button>
            <Button 
              color="inherit" 
              onClick={() => router.push('/products')}
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'rgba(0,0,0,0.03)',
                  color: 'secondary.main'
                }
              }}
            >
              产品
            </Button>
            <Button 
              color="inherit" 
              onClick={() => router.push('/about')}
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'rgba(0,0,0,0.03)',
                  color: 'secondary.main'
                }
              }}
            >
              关于
            </Button>
            <Button 
              variant="contained" 
              color="secondary"
              onClick={() => router.push('/contact')}
              sx={{ 
                color: 'white',
                '&:hover': { 
                  backgroundColor: 'secondary.dark',
                }
              }}
            >
              联系我们
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
} 