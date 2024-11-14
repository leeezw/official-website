'use client';
import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function RegisterSuccess() {
  const router = useRouter();

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
      }}
    >
      <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center' }}>
        <Card 
          elevation={0} 
          sx={{ 
            p: 4, 
            textAlign: 'center',
            width: '100%',
            background: 'white',
            boxShadow: '0 10px 40px rgba(26, 35, 126, 0.1)',
          }}
        >
          <CardContent>
            <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center' }}>
              <Box
                sx={{
                  position: 'relative',
                  width: 40,
                  height: 40,
                  animation: 'spin 20s linear infinite',
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
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

            <CheckCircleOutlineIcon 
              sx={{ 
                fontSize: 80, 
                color: 'primary.main',
                mb: 3,
              }} 
            />
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              注册成功！
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ mb: 4, lineHeight: 1.8 }}
            >
              感谢您选择天庭ERP！我们已经向您的邮箱发送了激活链接，
              <br />
              请查收邮件并完成账号激活，开启智能管理之旅。
            </Typography>

            <Box 
              sx={{ 
                display: 'flex', 
                gap: 2, 
                justifyContent: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => router.push('/auth/login')}
                sx={{ 
                  px: 4,
                  py: 1.5,
                  background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #0D1642 30%, #1A237E 90%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(26, 35, 126, 0.25)',
                  },
                }}
              >
                前往登录
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => router.push('/')}
                sx={{ 
                  px: 4,
                  py: 1.5,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                返回首页
              </Button>
            </Box>

            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ mt: 4 }}
            >
              如果您在几分钟内没有收到邮件，请检查垃圾邮件文件夹
              <br />
              或
              <Button 
                color="primary"
                onClick={() => router.push('/contact')}
                sx={{ minWidth: 'auto', p: 0.5 }}
              >
                联系客服
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
} 