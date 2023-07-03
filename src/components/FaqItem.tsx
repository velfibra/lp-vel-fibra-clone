'use client';
import { useEffect, useRef, useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FAQItemProps) {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, [expanded]);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex cursor-pointer items-center justify-between" onClick={toggleExpansion}>
        <h3 className="text-lg font-semibold max-lg:text-base">{question}</h3>
        <span
          className={`select-none  text-secondary transition-transform ${
            expanded ? 'rotate-180' : ''
          }`}
        >
          &#9660;
        </span>
      </div>
      <hr className="h-[2px] bg-secondary" />
      <div
        className={`overflow-hidden duration-300 ${expanded ? 'max-h-full' : 'max-h-0'}`}
        style={{ maxHeight: expanded ? contentHeight : 0 }}
      >
        <div
          className="rounded-xl bg-secondary p-2 text-lg font-semibold text-white max-lg:text-base"
          ref={contentRef}
        >
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
