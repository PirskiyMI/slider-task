import styles from './styles/style.module.scss';
import ITEM_IMG from './../assets/img/slider-item-img.png';

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
