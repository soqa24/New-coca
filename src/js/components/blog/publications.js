import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const usePublicationsSlider = () => {
  new Swiper('.publications__slider', {
    modules: [Navigation],
    slidesPerView: '1',
    spaceBetween: 32,
    loop: true,
    breakpoints: {
      993: {
        slidesPerView: '1',
        spaceBetween: 20, 
        centeredSlides: true,
      },

      1201: {
        slidesPerView: '3', 
        spaceBetween: 25, 
        centeredSlides: false,
      },

      1441: {
        slidesPerView: '4',
        spaceBetween: 32,
      },
    },
    navigation: {
      prevEl: '.publications__btn--prev',
      nextEl: '.publications__btn--next',
    },
  });
};
