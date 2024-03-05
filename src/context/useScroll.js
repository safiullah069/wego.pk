import { useState, useEffect } from 'react';

export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledCheck = window.scrollY > 5;
      if (isScrolledCheck !== isScrolled) {
        setIsScrolled(!isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return isScrolled;
}
