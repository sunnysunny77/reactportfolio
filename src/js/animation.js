import { getPosition, eventListner } from './utilities.js';

let inner;

export const click = (event) => {

  const obj = document.querySelector(".template-img-overlay");

  obj.classList.toggle("shrink");

  if (obj.classList.contains("shrink")) {

    inner = event.target.innerHTML;
    event.target.innerHTML = "Close";
  } else {
    
    event.target.innerHTML = inner;
  }
}

export const animation = () => {

  const tempImg0 = document.querySelector(".template-img-overlay");
  const tempB = document.querySelector(".template-b");
  const tempBorder = document.querySelector(".template-border-img")
  if (tempB) inner = tempB.innerHTML;

  let stopbool = true;

  const scroll = () => {

    let cached = null;
    if (!cached) {
      setTimeout(() => {

        let scroll_pos = window.scrollY + window.innerHeight;
        if (tempImg0 && tempBorder && stopbool && scroll_pos > getPosition(tempBorder) + tempBorder.offsetHeight) {
          stopbool = false;
          setTimeout(() => {
            tempImg0.classList.add("shrink");
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
