'use client';
import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Card, CardContent } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 处理表单提交
    console.log('Form submitted');
  };

  return (
    <Box>
      <Header />
      <Box 
        sx={{ 
          pt: 15,
          pb: 10,
          background: 'linear-gradient(145deg, #f6f8fb 30%, #f0f4f8 90%)',
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
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
            联系我们
          </Typography>
          <Typography 
            variant="h5" 
            align="center"
            sx={{ 
              mb: 6,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            如果您有任何问题或建议，请随时与我们联系
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card elevation={0}>
                <CardContent sx={{ p: 4 }}>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="姓名"
                          variant="outlined"
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="邮箱"
                          variant="outlined"
                          type="email"
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="电话"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="留言"
                          variant="outlined"
                          multiline
                          rows={4}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          size="large"
                          fullWidth
                          sx={{ 
                            py: 1.5,
                            '&:hover': {
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          提交
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  联系方式
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  地址：北京市朝阳区
                  <br />
                  电话：(400) 123-4567
                  <br />
                  邮箱：contact@tianting-erp.com
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  工作时间
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  周一至周五：9:00 - 18:00
                  <br />
                  周六、周日：休息
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 