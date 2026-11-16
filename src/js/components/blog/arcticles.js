// src/js/components/about/ourEmployees.js
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

export function initArcticlesSlider(params = {}) {
  const selector = '.articles-swiper';
  const el = document.querySelector(selector);
  if (!el) return;

  new Swiper(selector, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 3, 

    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 3,
      },

      769: {
        slidesPerView: 1,
        spaceBetween: 3,
      },
      993: {
        slidesPerView: 2,
        spaceBetween: 20, 
      },

      1201: {
        slidesPerView: 2.5,
        spaceBetween: 25, 
      },

      1441: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
}
