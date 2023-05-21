import styles from './styles/style.module.scss';
import PREV_ARROW from './../assets/img/arrow-left-icon.svg';
import NEXT_ARROW from './../assets/img/arrow-right-icon.svg';
import ITEM_IMG from './../assets/img/slider-item-img.png';
import { useEffect, useState } from 'react';

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

export const SliderBody = ({ position, children, setSlideCount }) => {
   useEffect(() => {
      setSlideCount(children.length);
   }, []);

   return (
      <div className={styles.slider_body} style={{ transform: `translateX(${position}px)` }}>
         {children}
      </div>
   );
};

export const Slider = () => {
   const [slideCount, setSlideCount] = useState(0);
   const [scrollPosition, setScrollPosition] = useState(0);
   const [slidePosition, setSlidePosition] = useState(0);

   console.log(scrollPosition);

   const nextSlideHandler = () => {
      setSlidePosition((prev) => (prev -= 300));
      scrollPosition >= 360 - 360 / slideCount
         ? setScrollPosition((prev) => (prev = 0))
         : setScrollPosition((prev) => (prev += 360 / slideCount));
   };

   const prevSlideHandler = () => {
      setSlidePosition((prev) => (prev += 300));
      scrollPosition <= 0
         ? setScrollPosition((prev) => (prev = 360 - 360 / slideCount))
         : setScrollPosition((prev) => (prev -= 360 / slideCount));
   };

   return (
      <div className={styles.slider}>
         <div className={styles.slider_top}>
            <h1 className={styles.slider_title}>Актуальное</h1>
            <div className={styles.slider_buttons}>
               <div className={styles.slider_scroll}>
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
         </div>
         <div className={styles.slider_bottom}>
            <div className={styles.slider_wrapper}>
               <SliderBody position={slidePosition} setSlideCount={setSlideCount}>
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
