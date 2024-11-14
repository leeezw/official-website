'use client';
import React from 'react';
import { Box, Container, Typography, TextField, Button, Card, CardContent, Alert } from '@mui/material';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // 这里添加发送重置密码邮件的逻辑
    if (email) {
      setSubmitted(true);
      console.log('Password reset email sent to:', email);
    } else {
      setError('请输入邮箱地址');
    }
  };

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
          <Card elevation={0} sx={{ p: 4 }}>
            <CardContent>
              <Typography 
                variant="h4" 
                align="center" 
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  mb: 4,
                  background: 'linear-gradient(45deg, #1A237E 30%, #00B894 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                重置密码
              </Typography>

              {!submitted ? (
                <>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    align="center"
                    sx={{ mb: 4 }}
                  >
                    请输入您的注册邮箱，我们将向您发送重置密码的链接
                  </Typography>

                  {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
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
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                      size="large"
                    >
                      发送重置链接
                    </Button>
                  </form>
                </>
              ) : (
                <>
                  <Alert severity="success" sx={{ mb: 4 }}>
                    重置密码链接已发送到您的邮箱，请查收！
                  </Alert>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    如果您在几分钟内没有收到邮件，请检查垃圾邮件文件夹。
                  </Typography>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={() => setSubmitted(false)}
                    sx={{ mb: 2 }}
                  >
                    重新发送
                  </Button>
                </>
              )}

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button 
                  color="primary"
                  onClick={() => router.push('/auth/login')}
                >
                  返回登录
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