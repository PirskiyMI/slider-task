import styles from './styles/style.module.scss';
import PREV_ARROW from './../assets/img/arrow-left-icon.svg';
import NEXT_ARROW from './../assets/img/arrow-right-icon.svg';
import ITEM_IMG from './../assets/img/slider-item-img.png';

export const Slider = () => {
   return (
      <div className={styles.slider}>
         <div className={styles.slider_top}>
            <h1 className={styles.slider_title}>Актуальное</h1>
            <div className={styles.slider_buttons}>
               <div className={styles.slider_button}>
                  <img src={PREV_ARROW} alt="Прокрутка слайдера назад" />
               </div>
               <div className={styles.slider_button}>
                  <img src={NEXT_ARROW} alt="Прокрутка слайдера вперед" />
               </div>
            </div>
         </div>
         <div className={styles.slider_bottom}>
            <div className={styles.slider_wrapper}>
               <div className={styles.slider_item}>
                  <img
                     className={styles.slider_img}
                     src={ITEM_IMG}
                     alt="Солнце над горным массивом"
                  />
                  <span className={styles.slider_date}>10.11.2020 г.</span>
                  <h3 className={styles.slider_label}>
                     Ким и Валерия Брейтбурги написали книгу про искусство
                  </h3>
                  <p className={styles.slider_description}>
                     Работа над книгой велась более пяти лет, и действенные методики, описанные
                     в ней, созданные в результате анализа и синтеза идей…
                  </p>
               </div>

               <div className={styles.slider_item}>
                  <img
                     className={styles.slider_img}
                     src={ITEM_IMG}
                     alt="Солнце над горным массивом"
                  />
                  <span className={styles.slider_date}>10.11.2020 г.</span>
                  <h3 className={styles.slider_label}>
                     Ким и Валерия Брейтбурги написали книгу про искусство
                  </h3>
                  <p className={styles.slider_description}>
                     Работа над книгой велась более пяти лет, и действенные методики, описанные
                     в ней, созданные в результате анализа и синтеза идей…
                  </p>
               </div>
               <div className={styles.slider_item}>
                  <img
                     className={styles.slider_img}
                     src={ITEM_IMG}
                     alt="Солнце над горным массивом"
                  />
                  <span className={styles.slider_date}>10.11.2020 г.</span>
                  <h3 className={styles.slider_label}>
                     Ким и Валерия Брейтбурги написали книгу про искусство
                  </h3>
                  <p className={styles.slider_description}>
                     Работа над книгой велась более пяти лет, и действенные методики, описанные
                     в ней, созданные в результате анализа и синтеза идей…
                  </p>
               </div>
               <div className={styles.slider_item}>
                  <img
                     className={styles.slider_img}
                     src={ITEM_IMG}
                     alt="Солнце над горным массивом"
                  />
                  <span className={styles.slider_date}>10.11.2020 г.</span>
                  <h3 className={styles.slider_label}>
                     Ким и Валерия Брейтбурги написали книгу про искусство
                  </h3>
                  <p className={styles.slider_description}>
                     Работа над книгой велась более пяти лет, и действенные методики, описанные
                     в ней, созданные в результате анализа и синтеза идей…
                  </p>
               </div>
               <div className={styles.slider_item}>
                  <img
                     className={styles.slider_img}
                     src={ITEM_IMG}
                     alt="Солнце над горным массивом"
                  />
                  <span className={styles.slider_date}>10.11.2020 г.</span>
                  <h3 className={styles.slider_label}>
                     Ким и Валерия Брейтбурги написали книгу про искусство
                  </h3>
                  <p className={styles.slider_description}>
                     Работа над книгой велась более пяти лет, и действенные методики, описанные
                     в ней, созданные в результате анализа и синтеза идей…
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};
