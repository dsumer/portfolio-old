import { useState, useEffect, useRef } from 'react';

const defaultOptions = {
  root: undefined,
  rootMargin: '0px',
  threshold: 0,
};

const useViewportSpyOnce = (callback: () => void, options = defaultOptions) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible || !elementRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((item) => {
          const nextValue = item.isIntersecting;
          setIsVisible(nextValue);
          if (nextValue) {
            observer.disconnect();
            callback();
          }
        }),
      options,
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [elementRef.current]);

  return elementRef;
};

export default useViewportSpyOnce;
