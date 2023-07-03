import { useEffect, useState } from 'react';

//const ANIMATION_TIME = 300;
// mount - ВМОНТИРОВАН ПОПАП СЕЙЧАС ИЛИ НЕТ
export const useMount = ({ isOpened }) => {
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      if (isOpened && !isMounted) {
         setIsMounted(true);
      } else if (!isOpened && isMounted) {
         setTimeout(() => {
            setIsMounted(false);
         }, 300);
      }
   }, [isOpened]);

   return {
      isMounted,
   };
};
