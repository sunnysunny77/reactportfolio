let pictureID = [];

let img = document.querySelectorAll(".sitesImg");
for (let i = 1; i <= img.length; i++) {
    let id = "s5" + i;
    pictureID.push(id)
    let url = window.getComputedStyle(document.getElementById(id)).getPropertyValue("background-image");
    let start = url.indexOf("images");
    let end = url.indexOf("'");
    preloadImage(url.slice(start,end - 1));
}

function close(isnt) {
    for (let x = 1; x < pictureID.length; x++) {
        const obj = document.getElementById(pictureID[x]);
        obj.style.display = "none";
    }
    document.getElementById(pictureID[0]).style.display = "block";
    isnt.scroll({ y: 0 });
}

function pictureDisplay(item) {
    for (let x = 0; x < pictureID.length; x++) {
        const obj = document.getElementById(pictureID[x]);
        if (obj.id !== item) {
            obj.style.display = "none";
        } else {
            if (window.getComputedStyle(obj).getPropertyValue("display") === "none") {
                obj.style.display = "block";
                if (x !== 0) {
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
        }
    }
}

function range(event) {

    let ranges = [];

    let preview = document.querySelectorAll(".scrollPreview");
    const previewLength = preview.length;

    for (let i = 0; i < previewLength - 1; i++) {
        ranges.push(preview[i].offsetTop)
    }
    ranges.push(preview[previewLength - 1].offsetHeight);

    const rangesLenght = ranges.length;
    const pictureLenght = pictureID.length;

    let scroll_pos = event.scrollTop;

    const a = event.scrollHeight;
    const b = document.getElementById("ob0").clientHeight;
    const botCalc = a - b - ranges[rangesLenght - 1];

    if (scroll_pos < ranges[0]) {
        pictureDisplay(pictureID[0]);
    }
    for (let i = 0; i < rangesLenght - 2; i++) {
        let y = i + 1;
        if (scroll_pos > ranges[i] && scroll_pos < ranges[y]) {
            pictureDisplay(pictureID[y]);
        }
    }
    if (scroll_pos > ranges[rangesLenght - 2] && scroll_pos < botCalc) {
        pictureDisplay(pictureID[pictureLenght - 2]);
    }
    if (scroll_pos > botCalc) {
        pictureDisplay(pictureID[pictureLenght - 1]);
    }
}

