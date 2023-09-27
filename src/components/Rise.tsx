'use client';

import { useEffect } from 'react';

export default function Rise() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        if (isIntersecting) {
          target.classList.remove('rise');
        }
      });
    });

    const elements = document.querySelectorAll('.rise');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.observe(el));
  }, []);
  return null;
}
