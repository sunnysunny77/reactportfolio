import Vivus from "vivus";

export const start = () => {

  const after = document.querySelector("#after");
  const logo = document.querySelector("#logo");
  logo.classList.add("logo");
  setTimeout(() => {
    logo.classList.remove("logo");
  }
  ,300);
  after.classList.add("after");
  setTimeout(() => {
    after.classList.remove("after");
  }
  ,300);
}

export const top = () => {

  window.scrollTo(0,0)
}

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
