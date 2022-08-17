import React from 'react';

export const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
  const observerRef = React.useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = React.useState(false);

  React.useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  React.useEffect(() => {
    ref.current && observerRef.current?.observe(ref.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref]);

  return isOnScreen;
};
