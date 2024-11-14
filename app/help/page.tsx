'use client';
import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, Accordion, AccordionSummary, 
  AccordionDetails, TextField, Button, Card, CardContent, Stack,
  InputAdornment, IconButton, Chip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ChatIcon from '@mui/icons-material/Chat';
import Header from '../components/Header';
import Footer from '../components/Footer';

const categories = [
  '全部', '入门指南', '功能介绍', '使用技巧', '常见问题', '故障排除'
];

const faqData = [
  {
    category: '入门指南',
    question: '如何开始使用天庭ERP？',
    answer: '注册账号后，我们的客服团队会为您提供详细的系统使用培训和指导，确保您能够快速上手使用系统的各项功能。',
    tags: ['新手入门', '账号注册']
  },
  {
    category: '功能介绍',
    question: '系统支持哪些数据导入方式？',
    answer: '系统支持Excel批量导入、API接口对接、手动录入等多种数据导入方式，可以根据您的具体需求选择合适的方式。',
    tags: ['数据导入', 'Excel', 'API']
  },
  {
    category: '使用技巧',
    question: '如何使用高级筛选功能？',
    answer: '在列表页面点击"高级筛选"按钮，可以设置多个筛选条件，支持条件组合和自定义字段筛选。',
    tags: ['数据筛选', '高级功能']
  },
  {
    category: '常见问题',
    question: '如何确保数据安全？',
    answer: '我们采用银行级别的加密技术，所有数据传输都经过SSL加密，同时提供定期备份和多重身份认证等安全措施。',
    tags: ['数据安全', '加密']
  },
  {
    category: '故障排除',
    question: '系统无法登录怎么办？',
    answer: '请先检查网络连接和账号密码是否正确，如果问题仍然存在，可以尝试清除浏览器缓存或联系技术支持。',
    tags: ['登录问题', '故障处理']
  },
];

const quickLinks = [
  {
    title: '使用文档',
    icon: <ArticleIcon sx={{ fontSize: 40 }} />,
    description: '详细的功能说明和操作指南',
    link: '/docs',
    color: '#1A237E',
  },
  {
    title: '视频教程',
    icon: <VideoLibraryIcon sx={{ fontSize: 40 }} />,
    description: '直观的操作演示和讲解',
    link: '/videos',
    color: '#00B894',
  },
  {
    title: '常见问题',
    icon: <LiveHelpIcon sx={{ fontSize: 40 }} />,
    description: '快速解答您的疑问',
    link: '/faq',
    color: '#FF6B6B',
  },
  {
    title: '在线客服',
    icon: <ChatIcon sx={{ fontSize: 40 }} />,
    description: '专业顾问为您解答',
    link: '/support',
    color: '#4834D4',
  },
];

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

  const handlePanelChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  const filteredFaq = faqData.filter(item =>
    (selectedCategory === '全部' || item.category === selectedCategory) &&
    (item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

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
          <Typography 
            variant="h2" 
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            帮助中心
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            我们随时为您提供帮助，让您的使用体验更顺畅
          </Typography>

          {/* 搜索框 */}
          <Box sx={{ maxWidth: 600, mx: 'auto', mb: 8 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="搜索问题..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
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
                    borderColor: 'primary.main',
                  },
                },
              }}
            />
          </Box>

          {/* 快速链接 */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {quickLinks.map((link, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 8px 30px ${link.color}20`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <IconButton
                      sx={{
                        mb: 2,
                        color: link.color,
                        backgroundColor: `${link.color}10`,
                        '&:hover': {
                          backgroundColor: `${link.color}20`,
                        },
                      }}
                    >
                      {link.icon}
                    </IconButton>
                    <Typography variant="h6" gutterBottom>
                      {link.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {link.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* 分类标签 */}
          <Stack 
            direction="row" 
            spacing={1} 
            sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}
            justifyContent="center"
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? "primary" : "default"}
                sx={{ 
                  m: 0.5,
                  '&:hover': {
                    backgroundColor: 'rgba(26, 35, 126, 0.1)',
                  },
                }}
              />
            ))}
          </Stack>

          {/* FAQ列表 */}
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {filteredFaq.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expandedPanel === `panel${index}`}
                onChange={handlePanelChange(`panel${index}`)}
                elevation={0}
                sx={{
                  mb: 2,
                  backgroundColor: 'white',
                  '&:before': {
                    display: 'none',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(26, 35, 126, 0.02)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      display: 'flex',
                      flexDirection: 'column',
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                    {faq.question}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label={faq.category}
                      size="small"
                      sx={{ 
                        backgroundColor: 'rgba(26, 35, 126, 0.1)',
                        color: 'primary.main',
                      }}
                    />
                    {faq.tags.map((tag, idx) => (
                      <Chip
                        key={idx}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{ 
                          borderColor: 'rgba(26, 35, 126, 0.2)',
                          color: 'text.secondary',
                        }}
                      />
                    ))}
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* 联系支持 */}
          <Box 
            sx={{ 
              textAlign: 'center', 
              mt: 8,
              p: 6,
              backgroundColor: 'white',
              borderRadius: 4,
              boxShadow: '0 4px 20px rgba(26, 35, 126, 0.1)',
            }}
          >
            <Typography variant="h5" gutterBottom>
              没有找到答案？
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              我们的技术支持团队随时为您服务
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ 
                px: 6,
                background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #0D1642 30%, #1A237E 90%)',
                },
              }}
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