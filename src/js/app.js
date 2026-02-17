import "./parts/menu.js";
import "./parts/vid.js";
import "./parts/sliders.js";
import "./parts/popup.js";
import { accorden } from "./static/accordeon.js";
import { animateAction, animateAdvantages, animateOrder, animateServiceCards, animateStaggerAction } from "./parts/animations.js";
import { stickyHeader } from "./parts/header.js";
import { Fancybox } from "@fancyapps/ui";
import { playVideoAction } from "./parts/video.js";

if (document.querySelector('.custom-page')) {
    accorden();
    stickyHeader();
    animateAction();
    animateStaggerAction();
    animateServiceCards();
    animateOrder();
    animateAdvantages();
    playVideoAction();


    Fancybox.bind("[data-fancybox]", {
    });
}

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})