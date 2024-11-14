'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Stack, Divider } from '@mui/material';
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
      '7天免费试用',
      '每月20GB存储空间',
    ],
    recommended: false,
    buttonText: '开始试用',
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
      '每月100GB存储空间',
      '专属实施顾问',
    ],
    recommended: true,
    buttonText: '立即升级',
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
      '无限存储空间',
      '专属技术支持',
      '源码授权',
    ],
    recommended: false,
    buttonText: '联系销售',
  },
];

const features = [
  {
    category: '基础功能',
    items: [
      {
        title: '采购管理',
        description: '智能采购计划、供应商管理、采购订单处理',
        icon: '📦',
      },
      {
        title: '销售管理',
        description: '订单处理、客户管理、销售分析',
        icon: '💰',
      },
      {
        title: '库存管理',
        description: '实时库存监控、批次管理、库存预警',
        icon: '🏭',
      },
    ],
  },
  {
    category: '高级功能',
    items: [
      {
        title: '生产管理',
        description: '生产计划、BOM管理、质量控制',
        icon: '⚙️',
      },
      {
        title: '财务管理',
        description: '应收应付、财务报表、税务管理',
        icon: '💳',
      },
      {
        title: '人力资源',
        description: '员工管理、考勤、薪资、绩效',
        icon: '👥',
      },
    ],
  },
  {
    category: '智能功能',
    items: [
      {
        title: 'AI决策支持',
        description: '智能预测、风险评估、决策建议',
        icon: '🤖',
      },
      {
        title: '商业智能',
        description: '数据可视化、多维分析、报表定制',
        icon: '📊',
      },
      {
        title: '流程自动化',
        description: '工作流引擎、任务自动化、提醒通知',
        icon: '⚡',
      },
    ],
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
          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            选择适合您的方案
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}
          >
            灵活的定价方案，满足不同规模企业的需求
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {products.map((product, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  elevation={product.recommended ? 8 : 1}
                  sx={{ 
                    height: '100%',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    ...(product.recommended && {
                      border: '2px solid',
                      borderColor: 'primary.main',
                      transform: 'scale(1.05)',
                    }),
                    '&:hover': {
                      transform: product.recommended ? 'scale(1.05)' : 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(26, 35, 126, 0.12)',
                    },
                  }}
                >
                  {product.recommended && (
                    <Chip
                      label="推荐方案"
                      color="primary"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                        color: 'white',
                      }}
                    />
                  )}
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom align="center" sx={{ color: 'primary.main' }}>
                      {product.title}
                    </Typography>
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                      <Typography 
                        variant="h3" 
                        component="span"
                        sx={{ 
                          fontWeight: 700,
                          background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
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
                    <Divider sx={{ mb: 3 }} />
                    <Stack spacing={2} sx={{ mb: 4 }}>
                      {product.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                          }}
                        >
                          <Typography 
                            variant="body1"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              color: 'text.secondary',
                              '&::before': {
                                content: '"✓"',
                                color: 'primary.main',
                                fontWeight: 'bold',
                                marginRight: 1,
                              },
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Button 
                      variant={product.recommended ? "contained" : "outlined"}
                      fullWidth
                      size="large"
                      sx={{ 
                        py: 1.5,
                        ...(product.recommended && {
                          background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                        }),
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(26, 35, 126, 0.25)',
                        },
                      }}
                    >
                      {product.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 功能特性部分 */}
      {features.map((section, sectionIndex) => (
        <Box 
          key={sectionIndex}
          sx={{ 
            py: 10,
            backgroundColor: sectionIndex % 2 === 0 ? 'background.default' : 'background.paper',
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="h3" 
              align="center" 
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 6,
                background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {section.category}
            </Typography>
            <Grid container spacing={4}>
              {section.items.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card 
                    elevation={0}
                    sx={{ 
                      height: '100%',
                      backgroundColor: 'transparent',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h2" sx={{ mb: 2, fontSize: '2.5rem' }}>
                        {feature.icon}
                      </Typography>
                      <Typography 
                        variant="h5" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 600,
                          color: 'primary.main',
                        }}
                      >
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
        </Box>
      ))}

      {/* CTA Section */}
      <Box 
        sx={{ 
          py: 10,
          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            准备开始使用？
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            立即联系我们，获取专业顾问一对一服务
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ 
              px: 6,
              py: 2,
              background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(26, 35, 126, 0.25)',
              },
            }}
          >
            预约演示
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 