import { useEffect, useRef, useState } from 'react';
import styles from './styles/style.module.scss';
import PREV_ARROW from './../assets/img/arrow-left-icon.svg';
import NEXT_ARROW from './../assets/img/arrow-right-icon.svg';

export const SliderControls = ({
   slideCount,
   setSlidePosition,
   slidePosition,
   sliderWrapperWidth,
   sliderItemsWidth,
}) => {
   const [scrollPosition, setScrollPosition] = useState(0);
   const [scrollWidth, setScrollWidth] = useState(0);
   const [scrollActiveWidth, setScrollActiveWidth] = useState(0);

   const scrollRef = useRef(null);

   useEffect(() => {
      setScrollWidth(scrollRef.current.getBoundingClientRect().width);
      setScrollActiveWidth(scrollWidth / Math.ceil(slideCount));
   });

   const nextSlideHandler = () => {
      slidePosition <= -(sliderItemsWidth - sliderWrapperWidth)
         ? setSlidePosition((prev) => (prev = 0))
         : setSlidePosition((prev) => {
              const scrollSlideLeft =
                 sliderItemsWidth - (Math.abs(slidePosition) + sliderWrapperWidth);
              return scrollSlideLeft >= 300 ? (prev -= 300) : (prev -= scrollSlideLeft);
           });
      scrollPosition >= scrollWidth - scrollActiveWidth
         ? setScrollPosition((prev) => (prev = 0))
         : setScrollPosition((prev) => (prev += scrollActiveWidth));
   };

   const prevSlideHandler = () => {
      slidePosition >= 0
         ? setSlidePosition((prev) => (prev = -(sliderItemsWidth - sliderWrapperWidth)))
         : setSlidePosition((prev) => {
              const scrollSliderLeft = Math.abs(slidePosition);
              return scrollSliderLeft >= 300 ? (prev += 300) : (prev += scrollSliderLeft);
           });
      scrollPosition <= 0
         ? setScrollPosition((prev) => (prev = scrollWidth - scrollActiveWidth))
         : setScrollPosition((prev) => (prev -= scrollActiveWidth));
   };

   // useEffect(() => {
   //    let timeOut = setTimeout(function tick() {
   //       nextSlideHandler();
   //       timeOut = setTimeout(tick, 4000);
   //    }, 4000);
   //    return () => clearTimeout(timeOut);
   // }, [slideCount, scrollPosition]);

   return (
      <div className={styles.slider_controls}>
         <div className={styles.slider_scroll} ref={scrollRef}>
            <div
               className={styles.slider_scroll__active}
               style={{ width: 100 / slideCount + '%', left: scrollPosition + 'px' }}></div>
         </div>
         <div className={styles.slider_button} onClick={prevSlideHandler}>
            <img src={PREV_ARROW} alt="Прокрутка слайдера назад" />
         </div>
         <div className={styles.slider_button} onClick={nextSlideHandler} style={{ order: '1' }}>
            <img src={NEXT_ARROW} alt="Прокрутка слайдера вперед" />
         </div>
      </div>
   );
};
