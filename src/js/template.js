import Vivus from "vivus";
import { getPosition } from './utilities.js';

export const start = () => {

  const after = document.querySelector("#after");
  const logo = document.querySelector("#logo");
  logo.style.animationName = "none";
  setTimeout(() => {
    logo.style.animationName = "";
  }
  ,0);
  after.style.animationName = "none";
  setTimeout(() => {
    after.style.animationName = "";
  }
  ,0);
}

export const top = () => {

  window.scrollTo(0,0)
}

export const vivus = () => {

  new Vivus("my-svg");
}

export const toggle = (event) => {

  const menu0 = document.querySelectorAll(".menu0")[0];
  const imgCont = document.querySelector(".template-img-cont");
  const cont = document.querySelector(".cont");
  const line = window.innerHeight;
  
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
  } else {
    if (getPosition(imgCont) - menu0.scrollHeight  < line && imgCont.classList.contains("vis1")) {
      imgCont.classList.remove("vis1");
      imgCont.classList.add("vis0");
      imgCont.classList.add("ani4");
    }
  
    if (getPosition(cont) - menu0.scrollHeight  < line && cont.classList.contains("vis1")) {
      cont.classList.remove("vis1");
      cont.classList.add("vis0");
      cont.classList.add("ani2");
    }
  }
}
