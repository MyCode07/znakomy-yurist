import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function sldierActions() {
    if (!document.querySelector('.custom-page')) {
        return;
    }

    const sliders = document.querySelectorAll('.swiper');
    if (!sliders.length) return

    sliders.forEach(slider => {
        const section = slider.closest('section');
        const prev = section.querySelector('.prev');
        const next = section.querySelector('.next');
        const pagination = section.querySelector('.pagination');

        if (slider.closest('.about')) {
            new Swiper(slider, {
                modules: [
                    Pagination, Autoplay
                ],
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true,
                },
                spaceBetween: 16,
                slidesPerView: 1,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
            });
        }
        if (slider.closest('.team')) {
            let count = slider.dataset.slide ?? 4
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination, Autoplay
                ],
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true,
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
                        autoplay: false
                    },
                    1025: {
                        slidesPerView: count,
                        spaceBetween: 15,
                        autoplay: false
                    },
                }
            });
        }
        if (slider.closest('.gallery')) {
            let count = slider.dataset.slide ?? 4
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination, Autoplay
                ],
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true,
                },
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
                        slidesPerView: count,
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
                    Navigation, Pagination, Autoplay
                ],
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true,
                },
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
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }
            });
        }
        if (slider.closest('.reviews-slider')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination, Autoplay
                ],
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true,
                },
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
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }
            });
        }
    })
}
sldierActions();