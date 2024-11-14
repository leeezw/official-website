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
          background: 'linear-gradient(145deg, #f6f8fb 30%, #f0f4f8 90%)',
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
                  background: 'linear-gradient(45deg, #2D3436 30%, #00B894 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                打造下一代
                <br />
                企业级解决方案
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  color: 'text.secondary',
                  fontWeight: 400,
                }}
              >
                为您的企业提供最佳的SaaS服务，助力企业数字化转型
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  sx={{ 
                    color: 'white',
                    px: 4,
                    py: 1.5,
                  }}
                >
                  立即开始
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="large"
                  sx={{ 
                    px: 4,
                    py: 1.5,
                  }}
                >
                  了解更多
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/hero-image.png"
                alt="Hero"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {[
            {
              title: '高效协作',
              description: '提供实时协作工具，提升团队效率',
              icon: '🚀',
            },
            {
              title: '数据安全',
              description: '企业级安全保障，保护您的数据资产',
              icon: '🛡️',
            },
            {
              title: '智能分析',
              description: 'AI驱动的数据分析，助力决策制定',
              icon: '📊',
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%',
                  backgroundColor: 'background.paper',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h1" sx={{ mb: 2, fontSize: '3rem' }}>
                    {feature.icon}
                  </Typography>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
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