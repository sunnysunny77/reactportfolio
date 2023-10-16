import { getPosition, eventListner } from './utilities.js';

let inner;

export const click = (event) => {

  const obj = document.querySelector(".template-img-0");

  obj.classList.toggle("ani4");

  if (obj.classList.contains("ani4")) {

    inner = event.target.innerHTML;
    event.target.innerHTML = "Close";
  } else {
    
    event.target.innerHTML = inner;
  }
}

export const animation = () => {

  const tempImg0 = document.querySelector(".template-img-0");
  const tempB = document.querySelector(".template-b");
  if (tempB) inner = tempB.innerHTML;

  let stopbool = true;

  const scroll = () => {

    let cached = null;
    if (!cached) {
      setTimeout(() => {
        let scroll_pos = window.scrollY + window.innerHeight;
        if (tempImg0 && stopbool && scroll_pos > getPosition(tempImg0) + tempImg0.clientHeight + Number(window.getComputedStyle(tempImg0).getPropertyValue("border-bottom-width").slice(0, -2))) {
          stopbool = false;
          setTimeout(() => {
            tempImg0.classList.add("ani4");
            tempB.innerHTML = "Close";
          }, 750);
        }
        cached = null;
      }, 300);
    }
    cached = true;
  };
  eventListner(window, "scroll", scroll);
}
