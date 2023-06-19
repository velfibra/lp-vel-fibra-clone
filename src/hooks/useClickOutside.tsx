import { useRef, useEffect } from 'react';

export function useClickOutside<T extends HTMLElement>(
  handler: (event: React.MouseEvent<T>) => void,
  elementId?: string,
): React.RefObject<T> {
  const ref = useRef<T>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!ref) return;
      if (elementId) {
        const element = document.getElementById(elementId);
        if (element && element.contains(event.target)) return;
      }
      const { current } = ref;
      if (current && !current.contains(event.target)) {
        handler(event);
      }
    };
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref, handler, elementId]);

  return ref;
}
