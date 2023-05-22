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
   windowWidth,
}) => {
   const [scrollPosition, setScrollPosition] = useState(0);
   const [scrollWidth, setScrollWidth] = useState(0);
   const [scrollActiveWidth, setScrollActiveWidth] = useState(0);

   const scrollRef = useRef(null);
   const scrollActiveRef = useRef(null);

   useEffect(() => {
      setScrollWidth(scrollRef.current.getBoundingClientRect().width);
      setScrollActiveWidth((prev) => {
         return (prev = scrollActiveRef.current.getBoundingClientRect().width);
      });
      console.log(123);
   });

   let scrollingLength;

   if (windowWidth >= 580) {
      scrollingLength = 300;
   } else {
      scrollingLength = 290;
   }

   const nextSlideHandler = () => {
      slidePosition <= -(sliderItemsWidth - sliderWrapperWidth)
         ? setSlidePosition((prev) => (prev = 0))
         : setSlidePosition((prev) => {
              const scrollSlideLeft =
                 sliderItemsWidth - (Math.abs(slidePosition) + sliderWrapperWidth);
              return scrollSlideLeft >= scrollingLength
                 ? (prev -= scrollingLength)
                 : (prev -= scrollSlideLeft);
           });
           console.log(scrollWidth - scrollActiveWidth);
      scrollPosition >= scrollWidth - scrollActiveWidth
         ? setScrollPosition((prev) => (prev = 0))
         : setScrollPosition((prev) => (prev += scrollActiveWidth));
   };

   const prevSlideHandler = () => {
      slidePosition >= 0
         ? setSlidePosition((prev) => (prev = -(sliderItemsWidth - sliderWrapperWidth)))
         : setSlidePosition((prev) => {
              const scrollSliderLeft = Math.abs(slidePosition);
              return scrollSliderLeft >= scrollingLength
                 ? (prev += scrollingLength)
                 : (prev += scrollSliderLeft);
           });
      scrollPosition <= 0
         ? setScrollPosition((prev) => (prev = scrollWidth - scrollActiveWidth))
         : setScrollPosition((prev) => (prev -= scrollActiveWidth));
   };

   useEffect(() => {
      let timeOut = setTimeout(function tick() {
         nextSlideHandler();
         timeOut = setTimeout(tick, 4000);
      }, 4000);
      return () => clearTimeout(timeOut);
   }, [ ,scrollPosition]);

   return (
      <div className={styles.slider_controls}>
         <div className={styles.slider_scroll} ref={scrollRef}>
            <div
               className={styles.slider_scroll__active}
               style={{ width: 100 / (slideCount + 1) + '%', left: scrollPosition + 'px' }}
               ref={scrollActiveRef}></div>
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
