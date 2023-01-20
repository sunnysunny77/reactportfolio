function overlayInit() {
    let instance = OverlayScrollbars(document.getElementById("ob0"), {
        className: "os-theme-dark os-theme-dark-edgy",
        callbacks: {
            onScroll: cache,
            onInitialized: eventListner(document.getElementById("close"), "click", function () {
                instance.scroll({ y : "0%" }, 2500);
            }, false)
        },
    });
    OverlayScrollbars(document.getElementById("overlay"), {
        className: "os-theme-dark os-theme-dark-edgy",
    });
    OverlayScrollbars(document.getElementById("message"), {
        className: "os-theme-dark os-theme-dark-edgy",
    });
}