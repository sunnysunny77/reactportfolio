function toggle() {
  document.getElementsByClassName("click")[0].classList.toggle("ani");
  document.getElementsByClassName("menu0")[0].classList.toggle("disp");
  document.getElementsByClassName("menu1")[0].classList.toggle("ani1");
}

function vivus() {
  new Vivus(
      "my-svg",
      {
          duration: 800,
          file: "https://gendrive.s3-ap-southeast-2.amazonaws.com/svg.svg",
      },
      null
  );
}

eventListner(window, "scroll", cache, null);
eventListner(document.getElementsByClassName("click")[0],"click",toggle,false);

window.onload = function () {
  script();
  check();
};