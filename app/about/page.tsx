'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Stack, Divider } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: '张三',
    position: '创始人 & CEO',
    avatar: '/avatars/ceo.jpg',
    description: '拥有15年企业管理软件开发经验，曾任某知名ERP公司技术总监',
  },
  {
    name: '李四',
    position: '技术总监',
    avatar: '/avatars/cto.jpg',
    description: '前微软高级工程师，人工智能和大数据专家',
  },
  {
    name: '王五',
    position: '产品总监',
    avatar: '/avatars/cpo.jpg',
    description: '10年产品经理经验，专注于企业级软件产品设计',
  },
];

const milestones = [
  {
    year: '2023',
    title: '公司成立',
    description: '天庭科技在北京成立，致力于打造新一代智能ERP系统',
  },
  {
    year: '2023 Q2',
    title: '首轮融资',
    description: '完成天使轮融资，获得顶级投资机构支持',
  },
  {
    year: '2023 Q3',
    title: '产品发布',
    description: '天庭ERP 1.0版本正式发布，获得多家企业客户青睐',
  },
  {
    year: '2023 Q4',
    title: '快速发展',
    description: '服务客户突破100家，团队规模扩大到50人',
  },
];

export default function About() {
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
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
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
                关于天庭科技
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                我们致力于用科技创新推动企业数字化转型，让企业管理更简单、更智能
              </Typography>
              <Box 
                sx={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 4,
                  mt: 6,
                }}
              >
                {[
                  { number: '100+', label: '企业客户' },
                  { number: '99.9%', label: '系统可用性' },
                  { number: '50+', label: '技术专家' },
                  { number: '24/7', label: '技术支持' },
                ].map((stat, index) => (
                  <Box key={index} sx={{ textAlign: 'center' }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/about-image.jpg"
                alt="关于我们"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(26, 35, 126, 0.2)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)',
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 发展历程 */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 8,
            background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          发展历程
        </Typography>
        <Box sx={{ position: 'relative' }}>
          {/* 中间的时间线 */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 2,
              backgroundColor: 'rgba(26, 35, 126, 0.1)',
              transform: 'translateX(-50%)',
            }}
          />
          <Stack spacing={6}>
            {milestones.map((milestone, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    width: 16,
                    height: 16,
                    backgroundColor: 'primary.main',
                    borderRadius: '50%',
                    transform: 'translateX(-50%)',
                  },
                }}
              >
                <Card
                  sx={{
                    width: '45%',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography 
                      variant="h6" 
                      color="primary.main"
                      gutterBottom
                    >
                      {milestone.year}
                    </Typography>
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {milestone.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {milestone.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* 团队介绍 */}
      <Box sx={{ bgcolor: 'background.paper', py: 12 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 8,
              background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            核心团队
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Avatar
                      src={member.avatar}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 3,
                        border: '4px solid',
                        borderColor: 'primary.main',
                      }}
                    />
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      color="primary.main"
                      gutterBottom
                    >
                      {member.position}
                    </Typography>
                    <Typography color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 企业文化 */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 8,
            background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          企业文化
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: '使命',
              content: '用科技创新推动企业数字化转型',
              icon: '🎯',
            },
            {
              title: '愿景',
              content: '成为全球领先的企业管理软件服务商',
              icon: '🌟',
            },
            {
              title: '价值观',
              content: '创新、专业、诚信、共赢',
              icon: '💫',
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    {item.icon}
                  </Typography>
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.content}
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