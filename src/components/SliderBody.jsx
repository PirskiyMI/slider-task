import { useEffect, useRef } from 'react';
import styles from './styles/style.module.scss';

export const SliderBody = ({
   position,
   children,
   setSlideCount,
   minusSlideCount,
   setSliderItemsWidth,
   sliderItemsWidth,
}) => {
   useEffect(() => {
      setSlideCount(children.length - minusSlideCount);
   }, [sliderItemsWidth]);

   useEffect(() => {
      setSliderItemsWidth(children.length * 300 - 40);
   }, []);

   const sliderBodyRef = useRef(null);

   return (
      <div
         className={styles.slider_body}
         style={{ transform: `translateX(${position}px)` }}
         ref={sliderBodyRef}>
         {children}
      </div>
   );
};
