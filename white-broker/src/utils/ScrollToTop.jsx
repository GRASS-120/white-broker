import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// https://www.matthewhoelter.com/2022/04/02/how-to-scroll-to-top-on-route-change-with-react-router-dom-v6.html

const ScrollToTop = () => {
   // Extracts pathname property(key) from an object
   const { pathname } = useLocation();
   // Automatically scrolls to top whenever pathname changes
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);
};

export default ScrollToTop;
