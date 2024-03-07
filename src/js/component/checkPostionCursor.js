import toggleClassList from "../lib/toggleClassList";

export default function checkPositionCursor(element) {
    if (element) {
        const windowInnerHeightHalf = window.innerHeight / 2;
        document.addEventListener("mousemove", (event) => {
            event.clientY <= windowInnerHeightHalf
                ? toggleClassList(element, "fade-in", "fade-out")
                : toggleClassList(element, "fade-out", "fade-in");
        });
    } else {
        console.log("no element");
    }
}
