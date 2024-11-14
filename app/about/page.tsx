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
  LinearProgress,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// 公司数据
const companyStats = [
  {
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    value: '500+',
    label: '企业客户',
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 40 }} />,
    value: '50+',
    label: '行业认证',
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
    value: '100+',
    label: '合作伙伴',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    value: '98%',
    label: '客户满意度',
  },
];

// 发展历程
const milestones = [
  {
    year: '2024',
    title: '全新升级',
    description: '发布新一代智能ERP系统，引入AI决策引擎',
  },
  {
    year: '2023',
    title: '快速发展',
    description: '服务客户突破500家，获得多项行业认证',
  },
  {
    year: '2022',
    title: '技术创新',
    description: '推出云原生架构，支持多云部署',
  },
  {
    year: '2021',
    title: '品牌升级',
    description: '完成品牌升级，确立"数智赋能"品牌理念',
  },
  {
    year: '2020',
    title: '成立元年',
    description: '公司成立，发布首个版本产品',
  },
];

// 核心技术能力
const capabilities = [
  {
    name: '云原生技术',
    value: 95,
  },
  {
    name: '人工智能',
    value: 90,
  },
  {
    name: '数据安全',
    value: 98,
  },
  {
    name: '系统性能',
    value: 92,
  },
];

// 团队成员
const teamMembers = [
  {
    name: '张三',
    position: '创始人 & CEO',
    avatar: '/team/ceo.jpg',
    description: '拥有15年企业管理软件行业经验，曾任某知名企业技术副总裁',
  },
  {
    name: '李四',
    position: '技术总监',
    avatar: '/team/cto.jpg',
    description: '前谷歌高级工程师，人工智能和云计算专家',
  },
  {
    name: '王五',
    position: '产品总监',
    avatar: '/team/cpo.jpg',
    description: '10年产品经理经验，专注企业级软件产品设计',
  },
];

export default function About() {
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
              关于我们
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
              天庭科技致力于为企业提供智能化管理解决方案，
              以技术创新推动企业数字化转型，让企业管理更简单、更高效。
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Company Stats */}
      <Box sx={{ py: { xs: 8, md: 12 } }} ref={ref}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {companyStats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Fade in={inView} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 30px rgba(26, 35, 126, 0.12)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ color: 'primary.main', mb: 2 }}>
                        {stat.icon}
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Company Timeline */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
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
            发展历程
          </Typography>

          <Timeline position="alternate">
            {milestones.map((milestone, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot 
                    sx={{ 
                      bgcolor: 'primary.main',
                      boxShadow: '0 0 0 4px rgba(26, 35, 126, 0.2)',
                    }}
                  />
                  {index < milestones.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Fade in={inView} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                    <Card
                      sx={{
                        mb: 4,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 30px rgba(26, 35, 126, 0.12)',
                        },
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="h6"
                          color="primary"
                          sx={{ fontWeight: 600 }}
                        >
                          {milestone.year}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                          {milestone.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {milestone.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>

      {/* Core Capabilities */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
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
            核心技术能力
          </Typography>

          <Grid container spacing={4}>
            {capabilities.map((capability, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Fade in={inView} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    sx={{
                      p: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 30px rgba(26, 35, 126, 0.12)',
                      },
                    }}
                  >
                    <Stack spacing={2}>
                      <Typography variant="h6">
                        {capability.name}
                      </Typography>
                      <Box sx={{ width: '100%' }}>
                        <LinearProgress
                          variant="determinate"
                          value={capability.value}
                          sx={{
                            height: 10,
                            borderRadius: 5,
                            bgcolor: 'rgba(26, 35, 126, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 5,
                              background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                            },
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="right"
                      >
                        {capability.value}%
                      </Typography>
                    </Stack>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
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
            核心团队
          </Typography>

          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in={inView} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    sx={{
                      height: '100%',
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
                        paddingTop: '100%',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={member.avatar}
                        alt={member.name}
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
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" gutterBottom>
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="primary"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {member.position}
                      </Typography>
                      <Typography color="text.secondary">
                        {member.description}
                      </Typography>
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