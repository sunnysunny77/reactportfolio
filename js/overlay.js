function overlayInit() {
    OverlayScrollbars(document.getElementById("overlay"), {
        className: "os-theme-dark os-theme-dark-edgy",
    });
    if (document.getElementById("ob0")) {
        let isnt = OverlayScrollbars(document.getElementById("ob0"), {
            className: "os-theme-dark os-theme-dark-edgy",
            callbacks: {
                onScroll: cache,
            },
        });
       
    }
}