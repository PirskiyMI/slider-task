import { useEffect } from 'react';
import styles from './styles/style.module.scss';
import { useResize } from '../hooks/useResize';

export const SliderBody = ({
   position,
   children,
   setSlideCount,
   minusSlideCount,
   setSliderItemsWidth,
   sliderItemWidth,
   windowWidth,
}) => {
   useEffect(() => {
      setSlideCount((prev) => (prev = children.length - minusSlideCount));
   });
   useEffect(() => {
      setSliderItemsWidth((prev) => (prev = children.length * (windowWidth >= 580 ? 300 : 290)));
   }, [windowWidth]);

   return (
      <div className={styles.slider_body} style={{ transform: `translateX(${position}px)` }}>
         {children}
      </div>
   );
};
