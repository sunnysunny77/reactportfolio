const click = document.querySelectorAll(".click")[0];

function vivus() {

  new Vivus("my-svg");
}

function toggle() {

  const menu0 = document.querySelectorAll(".menu0")[0];

  if (menu0.classList.contains("ani1")) {

    menu0.classList.add("ani6");
    click.classList.add("ani7");
  } else if (menu0.classList.contains("ani6")) {

    menu0.classList.remove("ani6");
    click.classList.remove("ani7");
  }

  click.classList.toggle("ani");
  menu0.classList.toggle("disp");
  menu0.classList.toggle("ani1");

  if (!menu0.classList.contains("disp")) {
    vivus();
  }
}

eventListner(window, "scroll", cache, null);
eventListner(click, "click", toggle, false);

window.addEventListener("load", function() {
  script();
  check();
});
