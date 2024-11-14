'use client';
import React from 'react';
import { 
  Box, Container, Typography, TextField, Button, Card, 
  CardContent, Stepper, Step, StepLabel, Stack, Alert 
} from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const steps = ['基本信息', '企业信息', '管理员信息'];

export default function Register() {
  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    // 基本信息
    email: '',
    password: '',
    confirmPassword: '',
    // 企业信息
    companyName: '',
    industry: '',
    scale: '',
    // 管理员信息
    adminName: '',
    phone: '',
    position: '',
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0:
        if (!formData.email) newErrors.email = '请输入邮箱';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = '请输入有效的邮箱地址';
        }
        if (!formData.password) newErrors.password = '请输入密码';
        else if (formData.password.length < 6) {
          newErrors.password = '密码长度至少6位';
        }
        if (!formData.confirmPassword) newErrors.confirmPassword = '请确认密码';
        else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = '两次输入的密码不一致';
        }
        break;
      case 1:
        if (!formData.companyName) newErrors.companyName = '请输入企业名称';
        if (!formData.industry) newErrors.industry = '请输入所属行业';
        if (!formData.scale) newErrors.scale = '请输入企业规模';
        break;
      case 2:
        if (!formData.adminName) newErrors.adminName = '请输入管理员姓名';
        if (!formData.phone) newErrors.phone = '请输入联系电话';
        else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
          newErrors.phone = '请输入有效的手机号码';
        }
        if (!formData.position) newErrors.position = '请输入职位';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeStep === steps.length - 1) {
      if (validateStep(activeStep)) {
        // 提交注册信息
        console.log('Registration data:', formData);
        router.push('/auth/register-success');
      }
    } else {
      handleNext();
    }
  };

  const renderStepIcon = (step: number) => {
    switch (step) {
      case 0:
        return <PersonOutlineIcon />;
      case 1:
        return <BusinessIcon />;
      case 2:
        return <AdminPanelSettingsIcon />;
      default:
        return null;
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="邮箱"
              variant="outlined"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <PersonOutlineIcon color="action" sx={{ mr: 1 }} />
                ),
              }}
            />
            <TextField
              fullWidth
              label="密码"
              variant="outlined"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <LockOutlinedIcon color="action" sx={{ mr: 1 }} />
                ),
              }}
            />
            <TextField
              fullWidth
              label="确认密码"
              variant="outlined"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                startAdornment: (
                  <LockOutlinedIcon color="action" sx={{ mr: 1 }} />
                ),
              }}
            />
          </Stack>
        );
      case 1:
        return (
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="企业名称"
              variant="outlined"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              error={!!errors.companyName}
              helperText={errors.companyName}
              InputProps={{
                startAdornment: (
                  <BusinessIcon color="action" sx={{ mr: 1 }} />
                ),
              }}
            />
            <TextField
              fullWidth
              label="所属行业"
              variant="outlined"
              required
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              error={!!errors.industry}
              helperText={errors.industry}
            />
            <TextField
              fullWidth
              label="企业规模"
              variant="outlined"
              required
              value={formData.scale}
              onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
              error={!!errors.scale}
              helperText={errors.scale}
            />
          </Stack>
        );
      case 2:
        return (
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="管理员姓名"
              variant="outlined"
              required
              value={formData.adminName}
              onChange={(e) => setFormData({ ...formData, adminName: e.target.value })}
              error={!!errors.adminName}
              helperText={errors.adminName}
              InputProps={{
                startAdornment: (
                  <AdminPanelSettingsIcon color="action" sx={{ mr: 1 }} />
                ),
              }}
            />
            <TextField
              fullWidth
              label="联系电话"
              variant="outlined"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              error={!!errors.phone}
              helperText={errors.phone}
            />
            <TextField
              fullWidth
              label="职位"
              variant="outlined"
              required
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              error={!!errors.position}
              helperText={errors.position}
            />
          </Stack>
        );
      default:
        return null;
    }
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
            开启智能管理之旅
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            注册天庭ERP，让企业管理更简单
          </Typography>
          <Box
            component="img"
            src="/illustrations/register-illustration.svg"
            alt="Register illustration"
            sx={{
              width: '100%',
              maxWidth: 480,
              filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2))',
            }}
          />
        </Box>
      </Box>

      {/* 右侧注册表单 */}
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
            企业注册
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            已有账号？
            <Button 
              color="primary"
              onClick={() => router.push('/auth/login')}
              sx={{ ml: 1, fontWeight: 600 }}
            >
              立即登录
            </Button>
          </Typography>

          <Stepper 
            activeStep={activeStep} 
            sx={{ mb: 4 }}
            alternativeLabel
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel StepIconComponent={() => renderStepIcon(index)}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit}>
            {renderStepContent(activeStep)}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
                sx={{ 
                  px: 4,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                  },
                }}
              >
                上一步
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ 
                  px: 4,
                  background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #0D1642 30%, #1A237E 90%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(26, 35, 126, 0.25)',
                  },
                }}
              >
                {activeStep === steps.length - 1 ? '完成注册' : '下一步'}
              </Button>
            </Box>
          </form>

          <Typography 
            variant="body2" 
            align="center" 
            color="text.secondary"
            sx={{ mt: 4 }}
          >
            注册即表示您同意我们的
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