'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const products = [
  {
    title: '基础版',
    price: '¥999',
    period: '/月',
    features: [
      '基础ERP功能',
      '最多5个用户',
      '标准客服支持',
      '基础数据分析',
    ],
    recommended: false,
  },
  {
    title: '企业版',
    price: '¥2999',
    period: '/月',
    features: [
      '全部ERP功能',
      '最多50个用户',
      '24/7客服支持',
      '高级数据分析',
      'API接口访问',
      '自定义工作流',
    ],
    recommended: true,
  },
  {
    title: '旗舰版',
    price: '¥5999',
    period: '/月',
    features: [
      '全部企业版功能',
      '无限用户数',
      '专属客服团队',
      'AI智能分析',
      '全部API访问',
      '个性化定制',
    ],
    recommended: false,
  },
];

export default function Products() {
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
            选择适合您的方案
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {products.map((product, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  elevation={product.recommended ? 8 : 1}
                  sx={{ 
                    height: '100%',
                    position: 'relative',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                    ...(product.recommended && {
                      border: '2px solid',
                      borderColor: 'secondary.main',
                    }),
                  }}
                >
                  {product.recommended && (
                    <Chip
                      label="推荐方案"
                      color="secondary"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                      }}
                    />
                  )}
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom align="center">
                      {product.title}
                    </Typography>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Typography 
                        variant="h3" 
                        component="span"
                        sx={{ 
                          fontWeight: 700,
                          color: 'primary.main',
                        }}
                      >
                        {product.price}
                      </Typography>
                      <Typography 
                        variant="subtitle1" 
                        component="span"
                        sx={{ color: 'text.secondary' }}
                      >
                        {product.period}
                      </Typography>
                    </Box>
                    <Stack spacing={2} sx={{ mb: 4 }}>
                      {product.features.map((feature, idx) => (
                        <Typography 
                          key={idx}
                          variant="body1"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            '&::before': {
                              content: '"✓"',
                              color: 'secondary.main',
                              fontWeight: 'bold',
                            },
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Stack>
                    <Button 
                      variant={product.recommended ? "contained" : "outlined"}
                      color={product.recommended ? "secondary" : "primary"}
                      fullWidth
                      size="large"
                      sx={{ 
                        py: 1.5,
                        '&:hover': {
                          transform: 'scale(1.02)',
                        },
                      }}
                    >
                      立即选购
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 功能特性部分 */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom
          sx={{ mb: 6 }}
        >
          核心功能
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: '库存管理',
              description: '实时库存监控，智能预警，自动补货建议',
              icon: '📦',
            },
            {
              title: '财务管理',
              description: '自动记账，多维度财务分析，税务管理',
              icon: '💰',
            },
            {
              title: '人力资源',
              description: '员工档案，考勤管理，绩效评估',
              icon: '👥',
            },
            {
              title: '生产管理',
              description: '生产计划，质量控制，成本核算',
              icon: '🏭',
            },
            {
              title: '客户关系',
              description: '客户画像，销售跟进，售后服务',
              icon: '🤝',
            },
            {
              title: '数据分析',
              description: 'BI商业智能，预测分析，决策支持',
              icon: '📊',
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%',
                  backgroundColor: 'background.paper',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    backgroundColor: 'rgba(0, 184, 148, 0.05)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ mb: 2, fontSize: '2.5rem' }}>
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