import Vivus from "vivus";

export const start = () => {

  if (window.innerWidth > 1024 ) {

    const after = document.querySelector("#after");
    const logo = document.querySelector("#logo");

    logo.style.animationName = "none";
    setTimeout(() => {
      logo.style.animationName = "";
    }, 0);
    after.style.animationName = "none";
    setTimeout(() => {
      after.style.animationName = "";
    }, 0);
  } else {
    
    const menu0 = document.querySelector(".menu0");

    if (!menu0.classList.contains("disp")) {

      const button = document.querySelector(".click");
      menu0.classList.remove("ani1");
      menu0.classList.add("disp");
      menu0.classList.add("ani5");
      button.classList.remove("ani");
      button.classList.add("ani6");
    }
  }
}

export const top = () => {

  window.scrollTo(0, 0)
}

export const vivus = () => {

  new Vivus("my-svg");
}

export const toggle = (event) => {

  const menu0 = document.querySelector(".menu0");

  if (menu0.classList.contains("ani1")) {

    menu0.classList.add("ani5");
    event.target.classList.add("ani6");
  } else if (menu0.classList.contains("ani5")) {

    menu0.classList.remove("ani5");
    event.target.classList.remove("ani6");
  }

  event.target.classList.toggle("ani");
  menu0.classList.toggle("disp");
  menu0.classList.toggle("ani1");

  if (!menu0.classList.contains("disp")) {
    vivus();
  }
}
