import './globals.css';
import Rise from '@/components/Rise';
import { Inter } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'] });
//
export const metadata = {
  title: 'Click Speed – Tenha todo o poder da internet 100% Fibra Óptica',
  description:
    'Navegue com velocidade máxima e confiabilidade coma o a internet da Click Speed. Internet Click Speed 100% Fibra Óptica para você navegar à vontade. Ultra velocidade de 600mb.',
  icons: [{ url: '/favicon.ico', sizes: 'any' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="pVoqKhYcW4rD9ZFppSPc0Dq6IUPZ5KqziBXFcVzcTGA"
        />
      </head>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-V2149R76YL" />
      <body className={inter.className}>
        {children}
        <CookieBanner />
        <Rise />
      </body>
    </html>
  );
}
