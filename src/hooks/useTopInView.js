import { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

export const useTopInView = () => {
  const [isTopInView, setTopInView] = useState(true);
  const ref = useRef(); /////////////////////WOULD EVENTUALLY BE USED ON "RIDE LIST DIV"

  useEffect(() => {
    if (isMobile) {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrollListener = (e) => {
        if (window.scrollY < rect.y) {
          setTopInView(() => {
            return true;
          });
        } else {
          setTopInView(() => {
            return false;
          });
        }
      };
      window.addEventListener('scroll', scrollListener);

      return () => {
        window.removeEventListener('scroll', scrollListener);
      };
    }
  }, [ref]);

  return { isTopInView, ref };
};
