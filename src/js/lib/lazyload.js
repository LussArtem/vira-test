const callback = (entries) => {
    entries.forEach((entry) => {
        const imgs = entry.target.querySelectorAll("img");
        const sources = entry.target.querySelectorAll("source");

        if (entry.isIntersecting) {
            imgs.forEach((img) => {
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
            });
            sources.forEach((source) => {
                source.src = source.dataset.srcset;
                source.removeAttribute("data-srcset");
            });
            lazyLoadObserve.unobserve(entry.target);
        }
    });
};

const lazyLoadObserve = new IntersectionObserver(callback, { threshold: 0 });

export default lazyLoadObserve;
