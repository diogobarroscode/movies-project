import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { SwiperOptions } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";


interface SwiperConfig extends SwiperOptions {
    effect: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
  }

export const swiperConfigSlide: SwiperConfig = {
    speed: 500,
    modules: [EffectFade, Navigation, Pagination, Autoplay],
    effect: 'fade',
    slidesPerView: 1,
    loop: true,
    navigation: true,
    pagination: false,
    autoplay: {
        delay: 7000,
    }
}

export const swiperConfigCarousel = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: true,
      breakpoints: {
        320: {
          slidesPerView: 4,
          spaceBetween: 80,
        },
        360: {
          slidesPerView: 4,
          spaceBetween: 70,
        },
        460: {
          slidesPerView: 4,
          spaceBetween: 66,
        },
        520: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
        560: {
          slidesPerView: 4,
          spaceBetween: 55,
        },
        600: {
          slidesPerView: 5,
          spaceBetween: 120,
        },
        680: {
          slidesPerView: 5,
          spaceBetween: 100,
        },
        699: {
          slidesPerView: 5,
          spaceBetween: 75,
        },
        750: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        820: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        860: {
          slidesPerView: 6,
          spaceBetween: 100,
        },
        950: {
          slidesPerView: 6,
          spaceBetween: 70,
        },
        1040: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
        1141: {
          slidesPerView: 7,
          spaceBetween: 120,
        },
        1200: {
          slidesPerView: 7,
          spaceBetween: 90,
        },
        1260: {
          slidesPerView: 7,
          spaceBetween: 70,
        },
        1310: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
        1351: {
          slidesPerView: 8,
          spaceBetween: 120,
        },
        1430: {
          slidesPerView: 8,
          spaceBetween: 90,
        },
        1570: {
          slidesPerView: 8,
          spaceBetween: 50,
        },
        1600: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
        1620: {
          slidesPerView: 9,
          spaceBetween: 120,
        },
        1690: {
          slidesPerView: 9,
          spaceBetween: 90,
        },
        1780: {
          slidesPerView: 9,
          spaceBetween: 70,
        },
      }
}