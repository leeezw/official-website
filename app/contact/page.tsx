'use client';
import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Card, CardContent, Stack, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 处理表单提交
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: '公司地址',
      content: '北京市朝阳区三里屯SOHO',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: '联系电话',
      content: '(400) 123-4567',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: '电子邮箱',
      content: 'contact@tianting-erp.com',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: '工作时间',
      content: '周一至周五 9:00 - 18:00',
    },
  ];

  return (
    <Box>
      <Header />
      <Box 
        sx={{ 
          pt: 15,
          pb: 10,
          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                联系我们
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 6,
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                如果您有任何问题或建议，请随时与我们联系，我们将竭诚为您服务
              </Typography>

              <Grid container spacing={3}>
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card
                      elevation={0}
                      sx={{
                        height: '100%',
                        background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(63, 81, 181, 0.05) 100%)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(63, 81, 181, 0.1) 100%)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <IconButton
                          sx={{
                            mb: 2,
                            color: 'primary.main',
                            backgroundColor: 'rgba(26, 35, 126, 0.1)',
                            '&:hover': {
                              backgroundColor: 'rgba(26, 35, 126, 0.15)',
                            },
                          }}
                        >
                          {info.icon}
                        </IconButton>
                        <Typography 
                          variant="h6" 
                          gutterBottom
                          sx={{ fontWeight: 600 }}
                        >
                          {info.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {info.content}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card 
                elevation={0}
                sx={{ 
                  p: 4,
                  background: 'white',
                  boxShadow: '0 10px 40px rgba(26, 35, 126, 0.1)',
                }}
              >
                <CardContent>
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      mb: 4,
                    }}
                  >
                    发送消息
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="姓名"
                            variant="outlined"
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                  borderColor: 'primary.main',
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="电话"
                            variant="outlined"
                            required
                          />
                        </Grid>
                      </Grid>
                      <TextField
                        fullWidth
                        label="邮箱"
                        variant="outlined"
                        type="email"
                        required
                      />
                      <TextField
                        fullWidth
                        label="公司名称"
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="留言内容"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                      />
                      <Button
                        type="submit"
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
                        发送消息
                      </Button>
                    </Stack>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 地图部分 */}
      <Box sx={{ height: 400, width: '100%', bgcolor: 'background.paper' }}>
        {/* 这里可以嵌入地图组件 */}
        <Box
          sx={{
            height: '100%',
            width: '100%',
            bgcolor: 'rgba(26, 35, 126, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography color="text.secondary">
            地图将在这里显示
          </Typography>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
} 