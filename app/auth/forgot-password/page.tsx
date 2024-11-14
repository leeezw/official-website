'use client';
import React, { useState } from 'react';
import { 
  Box, Container, Typography, TextField, Button, Card, 
  CardContent, Alert, IconButton 
} from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('请输入邮箱地址');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('请输入有效的邮箱地址');
      return;
    }
    
    // 这里添加发送重置密码邮件的逻辑
    setSubmitted(true);
    console.log('Password reset email sent to:', email);
  };

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

            <IconButton
              onClick={() => router.push('/auth/login')}
              sx={{ 
                position: 'absolute',
                top: 32,
                left: 32,
                color: 'text.secondary',
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            {!submitted ? (
              <>
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
                  重置密码
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ mb: 4, lineHeight: 1.8 }}
                >
                  请输入您的注册邮箱，我们将向您发送重置密码的链接
                </Typography>

                {error && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="邮箱"
                    variant="outlined"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: 3 }}
                    InputProps={{
                      startAdornment: (
                        <EmailIcon color="action" sx={{ mr: 1 }} />
                      ),
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ 
                      py: 1.5,
                      background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #0D1642 30%, #1A237E 90%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(26, 35, 126, 0.25)',
                      },
                    }}
                  >
                    发送重置链接
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Box sx={{ textAlign: 'center' }}>
                  <EmailIcon 
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
                    邮件已发送
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ mb: 4, lineHeight: 1.8 }}
                  >
                    重置密码链接已发送到您的邮箱
                    <br />
                    {email}
                  </Typography>
                  <Alert severity="info" sx={{ mb: 4, textAlign: 'left' }}>
                    如果您在几分钟内没有收到邮件，请检查垃圾邮件文件夹。
                  </Alert>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={() => setSubmitted(false)}
                    sx={{ 
                      mb: 2,
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    重新发送
                  </Button>
                </Box>
              </>
            )}

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Button 
                color="primary"
                onClick={() => router.push('/auth/login')}
                sx={{ fontWeight: 500 }}
              >
                返回登录
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
} 