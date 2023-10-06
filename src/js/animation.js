import { getPosition, eventListner } from './utilities.js';

export const animation = () => {

  const all = document.querySelectorAll(".vis0");
  const imgCont = document.querySelector(".template-img-cont");
  const cont = document.querySelector(".cont");
  const tempImg0 = document.querySelector(".template-img-0");
  const s4 = document.querySelector("#s4");
  const s51 = document.querySelector("#s51");
  const ob0ul = document.querySelector("#ob0ul");
  let stopbool = true;

  if (window.screen.width <= 1024 && window.screen.height <= 1024) {

    for (const element of all) {
      element.classList.remove("vis0");
      element.classList.add("vis1");
    }

    const line = window.innerHeight;

    if (
      imgCont &&
      getPosition(imgCont) < line
    ) {
      imgCont.classList.remove("vis1");
      imgCont.classList.add("vis0");
      imgCont.classList.add("ani3");
    }

    if (
      cont &&
      getPosition(cont) < line
    ) {
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
      ob0ul.classList.remove("vis1");
      ob0ul.classList.add("vis0");
      ob0ul.classList.add("ani2");
      s51.classList.remove("vis1");
      s51.classList.add("vis0");
      s51.classList.add("ani0");
      setTimeout(() => {
        s51.classList.remove("ani0");
      }, 1500);
    }
  }

  const scroll = () => {

    let cached = null;
    if (!cached) {
      setTimeout(() => {
        let scroll_pos = window.scrollY + window.innerHeight;

        if (window.screen.width <= 1024) {

          if (imgCont && scroll_pos > getPosition(imgCont) && imgCont.classList.contains("vis1")) {
            imgCont.classList.remove("vis1");
            imgCont.classList.add("vis0");
            imgCont.classList.add("ani3");
          }

          if (cont && scroll_pos > getPosition(cont) && cont.classList.contains("vis1")) {
            cont.classList.remove("vis1");
            cont.classList.add("vis0");
            cont.classList.add("ani2");
          }

          if (tempImg0 && scroll_pos > getPosition(tempImg0) && tempImg0.classList.contains("vis1")) {
            tempImg0.classList.remove("vis1");
            tempImg0.classList.add("vis0");
            tempImg0.classList.add("ani2");
          }

          if (tempImg0 && stopbool && scroll_pos > getPosition(tempImg0) + tempImg0.offsetHeight) {
            stopbool = false;
            setTimeout(() => {
              tempImg0.classList.add("ani4");
              setTimeout(() => {
                tempImg0.classList.remove("ani4");
              }, 4000);
            }, 1500);
          }

          if (s4 && scroll_pos > getPosition(s4) && ob0ul.classList.contains("vis1")) {
            ob0ul.classList.remove("vis1");
            ob0ul.classList.add("vis0");
            ob0ul.classList.add("ani2");
            s51.classList.remove("vis1");
            s51.classList.add("vis0");
            s51.classList.add("ani0");
            setTimeout(() => {
              s51.classList.remove("ani0");
            }, 1500);
          }

        } else {

          if (tempImg0 && stopbool && scroll_pos > getPosition(tempImg0) + tempImg0.offsetHeight) {
            stopbool = false;
            setTimeout(() => {
              tempImg0.classList.add("ani4");
              setTimeout(() => {
                tempImg0.classList.remove("ani4");
              }, 10_000);
            }, 750);
          }
        }
        cached = null;
      }, 300);
    }
    cached = true;
  };
  eventListner(window, "scroll", scroll);
}
