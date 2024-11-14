'use client';
import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, Card, CardContent, CardMedia, 
  Chip, Button, TextField, InputAdornment, Stack, Divider 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';

const categories = ['全部', '公司新闻', '产品更新', '行业动态', '技术分享'];

const newsData = [
  {
    id: 1,
    title: '天庭ERP荣获2023年度最佳企业服务提供商',
    summary: '在近日举办的2023中国企业服务大会上，天庭ERP凭借其创新的技术方案和优质的服务，从众多参选企业中脱颖而出，荣获"2023年度最佳企业服务提供商"奖项。',
    image: '/news/award.jpg',
    date: '2023-12-20',
    category: '公司新闻',
    featured: true,
    readTime: '5分钟',
    views: 1280,
  },
  {
    id: 2,
    title: '天庭ERP发布全新AI智能分析模块',
    summary: '新版本集成了先进的人工智能技术，能够为企业提供更精准的数据分析和决策建议，帮助企业实现智能化转型。',
    image: '/news/ai-update.jpg',
    date: '2023-12-15',
    category: '产品更新',
    featured: true,
    readTime: '4分钟',
    views: 960,
  },
  {
    id: 3,
    title: '天庭科技完成新一轮融资',
    summary: '天庭科技宣布完成B轮融资，融资金额达到1亿元人民币，主要用于产品研发和市场拓展。',
    image: '/news/investment.jpg',
    date: '2023-12-10',
    category: '公司新闻',
    featured: false,
    readTime: '3分钟',
    views: 750,
  },
  // 可以添加更多新闻
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const filteredNews = newsData.filter(news => 
    (selectedCategory === '全部' || news.category === selectedCategory) &&
    (news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     news.summary.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredNews = filteredNews.filter(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured);

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
            新闻动态
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            了解天庭ERP最新动态，掌握行业前沿资讯
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
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack 
                  direction="row" 
                  spacing={1} 
                  sx={{ flexWrap: 'wrap', gap: 1 }}
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
              </Grid>
            </Grid>
          </Box>

          {/* 特色新闻 */}
          {featuredNews.length > 0 && (
            <Box sx={{ mb: 8 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <TrendingUpIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  特色报道
                </Typography>
              </Box>
              <Grid container spacing={4}>
                {featuredNews.map((news) => (
                  <Grid item xs={12} md={6} key={news.id}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 8px 30px rgba(26, 35, 126, 0.12)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="240"
                        image={news.image}
                        alt={news.title}
                      />
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Box sx={{ mb: 2 }}>
                          <Chip 
                            label={news.category}
                            size="small"
                            sx={{ 
                              mr: 1,
                              backgroundColor: 'rgba(26, 35, 126, 0.1)',
                              color: 'primary.main',
                            }}
                          />
                          <Typography 
                            variant="caption" 
                            color="text.secondary"
                            component="span"
                          >
                            {news.date} · {news.readTime}阅读
                          </Typography>
                        </Box>
                        <Typography 
                          variant="h5" 
                          gutterBottom
                          sx={{ 
                            fontWeight: 600,
                            mb: 2,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {news.title}
                        </Typography>
                        <Typography 
                          color="text.secondary"
                          sx={{
                            mb: 3,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {news.summary}
                        </Typography>
                        <Button 
                          variant="outlined" 
                          color="primary"
                          onClick={() => router.push(`/news/${news.id}`)}
                          sx={{ 
                            borderWidth: 2,
                            '&:hover': {
                              borderWidth: 2,
                              transform: 'translateX(4px)',
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
            </Box>
          )}

          {/* 最新新闻 */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <NewReleasesIcon sx={{ color: 'primary.main', mr: 1 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                最新动态
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {regularNews.map((news) => (
                <Grid item xs={12} key={news.id}>
                  <Card 
                    sx={{ 
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 30px rgba(26, 35, 126, 0.12)',
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
                            backgroundColor: 'rgba(26, 35, 126, 0.1)',
                            color: 'primary.main',
                          }}
                        />
                        <Typography 
                          variant="caption" 
                          color="text.secondary"
                          component="span"
                        >
                          {news.date} · {news.readTime}阅读 · {news.views}次浏览
                        </Typography>
                      </Box>
                      <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{ fontWeight: 600, mb: 2 }}
                      >
                        {news.title}
                      </Typography>
                      <Typography 
                        color="text.secondary"
                        paragraph
                        sx={{ mb: 3 }}
                      >
                        {news.summary}
                      </Typography>
                      <Button 
                        variant="outlined" 
                        color="primary"
                        onClick={() => router.push(`/news/${news.id}`)}
                        sx={{ 
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                            transform: 'translateX(4px)',
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
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}