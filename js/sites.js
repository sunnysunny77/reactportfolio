let pictureID = [];

let img = document.querySelectorAll(".sitesImg");
for (let i = 1; i <= img.length; i++) {
    pictureID.push("s5" + i)
}

function close(isnt) {
    for (let x = 1; x < pictureID.length; x++) {
        const obj = document.getElementById(pictureID[x]);
        obj.style.display = "none";
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

    let ranges = []

    let preview = document.querySelectorAll(".scrollPreview");
    for (let i = 0; i < preview.length - 1; i++) {
        ranges.push(preview[i].offsetTop)
    }
    ranges.push(preview[preview.length - 1].offsetHeight)

    let scroll_pos = event.scrollTop;

    const rangesLenght = ranges.length;
    const pictureLenght = pictureID.length;

    const a = event.scrollHeight;
    const b = document.getElementById("ob0").clientHeight;
    const botCalc = a - b - ranges[rangesLenght - 1];

    if (scroll_pos < ranges[0]) {
        none(pictureID[0]);
    }
    for (let i = 0; i < rangesLenght - 2; i++) {
        let y = i + 1;
        if (scroll_pos > ranges[i] && scroll_pos < ranges[y]) {
            none(pictureID[y]);
        }
    }
    if (scroll_pos > ranges[rangesLenght - 2] && scroll_pos < botCalc) {
        none(pictureID[pictureLenght - 2]);
    }
    if (scroll_pos > botCalc) {
        none(pictureID[pictureLenght - 1]);
    }
}

