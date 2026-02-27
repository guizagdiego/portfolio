import { ThemeProvider } from 'next-themes';
import '@/style/globals.css';
import MotionConfigWrapper from '@/components/motion-config';
import FloatingAvatar from '@/components/floating-avatar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem={true} storageKey='theme'>
          <MotionConfigWrapper>
            <FloatingAvatar />
            {children}
          </MotionConfigWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
