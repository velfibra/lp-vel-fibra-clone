import './globals.css';
import Rise from '@/components/Rise';
import { Inter } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import Head from 'next/head';
import Script from 'next/script';

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
      <>
        <Script id="google-analytics">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WHX92B2');
        `}
        </Script>
      </>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-V2149R76YL" />
      <body className={inter.className}>
        <CookieBanner />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHX92B2"
            height="0"
            width="0"
            className="hidden"
          ></iframe>
        </noscript>
        {children}
        <Rise />
      </body>
    </html>
  );
}
