'use client';
import React, { useEffect, useState } from 'react';
import { 
  Box, Container, Typography, Button, Grid, Card, 
  CardContent, IconButton, Stack, Fade 
} from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SecurityIcon from '@mui/icons-material/Security';
import { useInView } from 'react-intersection-observer';

// 定义每个section的内容
type Section = {
  id: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
  features?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  solutions?: Array<{
    title: string;
    description: string;
    image: string;
  }>;
};

const sections: Section[] = [
  {
    id: 'hero',
    title: (
      <>
        智启未来
        <br />
        数智赋能
      </>
    ),
    subtitle: (
      <>
        天庭ERP，让企业管理更智能
        <br />
        打造数智化企业管理新范式
      </>
    ),
    image: '/dashboard-preview.png',
  },
  {
    id: 'features',
    title: '核心优势',
    features: [
      {
        title: '智能决策',
        description: 'AI驱动的数据分析，为企业提供精准的决策支持',
        icon: <RocketLaunchIcon sx={{ fontSize: 48 }} />,
      },
      {
        title: '一体化管理',
        description: '打通企业各个环节，实现数据互联互通',
        icon: <AutoGraphIcon sx={{ fontSize: 48 }} />,
      },
      {
        title: '安全可靠',
        description: '多重加密保护，确保企业数据安全',
        icon: <SecurityIcon sx={{ fontSize: 48 }} />,
      },
    ],
  },
  {
    id: 'solutions',
    title: '解决方案',
    solutions: [
      {
        title: '生产制造',
        description: '智能排产、质量管理、设备维护',
        image: '/solutions/manufacturing.jpg',
      },
      {
        title: '仓储物流',
        description: '库存优化、配送管理、追溯管理',
        image: '/solutions/logistics.jpg',
      },
      {
        title: '财务管理',
        description: '资金管理、成本核算、财务分析',
        image: '/solutions/finance.jpg',
      },
    ],
  },
  {
    id: 'cta',
    title: '开启智能管理之旅',
    subtitle: '立即体验天庭ERP，助力企业数字化转型',
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  // 使用 react-intersection-observer 监控每个section的可见性
  const [ref1, inView1] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [ref3, inView3] = useInView({ threshold: 0.5 });
  const [ref4, inView4] = useInView({ threshold: 0.5 });

  // 修改滚轮事件处理部分
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let lastScrollTime = 0;
    const scrollCooldown = 1000; // 滚动冷却时间（毫秒）

    const handleWheel = (e: WheelEvent) => {
      const currentTime = Date.now();
      
      // 如果距离上次滚动时间不足冷却时间，则忽略此次滚动
      if (currentTime - lastScrollTime < scrollCooldown) {
        e.preventDefault();
        return;
      }

      // 更新最后滚动时间
      lastScrollTime = currentTime;

      // 向下滚动
      if (e.deltaY > 0 && activeSection < sections.length - 1) {
        e.preventDefault();
        setActiveSection(prev => prev + 1);
      }
      // 向上滚动
      else if (e.deltaY < 0 && activeSection > 0) {
        e.preventDefault();
        setActiveSection(prev => prev - 1);
      }
    };

    // 添加滚轮事件监听
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [activeSection]); // 移除 scrolling 依赖

  // 修改滚动到活动section的效果
  useEffect(() => {
    const section = document.getElementById(sections[activeSection].id);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'  // 确保滚动到section的顶部
      });
    }
  }, [activeSection]);

  return (
    <Box>
      <Header />
      
      {/* Hero Section */}
      <Box 
        ref={ref1}
        id="hero"
        sx={{ 
          height: '100vh',
          pt: { xs: 12, md: 0 },
          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'url("/pattern.png")',
            opacity: 0.1,
            animation: 'float 20s linear infinite',
          },
          '&::after': {
            content: '"TIANTIN"', // 背景文字
            position: 'absolute',
            top: '5%',
            right: '5%',
            fontSize: { xs: '100px', md: '200px' },
            fontWeight: 900,
            color: 'rgba(255, 255, 255, 0.03)',
            zIndex: 0,
            letterSpacing: '0.1em',
            userSelect: 'none',
          }
        }}
      >
        {/* 添加毛玻璃效果覆盖层 */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)', // Safari 支持
            zIndex: 1,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: '40%',
              height: '40%',
              background: 'radial-gradient(circle, rgba(63, 81, 181, 0.1) 0%, rgba(63, 81, 181, 0) 70%)',
              animation: 'float 15s ease-in-out infinite alternate',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              width: '35%',
              height: '35%',
              background: 'radial-gradient(circle, rgba(26, 35, 126, 0.08) 0%, rgba(26, 35, 126, 0) 70%)',
              animation: 'float 12s ease-in-out infinite alternate-reverse',
            }
          }}
        />

        {/* 将原有内容包裹在新的 Box 中以确保在毛玻璃效果之上 */}
        <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="center" sx={{ position: 'relative' }}>
              <Grid item xs={12} md={6}>
                <Fade in={inView1} timeout={1000}>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -30,
                        left: -30,
                        width: 200,
                        height: 200,
                        background: 'radial-gradient(circle, rgba(63, 81, 181, 0.1) 0%, rgba(63, 81, 181, 0) 70%)',
                        borderRadius: '50%',
                        animation: 'pulse 3s ease-in-out infinite',
                        '@keyframes pulse': {
                          '0%': { transform: 'scale(1)' },
                          '50%': { transform: 'scale(1.2)' },
                          '100%': { transform: 'scale(1)' },
                        },
                      }}
                    />
                    <Typography 
                      variant="h1" 
                      component="h1" 
                      gutterBottom
                      sx={{ 
                        fontSize: { xs: '2.75rem', sm: '3.5rem', md: '4rem' },
                        lineHeight: 1.2,
                        background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        position: 'relative',
                        mb: 4,
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -10,
                          left: 0,
                          width: 100,
                          height: 6,
                          background: 'linear-gradient(90deg, #1A237E, #3F51B5)',
                          borderRadius: 3,
                        }
                      }}
                    >
                      {sections[0].title}
                    </Typography>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 8,
                        color: 'text.secondary',
                        fontWeight: 400,
                        lineHeight: 1.8,
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                        maxWidth: '90%',
                      }}
                    >
                      {sections[0].subtitle}
                    </Typography>
                    <Stack 
                      direction={{ xs: 'column', sm: 'row' }} 
                      spacing={{ xs: 2, sm: 3 }}
                      sx={{ position: 'relative' }}
                    >
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="large"
                        sx={{ 
                          px: { xs: 4, sm: 6 },
                          py: 2,
                          fontSize: { xs: '1rem', sm: '1.1rem' },
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
                        免费试用
                      </Button>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        size="large"
                        sx={{ 
                          px: { xs: 4, sm: 6 },
                          py: 2,
                          fontSize: { xs: '1rem', sm: '1.1rem' },
                          fontWeight: 600,
                          borderWidth: 2,
                          borderRadius: 3,
                          '&:hover': {
                            borderWidth: 2,
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 15px rgba(26, 35, 126, 0.15)',
                          },
                        }}
                      >
                        了解更多
                      </Button>
                    </Stack>
                  </Box>
                </Fade>
              </Grid>
              <Grid item xs={12} md={6}>
                <Fade in={inView1} timeout={1000} style={{ transitionDelay: '500ms' }}>
                  <Box 
                    sx={{
                      position: 'relative',
                      width: '120%',
                      ml: { md: -8 },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        width: '80%',
                        height: '80%',
                        background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.2), rgba(63, 81, 181, 0.2))',
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        filter: 'blur(40px)',
                        animation: 'morphing 15s ease-in-out infinite',
                        '@keyframes morphing': {
                          '0%': {
                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                          },
                          '50%': {
                            borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
                          },
                          '100%': {
                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                          }
                        }
                      }
                    }}
                  >
                    <Box 
                      component="img"
                      src={sections[0].image}
                      alt="天庭ERP界面预览"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '80vh',
                        objectFit: 'contain',
                        borderRadius: 4,
                        position: 'relative',
                        zIndex: 1,
                        boxShadow: '0 20px 40px rgba(26, 35, 126, 0.2)',
                        transition: 'all 0.3s ease',
                        transform: 'perspective(1000px) rotateY(-5deg) translateX(-20px)',
                        '&:hover': {
                          transform: 'perspective(1000px) rotateY(0deg) translateY(-8px) translateX(-20px)',
                          boxShadow: '0 25px 50px rgba(26, 35, 126, 0.25)',
                        },
                      }}
                    />
                  </Box>
                </Fade>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* 确保箭头按钮在最上层 */}
        <IconButton
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
            zIndex: 3, // 增加 z-index
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateX(-50%) translateY(0)',
              },
              '40%': {
                transform: 'translateX(-50%) translateY(-20px)',
              },
              '60%': {
                transform: 'translateX(-50%) translateY(-10px)',
              },
            },
          }}
          onClick={() => setActiveSection(1)}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>

      {/* Features Section */}
      <Box
        ref={ref2}
        id="features"
        sx={{ 
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'background.paper',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Fade in={inView2} timeout={1000}>
            <Typography 
              variant="h2" 
              align="center" 
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 8,
                background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
              {sections[1].title}
            </Typography>
          </Fade>
          <Grid container spacing={4}>
            {sections[1]?.features?.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in={inView2} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card 
                    elevation={0}
                    sx={{ 
                      height: '100%',
                      p: 2,
                      background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(63, 81, 181, 0.05) 100%)',
                      border: '1px solid',
                      borderColor: 'rgba(26, 35, 126, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: 'rgba(26, 35, 126, 0.2)',
                        boxShadow: '0 8px 30px rgba(26, 35, 126, 0.12)',
                        background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(63, 81, 181, 0.1) 100%)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ color: 'primary.main', mb: 3 }}>
                        {feature.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 600,
                          color: 'primary.main',
                          mb: 2,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{ lineHeight: 1.8 }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
        <IconButton
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateX(-50%) translateY(0)',
              },
              '40%': {
                transform: 'translateX(-50%) translateY(-20px)',
              },
              '60%': {
                transform: 'translateX(-50%) translateY(-10px)',
              },
            },
          }}
          onClick={() => setActiveSection(2)}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>

      {/* Solutions Section */}
      <Box
        ref={ref3}
        id="solutions"
        sx={{ 
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.08) 100%)',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Fade in={inView3} timeout={1000}>
            <Typography 
              variant="h2" 
              align="center" 
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 8,
                background: 'linear-gradient(45deg, #1A237E 30%, #3F51B5 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
              {sections[2].title}
            </Typography>
          </Fade>
          <Grid container spacing={4}>
            {sections[2]?.solutions?.map((solution, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in={inView3} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    sx={{
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover img': {
                        transform: 'scale(1.1)',
                      },
                      '&:hover .overlay': {
                        opacity: 0.9,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={solution.image}
                      alt={solution.title}
                      sx={{
                        width: '100%',
                        height: 300,
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: 'primary.main',
                        opacity: 0.7,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 3,
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: 'white',
                          mb: 2,
                          fontWeight: 600,
                        }}
                      >
                        {solution.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'white',
                          opacity: 0.9,
                        }}
                      >
                        {solution.description}
                      </Typography>
                    </Box>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
        <IconButton
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateX(-50%) translateY(0)',
              },
              '40%': {
                transform: 'translateX(-50%) translateY(-20px)',
              },
              '60%': {
                transform: 'translateX(-50%) translateY(-10px)',
              },
            },
          }}
          onClick={() => setActiveSection(3)}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>

      {/* CTA Section */}
      <Box
        ref={ref4}
        id="cta"
        sx={{ 
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #1A237E 0%, #3F51B5 100%)',
        }}
      >
        <Container maxWidth="md">
          <Fade in={inView4} timeout={1000}>
            <Box>
              <Typography 
                variant="h2" 
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  mb: 4,
                }}
              >
                {sections[3].title}
              </Typography>
              <Typography 
                variant="h5"
                sx={{
                  color: 'white',
                  opacity: 0.9,
                  mb: 6,
                }}
              >
                {sections[3].subtitle}
              </Typography>
              <Button
                variant="outlined"  // 改为 outlined 变体
                size="large"
                sx={{
                  px: { xs: 4, sm: 6 },
                  py: 2,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  fontWeight: 600,
                  borderWidth: 2,
                  borderRadius: 3,
                  color: 'white',  // 文字颜色改为白色
                  borderColor: 'white',  // 边框颜色改为白色
                  '&:hover': {
                    borderWidth: 2,
                    borderColor: 'white',  // 悬停时保持边框颜色
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.15)',
                    bgcolor: 'transparent',  // 保持背景透明
                  },
                }}
              >
                立即开始
              </Button>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 