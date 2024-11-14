import React from 'react';
import ThemeRegistry from './components/ThemeRegistry';

export const metadata = {
  title: '企业官网',
  description: '为您的企业提供最佳的SaaS服务',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
} 