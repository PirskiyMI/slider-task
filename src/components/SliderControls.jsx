import styles from './styles/style.module.scss';

import PREV_ARROW from './../assets/img/arrow-left-icon.svg';
import NEXT_ARROW from './../assets/img/arrow-right-icon.svg';

import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sliderSlice } from './../store/reducers/sliderReducer';

export const SliderControls = ({ windowWidth }) => {
   const { sliderItemsWidth, sliderWrapperWidth, slidePosition, slideCount } = useSelector(
      (state) => state.sliderReducer,
   );
   const dispatch = useDispatch();

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
   });

   let scrollingLength;
   let gapWidth;

   if (windowWidth >= 580) {
      scrollingLength = 300;
      gapWidth = 40;
   } else {
      scrollingLength = 290;
      gapWidth = 10;
   }

   const nextSlideHandler = () => {
      const slideLeft = sliderItemsWidth - (Math.abs(slidePosition) + sliderWrapperWidth);
      slidePosition <= -(sliderItemsWidth - sliderWrapperWidth - gapWidth)
         ? dispatch(sliderSlice.actions.setSlidePosition(0))
         : dispatch(
              sliderSlice.actions.setSlidePosition(
                 slideLeft >= scrollingLength ? -scrollingLength : -slideLeft,
              ),
           );

      const scrollLeft = scrollWidth - (scrollPosition + scrollActiveWidth);
      scrollPosition >= scrollWidth - scrollActiveWidth
         ? setScrollPosition((prev) => (prev = 0))
         : setScrollPosition((prev) => {
              return scrollLeft >= scrollActiveWidth
                 ? (prev += scrollActiveWidth)
                 : (prev += scrollLeft);
           });
   };

   const prevSlideHandler = () => {
      const slideLift = Math.abs(slidePosition);
      slidePosition >= 0
         ? dispatch(
              sliderSlice.actions.setSlidePosition(
                 -(sliderItemsWidth - sliderWrapperWidth - gapWidth),
              ),
           )
         : dispatch(
              sliderSlice.actions.setSlidePosition(
                 slideLift >= scrollingLength ? scrollingLength : slideLift,
              ),
           );

      scrollPosition <= 0
         ? setScrollPosition((prev) => (prev = scrollWidth - scrollActiveWidth))
         : setScrollPosition((prev) => {
              return scrollPosition >= scrollActiveWidth
                 ? (prev -= scrollActiveWidth)
                 : (prev -= scrollPosition);
           });
   };

   useEffect(() => {
      let timeOut = setTimeout(function tick() {
         nextSlideHandler();
         timeOut = setTimeout(tick, 4000);
      }, 4000);
      return () => clearTimeout(timeOut);
   });

   return (
      <div className={styles.slider_controls}>
         <div className={styles.slider_scroll} ref={scrollRef}>
            <div
               className={styles.slider_scroll__active}
               style={{
                  width: 100 / `${windowWidth >= 1440 ? slideCount + 0.5 : slideCount + 1}` + '%',
                  left: scrollPosition + 'px',
               }}
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
