'use client';
import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Stack, Button, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import WechatIcon from '@mui/icons-material/WechatOutlined';
import QrCodeIcon from '@mui/icons-material/QrCode2';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Footer() {
  const router = useRouter();
  
  const quickLinks = [
    { title: '产品', items: ['功能特性', '解决方案', '价格方案', '成功案例'] },
    { title: '资源', items: ['帮助文档', '开发文档', 'API接口', '更新日志'] },
    { title: '关于', items: ['公司介绍', '加入我们', '联系我们', '新闻动态'] },
  ];
  
  return (
    <Box>
      {/* 主要内容区 */}
      <Box 
        sx={{ 
          bgcolor: 'background.paper', 
          py: 8,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            {/* Logo和简介 */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: 32,
                    height: 32,
                  }}
                >
                  <Image
                    src="/react.svg"
                    alt="天庭ERP Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  天庭ERP
                </Typography>
              </Box>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ mb: 3, lineHeight: 1.8 }}
              >
                打造智能化企业管理系统，助力企业腾飞。让数字化转型更简单，让企业管理更高效。
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                onClick={() => router.push('/contact')}
                sx={{
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateX(4px)',
                  },
                }}
              >
                免费咨询
              </Button>
            </Grid>

            {/* 快速链接 */}
            <Grid item xs={12} md={5}>
              <Grid container spacing={4}>
                {quickLinks.map((section, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Typography 
                      variant="subtitle1" 
                      fontWeight={600} 
                      gutterBottom
                      sx={{ color: 'primary.main' }}
                    >
                      {section.title}
                    </Typography>
                    <Stack spacing={1.5}>
                      {section.items.map((item, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            cursor: 'pointer',
                            color: 'text.secondary',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              color: 'primary.main',
                              transform: 'translateX(4px)',
                            },
                          }}
                          onClick={() => router.push('/')}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* 联系方式 */}
            <Grid item xs={12} md={3}>
              <Typography 
                variant="subtitle1" 
                fontWeight={600} 
                gutterBottom
                sx={{ color: 'primary.main' }}
              >
                联系我们
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="body2" color="text.secondary">
                    contact@tianting-erp.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="body2" color="text.secondary">
                    (400) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="body2" color="text.secondary">
                    北京市朝阳区三里屯SOHO
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Typography variant="subtitle2" fontWeight={500}>
                  关注我们
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    sx={{
                      color: 'primary.main',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                      },
                    }}
                  >
                    {/* <WechatIcon /> */}
                  </IconButton>
                  <IconButton
                    sx={{
                      color: 'primary.main',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                      },
                    }}
                  >
                    <QrCodeIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 版权信息 */}
      <Box 
        sx={{ 
          bgcolor: 'background.default',
          py: 3,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="body2" 
                color="text.secondary"
              >
                © {new Date().getFullYear()} 天庭ERP. 保留所有权利.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack 
                direction="row" 
                spacing={3}
                sx={{ 
                  justifyContent: { xs: 'flex-start', md: 'flex-end' } 
                }}
              >
                {['服务条款', '隐私政策', '法律声明'].map((item, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      cursor: 'pointer',
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                    onClick={() => router.push('/')}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
} 