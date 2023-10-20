import Vivus from "vivus";

const vivus = () => {

  new Vivus("my-svg");
}

export const start = () => {

  const after = document.querySelector("#after");
  after.style.animationName = "none";
  setTimeout(() => {
    after.style.animationName = "";
  }, 0);

  if (window.innerWidth > 992 ) {

    const logo = document.querySelector("#logo");

    logo.style.animationName = "none";
    setTimeout(() => {
      logo.style.animationName = "";
    }, 0);
    
    vivus();
  } else {
    
    const menu0 = document.querySelector(".menu0");

    if (!menu0.classList.contains("disp")) {

      const button = document.querySelector(".click");
      menu0.classList.remove("slideIn1");
      menu0.classList.add("disp");
      menu0.classList.add("slideIn2");
      button.classList.remove("scale1");
      button.classList.add("scale2");
    }
  }
}

export const top = () => {

  window.scrollTo(0, 0)
}

export const toggle = (event) => {

  const menu0 = document.querySelector(".menu0");

  if (menu0.classList.contains("slideIn1")) {

    menu0.classList.add("slideIn2");
    event.target.classList.add("scale2");
  } else if (menu0.classList.contains("slideIn2")) {

    menu0.classList.remove("slideIn2");
    event.target.classList.remove("scale2");
  }

  event.target.classList.toggle("scale1");
  menu0.classList.toggle("disp");
  menu0.classList.toggle("slideIn1");

  if (!menu0.classList.contains("disp")) {
    vivus();
  }
}
