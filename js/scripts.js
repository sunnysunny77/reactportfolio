function tog(a) {
  document.getElementById("menu" + a).classList.toggle("disp");
  document.getElementById("click" + a).classList.toggle("ani");
  document.getElementById("men" + a).classList.toggle("ani1");
}

function none(one, two, three, four, five, six, seven, eight, nine) {
  let element = document.getElementById(one);
  let style = window.getComputedStyle(element);
  let dis = style.getPropertyValue("display");
  if (dis === "none") {
    document.getElementById(two).style.display = "none";
    document.getElementById(three).style.display = "none";
    document.getElementById(four).style.display = "none";
    document.getElementById(five).style.display = "none";
    document.getElementById(six).style.display = "none";
    document.getElementById(seven).style.display = "none";
    document.getElementById(eight).style.display = "none";
    document.getElementById(nine).style.display = "none";
    document.getElementById(one).style.display = "block";
    if (one == "s51") {
      document.getElementById(one).classList.add("ani0");
      setTimeout(function () {
        document.getElementById(one).classList.remove("ani0");
      }, 1500);
    } else {
      document.getElementById(one).classList.add("an");
      setTimeout(function () {
        document.getElementById(one).classList.remove("an");
      }, 750);
    }
  }
}

function high() {
  let a = document.getElementById("ob0").scrollHeight;
  let b = document.getElementById("ob0").clientHeight;
  let c = document.getElementById("pff").offsetHeight;
  let d = document.getElementById("cand").offsetTop;
  let e = document.getElementById("wp").offsetTop;
  let f = document.getElementById("dig").offsetTop;
  let g = document.getElementById("pff").offsetTop;
  let h = document.getElementById("link").offsetTop;
  let i = document.getElementById("rec").offsetTop;
  let j = document.getElementById("store").offsetTop;
  // last id not needed, for scroll calc
  let p = document.getElementById("ob0").scrollTop;
  let v = a - b - c;
  if (p < d) {
    none("s51", "s52", "s53", "s54", "s55", "s56", "s57", "s58","s59");
  }
  if (p > d && p < e) {
    none("s52", "s51", "s53", "s54", "s55", "s56", "s57", "s58","s59");
  }
  if (p > e && p < f) {
    none("s53", "s51", "s52", "s54", "s55", "s56", "s57", "s58","s59");
  }
  if (p > f && p < g) {
    none("s54", "s51", "s52", "s53", "s55", "s56", "s57", "s58","s59");
  }
  if (p > g && p < h) {
    none("s55", "s51", "s52", "s53", "s54", "s56", "s57", "s58","s59");
  }
  if (p > h && p < i) {
    none("s56", "s51", "s52", "s53", "s54", "s55", "s57", "s58","s59");
  }
  if (p > i && p < j) {
    none("s57", "s51", "s52", "s53", "s54", "s55", "s56", "s58","s59");
  }
  if (p > j && p < v) {
    none("s58", "s51", "s52", "s53", "s54", "s55", "s56", "s57","s59");
  }
  if (p > v) {
    none("s59", "s51", "s52", "s53", "s54", "s55", "s56" , "s57","s58");
  }
}

function check() {
  if (window.screen.width <= 992) {
    if (document.querySelector(".template-img-cont")) {
      document.querySelector(".template-img-cont").classList.add("vis1");
      document.querySelector(".template-img-cont").classList.add("ani4");
    }
    if (document.querySelector(".template-p")) {
      document.querySelector(".template-p").classList.add("vis1");
      document.querySelector(".template-p").classList.add("ani2");
    }
  }
  if (window.screen.width >= 992) {
    if (document.querySelector(".template-img-cont")) {
      document.querySelector(".template-img-cont").classList.add("vis1");
    }
    if (document.querySelector(".template-div")) {
      document.querySelector(".template-div").classList.add("vis1");
    }
    if (document.querySelector(".template-p")) {
      document.querySelector(".template-p").classList.add("vis1");
    }
    if (document.querySelector(".template-img-0")) {
      document.querySelector(".template-img-0").classList.add("vis1");
    }
    if (document.getElementById("ob0")) {
      document.getElementById("ob0").classList.add("vis1");
    }
    if (document.getElementById("s5")) {
      document.getElementById("s5").classList.add("vis1");
    }
    if (document.getElementById("s51")) {
      document.getElementById("s51").classList.add("ani0");
      setTimeout(function () {
        document.getElementById("s51").classList.remove("ani0");
      }, 1500);
    }
  }
}

function sani() {
  if (window.screen.width <= 992) {
    let a = document.querySelector("header").scrollHeight;
    let scroll_pos = window.scrollY + window.innerHeight;
    if (document.getElementById("home-div")) {
      if (scroll_pos > document.getElementById("home-div").offsetTop + a) {
        document.getElementById("home-div").classList.add("ani5");
      }
    }
    if (document.querySelector(".template-div")) {
      let elementt = document.querySelector(".template-div");
      let stylet = window.getComputedStyle(elementt);
      let vist = stylet.getPropertyValue("visibility");
      if (
        scroll_pos > document.querySelector(".template-div").offsetTop + a &&
        vist === "hidden"
      ) {
        document.querySelector(".template-div").classList.add("vis1");
        document.querySelector(".template-div").classList.add("ani3");
      }
    }
    if (document.querySelector(".template-img-0")) {
      let element0 = document.querySelector(".template-img-0");
      let style0 = window.getComputedStyle(element0);
      let vis0 = style0.getPropertyValue("visibility");
      if (
        scroll_pos > document.querySelector(".template-img-0").offsetTop + a &&
        vis0 === "hidden"
      ) {
        document.querySelector(".template-img-0").classList.add("vis1");
        document.querySelector(".template-img-0").classList.add("ani2");
      }
    }
    if (document.getElementById("s4")) {
      let elemento = document.getElementById("ob0");
      let styleo = window.getComputedStyle(elemento);
      let viso = styleo.getPropertyValue("visibility");
      if (
        scroll_pos > document.getElementById("s4").offsetTop + a &&
        viso === "hidden"
      ) {
        document.getElementById("ob0").classList.add("vis1");
        document.getElementById("ob0").classList.add("ani2");
      }
    }
    if (document.getElementById("s5")) {
      let element5 = document.getElementById("s5");
      let style5 = window.getComputedStyle(element5);
      let vis5 = style5.getPropertyValue("visibility");
      if (
        scroll_pos > document.getElementById("s5").offsetTop + a &&
        vis5 === "hidden"
      ) {
        document.getElementById("s5").classList.add("vis1");
        document.getElementById("s5").classList.add("ani2");
        document.getElementById("s51").classList.add("ani0");
        setTimeout(function () {
          document.getElementById("s51").classList.remove("ani0");
        }, 1500);
      }
    }
  }
}
