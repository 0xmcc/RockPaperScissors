import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { BottomNav } from "@/components/layout/bottom-nav";
//import { PrivyProvider } from '@privy-io/react-auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BattleVibe - Social Gaming Reimagined',
  description: 'Experience rock paper scissors like never before with real-time battles, social features, and competitive stats.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}