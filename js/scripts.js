function script() {
    const obj = document.getElementsByClassName("outer")[0];
    let script = document.createElement("script");
    script.setAttribute("src", "./node_modules/vivus/dist/vivus.min.js");
    let script1 = document.createElement("script");
    script1.setAttribute(
        "src",
        "./node_modules/overlayscrollbars/js/OverlayScrollbars.js"
    );
    insertAfter(script, obj);
    insertAfter(script1, obj);
    eventListner(script, "load", vivus, null);
    eventListner(script1, "load", overlayInit, null);
}