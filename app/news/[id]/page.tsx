'use client';
import React from 'react';
import { 
  Box, Container, Typography, Chip, Divider, Button, 
  Grid, Card, CardContent, Avatar, Stack
} from '@mui/material';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// 模拟新闻数据服务
const getNewsDetail = (id: string) => {
  // 实际项目中这里应该是API调用
  return {
    id: parseInt(id),
    title: '天庭ERP荣获2023年度最佳企业服务提供商',
    date: '2023-12-20',
    category: '公司新闻',
    author: '天庭科技',
    readTime: '5分钟',
    views: 1280,
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

      <h3>创新技术方案</h3>
      <p>天庭ERP在过去一年中推出了多项创新功能，包括：</p>
      <ul>
        <li>AI智能决策支持系统</li>
        <li>全新的数据可视化平台</li>
        <li>智能工作流引擎</li>
        <li>多维度数据分析工具</li>
      </ul>

      <h3>服务升级</h3>
      <p>为了提供更好的服务体验，我们：</p>
      <ul>
        <li>扩大了技术支持团队规模</li>
        <li>提供7*24小时在线支持</li>
        <li>推出企业专属顾问服务</li>
        <li>建立了完善的培训体系</li>
      </ul>
    `,
    tags: ['企业服务', '数字化转型', '年度大奖', '技术创新'],
    author_info: {
      name: '张三',
      position: '产品总监',
      avatar: '/avatars/author.jpg'
    },
    related_news: [
      {
        id: 2,
        title: '天庭ERP发布全新AI智能分析模块',
        date: '2023-12-15',
        category: '产品更新'
      },
      {
        id: 3,
        title: '天庭科技完成新一轮融资',
        date: '2023-12-10',
        category: '公司新闻'
      }
    ]
  };
};

export default function NewsDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const newsDetail = getNewsDetail(params.id);

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
          {/* 返回按钮 */}
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => router.push('/news')}
            sx={{ mb: 4 }}
          >
            返回新闻列表
          </Button>

          <Grid container spacing={4}>
            {/* 主要内容 */}
            <Grid item xs={12} md={8}>
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
                    background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {newsDetail.title}
                </Typography>

                <Box sx={{ mb: 4, display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Chip 
                    label={newsDetail.category}
                    color="primary"
                    size="small"
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccessTimeIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {newsDetail.date}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PersonIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {newsDetail.author}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <RemoveRedEyeIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {newsDetail.views} 次阅读
                    </Typography>
                  </Box>
                </Box>

                <Box 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: newsDetail.content }}
                  sx={{
                    '& p': {
                      mb: 2,
                      lineHeight: 1.8,
                      color: 'text.secondary',
                    },
                    '& h3': {
                      mt: 4,
                      mb: 2,
                      fontWeight: 600,
                      color: 'primary.main',
                    },
                    '& ul': {
                      mb: 2,
                      pl: 3,
                      '& li': {
                        mb: 1,
                        color: 'text.secondary',
                      },
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
                        backgroundColor: 'rgba(26, 35, 126, 0.1)',
                        color: 'primary.main',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* 侧边栏 */}
            <Grid item xs={12} md={4}>
              {/* 作者信息 */}
              <Card sx={{ mb: 4 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar
                    src={newsDetail.author_info.avatar}
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      mx: 'auto',
                      mb: 2,
                      border: '3px solid',
                      borderColor: 'primary.main',
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {newsDetail.author_info.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {newsDetail.author_info.position}
                  </Typography>
                </CardContent>
              </Card>

              {/* 相关新闻 */}
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                    相关新闻
                  </Typography>
                  <Stack spacing={2}>
                    {newsDetail.related_news.map((news, index) => (
                      <Box key={index}>
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            cursor: 'pointer',
                            '&:hover': { color: 'primary.main' },
                          }}
                          onClick={() => router.push(`/news/${news.id}`)}
                        >
                          {news.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            {news.date}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {news.category}
                          </Typography>
                        </Box>
                        {index < newsDetail.related_news.length - 1 && (
                          <Divider sx={{ mt: 2 }} />
                        )}
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 