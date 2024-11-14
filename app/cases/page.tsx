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
  Avatar,
  Rating,
  Divider,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { alpha } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// 定义案例数据
const cases = [
  {
    title: '某大型制造企业数字化转型',
    industry: '制造业',
    image: '/cases/manufacturing.jpg',
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
    title: '全国连锁零售企业管理升级',
    industry: '零售业',
    image: '/cases/retail.jpg',
    challenge: '多店铺管理困难，库存管理效率低',
    solution: '部署全渠道零售管理系统，实现统一管理',
    results: [
      '运营成本降低25%',
      '库存周转率提升40%',
      '会员复购率提升35%',
      '人力成本降低20%',
    ],
    logo: '/cases/company2-logo.png',
  },
  {
    title: '物流企业智慧化转型',
    industry: '物流业',
    image: '/cases/logistics.jpg',
    challenge: '配送效率低，人工成本高',
    solution: '引入智慧物流系统，优化配送路线',
    results: [
      '配送效率提升45%',
      '燃油成本降低30%',
      '客户满意度提升40%',
      '人工成本降低35%',
    ],
    logo: '/cases/company3-logo.png',
  },
];

// 定义客户评价数据
const testimonials = [
  {
    name: '张总',
    position: 'CEO',
    company: '某制造集团',
    avatar: '/testimonials/avatar1.jpg',
    content: '天庭ERP帮助我们实现了生产管理的数字化转型，显著提升了生产效率和管理水平。系统的稳定性和易用性都很出色。',
    rating: 5,
  },
  {
    name: '李总',
    position: '运营总监',
    company: '某连锁零售',
    avatar: '/testimonials/avatar2.jpg',
    content: '选择天庭ERP是我们做过的最正确的决定之一。系统帮助我们实现了全渠道库存的统一管理，大大提升了运营效率。',
    rating: 5,
  },
  {
    name: '王总',
    position: '技术总监',
    company: '某物流公司',
    avatar: '/testimonials/avatar3.jpg',
    content: '天庭ERP的技术团队非常专业，实施过程顺畅，系统性能优异，完全满足我们的业务需求。',
    rating: 5,
  },
];

export default function Cases() {
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
              客户成功案例
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
              我们致力于为客户创造价值，助力企业实现数字化转型升级，
              这些都是我们引以为傲的成功案例。
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Cases Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }} ref={ref}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {cases.map((case_, index) => (
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
                        src={case_.image}
                        alt={case_.title}
                        sx={{
                          width: '100%',
                          height: { xs: 240, md: '100%' },
                          objectFit: 'cover',
                        }}
                      />
                      <Box
                        component="img"
                        src={case_.logo}
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
                            {case_.industry}
                          </Typography>
                          <Typography variant="h4" component="h2" fontWeight={600} gutterBottom>
                            {case_.title}
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
                            {case_.challenge}
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
                            {case_.solution}
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
                            {case_.results.map((result, idx) => (
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

      {/* Testimonials Section */}
      <Box
        sx={(theme) => ({
          py: { xs: 8, md: 12 },
          background: theme.palette.gradients.background,
        })}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={(theme) => ({
              fontWeight: 700,
              mb: 8,
              background: theme.palette.gradients.primary,
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
                background: theme.palette.gradients.primary,
                borderRadius: 2,
              }
            })}
          >
            客户评价
          </Typography>
          
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in={inView} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    sx={(theme) => ({
                      height: '100%',
                      position: 'relative',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(26, 35, 126, 0.2) 0%, rgba(63, 81, 181, 0.1) 100%)'
                        : 'linear-gradient(135deg, #FFFFFF 0%, rgba(63, 81, 181, 0.05) 100%)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        width: 40,
                        height: 40,
                        background: theme.palette.gradients.primary,
                        borderRadius: '50%',
                        opacity: 0.1,
                      }
                    })}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack spacing={3}>
                        <FormatQuoteIcon 
                          sx={(theme) => ({ 
                            fontSize: 40,
                            color: theme.palette.primary.main,
                            opacity: 0.5,
                          })} 
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            fontStyle: 'italic',
                            color: 'text.secondary',
                            lineHeight: 1.8,
                          }}
                        >
                          {testimonial.content}
                        </Typography>
                        <Rating value={testimonial.rating} readOnly />
                        <Divider sx={(theme) => ({ 
                          borderColor: alpha(theme.palette.primary.main, 0.1) 
                        })} />
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            sx={{ width: 56, height: 56 }}
                          />
                          <Box>
                            <Typography variant="h6" fontWeight={600}>
                              {testimonial.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {testimonial.position}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {testimonial.company}
                            </Typography>
                          </Box>
                        </Stack>
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