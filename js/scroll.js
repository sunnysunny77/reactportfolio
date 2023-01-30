const all = document.querySelectorAll(".vis0");
const imgCont = document.querySelector(".template-img-cont");
const cont = document.querySelector(".cont");
const homeD = document.getElementById("home-div");
const tempImg0 = document.querySelector(".template-img-0");
const s4 = document.getElementById("s4");
const s5 = document.getElementById("s5");
const s51 = document.getElementById("s51");
const ob0ul = document.getElementById("ob0ul");

function scrollAnimation() {

    let scroll_pos = window.scrollY + window.innerHeight

    if (window.screen.width <= 992) {

        if (scroll_pos > getPosition(imgCont) && imgCont.classList.contains("vis1")) {
            imgCont.classList.remove("vis1");
            imgCont.classList.add("vis0");
            imgCont.classList.add("ani4");
        }

        if (scroll_pos > getPosition(cont) && cont.classList.contains("vis1")) {
            cont.classList.remove("vis1");
            cont.classList.add("vis0");
            cont.classList.add("ani2");
        }

        
        if (homeD && scroll_pos > getPosition(homeD)) {
            homeD.classList.add("ani3");
        }
    
        if (tempImg0 && scroll_pos > getPosition(tempImg0) && tempImg0.classList.contains("vis1")) {
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

        if (s4 && scroll_pos > getPosition(s4) && s4.classList.contains("vis1")) {
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
  
        if (tempImg0 && scroll_pos > getPosition(tempImg0)) {
            setTimeout(function () {
                tempImg0.classList.add("ani5");
                setTimeout(function () {
                    tempImg0.classList.remove("ani5");
                }, 4000);
            }, 1500);
        }
    }
}

function check() {

    if (window.screen.width <= 992 && !/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)) {

        for (let i = 0; i < all.length; i++) {
            all[i].classList.remove("vis0");
            all[i].classList.add("vis1");
        }

        let line = window.innerHeight;

        if (getPosition(imgCont) < line) {
            imgCont.classList.remove("vis1");
            imgCont.classList.add("vis0");
            imgCont.classList.add("ani4");
        }

        if (getPosition(cont) < line) {
            cont.classList.remove("vis1");
            cont.classList.add("vis0");
            cont.classList.add("ani2");
        }

        if (
            tempImg0 &&
            getPosition(tempImg0) < line
        ) {
            tempImg0.classList.remove("vis1");
            tempImg0.classList.add("vis0");
            tempImg0.classList.add("ani2");
        }

        if (
            s4 &&
            getPosition(s4) < line
        ) {
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