import { getPosition, eventListner } from './utilities.js';

export const animation = () => {

  const tempImg0 = document.querySelector(".template-img-0");
  let stopbool = true;

  const scroll = () => {

    let cached = null;
    if (!cached) {
      setTimeout(() => {
        let scroll_pos = window.scrollY + window.innerHeight;

        if (tempImg0 && stopbool && scroll_pos > getPosition(tempImg0) + tempImg0.offsetHeight) {
          stopbool = false;
          setTimeout(() => {
            tempImg0.classList.add("ani4");
            setTimeout(() => {
              tempImg0.classList.remove("ani4");
            }, 10_000);
          }, 750);
        }
        cached = null;
      }, 300);
    }
    cached = true;
  };
  eventListner(window, "scroll", scroll);
}
