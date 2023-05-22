import styles from './styles/style.module.scss';
import ITEM_IMG from './../assets/img/slider-item-img.png';

export const SliderItem = ({ date, title, text}) => {
   return (
      <div className={styles.slider_item}>
         <img className={styles.slider_img} src={ITEM_IMG} alt="Солнце над горным массивом" />
         <span className={styles.slider_date}>{date}</span>
         <h3 className={styles.slider_label}>{title}</h3>
         <p className={styles.slider_description}>{text}</p>
      </div>
   );
};
