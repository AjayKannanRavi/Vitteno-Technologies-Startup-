import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node); // Stop observing after it's visible
        }
      },
      options
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [options]);

  return [containerRef, isVisible];
};