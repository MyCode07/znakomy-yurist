import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, FreeMode, Thumbs } from 'swiper/modules';

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
        if (slider.closest('.section__flex-box')) {
            let prev = slider.closest('.section__flex-box').querySelector('.prev');
            let next = slider.closest('.section__flex-box').querySelector('.next');

            new Swiper(slider, {
                modules: [
                    Navigation, Autoplay
                ],
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                spaceBetween: 0,
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },

            });
        }
        if (slider.closest('.articles')) {
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
        if (slider.closest('.reviews-slider')) {
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
