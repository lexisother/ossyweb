import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import '@/css/app.scss';

const main = async () => {
  const lazysizes = await import(/* webpackChunkName: "lazysizes" */ 'lazysizes');
  return null;
};

const sliders = () => {
  let sliders = document.querySelectorAll('[data-swiper]');

  sliders.forEach((slider, index) => {
    let slides = slider.querySelectorAll('.swiper-slide');
    let sliderData = JSON.parse(slider.dataset.swiper);

    let buttonNext = slider.querySelector('.button-next');
    let buttonPrev = slider.querySelector('.button-prev');

    let defaultOptions = {
      slidesPerView: 1.2,
      spaceBetween: 12,
      initialSlide: 0,
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
        disabledClass: 'hidden',
      },
    };

    let typeOptions = {};
    switch (sliderData.type) {
      case 'quotes':
        typeOptions = {
          centeredSlides: false,
          spaceBetween: 16,
          breakpoints: {
            768: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 3,
              centeredSlides: true,
            },
            1440: {
              slidesPerView: 3.2,
              centeredSlides: true,
            },
            1600: {
              slidesPerView: 5,
              centeredSlides: true,
            },
          },
        };
        break;
      case 'events':
        typeOptions = {
          centeredSlides: false,
          loop: false,
          spaceBetween: 16,
          breakpoints: {
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 2.6,
              initialSlide: 2,
            },
            1280: {
              slidesPerView: 3,
              initialSlide: 2,
              centeredSlides: true,
            },
            1440: {
              slidesPerView: 2.2,
              initialSlide: 1,
              centeredSlides: false,
            },
            1600: {
              slidesPerView: 2.2,
              initialSlide: 1,
              centeredSlides: false,
            },
            1870: {
              slidesPerView: 2.4,
              initialSlide: 1,
              centeredSlides: false,
            },
            2400: {
              slidesPerView: 3.4,
              initialSlide: 2,
              centeredSlides: false,
            },
          },
        };
        break;
    }

    let options = {
      ...{
        ...defaultOptions,
        ...typeOptions,
      },
      ...sliderData,
    };

    if (slides.length <= sliderData.minSlides) {
      options = {
        ...options,
        ...{
          loop: false,
          centeredSlides: false,
        },
      };
    }

    const swiper = new Swiper(slider, options);
  });
};

main().then(() => {
  sliders();
  // Hide all the placeholder images when lazyload image is unveiled (also works with AJAX loaded content)
  document.addEventListener('lazyloaded', function (e) {
    const imageThatJustLoaded = e.target;
    if (
      imageThatJustLoaded.previousElementSibling &&
      imageThatJustLoaded.previousElementSibling.classList.contains('placeholder')
    ) {
      imageThatJustLoaded.previousElementSibling.classList.add('opacity-0');
    }
  });
});
