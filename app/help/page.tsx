'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Card } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqData = [
  {
    question: '如何开始使用天庭ERP？',
    answer: '注册账号后，我们的客服团队会为您提供详细的系统使用培训和指导，确保您能够快速上手使用系统的各项功能。'
  },
  {
    question: '系统支持哪些数据导入方式？',
    answer: '系统支持Excel批量导入、API接口对接、手动录入等多种数据导入方式，可以根据您的具体需求选择合适的方式。'
  },
  {
    question: '如何确保数据安全？',
    answer: '我们采用银行级别的加密技术，所有数据传输都经过SSL加密，同时提供定期备份和多重身份认证等安全措施。'
  },
  {
    question: '是否支持自定义功能开发？',
    answer: '是的，我们提供专业的定制开发服务，可以根据您的企业特点和需求进行个性化功能开发。'
  },
  {
    question: '如何获取技术支持？',
    answer: '我们提供7*24小时技术支持服务，您可以通过电话、邮件或在线客服获取帮助。企业版和旗舰版用户还可以享受专属客服服务。'
  }
];

export default function Help() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredFaq = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            帮助中心
          </Typography>

          {/* 搜索框 */}
          <Box sx={{ maxWidth: 600, mx: 'auto', mb: 8 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="搜索常见问题..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                backgroundColor: 'white',
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'secondary.main',
                  },
                },
              }}
            />
          </Box>

          {/* 快速帮助卡片 */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {[
              { title: '新手指南', icon: '📚', link: '/guide' },
              { title: '视频教程', icon: '🎥', link: '/tutorials' },
              { title: '技术文档', icon: '📑', link: '/docs' },
              { title: '在线客服', icon: '💬', link: '/support' },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <Typography variant="h2" sx={{ mb: 2, fontSize: '2.5rem' }}>
                    {item.icon}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* FAQ手风琴 */}
          <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
            常见问题
          </Typography>
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {filteredFaq.map((faq, index) => (
              <Accordion key={index} elevation={0} sx={{ mb: 2, backgroundColor: 'white' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.02)',
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* 联系支持 */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h5" gutterBottom>
              没有找到答案？
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 2 }}
              onClick={() => window.location.href = '/contact'}
            >
              联系客服
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 