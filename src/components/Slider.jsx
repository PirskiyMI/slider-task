import styles from './styles/style.module.scss';

import { useEffect, useRef, useState } from 'react';
import { useResize } from '../hooks/useResize';

import { SliderBody } from './SliderBody';
import { SliderItem } from './SliderItem';
import { SliderControls } from './SliderControls';

export const Slider = () => {
   const [sliderItemsWidth, setSliderItemsWidth] = useState(0);
   const [slideCount, setSlideCount] = useState(0);
   const [slidePosition, setSlidePosition] = useState(0);
   const [sliderWrapperWidth, setSliderWrapperWidth] = useState(0);

   const sliderWrapperRef = useRef(null);

   const { isScreenSm } = useResize();

   useEffect(() => {
      setSliderWrapperWidth(sliderWrapperRef.current.getBoundingClientRect().width);
   }, []);

   const minusSlideCount = sliderWrapperWidth / 290 - 1;

   return (
      <div className={styles.slider}>
         <div className={styles.slider_top}>
            <h1 className={styles.slider_title}>Актуальное</h1>

            {isScreenSm && (
               <SliderControls
                  slideCount={slideCount}
                  slidePosition={slidePosition}
                  setSlidePosition={setSlidePosition}
                  sliderWrapperWidth={sliderWrapperWidth}
                  sliderItemsWidth={sliderItemsWidth}
               />
            )}
         </div>

         <div className={styles.slider_bottom}>
            <div className={styles.slider_wrapper} ref={sliderWrapperRef}>
               <SliderBody
                  position={slidePosition}
                  setSlideCount={setSlideCount}
                  minusSlideCount={minusSlideCount}
                  setSliderItemsWidth={setSliderItemsWidth}
                  sliderItemsWidth={sliderItemsWidth}
                  sliderWrapperWidth={sliderWrapperWidth}>
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
               </SliderBody>
            </div>
            {!isScreenSm && (
               <SliderControls
                  slideCount={slideCount}
                  slidePosition={slidePosition}
                  setSlidePosition={setSlidePosition}
                  sliderWrapperWidth={sliderWrapperWidth}
                  sliderItemsWidth={sliderItemsWidth}
               />
            )}
         </div>
      </div>
   );
};
