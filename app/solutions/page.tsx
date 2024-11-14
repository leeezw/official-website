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
import { alpha } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FactoryIcon from '@mui/icons-material/Factory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

// 首先定义类型
interface Solution {
  title: string;
  industry: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  logo?: string;
}

// 然后修改数据定义
const solutions: Solution[] = [
  {
    title: '智能制造',
    industry: '制造业',
    description: '打造智能工厂，实现生产全流程数字化管理',
    icon: <FactoryIcon sx={{ fontSize: 48 }} />,
    image: '/solutions/manufacturing.jpg',
    challenge: '传统生产管理模式效率低下，信息孤岛严重',
    solution: '实施智能制造解决方案，打通全流程数据',
    results: [
      '生产效率提升40%',
      '库存成本降低30%',
      '订单交付准时率提升25%',
      '质量控制效率提升35%',
    ],
    logo: '/cases/company1-logo.png',
  },
  {
    title: '智慧物流',
    industry: '物流业',
    description: '优化物流配送，提升仓储管理效率',
    icon: <LocalShippingIcon sx={{ fontSize: 48 }} />,
    image: '/solutions/logistics.jpg',
    challenge: '配送效率低，人工成本高',
    solution: '引入智慧物流系统，优化配送路线',
    results: [
      '配送效率提升45%',
      '燃油成本降低30%',
      '客户满意度提升40%',
      '人工成本降低35%',
    ],
    logo: '/cases/company2-logo.png',
  },
  {
    title: '零售连锁',
    industry: '零售业',
    description: '连锁门店管理，提供全渠道零售解决方案',
    icon: <ShoppingBasketIcon sx={{ fontSize: 48 }} />,
    image: '/solutions/retail.jpg',
    challenge: '多店铺管理困难，库存管理效率低',
    solution: '部署全渠道零售管理系统，实现统一管理',
    results: [
      '销售额提升25%',
      '运营成本降低20%',
      '客户满意度提升30%',
      '库存周转提升40%',
    ],
    logo: '/cases/company3-logo.png',
  },
  {
    title: '企业服务',
    industry: '企业服务',
    description: '为企业提供一站式管理解决方案',
    icon: <BusinessIcon sx={{ fontSize: 48 }} />,
    image: '/solutions/enterprise.jpg',
    challenge: '管理流程复杂，效率低下',
    solution: '提供一体化管理平台，优化业务流程',
    results: [
      '管理效率提升35%',
      '人力成本降低20%',
      '决策效率提升40%',
      '客户转化提升25%',
    ],
    logo: '/cases/company4-logo.png',
  },
  {
    title: '教育培训',
    industry: '教育行业',
    description: '数字化教育管理，提升教学质量',
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    image: '/solutions/education.jpg',
    challenge: '教务管理繁琐，资源利用率低',
    solution: '部署智慧教育系统，实现全面数字化管理',
    results: [
      '教学效率提升30%',
      '管理成本降低25%',
      '学生满意度提升35%',
      '教学质量提升20%',
    ],
    logo: '/cases/company5-logo.png',
  },
  {
    title: '医疗健康',
    industry: '医疗行业',
    description: '医疗机构信息化管理解决方案',
    icon: <LocalHospitalIcon sx={{ fontSize: 48 }} />,
    image: '/solutions/healthcare.jpg',
    challenge: '医疗信息化程度低，管理效率不足',
    solution: '实施医疗信息化系统，提升诊疗效率',
    results: [
      '诊疗效率提升40%',
      '医疗成本降低20%',
      '患者满意度提升30%',
      '资源利用率提升35%',
    ],
    logo: '/cases/company6-logo.png',
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
        sx={(theme) => ({
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          background: theme.palette.gradients.background,
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
        })}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h1"
              align="center"
              sx={(theme) => ({
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                background: theme.palette.gradients.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              })}
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
          <Grid container spacing={6}>
            {solutions.map((solution, index) => (
              <Grid item xs={12} key={index}>
                <Fade in={inView} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    sx={(theme) => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(26, 35, 126, 0.2) 0%, rgba(63, 81, 181, 0.1) 100%)'
                        : 'linear-gradient(135deg, #FFFFFF 0%, rgba(63, 81, 181, 0.05) 100%)',
                      border: '1px solid',
                      borderColor: theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : alpha(theme.palette.primary.main, 0.1),
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: alpha(theme.palette.primary.main, 0.2),
                        boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.12)}`,
                      },
                    })}
                  >
                    <Box
                      sx={{
                        width: { xs: '100%', md: '40%' },
                        position: 'relative',
                      }}
                    >
                      <Box
                        component="img"
                        src={solution.image}
                        alt={solution.title}
                        sx={{
                          width: '100%',
                          height: { xs: 240, md: '100%' },
                          objectFit: 'cover',
                        }}
                      />
                      <Box
                        component="img"
                        src={solution.logo}
                        alt="Company Logo"
                        sx={(theme) => ({
                          position: 'absolute',
                          bottom: 20,
                          right: 20,
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          bgcolor: theme.palette.background.paper,
                          p: 1,
                          boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, 0.1)}`,
                        })}
                      />
                    </Box>
                    <CardContent sx={{ flex: 1, p: 4 }}>
                      <Stack spacing={3}>
                        <Box>
                          <Typography
                            variant="overline"
                            sx={(theme) => ({ 
                              color: theme.palette.primary.main, 
                              fontWeight: 600 
                            })}
                          >
                            {solution.industry}
                          </Typography>
                          <Typography variant="h4" component="h2" fontWeight={600} gutterBottom>
                            {solution.title}
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={(theme) => ({ color: theme.palette.primary.main })} 
                            gutterBottom
                          >
                            项目背景
                          </Typography>
                          <Typography color="text.secondary" paragraph>
                            {solution.challenge}
                          </Typography>
                        </Box>

                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={(theme) => ({ color: theme.palette.primary.main })} 
                            gutterBottom
                          >
                            解决方案
                          </Typography>
                          <Typography color="text.secondary" paragraph>
                            {solution.solution}
                          </Typography>
                        </Box>

                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={(theme) => ({ color: theme.palette.primary.main })} 
                            gutterBottom
                          >
                            实施效果
                          </Typography>
                          <Grid container spacing={2}>
                            {solution.results.map((result, idx) => (
                              <Grid item xs={12} sm={6} key={idx}>
                                <Box
                                  sx={(theme) => ({
                                    p: 2,
                                    borderRadius: 2,
                                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                  })}
                                >
                                  <Typography variant="body2">
                                    {result}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={(theme) => ({
          py: { xs: 8, md: 12 },
          background: theme.palette.gradients.background,
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
        })}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
            <Button
              variant="contained"
              size="large"
              href="/contact"
              sx={(theme) => ({
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 600,
                background: theme.palette.gradients.primary,
                boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.25)}`,
                borderRadius: 3,
                '&:hover': {
                  background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 6px 25px ${alpha(theme.palette.primary.main, 0.35)}`,
                },
              })}
            >
              联系我们
            </Button>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 