import styles from './styles/style.module.scss';

import { useEffect, useRef, useState } from 'react';
import { useResize } from '../hooks/useResize';

import { SliderBody } from './SliderBody';
import { SliderItem } from './SliderItem';
import { SliderControls } from './SliderControls';
import { useDispatch, useSelector } from 'react-redux';
import { sliderSlice } from '../store/reducers/sliderReducer';

export const Slider = () => {
   const { items, sliderWrapperWidth } = useSelector((state) => state.sliderReducer);
   const dispatch = useDispatch();

   const sliderWrapperRef = useRef(null);
   const { width: windowWidth } = useResize();

   useEffect(() => {
      dispatch(
         sliderSlice.actions.setExcessSlides(sliderWrapperWidth / (windowWidth >= 580 ? 290 : 280)),
      );
   });

   useEffect(() => {
      dispatch(
         sliderSlice.actions.setSliderWrapperWidth(
            sliderWrapperRef.current.getBoundingClientRect().width,
         ),
      );
   }, [windowWidth]);

   return (
      <div className={styles.slider}>
         <div className={styles.slider_top}>
            <h1 className={styles.slider_title}>Актуальное</h1>
            {windowWidth >= 580 && <SliderControls windowWidth={windowWidth} />}
         </div>

         <div className={styles.slider_bottom}>
            <div className={styles.slider_wrapper} ref={sliderWrapperRef}>
               <SliderBody windowWidth={windowWidth}>
                  {items.map((el) => (
                     <SliderItem key={el.id} date={el.date} title={el.title} text={el.text} />
                  ))}
               </SliderBody>
            </div>
            {windowWidth < 580 && <SliderControls windowWidth={windowWidth} />}
         </div>
      </div>
   );
};
