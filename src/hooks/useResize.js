import { useState, useEffect } from 'react';

export const SCREEN_SM = 576;

export const useResize = () => {
   const [width, setWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = (event) => {
         setWidth(event.target.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return {
      width,
      // isScreenSm: width >= SCREEN_SM,
   };
};
