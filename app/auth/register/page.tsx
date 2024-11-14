'use client';
import React from 'react';
import { Box, Container, Typography, TextField, Button, Card, CardContent, Stepper, Step, StepLabel } from '@mui/material';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const steps = ['基本信息', '企业信息', '完成注册'];

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

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeStep === steps.length - 1) {
      // 提交注册信息
      console.log('Registration data:', formData);
      router.push('/auth/register-success');
    } else {
      handleNext();
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
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
            <TextField
              fullWidth
              label="确认密码"
              variant="outlined"
              margin="normal"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              fullWidth
              label="企业名称"
              variant="outlined"
              margin="normal"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
            <TextField
              fullWidth
              label="所属行业"
              variant="outlined"
              margin="normal"
              required
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            />
            <TextField
              fullWidth
              label="企业规模"
              variant="outlined"
              margin="normal"
              required
              value={formData.scale}
              onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
            />
          </>
        );
      case 2:
        return (
          <>
            <TextField
              fullWidth
              label="管理员姓名"
              variant="outlined"
              margin="normal"
              required
              value={formData.adminName}
              onChange={(e) => setFormData({ ...formData, adminName: e.target.value })}
            />
            <TextField
              fullWidth
              label="联系电话"
              variant="outlined"
              margin="normal"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <TextField
              fullWidth
              label="职位"
              variant="outlined"
              margin="normal"
              required
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            />
          </>
        );
      default:
        return null;
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
                注册天庭ERP
              </Typography>

              <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <form onSubmit={handleSubmit}>
                {renderStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="outlined"
                    color="primary"
                  >
                    上一步
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    {activeStep === steps.length - 1 ? '完成注册' : '下一步'}
                  </Button>
                </Box>
              </form>

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  已有账号？
                  <Button 
                    color="primary"
                    onClick={() => router.push('/auth/login')}
                    sx={{ ml: 1 }}
                  >
                    立即登录
                  </Button>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 