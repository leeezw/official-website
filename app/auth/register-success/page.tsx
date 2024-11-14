'use client';
import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RegisterSuccess() {
  const router = useRouter();

  return (
    <Box>
      <Header />
      <Box 
        sx={{ 
          pt: 15,
          pb: 10,
          minHeight: '100vh',
          background: 'linear-gradient(145deg, #f6f8fb 30%, #f0f4f8 90%)',
        }}
      >
        <Container maxWidth="sm">
          <Card elevation={0} sx={{ p: 4, textAlign: 'center' }}>
            <CardContent>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: '4rem',
                  mb: 2,
                }}
              >
                🎉
              </Typography>
              <Typography 
                variant="h4" 
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #1A237E 30%, #00B894 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                注册成功！
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                感谢您选择天庭ERP，我们已经向您的邮箱发送了激活链接，
                请查收邮件并完成账号激活。
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => router.push('/auth/login')}
                >
                  前往登录
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => router.push('/')}
                >
                  返回首页
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 