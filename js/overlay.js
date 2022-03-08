function overlayInit() {
    OverlayScrollbars(document.getElementsByClassName("template-p")[0], {
        className: "os-theme-dark os-theme-dark-edgy",
    });
    if (document.getElementById("ob0")) {
        let instance = OverlayScrollbars(document.getElementById("ob0"), {
            className: "os-theme-dark os-theme-dark-edgy",
            callbacks: {
                onScroll: cache,
            },
        });
        eventListner(
            document.getElementById("close"),
            "click",
            function () {
                for (let x = 0; x < pictureID.length; x++) {
                    if (x > 0) {
                        const obj = document.getElementById(pictureID[x]);
                        obj.style.display = "none";
                    }
                }
                document.getElementById(pictureID[0]).style.display = "block";
                instance.scroll({ y: 0 });
            },
            false
        );
    }
}