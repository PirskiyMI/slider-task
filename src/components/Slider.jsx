import styles from './styles/style.module.scss';
import PREV_ARROW from './../assets/img/arrow-left-icon.svg';
import NEXT_ARROW from './../assets/img/arrow-right-icon.svg';
import ITEM_IMG from './../assets/img/slider-item-img.png';
import { useEffect, useRef, useState } from 'react';

export const SliderItem = () => {
   return (
      <div className={styles.slider_item}>
         <img className={styles.slider_img} src={ITEM_IMG} alt="Солнце над горным массивом" />
         <span className={styles.slider_date}>10.11.2020 г.</span>
         <h3 className={styles.slider_label}>
            Ким и Валерия Брейтбурги написали книгу про искусство
         </h3>
         <p className={styles.slider_description}>
            Работа над книгой велась более пяти лет, и действенные методики, описанные в ней,
            созданные в результате анализа и синтеза идей…
         </p>
      </div>
   );
};

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

   if (sliderBodyRef.current) {
      console.log(sliderBodyRef.current.getBoundingClientRect().width);
   }

   return (
      <div
         className={styles.slider_body}
         style={{ transform: `translateX(${position}px)` }}
         ref={sliderBodyRef}>
         {children}
      </div>
   );
};

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
         <div className={styles.slider_button} onClick={nextSlideHandler}>
            <img src={NEXT_ARROW} alt="Прокрутка слайдера вперед" />
         </div>
      </div>
   );
};

export const Slider = () => {
   const [sliderItemsWidth, setSliderItemsWidth] = useState(0);
   const [slideCount, setSlideCount] = useState(0);
   const [slidePosition, setSlidePosition] = useState(0);
   const [sliderWrapperWidth, setSliderWrapperWidth] = useState(0);

   const sliderWrapperRef = useRef(null);

   useEffect(() => {
      setSliderWrapperWidth(sliderWrapperRef.current.getBoundingClientRect().width);
   }, []);

   const minusSlideCount = sliderWrapperWidth / 290 - 1;

   return (
      <div className={styles.slider}>
         <div className={styles.slider_top}>
            <h1 className={styles.slider_title}>Актуальное</h1>

            <SliderControls
               slideCount={slideCount}
               slidePosition={slidePosition}
               setSlidePosition={setSlidePosition}
               sliderWrapperWidth={sliderWrapperWidth}
               sliderItemsWidth={sliderItemsWidth}
            />
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
         </div>
      </div>
   );
};
