import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gradients: {
      primary: string;
      background: string;
    };
  }
  interface PaletteOptions {
    gradients?: {
      primary: string;
      background: string;
    };
  }

  // 添加更多主题相关的类型定义
  interface Theme {
    palette: Palette;
  }
  interface ThemeOptions {
    palette?: PaletteOptions;
  }
}

// 防止类型错误
export {}; 