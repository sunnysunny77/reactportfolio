import { eventListner } from '../js/utilities.js';

let width = [];

function percentageCalc(counter, staticCount) {
  return (counter + 1) / staticCount.length * 100 / 1;
}

function progress(i, percent, percentage) {

  const frame = () => {

    if (Math.round(width[i]) === Math.round(percent)) {
      return clearInterval(id);
    }

    width[i] = percent > width[i] ? width[i] + 1 : width[i] - 1;

    percentage[i].style.width = `${width[i]}%`;
  };

  const id = setInterval(frame, 20);
}

const iteration = (i, arraySrc, arrayHref, arrayText, staticCount, inner, image1, image2, imageFillLeft, imageFillRight, openRight, openLeft, percentage, counter) => {

  inner[i].classList.add("opacity");
  openRight[i].disabled = true;
  openLeft[i].disabled = true;
  progress(i, percentageCalc(counter[i], staticCount), percentage);


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

      image1[i].style.backgroundImage = `url(${arraySrc[counter[i]]}`;
      image1[i].href = arrayHref[counter[i]][0];
      image1[i].innerHTML = '<span class="hidden">' + arrayHref[counter[i]][1] + '</span>';
      image2[i].style.backgroundImage = `url(${arraySrc[0]}`;
      image2[i].href = arrayHref[0][0];
      image2[i].innerHTML = '<span class="hidden">' + arrayHref[0][1] + '</span>';
      imageFillLeft[i].style.backgroundImage = `url(${arraySrc[0]}`;
      imageFillLeft[i].href = arrayHref[0][0];
      imageFillLeft[i].innerHTML = '<span class="hidden">' + arrayHref[0][1] + '</span>';
      imageFillRight[i].style.backgroundImage = `url(${arraySrc[counter[i]]}`;
      imageFillRight[i].href = arrayHref[counter[i]][0];
      imageFillRight[i].innerHTML = '<span class="hidden">' + arrayHref[counter[i]][1] + '</span>';
      inner[i].innerHTML = arrayText[counter[i]];

      return;
    }

    if (counter[i] + 2 === staticCount.length) {

      image1[i].style.backgroundImage = `url(${arraySrc[counter[i]]}`;
      image1[i].href = arrayHref[counter[i]][0];
      image1[i].innerHTML = '<span class="hidden">' + arrayHref[counter[i]][1] + '</span>';
      image2[i].style.backgroundImage = `url(${arraySrc[counter[i] + 1]}`;
      image2[i].href = arrayHref[counter[i] + 1][0];
      image2[i].innerHTML = '<span class="hidden">' + arrayHref[counter[i] + 1][1] + '</span>';
      imageFillLeft[i].style.backgroundImage = `url(${arraySrc[counter[i] + 1]}`;
      imageFillLeft[i].href = arrayHref[counter[i] + 1][0];
      imageFillLeft[i].innerHTML = '<span class="hidden">' + arrayHref[counter[i] + 1][1] + '</span>';
      imageFillRight[i].style.backgroundImage = `url(${arraySrc[counter[i]]}`;
      imageFillRight[i].href = arrayHref[counter[i]][0];
      imageFillRight[i].innerHTML = '<span class="hidden">' + arrayHref[counter[i]][1] + '</span>';
      inner[i].innerHTML = arrayText[counter[i]];

      return;
    }

    image1[i].style.backgroundImage = `url(${arraySrc[counter[i]]}`;
    image1[i].href = arrayHref[counter[i]][0];
    image1[i].innerHTML = '<span class="hidden">' + arrayHref[counter[i]][1] + '</span>';
    image2[i].style.backgroundImage = `url(${arraySrc[counter[i] + 1]}`;
    image2[i].href = arrayHref[counter[i] + 1][0];
    image2[i].innerHTML = '<span class="hidden">' + arrayHref[counter[i] + 1][1] + '</span>';
    imageFillLeft[i].href = arrayHref[counter[i] + 1][0];
    imageFillLeft[i].innerHTML = '<span class="hidden">' + arrayHref[counter[i] + 1][1] + '</span>';
    imageFillRight[i].style.backgroundImage = `url(${arraySrc[counter[i]]}`;
    imageFillRight[i].href = arrayHref[counter[i]][0];
    imageFillRight[i].innerHTML = '<span class="hidden">' + arrayHref[counter[i]][1] + '</span>';
    inner[i].innerHTML = arrayText[counter[i]];
  }, 750);
};

export const circleInit = () => {

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

  for (const [i, item] of [...sliderCount].entries()) {

    let arraySrc = [];
    let arrayHref = [];
    let arrayText = [];

    const staticCount = item.querySelectorAll(".static-count");

    for (const item of staticCount) {
      arraySrc.push(item.children[0].src);
      arrayHref.push([item.children[1].children[0].href, item.children[1].children[0].innerHTML]);
      arrayText.push(item.children[1].innerHTML);
    }

    eventListner(openLeft[i], "click", function (event) {

      event.preventDefault();
      counter[i]--;

      if (counter[i] === - 1) { counter[i] = staticCount.length - 1; }

      iteration(i, arraySrc, arrayHref, arrayText, staticCount, inner, image1, image2, imageFillLeft, imageFillRight, openRight, openLeft, percentage, counter);

      image1[i].classList.add("opacity");
      imageFillRight[i].classList.add("right");
    }, null);

    eventListner(openRight[i], "click", function (event) {

      event.preventDefault();
      counter[i]++;

      if (counter[i] === staticCount.length) { counter[i] = 0; }

      iteration(i, arraySrc, arrayHref, arrayText, staticCount, inner, image1, image2, imageFillLeft, imageFillRight, openRight, openLeft, percentage, counter);

      image2[i].classList.add("opacity");
      imageFillLeft[i].classList.add("left");
    }, null);

    image1[i].style.backgroundImage = `url(${arraySrc[0]}`;
    image1[i].href = arrayHref[0][0];
    image1[i].innerHTML = '<span class="hidden">' + arrayHref[0][1] + '</span>';
    image2[i].style.backgroundImage = `url(${arraySrc[1]}`;
    image2[i].href = arrayHref[1][0];
    image2[i].innerHTML = '<span class="hidden">' + arrayHref[1][1] + '</span>';
    imageFillLeft[i].style.backgroundImage = `url(${arraySrc[1]}`;
    imageFillLeft[i].href = arrayHref[1][0];
    imageFillLeft[i].innerHTML = '<span class="hidden">' + arrayHref[1][1] + '</span>';
    imageFillRight[i].style.backgroundImage = `url(${arraySrc[0]}`;
    imageFillRight[i].href = arrayHref[0][0];
    imageFillRight[i].innerHTML = '<span class="hidden">' + arrayHref[0][1] + '</span>';
    inner[i].innerHTML = arrayText[0];

    width.push(percentageCalc(counter, staticCount));
    counter.push(0);

    percentage[i].style.width = `${width[i]}%`;
  }
}
