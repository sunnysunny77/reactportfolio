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
    const globe = document.getElementById(pictureID[0]);
    globe.style.display = "block";
    globe.classList.add("ani0");
    setTimeout(function () {
        globe.classList.remove("ani0");
    }, 1500);
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
  
    let preview = document.querySelectorAll(".scrollPreview");
    let ranges = [...preview].map(item => item.offsetTop);
  
    const rangesLenght = ranges.length;
    let scroll_pos = event.scrollTop;

    if (scroll_pos < ranges[0]) {
        pictureDisplay(pictureID[0]);
    }
    for (let i = 0; i < rangesLenght - 1; i++) {
        let y = i + 1;
        if (scroll_pos > ranges[i] && scroll_pos < ranges[y]) {
            pictureDisplay(pictureID[y]);
        }
    }
    if (scroll_pos > ranges[rangesLenght - 1]) {
        pictureDisplay(pictureID[pictureID.length -1]);
    }
}

