'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '@/app/lib/StorageHelper';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);

    //For Testing
    console.log('Cookie Consent: ', cookieConsent);
  }, [cookieConsent]);
  return (
    <div
      className={`fixed bottom-0 left-0 right-0
                        mx-auto my-10  ${cookieConsent != null ? 'hidden' : 'flex'} max-w-max 
                        flex-col items-center justify-between gap-4 rounded-lg bg-gray-300 px-3 py-3 shadow  
                         sm:flex-row md:max-w-screen-sm md:px-4`}
    >
      <div className="text-center">
        <Link href="/info/cookies">
          <p className="text-gray-800">
            Utilizamos<span className="font-bold text-sky-400">cookies</span> para garantir a melhor
            experiência em nosso site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="rounded-lg bg-gray-900 px-5 py-2 text-white"
          onClick={() => setCookieConsent(true)}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
