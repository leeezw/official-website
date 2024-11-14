'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';

const newsData = [
  {
    id: 1,
    title: '天庭ERP荣获2023年度最佳企业服务提供商',
    summary: '在近日举办的2023中国企业服务大会上，天庭ERP凭借其创新的技术方案和优质的服务...',
    image: '/news1.jpg',
    date: '2023-12-20',
    category: '公司新闻',
  },
  {
    id: 2,
    title: '天庭ERP发布全新AI智能分析模块',
    summary: '新版本集成了先进的人工智能技术，能够为企业提供更精准的数据分析和决策建议...',
    image: '/news2.jpg',
    date: '2023-12-15',
    category: '产品更新',
  },
  {
    id: 3,
    title: '天庭科技完成新一轮融资',
    summary: '天庭科技宣布完成B轮融资，融资金额达到1亿元人民币，主要用于产品研发和市场拓展...',
    image: '/news3.jpg',
    date: '2023-12-10',
    category: '公司新闻',
  },
  // 可以添加更多新闻
];

const categories = ['全部', '公司新闻', '产品更新', '行业动态', '技术分享'];

export default function News() {
  const [selectedCategory, setSelectedCategory] = React.useState('全部');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredNews = newsData.filter(news => 
    (selectedCategory === '全部' || news.category === selectedCategory) &&
    (news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     news.summary.toLowerCase().includes(searchTerm.toLowerCase()))
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
              mb: 6,
              background: 'linear-gradient(45deg, #1A237E 30%, #00B894 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            新闻动态
          </Typography>

          {/* 搜索和筛选 */}
          <Box sx={{ mb: 6 }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  placeholder="搜索新闻..."
                  variant="outlined"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {categories.map((category) => (
                    <Chip
                      key={category}
                      label={category}
                      onClick={() => setSelectedCategory(category)}
                      color={selectedCategory === category ? "secondary" : "default"}
                      sx={{ 
                        '&:hover': {
                          backgroundColor: 'rgba(0, 184, 148, 0.1)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* 新闻列表 */}
          <Grid container spacing={4}>
            {filteredNews.map((news) => (
              <Grid item xs={12} key={news.id}>
                <Card 
                  sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ 
                      width: { xs: '100%', md: 300 },
                      height: { xs: 200, md: 'auto' },
                    }}
                    image={news.image}
                    alt={news.title}
                  />
                  <CardContent sx={{ flex: 1, p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      <Chip 
                        label={news.category}
                        size="small"
                        sx={{ 
                          mr: 1,
                          backgroundColor: 'rgba(0, 184, 148, 0.1)',
                          color: 'secondary.main',
                        }}
                      />
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        component="span"
                      >
                        {news.date}
                      </Typography>
                    </Box>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {news.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      paragraph
                    >
                      {news.summary}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      color="secondary"
                      sx={{ 
                        mt: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 184, 148, 0.1)',
                        },
                      }}
                    >
                      阅读更多
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 