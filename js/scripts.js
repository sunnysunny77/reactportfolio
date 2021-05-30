let cached = null;

const pictureID = [
  "s51",
  "s52",
  "s53",
  "s54",
  "s55",
  "s56",
  "s57",
  "s58",
  "s59"
];

function send(formData, sent, sub) {
  let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open("POST", "cont.php", true);
  req.onload = function() {
      if (req.status == 200) {
        myResolve(req.responseText);
      } else {
        myReject("File not Found");
      }
    };
    req.send(formData);
    });
    myPromise.then(
      function(value) {
      sent.innerHTML = value;
      sub.style.display = "none";
      sent.style.display = "block";
      setTimeout(function () {
      sent.style.display = "none";
      sent.innerHTML = "";
      sub.style.display = "block";
      }, 5000);
    },
      function(error) {
      sent.innerHTML = error;
      sub.style.display = "none";
      sent.style.display = "block";
      setTimeout(function () {
      sent.style.display = "none";
      sent.innerHTML = "";
      sub.style.display = "block";
      }, 5000);
    }
  );
}
    
function valid(bool, obj, msg) {
  if (!document.getElementById("msg" + obj.id) && bool) {
    obj.classList.add("red");
    const newNode = document.createElement("span");
    newNode.className = "msg";
    newNode.id = "msg" + obj.id;
    newNode.innerHTML = msg;
    obj.previousElementSibling.appendChild(newNode); 
  } else if (document.getElementById("msg" + obj.id) && !bool) {
    document.getElementById("msg" + obj.id).remove();
    obj.classList.remove("red");
  }
}

function form(event) {
  let error;
  const formData = new FormData(this);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);
  const name = this.children[0].children[1].children[0].children[2];
  const phone = this.children[0].children[1].children[1].children[2];
  const email = this.children[0].children[1].children[2].children[2];
  const message = this.children[0].children[1].children[3].children[2];
  if (/^[A-Z \.\-']{2,40}$/i.test(data.name)) {
    valid(false, name, null);
  } else {
    valid(true, name, "Enter your name");
    error = true;
  }
  if (/^[+]?[0-9]{3,15}$/.test(data.phone)) {
    valid(false, phone, null);
  } else {
    valid(true, phone, "+###############");
    error = true;
  }
  if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(data.email)) {
    valid(false, email, null);
  } else {
    valid(true, email, "Enter your email");
    error = true;
  }
  if (/^.*[a-zA-Z0-9].*$/.test(data.message)) {
    valid(false, message, null);
  } else {
    valid(true, message, "Enter your message") ;
    error = true;
  }
  if (error) {
    const sub = this.children[2];
    sub.classList.add("red");
    sub.value = "Validation Error ↑";
    setTimeout(function () {
      sub.value = "Send";
      sub.classList.remove("red");
    }, 5000);
  } else {
    send(formData, this.children[1], this.children[2]);
    this.reset();
  }
  event.preventDefault();
}

function tog() {
  document.getElementsByClassName("click")[0].classList.toggle("ani");
  document.getElementsByClassName("menu0")[0].classList.toggle("disp");
  document.getElementsByClassName("menu1")[0].classList.toggle("ani1");
}

function sani() {
  if (window.screen.width <= 992) {
    let head = document.getElementsByTagName("header")[0].offsetHeight;
    let scroll_pos = window.scrollY + window.innerHeight / 1.25 - head;
    if (document.getElementById("home-div")) {
      const homeD = document.getElementById("home-div");
      if (scroll_pos > homeD.offsetTop) {
        homeD.classList.add("ani5");
      }
    }
    if (document.querySelector(".template-div")) {
      const tempDiv = document.querySelector(".template-div");
      const style = window
        .getComputedStyle(tempDiv)
        .getPropertyValue("visibility");
      if (scroll_pos > tempDiv.offsetTop && style === "hidden") {
        tempDiv.classList.remove("vis0");
        tempDiv.classList.add("vis1");
        tempDiv.classList.add("ani3");
      }
    }
    if (document.querySelector(".template-img-0")) {
      const tempImg0 = document.querySelector(".template-img-0");
      const style = window
        .getComputedStyle(tempImg0)
        .getPropertyValue("visibility");
      if (scroll_pos > tempImg0.offsetTop && style === "hidden") {
        tempImg0.classList.remove("vis0");
        tempImg0.classList.add("vis1");
        tempImg0.classList.add("ani2");
      }
    }
    if (document.getElementById("s4")) {
      const ob0ul = document.getElementById("ob0ul");
      const style = window
        .getComputedStyle(ob0ul)
        .getPropertyValue("visibility");
      if (scroll_pos > document.getElementById("s4").offsetTop && style === "hidden") {
        ob0ul.classList.remove("vis0");
        ob0ul.classList.add("vis1");
        ob0ul.classList.add("ani2");
      }
    }
    if (document.getElementById("s5")) {
      const s5 = document.getElementById("s5");
      const s51 = document.getElementById("s51");
      const style = window
        .getComputedStyle(s5)
        .getPropertyValue("visibility");
      if (scroll_pos > s5.offsetTop && style === "hidden") {
        s5.classList.remove("vis0");
        s5.classList.add("vis1");
        s5.classList.add("ani2");
        s51.classList.add("ani0");
        setTimeout(function () {
          s51.classList.remove("ani0");
        }, 1500);
      }
    }
  }
}

function none(a) {
  for (let x = 0; x < pictureID.length; x++) {
    const obj = document.getElementById(pictureID[x]);
    if (obj.id === a) {
      if (window.getComputedStyle(obj).getPropertyValue("display") === "none") {
        obj.style.display = "block";
        if (obj.id !== "s51") {
          obj.classList.add("an");
          setTimeout(function () {
            obj.classList.remove("an");
          }, 750);
        } else {
          obj.classList.add("ani0");
          setTimeout(function () {
            obj.classList.remove("ani0");
          }, 1500);
        }
      }
    } else {
      obj.style.display = "none";
    }
  }
}

function high(event) {
  const a = event.scrollHeight;
  const b = document.getElementById("ob0").clientHeight;
  const c = document.getElementById("cand").offsetTop;
  const d = document.getElementById("wp").offsetTop;
  const e = document.getElementById("dig").offsetTop;
  const f = document.getElementById("pff").offsetTop;
  const g = document.getElementById("link").offsetTop;
  const h = document.getElementById("rec").offsetTop;
  const i = document.getElementById("store").offsetTop;
  const j = document.getElementById("acc").offsetHeight;
  let scroll_pos = event.scrollTop
  //a - b - last obj offsetHeight
  const botCalc = a - b - j;
  if (scroll_pos < c) {
    none(pictureID[0]);
  }
  if (scroll_pos > c && scroll_pos < d) {
    none(pictureID[1]);
  }
  if (scroll_pos > d && scroll_pos < e) {
    none(pictureID[2]);
  }
  if (scroll_pos > e && scroll_pos < f) {
    none(pictureID[3]);
  }
  if (scroll_pos > f && scroll_pos < g) {
    none(pictureID[4]);
  }
  if (scroll_pos > g && scroll_pos < h) {
    none(pictureID[5]);
  }
  if (scroll_pos > h && scroll_pos < i) {
    none(pictureID[6]);
  }
  if (scroll_pos > i && scroll_pos < botCalc) {
    none(pictureID[7]);
 }
 if (scroll_pos > botCalc) {
    none(pictureID[8]);
 }
}

function cache (event) {
  if (!cached) {
    setTimeout(function () {
     if (event.target.nodeName === "#document") {
        sani()
      }
      if(event.target.nodeName === "DIV") {
        high(event.target)
      }
      cached = null;
    }, 300);
  }
  cached = event;
}

function nices () {
  OverlayScrollbars(document.getElementsByClassName("template-p")[0], { className : "os-theme-dark os-theme-dark-edgy" });
  if (document.getElementById("ob0")) {
    let instance = OverlayScrollbars(document.getElementById("ob0"), { className : "os-theme-dark os-theme-dark-edgy" , callbacks: {
      onScroll: cache
    }}); 
    eventListner(
      document.getElementById("close"),
      "click", 
      function () {
        for (let x = 0; x < pictureID.length; x++) {
          if (x > 0) {
            const obj = document.getElementById(pictureID[x]);
            obj.style.display = "none";
          }
        }
        document.getElementById(pictureID[0]).style.display = "block";
        instance.scroll({y : 0 });
      }, 
      false
    );
  }
}

function vivus () {
  new Vivus('my-svg', { duration: 800, file: 'https://gendrive.s3-ap-southeast-2.amazonaws.com/svg.svg' }, null);
}

function script () {
  const obj = document.getElementsByClassName("outer")[0];
  let script = document.createElement("script");
  script.setAttribute("src", "./node_modules/vivus/dist/vivus.min.js");
  let script1 = document.createElement("script");
  script1.setAttribute("src", "./node_modules/overlayscrollbars/js/OverlayScrollbars.js");
  obj.parentNode.insertBefore(script, obj.nextSibling);
  obj.parentNode.insertBefore(script1, obj.nextSibling);
  eventListner(
    script,
    "load",
    vivus,
    null
  );
  eventListner(
    script1,
    "load",
    nices,
    null
  );
}

function check() {
  if (window.screen.width <= 992) {
    if (document.querySelector(".template-img-cont")) {
      const imgCont = document.querySelector(".template-img-cont");
      imgCont.classList.remove("vis0");
      imgCont.classList.add("vis1");
      imgCont.classList.add("ani4");
    }
    if (document.querySelector(".cont")) {
      const cont = document.querySelector(".cont");
      cont.classList.remove("vis0");
      cont.classList.add("vis1");
      cont.classList.add("ani2");
    }
  }
  if (window.screen.width >= 992) {
    let all = document.querySelectorAll(".vis0");
    for (let i= 0; i < all.length; i++) {
      all[i].classList.remove("vis0");
      all[i].classList.add("vis1");
    }
    if (document.getElementById("s51")) {
      const s51 = document.getElementById("s51");
      s51.classList.add("ani0");
      setTimeout(function () {
        s51.classList.remove("ani0");
      }, 1500);
    }
  }
}

function eventListner(obj, type, callback, opt) {
  if (obj) {
    obj.addEventListener(type, callback, opt);
  }
}

window.onload = function () {
  check();
  script();
  eventListner(
    window,
    "scroll",
    cache,
    null
  );
  eventListner(
    document.getElementsByClassName("click")[0],
    "click",
    tog,
    false
  );
  eventListner(
    document.getElementById("contact-form"), 
    "submit", 
    form, 
    false
  );
};

