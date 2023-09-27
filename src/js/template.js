
import { getPosition } from '../js/utilities.js';
import { preloadImage } from '../js/utilities.js';
import { eventListner } from '../js/utilities.js';
import OverlayScrollbars from "overlayscrollbars";
import Vivus from "vivus";

let pictureID = [];

export const vivus = () => {

  new Vivus("my-svg");
}

export const toggle = (event) => {

  const menu0 = document.querySelectorAll(".menu0")[0];

  if (menu0.classList.contains("ani1")) {

    menu0.classList.add("ani6");
    event.target.classList.add("ani7");
  } else if (menu0.classList.contains("ani6")) {

    menu0.classList.remove("ani6");
    event.target.classList.remove("ani7");
  }

  event.target.classList.toggle("ani");
  menu0.classList.toggle("disp");
  menu0.classList.toggle("ani1");

  if (!menu0.classList.contains("disp")) {
    vivus();
  }
}

export const picture = () => {

  const img = document.querySelectorAll(".sitesImg");
  for (let i = 1; i <= img.length; i++) {
    let id = `s5${i}`;
    pictureID.push(id);
    let url = window.getComputedStyle(document.getElementById(id)).getPropertyValue("background-image");
    let start = url.indexOf("images");
    let end = url.indexOf("'");
    preloadImage(url.slice(start, end - 1));
  }
}

function pictureDisplay(item) {
  for (const [x, element] of pictureID.entries()) {
    const obj = document.getElementById(element);
    if (obj.id === item) {
      if (window.getComputedStyle(obj).getPropertyValue("display") === "none") {
        obj.style.display = "block";
        if (x === 0) {
          obj.classList.add("ani0");
          setTimeout(function () {
            obj.classList.remove("ani0");
          }, 1500);
        } else {
          obj.classList.add("an");
          setTimeout(function () {
            obj.classList.remove("an");
          }, 750);
        }
      }
    } else {
      obj.style.display = "none";
    }
  }
}

export const fromOverlay = (event) => {

  OverlayScrollbars(document.querySelector("#overlay"), {
    className: "os-theme-dark os-theme-dark-edgy"
  });

  OverlayScrollbars(document.querySelector("#message"), {
    className: "os-theme-dark os-theme-dark-edgy"
  });
}

export const sitesOverlay = (event) => {

  let cached = null;
  let instance = OverlayScrollbars(document.querySelector("#ob0"), {
    className: "os-theme-dark os-theme-dark-edgy",
    callbacks: {
      onScroll: function (event) {

        if (!cached) {
          setTimeout(function () {

            let preview = document.querySelectorAll(".scrollPreview");
            let ranges = [...preview].map(item => item.offsetTop);

            const rangesLenght = ranges.length;
            let scroll_pos = event.target.scrollTop;

            if (scroll_pos < ranges[0]) {
              pictureDisplay(pictureID[0]);
            }
            for (let i = 0; i < rangesLenght - 1; i++) {
              let y = i + 1;
              if (scroll_pos > ranges[i] && scroll_pos < ranges[y]) {
                pictureDisplay(pictureID[y]);
              }
            }
            if (scroll_pos > ranges[rangesLenght - 1]) {
              pictureDisplay(pictureID.at(-1));
            }

            cached = null;
          }, 300);
        }
        cached = true;
      },
      onInitialized: eventListner(document.querySelector("#close"), "click", function () {
        instance.scroll({ y: "0%" }, 2500);
      }, false)
    }
  });
}

export const init = () => {

  const all = document.querySelectorAll(".vis0");
  const imgCont = document.querySelector(".template-img-cont");
  const cont = document.querySelector(".cont");
  const homeD =  document.querySelector("#home-div");
  const tempImg0 = document.querySelector(".template-img-0");
  const s4 = document.querySelector("#s4");
  const s5 = document.querySelector("#s5");
  const s51 = document.querySelector("#s51");
  const ob0ul = document.querySelector("#ob0ul");
  const load = document.querySelector("#load");
  const after = document.querySelector(".after");

  if (after && !after.classList.contains("main-animation")) {

    after.classList.add("main-animation");
    setTimeout(function () {
      after.classList.remove("main-animation");
    }, 750);
  }

  if (window.screen.width <= 992 && !/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)) {

    for (const element of all) {
      element.classList.remove("vis0");
      element.classList.add("vis1");
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
  } else {

    if (load && !load.classList.contains("load-animation")) {

      load.classList.add("load-animation");
      setTimeout(function () {
        load.classList.remove("load-animation");
      }, 750);
    }
  }

  eventListner(window, "scroll", function () {

    let stopbool = true;
    let cached = null;
    
    if (!cached) {
      setTimeout(function () {
  
        let scroll_pos = window.scrollY + window.innerHeight;
  
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
          }
  
          if (tempImg0 && stopbool && scroll_pos > getPosition(tempImg0) + tempImg0.offsetHeight) {
  
            stopbool = false;
  
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
  
          if (tempImg0 && stopbool && scroll_pos > getPosition(tempImg0) + tempImg0.offsetHeight) {
  
            stopbool = false;
            setTimeout(function () {
              tempImg0.classList.add("ani5");
              setTimeout(function () {
                tempImg0.classList.remove("ani5");
              }, 10_000);
            }, 750);
          }
        }
  
        cached = null;
      }, 300);
    }
    cached = true;
  }, false)
}
