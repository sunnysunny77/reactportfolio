function overlayInit() {
    OverlayScrollbars(document.getElementsByClassName("template-p")[0], {
        className: "os-theme-dark os-theme-dark-edgy",
    });
    if (document.getElementById("ob0")) {
        let isnt = OverlayScrollbars(document.getElementById("ob0"), {
            className: "os-theme-dark os-theme-dark-edgy",
            callbacks: {
                onScroll: cache,
                onInitialized: eventListner(document.getElementById("close"),"click",function(){
                    close(isnt);
                },false)
            },
        });
       
    }
}