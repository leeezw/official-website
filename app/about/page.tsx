'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <Box>
      <Header />
      <Box 
        sx={{ 
          pt: 15,
          pb: 10,
          background: 'linear-gradient(145deg, #f6f8fb 30%, #f0f4f8 90%)',
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 4,
              background: 'linear-gradient(45deg, #1A237E 30%, #00B894 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            关于天庭科技
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 6,
              color: 'text.secondary',
              maxWidth: '800px',
            }}
          >
            我们致力于为企业提供智能化的管理解决方案，助力企业数字化转型
          </Typography>
        </Container>
      </Box>

      {/* 公司介绍 */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              我们的使命
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              天庭科技成立于2023年，是一家专注于企业管理软件开发的高科技公司。我们的使命是通过技术创新，为企业提供更智能、更高效的管理工具。
            </Typography>
            <Typography variant="body1" color="text.secondary">
              通过持续的技术创新和服务优化，我们帮助企业实现数字化转型，提升管理效率，降低运营成本。
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/about-image.jpg"
              alt="关于我们"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* 核心价值观 */}
      <Box sx={{ bgcolor: 'background.paper', py: 10 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom
            sx={{ mb: 6 }}
          >
            核心价值观
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: '创新',
                description: '持续创新，引领行业发展',
                icon: '💡',
              },
              {
                title: '专业',
                description: '专业技术，优质服务',
                icon: '🎯',
              },
              {
                title: '诚信',
                description: '诚信为本，客户至上',
                icon: '🤝',
              },
              {
                title: '共赢',
                description: '合作共赢，共同发展',
                icon: '🌟',
              },
            ].map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: 'rgba(0, 184, 148, 0.05)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h2" sx={{ mb: 2, fontSize: '3rem' }}>
                      {value.icon}
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 