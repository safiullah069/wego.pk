import React from 'react';

const changeContext = () =>{
    

    useEffect(() => {
        const handleScroll = () => {
          const isScrolledCheck = window.scrollY > 5;
          if (isScrolledCheck !== isScrolled) {
            setIsScrolled(!isScrolled);
          }
        };
    
        document.addEventListener("scroll", handleScroll);
        return () => {
          // Clean up the event listener
          document.removeEventListener("scroll", handleScroll);
        };
      }, [isScrolled]);
}

export const ScrollContext = React.createContext();
