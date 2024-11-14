import ThemeRegistry from './components/ThemeRegistry';
import { Box } from '@mui/material';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeRegistry>
          <Box sx={{ position: 'relative', minHeight: '100vh' }}>
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
} 