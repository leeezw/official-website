'use client';
import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <Box>
      <Header />
      
      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: 15,
          pb: 10,
          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'url("/pattern.png")',
            opacity: 0.1,
          }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                  mb: 4,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: 80,
                    height: 4,
                    background: 'linear-gradient(90deg, #1A237E, #3F51B5)',
                    borderRadius: 2,
                  }
                }}
              >
                智启未来
                <br />
                数智赋能
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 6,
                  color: 'text.secondary',
                  fontWeight: 400,
                  lineHeight: 1.8,
                }}
              >
                天庭ERP，让企业管理更智能
                <br />
                打造数智化企业管理新范式
              </Typography>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  sx={{ 
                    px: 6,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                    boxShadow: '0 4px 20px rgba(26, 35, 126, 0.25)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #0D1642 30%, #1A237E 90%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 25px rgba(26, 35, 126, 0.35)',
                    },
                  }}
                >
                  免费试用
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="large"
                  sx={{ 
                    px: 6,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 15px rgba(26, 35, 126, 0.15)',
                    },
                  }}
                >
                  了解更多
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '80%',
                    height: '80%',
                    background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.2), rgba(63, 81, 181, 0.2))',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    filter: 'blur(40px)',
                    zIndex: 0,
                  }
                }}
              >
                <Box 
                  component="img"
                  src="/dashboard-preview.png"
                  alt="天庭ERP界面预览"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 4,
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 20px 40px rgba(26, 35, 126, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 25px 50px rgba(26, 35, 126, 0.25)',
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 8,
            background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 60,
              height: 4,
              background: 'linear-gradient(90deg, #1A237E, #3F51B5)',
              borderRadius: 2,
            }
          }}
        >
          核心优势
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: '智能决策',
              description: 'AI驱动的数据分析，为企业提供精准的决策支持',
              icon: '🧠',
            },
            {
              title: '一体化管理',
              description: '打通企业各个环节，实现数据互联互通',
              icon: '🔄',
            },
            {
              title: '安全可靠',
              description: '多重加密保护，确保企业数据安全',
              icon: '🛡️',
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%',
                  p: 2,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(63, 81, 181, 0.05) 100%)',
                  border: '1px solid',
                  borderColor: 'rgba(26, 35, 126, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(26, 35, 126, 0.2)',
                    boxShadow: '0 8px 30px rgba(26, 35, 126, 0.12)',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(63, 81, 181, 0.1) 100%)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h1" sx={{ mb: 3, fontSize: '3rem' }}>
                    {feature.icon}
                  </Typography>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
} 