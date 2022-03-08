function scrollAnimation() {
    
    if (window.screen.width <= 992) {

        let scroll_pos = window.scrollY + window.innerHeight

        const imgCont = document.querySelector(".template-img-cont");
        const imgContstyle = window
            .getComputedStyle(imgCont)
            .getPropertyValue("visibility");

        if (scroll_pos > getPosition(imgCont) + imgCont.offsetHeight && imgContstyle === "hidden") {
            imgCont.classList.remove("vis0");
            imgCont.classList.add("vis1");
            imgCont.classList.add("ani4");
        }

        const cont = document.querySelector(".cont");
        const contstyle = window
            .getComputedStyle(cont)
            .getPropertyValue("visibility");

        if (scroll_pos > getPosition(cont) && contstyle === "hidden") {
            cont.classList.remove("vis0");
            cont.classList.add("vis1");
            cont.classList.add("ani2");
        }

        const tempDiv = document.querySelector(".template-div");
        const tempDivstyle = window
            .getComputedStyle(tempDiv)
            .getPropertyValue("visibility");

        if (scroll_pos > getPosition(tempDiv) && tempDivstyle === "hidden") {
            tempDiv.classList.remove("vis0");
            tempDiv.classList.add("vis1");
            tempDiv.classList.add("ani3");
        }

        if (document.getElementById("home-div")) {
            const homeD = document.getElementById("home-div");
            const style = window.getComputedStyle(homeD).getPropertyValue("display");

            if (scroll_pos > getPosition(homeD) && style === "block") {
                homeD.classList.add("ani5");
            }
        }

        if (document.querySelector(".template-img-0")) {
            const tempImg0 = document.querySelector(".template-img-0");
            const style = window
                .getComputedStyle(tempImg0)
                .getPropertyValue("visibility");

            if (scroll_pos > getPosition(tempImg0) && style === "hidden") {
                tempImg0.classList.remove("vis0");
                tempImg0.classList.add("vis1");
                tempImg0.classList.add("ani2");
            }
        }

        if (document.getElementById("s4")) {
            const ob0ul = document.getElementById("ob0ul");
            const style = window
                .getComputedStyle(ob0ul)
                .getPropertyValue("visibility");

            if (scroll_pos > getPosition(document.getElementById("s4")) && style === "hidden") {
                ob0ul.classList.remove("vis0");
                ob0ul.classList.add("vis1");
                ob0ul.classList.add("ani2");
            }
        }

        if (document.getElementById("s5")) {
            const s5 = document.getElementById("s5");
            const s51 = document.getElementById("s51");
            const style = window.getComputedStyle(s5).getPropertyValue("visibility");

            if (scroll_pos > getPosition(s5) && style === "hidden") {
                s5.classList.remove("vis0");
                s5.classList.add("vis1");
                s5.classList.add("ani2");
                s51.classList.add("ani0");
                setTimeout(function () {
                    s51.classList.remove("ani0");
                }, 1500);
            }
        }
    }
}

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

function check() {

    if (window.screen.width <= 992 && !/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)) {

        let line = window.innerHeight;

        if (getPosition(document.querySelector(".template-img-cont")) < line) {
            const imgCont = document.querySelector(".template-img-cont");
            imgCont.classList.remove("vis0");
            imgCont.classList.add("vis1");
            imgCont.classList.add("ani4");
        }

        if (getPosition(document.querySelector(".cont")) < line) {
            const cont = document.querySelector(".cont");
            cont.classList.remove("vis0");
            cont.classList.add("vis1");
            cont.classList.add("ani2");
        }

        if (getPosition(document.querySelector(".template-div")) < line) {
            const tempDiv = document.querySelector(".template-div");
            tempDiv.classList.remove("vis0");
            tempDiv.classList.add("vis1");
            tempDiv.classList.add("ani3");
        }

        if (
            document.querySelector(".template-img-0") &&
            getPosition(document.querySelector(".template-img-0")) < line
        ) {
            const tempImg0 = document.querySelector(".template-img-0");
            tempImg0.classList.remove("vis0");
            tempImg0.classList.add("vis1");
            tempImg0.classList.add("ani2");
        }

        if (
            document.getElementById("s4") &&
            getPosition(document.getElementById("s4")) < line
        ) {
            const ob0ul = document.getElementById("ob0ul");
            ob0ul.classList.remove("vis0");
            ob0ul.classList.add("vis1");
            ob0ul.classList.add("ani2");
        }

        if (
            document.getElementById("s5") &&
            getPosition(document.getElementById("s5")) < line
        ) {
            const s5 = document.getElementById("s5");
            const s51 = document.getElementById("s51");
            s5.classList.remove("vis0");
            s5.classList.add("vis1");
            s5.classList.add("ani2");
            s51.classList.add("ani0");
            setTimeout(function () {
                s51.classList.remove("ani0");
            }, 1500);
        }
    } else {
        let all = document.querySelectorAll(".vis0");
        for (let i = 0; i < all.length; i++) {
            all[i].classList.remove("vis0");
            all[i].classList.add("vis1");
        }
        if (document.getElementById("s51")) {
            const s51 = document.getElementById("s51");
            s51.classList.add("ani0");
            setTimeout(function () {
                s51.classList.remove("ani0");
            }, 1500);
        }
    }
}