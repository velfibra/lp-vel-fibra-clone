'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '@/app/lib/StorageHelper';
import TagManager, { TagManagerArgs } from 'react-gtm-module';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', false);
    setCookieConsent(storedCookieConsent);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      TagManager.initialize({
        gtmId: 'GTM-WHX92B2',
      });
    }

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
  }, [cookieConsent]);

  if (cookieConsent) {
    return null;
  }

  if (typeof document !== 'undefined') {
    if (cookieConsent) {
      return null;
    }
  }

  return (
    // Se o consentimento ainda não foi dado, exiba o banner
    <div className="fixed bottom-0 left-0 right-0 z-10 mx-auto my-10 max-w-max animate-fadeInUp flex-col items-center justify-between gap-4 rounded-lg bg-gray-300 px-3 py-3 shadow animation-delay-500 sm:flex-row md:max-w-screen-sm md:px-4">
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
          Aceitar
        </button>
      </div>
    </div>
  );
}
