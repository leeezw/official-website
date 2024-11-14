'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Fade,
  Stack,
  Button,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FactoryIcon from '@mui/icons-material/Factory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

// 定义解决方案数据
const solutions = [
  {
    title: '智能制造',
    description: '打造智能工厂，实现生产全流程数字化管理',
    icon: <FactoryIcon sx={{ fontSize: 48 }} />,
    image: '/solutions/manufacturing.jpg',
    features: [
      '生产计划智能排程',
      '设备物联监控',
      '质量追溯管理',
      'MES系统集成',
    ],
    benefits: [
      '提升生产效率30%',
      '降低库存成本20%',
      '减少质量缺陷15%',
      '设备利用率提升25%',
    ],
  },
  {
    title: '智慧物流',
    description: '优化物流配送，提升仓储管理效率',
    icon: <LocalShippingIcon sx={{ fontSize: 48 }} />,
    image: '/solutions/logistics.jpg',
    features: [
      '智能仓储管理',
      '配送路线优化',
      '车辆调度管理',
      '物流追踪系统',
    ],
    benefits: [
      '仓储效率提升40%',
      '配送成本降低25%',
      '准时交付率提升20%',
      '库存周转提升35%',
    ],
  },
  {
    title: '零售连锁',
    description: '连锁门店管理，提供全渠道零售解决方案',
    icon: <ShoppingBasketIcon sx={{ fontSize: 48 }} />,
    image: '/solutions/retail.jpg',
    features: [
      '门店运营管理',
      '会员营销系统',
      '商品管理优化',
      'O2O渠道整合',
    ],
    benefits: [
      '销售额提升25%',
      '运营成本降低20%',
      '客户满意度提升30%',
      '库存周转提升40%',
    ],
  },
  {
    title: '企业服务',
    description: '为企业提供一站式管理解决方案',
    icon: <BusinessIcon sx={{ fontSize: 48 }} />,
    image: '/solutions/enterprise.jpg',
    features: [
      '人力资源管理',
      '财务管理系统',
      '办公自动化',
      '客户关系管理',
    ],
    benefits: [
      '管理效率提升35%',
      '人力成本降低20%',
      '决策效率提升40%',
      '客户转化提升25%',
    ],
  },
  {
    title: '教育培训',
    description: '数字化教育管理，提升教学质量',
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    image: '/solutions/education.jpg',
    features: [
      '教务管理系统',
      '在线学习平台',
      '考试评测系统',
      '校园管理集成',
    ],
    benefits: [
      '教学效率提升30%',
      '管理成本降低25%',
      '学生满意度提升35%',
      '教学质量提升20%',
    ],
  },
  {
    title: '医疗健康',
    description: '医疗机构信息化管理解决方案',
    icon: <LocalHospitalIcon sx={{ fontSize: 48 }} />,
    image: '/solutions/healthcare.jpg',
    features: [
      '医疗信息系统',
      '患者管理平台',
      '药品库存管理',
      '医疗设备管理',
    ],
    benefits: [
      '诊疗效率提升40%',
      '医疗成本降低20%',
      '患者满意度提升30%',
      '资源利用率提升35%',
    ],
  },
];

export default function Solutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/pattern.png")',
            opacity: 0.1,
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h1"
              align="center"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              行业解决方案
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              基于深厚的行业积累，我们为不同领域的客户提供定制化的解决方案，
              助力企业数字化转型升级。
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Solutions Grid */}
      <Box sx={{ py: { xs: 8, md: 12 } }} ref={ref}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {solutions.map((solution, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Fade in={inView} timeout={1000} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 30px rgba(26, 35, 126, 0.12)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        paddingTop: '56.25%', // 16:9 宽高比
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={solution.image}
                        alt={solution.title}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 4, flexGrow: 1 }}>
                      <Stack spacing={3}>
                        <Box sx={{ color: 'primary.main' }}>
                          {solution.icon}
                        </Box>
                        <Typography variant="h4" component="h2" fontWeight={600}>
                          {solution.title}
                        </Typography>
                        <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                          {solution.description}
                        </Typography>
                        
                        <Box>
                          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                            核心功能
                          </Typography>
                          <Stack spacing={1}>
                            {solution.features.map((feature, idx) => (
                              <Box
                                key={idx}
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 1,
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    bgcolor: 'primary.main',
                                    opacity: 0.7,
                                  }}
                                />
                                <Typography variant="body2">
                                  {feature}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Box>

                        <Box>
                          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                            实施效果
                          </Typography>
                          <Grid container spacing={2}>
                            {solution.benefits.map((benefit, idx) => (
                              <Grid item xs={6} key={idx}>
                                <Box
                                  sx={{
                                    p: 2,
                                    borderRadius: 2,
                                    bgcolor: 'rgba(26, 35, 126, 0.05)',
                                    height: '100%',
                                  }}
                                >
                                  <Typography variant="body2" align="center">
                                    {benefit}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>

                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{
                            mt: 2,
                            borderWidth: 2,
                            '&:hover': {
                              borderWidth: 2,
                            },
                          }}
                        >
                          了解详情
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 