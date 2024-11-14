'use client';
import React from 'react';
import { 
  Box, Container, Typography, TextField, Button, Card, 
  CardContent, Divider, IconButton, InputAdornment 
} from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
// import WechatIcon from '@mui/icons-material/WechatOutlined';
import DingdingOutlined from '@mui/icons-material/ApiOutlined'; // 代替钉钉图标
import QrCodeIcon from '@mui/icons-material/QrCode2';

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
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
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
      }}
    >
      {/* 左侧装饰区域 */}
      <Box 
        sx={{ 
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.95) 0%, rgba(63, 81, 181, 0.9) 100%)',
            zIndex: 0,
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
            欢迎回来
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            登录天庭ERP，开启智能管理之旅
          </Typography>
          <Box
            component="img"
            src="/login-illustration.svg" // 需要添加登录页插图
            alt="Login illustration"
            sx={{
              width: '100%',
              maxWidth: 480,
              filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2))',
            }}
          />
        </Box>
      </Box>

      {/* 右侧登录表单 */}
      <Box 
        sx={{ 
          flex: { xs: 1, md: 0.8 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 4,
          backgroundColor: 'white',
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', gap: 2 }}>
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

          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            登录
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            还没有账号？
            <Button 
              color="primary"
              onClick={() => router.push('/auth/register')}
              sx={{ ml: 1, fontWeight: 600 }}
            >
              立即注册
            </Button>
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="邮箱"
              variant="outlined"
              margin="normal"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="密码"
              variant="outlined"
              margin="normal"
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, mb: 3 }}>
              <Button 
                color="primary"
                onClick={() => router.push('/auth/forgot-password')}
                sx={{ fontWeight: 500 }}
              >
                忘记密码？
              </Button>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ 
                py: 1.5,
                mb: 3,
                background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #0D1642 30%, #1A237E 90%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(26, 35, 126, 0.25)',
                },
              }}
            >
              登录
            </Button>
          </form>

          <Divider sx={{ my: 3 }}>其他登录方式</Divider>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            {[
            //   { icon: <WechatIcon />, label: '微信' },
              { icon: < DingdingOutlined/>, label: '微信' },
              { icon: <DingdingOutlined />, label: '钉钉' },
              { icon: <QrCodeIcon />, label: '扫码' },
            ].map((item, index) => (
              <IconButton
                key={index}
                sx={{
                  width: 48,
                  height: 48,
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    backgroundColor: 'rgba(26, 35, 126, 0.04)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>

          <Typography 
            variant="body2" 
            align="center" 
            color="text.secondary"
            sx={{ mt: 4 }}
          >
            登录即表示您同意我们的
            <Button 
              color="primary"
              onClick={() => router.push('/terms')}
              sx={{ minWidth: 'auto', p: 0.5 }}
            >
              服务条款
            </Button>
            和
            <Button 
              color="primary"
              onClick={() => router.push('/privacy')}
              sx={{ minWidth: 'auto', p: 0.5 }}
            >
              隐私政策
            </Button>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
} 