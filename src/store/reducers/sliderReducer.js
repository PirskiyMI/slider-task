import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   items: [
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
      {
         id: 6,
         date: '10.11.2020 г.',
         title: 'Юрий Колокольников пытается спасти Землю в клипе «Космические силы»',
         text: 'Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года.',
      },
   ],
   sliderItemsWidth: 0,
   slideCount: 0,
   slidePosition: 0,
   sliderWrapperWidth: 0,
   excessSlides: 0,
};

export const sliderSlice = createSlice({
   name: 'sliderSlice',
   initialState,
   reducers: {
      setSliderItemsWidth(state, action) {
         state.sliderItemsWidth = action.payload;
      },
      setSliderWrapperWidth(state, action) {
         state.sliderWrapperWidth = action.payload;
      },
      setSlideCount(state, action) {
         state.slideCount = action.payload;
      },
      setSlidePosition(state, action) {
         if (action.payload === 0) {
            state.slidePosition = action.payload;
         } else {
            state.slidePosition += action.payload;
         }
      },
      setExcessSlides(state, action) {
         state.excessSlides = action.payload;
      },
   },
});

export default sliderSlice.reducer;
