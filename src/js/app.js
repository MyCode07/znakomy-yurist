// import { maskInputs } from "./static/inputmask.js";
import "./parts/menu.js";
import "./parts/animations.js";
// import "./parts/popup.js";
import "./parts/sliders.js";
// import "./parts/catalog.js";
// import "./parts/show-more.js";
import { accorden } from "./static/accordeon.js";
// import { runTicker } from "./static/ticker.js";
// import { Fancybox } from "@fancyapps/ui";
import { animateOrder } from "./parts/animations.js";
import { stickyHeader } from "./parts/header.js";

stickyHeader();
animateOrder();
accorden();
// runTicker()

// maskInputs('+7 (999) 999-99-99', '._mask-phone')

// Fancybox.bind("[data-fancybox]", {
// });

// document.addEventListener('click', function (e) {
//     let targetEl = e.target;
//     if (targetEl.classList.contains('pages-close')) {
//         document.querySelector('.pages').classList.toggle('_hide');
//     }
// })


// import "./parts/mask.js";

document.addEventListener('DOMContentLoaded', function () {
    const videoBox = document.querySelector('.video__box ');
    const videoBoxIframe = document.querySelector('.video__box iframe');
    const preview = document.querySelector('.video__box-preview');
    const playButton = document.querySelector('.video__box-play');
    const iframe = document.querySelector('.video__box iframe');


    function playVideo() {
        // Скрываем элементы
        preview.style.display = 'none';
        playButton.style.display = 'none';
        videoBoxIframe.style.pointerEvents = 'all';

        // Запускаем видео (добавляем autoplay параметр к src)
        const currentSrc = iframe.src;
        if (!currentSrc.includes('autoplay')) {
            const separator = currentSrc.includes('?') ? '&' : '?';
            iframe.src = currentSrc + separator + 'autoplay=1';
        }
    }

    // Вешаем обработчики на клик
    playButton.addEventListener('click', playVideo);
    videoBox.addEventListener('click', playVideo);
});