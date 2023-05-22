import styles from './styles/style.module.scss';

import { useEffect, useRef, useState } from 'react';
import { useResize } from '../hooks/useResize';

import { SliderBody } from './SliderBody';
import { SliderItem } from './SliderItem';
import { SliderControls } from './SliderControls';

export const Slider = () => {
   const [items, setItems] = useState([
      {
         id: 1,
         date: '10.11.2020 г.',
         title: 'Ким и Валерия Брейтбурги написали книгу про искусство',
         text: 'Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…',
      },
      {
         id: 2,
         date: '10.11.2020 г.',
         title: 'Юрий Колокольников пытается спасти Землю в клипе «Космические силы»',
         text: 'Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года.',
      },
      {
         id: 3,
         date: '10.11.2020 г.',
         title: 'BTS получили четыре награды MTV EMA',
         text: 'BTS получили четыре награды MTV EMA 27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г.',
      },
      {
         id: 4,
         date: '10.11.2020 г.',
         title: 'Открытие сезона «Ла Скала» отменено',
         text: 'Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».',
      },
      {
         id: 5,
         date: '10.11.2020 г.',
         title: 'Ким и Валерия Брейтбурги написали книгу про искусство',
         text: 'Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…',
      },
   ]);

   const [sliderItemsWidth, setSliderItemsWidth] = useState(0);
   const [slideCount, setSlideCount] = useState(0);
   const [slidePosition, setSlidePosition] = useState(0);
   const [sliderWrapperWidth, setSliderWrapperWidth] = useState(0);
   const [minusSlide, setMinusSlide] = useState(0);
   const sliderWrapperRef = useRef(null);

   const { width: windowWidth } = useResize();

   useEffect(() => {
      setMinusSlide(sliderWrapperWidth / (windowWidth >= 580 ? 290 : 280));
   });

   useEffect(() => {
      setSliderWrapperWidth(sliderWrapperRef.current.getBoundingClientRect().width);
   }, [windowWidth]);

   return (
      <div className={styles.slider}>
         <div className={styles.slider_top}>
            <h1 className={styles.slider_title}>Актуальное</h1>

            {windowWidth >= 580 && (
               <SliderControls
                  slideCount={slideCount}
                  slidePosition={slidePosition}
                  setSlidePosition={setSlidePosition}
                  sliderWrapperWidth={sliderWrapperWidth}
                  sliderItemsWidth={sliderItemsWidth}
                  windowWidth={windowWidth}
               />
            )}
         </div>

         <div className={styles.slider_bottom}>
            <div className={styles.slider_wrapper} ref={sliderWrapperRef}>
               <SliderBody
                  position={slidePosition}
                  setSlideCount={setSlideCount}
                  minusSlideCount={minusSlide}
                  setSliderItemsWidth={setSliderItemsWidth}
                  sliderItemsWidth={sliderItemsWidth}
                  sliderWrapperWidth={sliderWrapperWidth}
                  windowWidth={windowWidth}>
                  {items.map((el) => (
                     <SliderItem key={el.id} date={el.date} title={el.title} text={el.text} />
                  ))}
               </SliderBody>
            </div>
            {windowWidth < 580 && (
               <SliderControls
                  slideCount={slideCount}
                  slidePosition={slidePosition}
                  setSlidePosition={setSlidePosition}
                  sliderWrapperWidth={sliderWrapperWidth}
                  sliderItemsWidth={sliderItemsWidth}
                  windowWidth={windowWidth}
               />
            )}
         </div>
      </div>
   );
};
