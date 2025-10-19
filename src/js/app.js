import "./parts/menu.js";
import "./parts/vid.js";
import "./parts/sliders.js";
import "./parts/popup.js";
import { accorden } from "./static/accordeon.js";
import { animateAction, animateAdvantages, animateOrder, animateServiceCards, animateStaggerAction } from "./parts/animations.js";
import { stickyHeader } from "./parts/header.js";

if (document.querySelector('.custom-page')) {
    accorden();
    stickyHeader();
    animateAction();
    animateStaggerAction();
    animateServiceCards();
    animateOrder();
    animateAdvantages();
}