function overlayInit() {
  let instance = OverlayScrollbars(document.querySelector("#ob0"), {
    className: "os-theme-dark os-theme-dark-edgy",
    callbacks: {
      onScroll: cache,
      onInitialized: eventListner(document.querySelector("#close"), "click", function() {
        instance.scroll({ y : "0%" }, 2500);
      }, false)
    }
  });
  OverlayScrollbars(document.querySelector("#overlay"), {
    className: "os-theme-dark os-theme-dark-edgy"
  });
  OverlayScrollbars(document.querySelector("#message"), {
    className: "os-theme-dark os-theme-dark-edgy"
  });
}
