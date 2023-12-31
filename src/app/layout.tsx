import './globals.css';
import Rise from '@/components/Rise';
import CookieBanner from '@/components/CookieBanner';
import Script from 'next/script';
import { Figtree } from 'next/font/google';

const figtree = Figtree({ subsets: ['latin'] });
//
export const metadata = {
  title: 'Vel Fibra – Tenha todo o poder da internet 100% Fibra Óptica',
  description:
    'Navegue com velocidade máxima e confiabilidade com a internet da Vel Fibra. Internet Vel Fibra 100% Fibra Óptica para você navegar à vontade. Ultra velocidade de 650mb.',
  icons: [{ url: '/favicon.ico', sizes: 'any' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="scroll-smooth" manifest="cache.manifest">
      <head>
        <Script id="google-analytics">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WHX92B2');
        `}
        </Script>
      </head>
      <></>
      <body className={figtree.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHX92B2"
            height="0"
            width="0"
            className="hidden"
          ></iframe>
        </noscript>
        <CookieBanner />
        {children}
        <Rise />
        <Script src="https://chatbot.mundiale.com.br/click-speed-saas/lib.js"></Script>
        <Script src="https://chatbot.mundiale.com.br/click-speed-saas/snippet.js"></Script>
      </body>
    </html>
  );
}
