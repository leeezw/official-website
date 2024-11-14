'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cases = [
  {
    title: '某大型制造企业数字化转型',
    description: '通过部署天庭ERP系统，实现了生产、库存、销售等环节的数字化管理，效率提升200%',
    image: '/case1.jpg',
    tags: ['制造业', '数字化转型', '流程优化'],
    results: ['库存周转率提升40%', '人力成本降低30%', '客户满意度提升50%'],
  },
  {
    title: '连锁零售企业全渠道整合',
    description: '帮助客户打通线上线下销售渠道，实现统一库存管理和会员管理',
    image: '/case2.jpg',
    tags: ['零售', '全渠道', 'O2O'],
    results: ['销售额提升35%', '库存准确率99.9%', '运营成本降低25%'],
  },
  // 可以添加更多案例
];

export default function Cases() {
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
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 6,
              background: 'linear-gradient(45deg, #1A237E 30%, #00B894 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            客户案例
          </Typography>

          <Grid container spacing={4}>
            {cases.map((case_, index) => (
              <Grid item xs={12} key={index}>
                <Card 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' },
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ 
                      width: { xs: '100%', md: 400 },
                      height: { xs: 240, md: 'auto' },
                      objectFit: 'cover',
                    }}
                    image={case_.image}
                    alt={case_.title}
                  />
                  <CardContent sx={{ flex: 1, p: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                      {case_.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {case_.description}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      {case_.tags.map((tag, idx) => (
                        <Chip
                          key={idx}
                          label={tag}
                          sx={{ 
                            mr: 1, 
                            mb: 1,
                            backgroundColor: 'rgba(0, 184, 148, 0.1)',
                            color: 'secondary.main',
                          }}
                        />
                      ))}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      实施成效：
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {case_.results.map((result, idx) => (
                        <Typography 
                          key={idx} 
                          component="li" 
                          color="text.secondary"
                          sx={{ mb: 1 }}
                        >
                          {result}
                        </Typography>
                      ))}
                    </Box>
                    <Button 
                      variant="outlined" 
                      color="secondary"
                      sx={{ mt: 2 }}
                    >
                      查看详情
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* 合作咨询 */}
          <Box 
            sx={{ 
              mt: 8, 
              p: 6, 
              textAlign: 'center',
              backgroundColor: 'white',
              borderRadius: 4,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            <Typography variant="h4" gutterBottom>
              寻找适合您企业的解决方案
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              我们的专业团队将为您提供个性化的解决方案建议
            </Typography>
            <Button 
              variant="contained" 
              color="secondary"
              size="large"
              onClick={() => window.location.href = '/contact'}
            >
              免费咨询
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 