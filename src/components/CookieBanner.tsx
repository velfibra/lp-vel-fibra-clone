'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '@/app/lib/StorageHelper';
import TagManager, { TagManagerArgs } from 'react-gtm-module';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', false);
    setCookieConsent(storedCookieConsent);

    // Defina a página como carregada após um pequeno atraso para garantir que outros componentes sejam montados
    setTimeout(() => {
      setPageLoaded(true);
    }, 100);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      TagManager.initialize({
        gtmId: 'GTM-WHX92B2',
      });
    }

    if (cookieConsent !== null && pageLoaded) {
      const newValue = cookieConsent ? 'granted' : 'denied';

      if (typeof document !== 'undefined') {
        const eventArgs: TagManagerArgs = {
          dataLayer: {
            event: 'CookieConsentUpdate',
            category: 'Cookie Consent',
            action: 'Update',
            label: newValue,
          },
          dataLayerName: 'dataLayer',
          gtmId: '',
        };
        TagManager.dataLayer(eventArgs);
      }

      setLocalStorage('cookie_consent', cookieConsent);
    }
  }, [cookieConsent, pageLoaded]);

  if (!pageLoaded) {
    // Aguarde a página ser carregada antes de renderizar o banner
    return null;
  }

  if (cookieConsent) {
    // Consentimento concedido, não renderize o banner
    return null;
  }

  // Consentimento não concedido, exiba o banner
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 mx-auto my-10 max-w-max  flex-col items-center justify-between gap-4 rounded-lg bg-white px-3 py-3 shadow sm:flex-row md:max-w-screen-sm md:px-4">
      <div className="text-center">
        <Link href="/info/cookies">
          <p className="text-gray-800">
            Utilizamos Cookies para garantir a melhor experiência em nosso site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="mx-auto rounded-lg bg-primary px-5 py-2 text-white"
          onClick={() => setCookieConsent(true)}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
