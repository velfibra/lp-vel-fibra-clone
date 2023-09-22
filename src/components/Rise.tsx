'use client';

import { useEffect, useState } from 'react';

export default function Rise() {
  const [observedElements, setObservedElements] = useState<Element[]>([]); // Defina o tipo do estado como Element[]

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
    elements.forEach((el) => {
      observer.observe(el);
      setObservedElements((prevElements) => [...prevElements, el]);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Executar apenas uma vez quando o componente monta

  // Evitar que as animações sejam reiniciadas ao voltar para a página
  useEffect(() => {
    observedElements.forEach((el) => el.classList.remove('rise'));
  }, [observedElements]);

  return null;
}
