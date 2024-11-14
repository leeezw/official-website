'use client';
import React from 'react';
import { Box, Container, Typography, Chip, Divider, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// 模拟新闻数据
const newsDetail = {
  id: 1,
  title: '天庭ERP荣获2023年度最佳企业服务提供商',
  date: '2023-12-20',
  category: '公司新闻',
  author: '天庭科技',
  content: `
    <p>在近日举办的2023中国企业服务大会上，天庭ERP凭借其创新的技术方案和优质的服务，从众多参选企业中脱颖而出，荣获"2023年度最佳企业服务提供商"奖项。</p>

    <p>天庭ERP始终坚持以客户需求为导向，通过持续的技术创新和服务优化，为企业提供全方位的数字化解决方案。在过去的一年里，我们：</p>

    <ul>
      <li>服务超过1000家企业客户</li>
      <li>系统可用性达到99.99%</li>
      <li>客户满意度超过95%</li>
      <li>推出多项创新功能</li>
    </ul>

    <p>此次获奖是对天庭ERP过去一年工作的肯定，也将激励我们继续前进，为更多企业提供更好的服务。</p>
  `,
  tags: ['企业服务', '数字化转型', '年度大奖'],
  relatedNews: [
    {
      id: 2,
      title: '天庭ERP发布全新AI智能分析模块',
      date: '2023-12-15',
    },
    {
      id: 3,
      title: '天庭科技完成新一轮融资',
      date: '2023-12-10',
    },
  ],
};

export default function NewsDetail() {
  const router = useRouter();

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
          <Box 
            sx={{ 
              backgroundColor: 'white',
              borderRadius: 2,
              p: { xs: 3, md: 6 },
              mb: 4,
            }}
          >
            <Typography 
              variant="h3" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                mb: 3,
              }}
            >
              {newsDetail.title}
            </Typography>

            <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Chip 
                label={newsDetail.category}
                color="secondary"
                size="small"
              />
              <Typography variant="body2" color="text.secondary">
                {newsDetail.date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                作者：{newsDetail.author}
              </Typography>
            </Box>

            <Box 
              dangerouslySetInnerHTML={{ __html: newsDetail.content }}
              sx={{
                '& p': {
                  mb: 2,
                  lineHeight: 1.8,
                },
                '& ul': {
                  mb: 2,
                  pl: 3,
                },
                '& li': {
                  mb: 1,
                },
              }}
            />

            <Box sx={{ mt: 4 }}>
              {newsDetail.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  sx={{ 
                    mr: 1,
                    mb: 1,
                    backgroundColor: 'rgba(0, 184, 148, 0.1)',
                    color: 'secondary.main',
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* 相关新闻 */}
          <Box 
            sx={{ 
              backgroundColor: 'white',
              borderRadius: 2,
              p: { xs: 3, md: 6 },
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              相关新闻
            </Typography>
            <Divider sx={{ mb: 3 }} />
            {newsDetail.relatedNews.map((news, index) => (
              <Box 
                key={index}
                sx={{ 
                  mb: 2,
                  '&:last-child': { mb: 0 },
                }}
              >
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    cursor: 'pointer',
                    '&:hover': { color: 'secondary.main' },
                  }}
                  onClick={() => router.push(`/news/${news.id}`)}
                >
                  {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {news.date}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => router.push('/news')}
            >
              返回新闻列表
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 