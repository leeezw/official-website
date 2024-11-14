'use client';
import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const router = useRouter();
  
  return (
    <Box sx={{ 
      bgcolor: 'background.paper', 
      py: 8,
      borderTop: '1px solid',
      borderColor: 'divider',
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: 30,
                  height: 30,
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
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              打造智能化企业管理系统，助力企业腾飞
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  联系方式
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2" color="text.secondary">
                    邮箱: contact@tianting-erp.com
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    电话: (400) 123-4567
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    地址: 北京市朝阳区
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  快速链接
                </Typography>
                <Stack spacing={1}>
                  {[
                    { text: '服务条款', path: '/terms' },
                    { text: '隐私政策', path: '/privacy' },
                    { text: '帮助中心', path: '/help' },
                  ].map((item, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        cursor: 'pointer',
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'secondary.main',
                        },
                      }}
                      onClick={() => router.push(item.path)}
                    >
                      {item.text}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  关注我们
                </Typography>
                <Stack direction="row" spacing={1}>
                  {['微信', '微博', '抖音'].map((platform, index) => (
                    <IconButton
                      key={index}
                      size="small"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'secondary.main',
                        },
                      }}
                    >
                      {platform}
                    </IconButton>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center" 
          sx={{ pt: 8 }}
        >
          © {new Date().getFullYear()} 天庭ERP. 保留所有权利.
        </Typography>
      </Container>
    </Box>
  );
} 