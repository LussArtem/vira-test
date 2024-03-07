export default function descktopDetected(func) {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
            navigator.userAgent
        ) ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
            navigator.userAgent.platform
        )
    ) {
        return console.log("IsMobile");
    }
    func();
}
