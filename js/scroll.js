function scrollAnimation() {

    if (window.screen.width <= 992) {

        let scroll_pos = window.scrollY + window.innerHeight

        const imgCont = document.querySelector(".template-img-cont");

        if (scroll_pos > getPosition(imgCont)) {
            imgCont.classList.remove("vis1");
            imgCont.classList.add("vis0");
            imgCont.classList.add("ani4");
        }

        const cont = document.querySelector(".cont");

        if (scroll_pos > getPosition(cont)) {
            cont.classList.remove("vis1");
            cont.classList.add("vis0");
            cont.classList.add("ani2");
        }

        if (document.getElementById("home-div")) {
            const homeD = document.getElementById("home-div");

            if (scroll_pos > getPosition(homeD)) {
                homeD.classList.add("ani3");
            }
        }

        if (document.querySelector(".template-img-0")) {
            const tempImg0 = document.querySelector(".template-img-0");
            const style = window.getComputedStyle(tempImg0).getPropertyValue("visibility");

            if (scroll_pos > getPosition(tempImg0) && style === "hidden") {
                tempImg0.classList.remove("vis1");
                tempImg0.classList.add("vis0");
                tempImg0.classList.add("ani2");
                setTimeout(function () {
                    tempImg0.classList.add("ani5");
                    setTimeout(function () {
                        tempImg0.classList.remove("ani5");
                    }, 4000);
                }, 1500);
            }
        }

        if (document.getElementById("s4")) {
            const s4 = document.getElementById("s4");
            const ob0ul = document.getElementById("ob0ul");
            const s5 = document.getElementById("s5");
            const s51 = document.getElementById("s51");
            const style = window.getComputedStyle(s4).getPropertyValue("visibility");

            if (scroll_pos > getPosition(s4) && style === "hidden") {
                s4.classList.remove("vis1");
                s4.classList.add("vis0");
                s4.classList.add("ani2");
                ob0ul.classList.remove("vis1");
                ob0ul.classList.add("vis0");
                ob0ul.classList.add("ani2");
                s5.classList.remove("vis1");
                s5.classList.add("vis0");
                s5.classList.add("ani2");
                s51.classList.add("ani0");
                setTimeout(function () {
                    s51.classList.remove("ani0");
                }, 1500);
            }
        }

    }
}

function check() {

    if (window.screen.width <= 992 && !/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)) {

        let all = document.querySelectorAll(".vis0");
        for (let i = 0; i < all.length; i++) {
            all[i].classList.remove("vis0");
            all[i].classList.add("vis1");
        }

        let line = window.innerHeight;

        if (getPosition(document.querySelector(".template-img-cont")) < line) {
            const imgCont = document.querySelector(".template-img-cont");
            imgCont.classList.remove("vis1");
            imgCont.classList.add("vis0");
            imgCont.classList.add("ani4");
        }

        if (getPosition(document.querySelector(".cont")) < line) {
            const cont = document.querySelector(".cont");
            cont.classList.remove("vis1");
            cont.classList.add("vis0");
            cont.classList.add("ani2");
        }

        if (
            document.querySelector(".template-img-0") &&
            getPosition(document.querySelector(".template-img-0")) < line
        ) {
            const tempImg0 = document.querySelector(".template-img-0");
            tempImg0.classList.remove("vis1");
            tempImg0.classList.add("vis0");
            tempImg0.classList.add("ani2");
        }

        if (
            document.getElementById("s4") &&
            getPosition(document.getElementById("s4")) < line
        ) {
            const s4 = document.getElementById("s4");
            const ob0ul = document.getElementById("ob0ul");
            const s5 = document.getElementById("s5");
            const s51 = document.getElementById("s51");
            s4.classList.remove("vis1");
            s4.classList.add("vis0");
            s4.classList.add("ani2");
            ob0ul.classList.remove("vis1");
            ob0ul.classList.add("vis0");
            ob0ul.classList.add("ani2");
            s5.classList.remove("vis1");
            s5.classList.add("vis0");
            s5.classList.add("ani2");
            s51.classList.add("ani0");
            setTimeout(function () {
                s51.classList.remove("ani0");
            }, 1500);
        }

    } else {
        if (document.getElementById("s51")) {
            const s51 = document.getElementById("s51");
            s51.classList.add("ani0");
            setTimeout(function () {
                s51.classList.remove("ani0");
            }, 1500);
        }
    }
}