import { useEffect } from 'react';
import styles from './styles/style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { sliderSlice } from './../store/reducers/sliderReducer';

export const SliderBody = ({ children, windowWidth }) => {
   const { slidePosition, excessSlides } = useSelector((state) => state.sliderReducer);
   const dispatch = useDispatch();

   useEffect(() => {
      console.log(children.length - excessSlides);
      dispatch(sliderSlice.actions.setSlideCount(children.length - excessSlides));
   });
   useEffect(() => {
      dispatch(
         sliderSlice.actions.setSliderItemsWidth(
            children.length * (windowWidth >= 580 ? 300 : 290),
         ),
      );
   }, [windowWidth]);

   return (
      <div className={styles.slider_body} style={{ transform: `translateX(${slidePosition}px)` }}>
         {children}
      </div>
   );
};
