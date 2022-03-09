const pictureID = [
    "s51",
    "s52",
    "s53",
    "s54",
    "s55",
    "s56",
    "s57",
    "s58",
    "s59",
    "s510",
];

function close(isnt) {
    for (let x = 0; x < pictureID.length; x++) {
        if (x > 0) {
            const obj = document.getElementById(pictureID[x]);
            obj.style.display = "none";
        }
    }
    document.getElementById(pictureID[0]).style.display = "block";
    isnt.scroll({ y: 0 });
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

function range(event) {
    const a = event.scrollHeight;
    const b = document.getElementById("ob0").clientHeight;
    const c = document.getElementById("wp").offsetTop;
    const d = document.getElementById("pff").offsetTop;
    const e = document.getElementById("acc").offsetTop;
    const f = document.getElementById("stick").offsetTop;
    const g = document.getElementById("bus").offsetTop;
    const h = document.getElementById("sec").offsetTop;
    const i = document.getElementById("cart").offsetTop;
    const j = document.getElementById("store").offsetTop;
    const k = document.getElementById("cand").offsetHeight;
    let scroll_pos = event.scrollTop;
    //a - b - last obj offsetHeight
    const botCalc = a - b - k;
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
    if (scroll_pos > i && scroll_pos < j) {
        none(pictureID[7]);
    }
    if (scroll_pos > j && scroll_pos < botCalc) {
        none(pictureID[8]);
    }
    if (scroll_pos > botCalc) {
        none(pictureID[9]);
    }
}

