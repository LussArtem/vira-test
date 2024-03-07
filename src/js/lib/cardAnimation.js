import toggleClassList from "./toggleClassList";
const callback = (entries) => {
    entries.forEach((entry) => {
        const items = entry.target.querySelectorAll(".hidden");

        if (entry.isIntersecting) {
            items.forEach((item) => {
                toggleClassList(item, "show", "hidden");
            });
            cardAnimationObserve.unobserve(entry.target);
        }
    });
};

const cardAnimationObserve = new IntersectionObserver(callback, {
    threshold: 0.1,
});

export default cardAnimationObserve;
