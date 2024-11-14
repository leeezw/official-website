'use client';
import React from 'react';
import { Box, Container, Typography, TextField, Button, Card, CardContent, Divider, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理登录逻辑
    console.log('Login attempt:', formData);
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
                登录天庭ERP
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="邮箱"
                  variant="outlined"
                  margin="normal"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="密码"
                  variant="outlined"
                  margin="normal"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ mt: 3, mb: 2 }}
                >
                  登录
                </Button>
              </form>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Button 
                  color="primary"
                  onClick={() => router.push('/auth/forgot-password')}
                >
                  忘记密码？
                </Button>
                <Button 
                  color="primary"
                  onClick={() => router.push('/auth/register')}
                >
                  注册账号
                </Button>
              </Box>

              <Divider sx={{ my: 3 }}>或</Divider>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                {['微信', '企业微信', '钉钉'].map((platform, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      p: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 184, 148, 0.1)',
                      },
                    }}
                  >
                    {platform}
                  </IconButton>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 