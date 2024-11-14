'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Fade,
  Stack,
  Chip,
  Button,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupsIcon from '@mui/icons-material/Groups';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SecurityIcon from '@mui/icons-material/Security';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

// 定义功能模块数据
const features = [
  {
    title: '智能仪表盘',
    description: '可视化数据分析，实时监控企业运营状况，支持自定义数据展示。',
    icon: <DashboardIcon sx={{ fontSize: 40 }} />,
    tags: ['数据可视化', 'AI分析', '实时监控'],
    details: [
      '多维度数据展示',
      '自定义报表配置',
      '智能异常预警',
      '移动端实时查看',
    ],
  },
  {
    title: '库存管理',
    description: '智能库存预警，自动补货建议，多仓协同管理。',
    icon: <InventoryIcon sx={{ fontSize: 40 }} />,
    tags: ['智能预警', '自动补货', '多仓协同'],
    details: [
      '实时库存监控',
      '智能补货建议',
      '批次管理追溯',
      '库存成本分析',
    ],
  },
  {
    title: '财务管理',
    description: '一体化财务解决方案，支持多维度成本核算，智能财务分析。',
    icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
    tags: ['财务分析', '成本核算', '资金管理'],
    details: [
      '智能记账管理',
      '多维度成本分析',
      '资金流向追踪',
      '税务筹划建议',
    ],
  },
  {
    title: '人力资源',
    description: '全方位人力资源管理，包含招聘、培训、绩效、薪酬等模块。',
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    tags: ['人才管理', '绩效考核', '薪酬管理'],
    details: [
      '智能招聘系统',
      '员工培训管理',
      '绩效考核方案',
      '薪酬福利管理',
    ],
  },
  {
    title: '数据分析',
    description: 'AI驱动的数据分析引擎，提供深度的业务洞察和决策建议。',
    icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
    tags: ['AI分析', '商业智能', '决策支持'],
    details: [
      '多维数据分析',
      '预测性分析',
      '竞争情报分析',
      '决策建议生成',
    ],
  },
  {
    title: '安全管理',
    description: '企业级安全防护，多重加密，细粒度权限控制。',
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    tags: ['数据加密', '访问控制', '安全审计'],
    details: [
      '多重安全认证',
      '数据加密存储',
      '操作日志审计',
      '权限精细管理',
    ],
  },
  {
    title: '系统集成',
    description: '开放的API接口，支持与第三方系统无缝对接。',
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 40 }} />,
    tags: ['API集成', '数据同步', '开放平台'],
    details: [
      'RESTful API',
      '实时数据同步',
      '多系统集成',
      '定制化开发',
    ],
  },
  {
    title: '售后支持',
    description: '7×24小时技术支持，专业的实施团队，保障系统稳定运行。',
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    tags: ['技术支持', '培训服务', '运维保障'],
    details: [
      '全天候支持',
      '定期系统培训',
      '现场技术支持',
      '升级维护服务',
    ],
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/pattern.png")',
            opacity: 0.1,
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h1"
              align="center"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              全方位智能化管理
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              天庭ERP提供完整的企业管理解决方案，助力企业实现数字化转型，
              提升运营效率，降低管理成本。
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Features Grid */}
      <Box sx={{ py: { xs: 8, md: 12 } }} ref={ref}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Fade in={inView} timeout={1000} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 30px rgba(26, 35, 126, 0.12)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack spacing={3}>
                        <Box sx={{ color: 'primary.main' }}>
                          {feature.icon}
                        </Box>
                        <Typography variant="h5" component="h2" fontWeight={600}>
                          {feature.title}
                        </Typography>
                        <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                          {feature.description}
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                          {feature.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              sx={{
                                background: 'linear-gradient(45deg, rgba(26, 35, 126, 0.1), rgba(63, 81, 181, 0.1))',
                                borderRadius: 1,
                              }}
                            />
                          ))}
                        </Stack>
                        <Box
                          sx={{
                            pt: 2,
                            borderTop: '1px solid',
                            borderColor: 'divider',
                          }}
                        >
                          <Stack spacing={1.5}>
                            {feature.details.map((detail, idx) => (
                              <Box
                                key={idx}
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 1,
                                  color: 'text.secondary',
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    bgcolor: 'primary.main',
                                    opacity: 0.7,
                                  }}
                                />
                                <Typography variant="body2">
                                  {detail}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing & CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/pattern.png")',
            opacity: 0.1,
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={6} alignItems="center">
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 4,
                  background: 'linear-gradient(90deg, #1A237E, #3F51B5)',
                  borderRadius: 2,
                }
              }}
            >
              选择适合您的方案
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}
            >
              我们提供灵活的定价方案，满足不同规模企业的需求
            </Typography>
            
            <Button
              variant="contained"
              size="large"
              href="/products"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 600,
                background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                boxShadow: '0 4px 20px rgba(26, 35, 126, 0.25)',
                borderRadius: 3,
                '&:hover': {
                  background: 'linear-gradient(45deg, #0D1642 30%, #1A237E 90%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 25px rgba(26, 35, 126, 0.35)',
                },
              }}
            >
              查看完整价格方案
            </Button>
            
            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              sx={{ mt: 2 }}
            >
              包含免费试用和技术支持
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 