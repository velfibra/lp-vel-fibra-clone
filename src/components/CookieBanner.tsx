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
    setTimeout(() => {
      setPageLoaded(true);
    }, 100);
  }, []);

  useEffect(() => {
    if (cookieConsent !== null && pageLoaded) {
      const newValue = cookieConsent ? 'granted' : 'denied';

      setLocalStorage('cookie_consent', cookieConsent);
      const eventArgs: TagManagerArgs = {
        dataLayer: {
          event: 'CookieConsentUpdate',
          category: 'Cookie Consent',
          action: 'Update',
          label: newValue,
        },
        dataLayerName: 'dataLayer',
        gtmId: 'GTM-WHX92B2',
      };
      TagManager.dataLayer(eventArgs);
    }
  }, [cookieConsent, pageLoaded]);

  if (!pageLoaded) {
    return null;
  }

  if (cookieConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-around gap-4 bg-white p-3 opacity-95 shadow sm:flex-row xl:h-[150px]">
      <div className="w-[80%] text-center ">
        <Link href="/info/cookies">
          <h1 className="text-lg font-bold">Este site utiliza cookies</h1>
          <p className="mx-auto text-left xl:w-[60%]">
            Armazenamos dados temporariamente para aprimorar sua experiência de navegação e fornecer
            recomendações de conteúdo personalizadas. Ao utilizar nossos serviços, você concorda com
            esse processo de monitoramento, que visa melhor atender às suas preferências e
            interesses.
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
        <Link
          href={'/politica-de-privacidade'}
          className="mx-auto rounded-lg bg-primary px-5 py-2 text-white"
        >
          Política de Privacidade
        </Link>
      </div>
    </div>
  );
}
