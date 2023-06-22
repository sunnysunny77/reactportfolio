const sliderCount = document.querySelectorAll(".slider-count");
const inner = document.querySelectorAll(".inner");
const image1 = document.querySelectorAll(".image-1");
const image2 = document.querySelectorAll(".image-2");
const imageFillLeft = document.querySelectorAll(".image-fill-left");
const imageFillRight = document.querySelectorAll(".image-fill-right");
const openRight = document.querySelectorAll(".open-right");
const openLeft = document.querySelectorAll(".open-left");
const percentage = document.querySelectorAll(".percentage-change");

let counter = [];
let width = [];

function percentageCalc(counter, staticCount) {
  return (counter + 1) / staticCount.length * 100 / 1;
}

function progress(i, percent) {

  const frame = () => {

    if (Math.round(width[i]) === Math.round(percent)) {
      return  clearInterval(id);
    }

    width[i] = percent > width[i] ? width[i] + 1 : width[i] - 1;

    percentage[i].style.width = `${width[i]  }%`;
  };

  const id = setInterval(frame, 20);
}

const iteration = (i, arraySrc, arrayHref ,arrayText, staticCount) => {

  inner[i].classList.add("opacity");
  openRight[i].disabled = true;
  openLeft[i].disabled = true;
  progress(i, percentageCalc(counter[i], staticCount));


  setTimeout(() => {

    imageFillLeft[i].classList.remove("left");
    imageFillRight[i].classList.remove("right");

    setTimeout(() => {

      image1[i].classList.remove("opacity");
      image2[i].classList.remove("opacity");
      inner[i].classList.remove("opacity");
      openRight[i].disabled = false;
      openLeft[i].disabled = false;
    }, 750);

    if (counter[i] + 1 === staticCount.length) {

      image1[i].style.backgroundImage = `url(${  arraySrc[counter[i]]  }`;
      image2[i].style.backgroundImage = `url(${  arraySrc[0]  }`;

      image1[i].href = arrayHref[counter[i]];
      image2[i].href = arrayHref[0];

      imageFillLeft[i].style.backgroundImage = `url(${  arraySrc[0]  }`;
      imageFillLeft[i].href = arrayHref[0];
      imageFillRight[i].style.backgroundImage = `url(${  arraySrc[counter[i]]  }`;
      imageFillRight[i].href = arrayHref[counter[i]];
      inner[i].innerHTML = arrayText[counter[i]];

      return;
    }

    if (counter[i] + 2 === staticCount.length) {

      image1[i].style.backgroundImage = `url(${  arraySrc[counter[i]]  }`;
      image2[i].style.backgroundImage = `url(${  arraySrc[counter[i] + 1]  }`;

      image1[i].href = arrayHref[counter[i]];
      image2[i].href = arrayHref[counter[i] + 1];

      imageFillLeft[i].style.backgroundImage = `url(${  arraySrc[counter[i] + 1]  }`;
      imageFillLeft[i].href = arrayHref[counter[i] + 1];
      imageFillRight[i].style.backgroundImage = `url(${  arraySrc[counter[i]]  }`;
      imageFillRight[i].href = arrayHref[counter[i]];
      inner[i].innerHTML = arrayText[counter[i]];

      return;
    }

    image1[i].style.backgroundImage = `url(${  arraySrc[counter[i]]  }`;
    image2[i].style.backgroundImage = `url(${  arraySrc[counter[i] + 1]  }`;

    image1[i].href = arrayHref[counter[i]];
    image2[i].href = arrayHref[counter[i] + 1];

    imageFillLeft[i].style.backgroundImage = `url(${  arraySrc[counter[i] + 1]  }`;
    imageFillLeft[i].href = arrayHref[counter[i] + 1];
    imageFillRight[i].style.backgroundImage = `url(${  arraySrc[counter[i]]  }`;
    imageFillRight[i].href = arrayHref[counter[i]];
    inner[i].innerHTML = arrayText[counter[i]];
  }, 750);
};

for (const [i, item] of [...sliderCount].entries()) {

  let arraySrc = [];
  let arrayHref = [];
  let arrayText = [];

  const staticCount = item.querySelectorAll(".static-count");

  for (const item of staticCount) {
    arraySrc.push(item.children[0].src);
    arrayHref.push(item.children[1].children[0].href);
    arrayText.push(item.children[1].innerHTML);
  }

  eventListner(openLeft[i], "click", function(event) {

    event.preventDefault();
    counter[i]--;

    if (counter[i] === - 1) {counter[i] = staticCount.length - 1;}

    iteration(i, arraySrc, arrayHref ,arrayText, staticCount);

    image1[i].classList.add("opacity");
    imageFillRight[i].classList.add("right");
  }, null);

  eventListner(openRight[i], "click", function(event) {

    event.preventDefault();
    counter[i]++;

    if (counter[i] === staticCount.length) {counter[i] = 0;}

    iteration(i, arraySrc, arrayHref ,arrayText, staticCount, width[i]);

    image2[i].classList.add("opacity");
    imageFillLeft[i].classList.add("left");
  }, null);

  image1[i].style.backgroundImage = `url(${  arraySrc[0]  }`;
  image2[i].style.backgroundImage = `url(${  arraySrc[1]  }`;

  image1[i].href = arrayHref[0];
  image2[i].href = arrayHref[1];

  imageFillLeft[i].style.backgroundImage = `url(${  arraySrc[1]  }`;
  imageFillLeft[i].href = arrayHref[1];
  imageFillRight[i].style.backgroundImage = `url(${  arraySrc[0]  }`;
  imageFillRight[i].href = arrayHref[0];
  inner[i].innerHTML = arrayText[0];

  width.push(percentageCalc(counter, staticCount));
  counter.push(0);

  percentage[i].style.width = `${width[i]  }%`;
}
