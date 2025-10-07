import "./parts/menu.js";
import "./parts/vid.js";
import "./parts/sliders.js";
import { accorden } from "./static/accordeon.js";
import { animateAdvantages, animateOrder, animateServiceCards } from "./parts/animations.js";
import { stickyHeader } from "./parts/header.js";

accorden();
stickyHeader();

animateServiceCards();
animateOrder();
animateAdvantages();