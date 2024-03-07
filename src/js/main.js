import $ from "jquery";
import "jquery-validation";
import "jquery-validation/dist/additional-methods";

import formValidation from "./component/form";
import descktopDetected from "./lib/descktopDetected";
import checkPositionCursor from "./component/checkPostionCursor";
import lazyLoadObserve from "./lib/lazyload";
import cardAnimationObserve from "./lib/cardAnimation";

// ============================================================ JQ validation

formValidation($(".js-form"));

// ============================================================ lazy load

const pictures = document.querySelectorAll(".js-lazy-load");

console.log(pictures);

pictures.forEach((picture) => {
    lazyLoadObserve.observe(picture);
});

// ============================================================ hide button

const button = document.querySelector(".js-hide-button");

// do not show animation on mobile device
descktopDetected(() => {
    checkPositionCursor(button);
});

// ============================================================ text animation
const cards = document.querySelectorAll(".js-card-animation");
console.log(cards);

cards.forEach((card) => {
    cardAnimationObserve.observe(card);
});
