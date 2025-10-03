import Swiper from 'swiper';
import { Navigation, Pagination, FreeMode, Thumbs } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        const prev = section.querySelector('.prev');
        const next = section.querySelector('.next');
        const pagination = section.querySelector('.pagination');

        if (slider.closest('.about')) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                spaceBetween: 16,
                slidesPerView: 1,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
            });
        }
        if (slider.closest('.team')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination
                ],
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                breakpoints: {
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 15,

                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 15,

                    },
                    769: {
                        slidesPerView: 3,
                        spaceBetween: 15,

                    },
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }
            });
        }

    })
}
