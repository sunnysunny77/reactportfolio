function toggle() {

  const menu0 = document.getElementsByClassName("menu0")[0];
  const click = document.getElementsByClassName("click")[0];

  if (menu0.classList.contains("ani1")) {

    menu0.classList.add("ani6")
    click.classList.add("ani7");
  } else if (menu0.classList.contains("ani6")) {

    menu0.classList.remove("ani6")
    click.classList.remove("ani7");
  }
  
  click.classList.toggle("ani");
  menu0.classList.toggle("disp");
  menu0.classList.toggle("ani1")
}

function vivus() {
  new Vivus(
    "my-svg",
    {
      duration: 800,
      file: "images/template/svg.svg",
    },
    null
  );
}

eventListner(window, "scroll", cache, null);
eventListner(document.getElementsByClassName("click")[0], "click", toggle, false);

window.onload = function () {
  script();
  check();
};