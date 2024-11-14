import { CustomThemeProvider } from './theme/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { Box } from '@mui/material';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <CustomThemeProvider>
          <Box sx={{ position: 'relative', minHeight: '100vh' }}>
            {children}
            <ThemeToggle />
          </Box>
        </CustomThemeProvider>
      </body>
    </html>
  );
} 