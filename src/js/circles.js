import { eventListner } from '../js/utilities.js';

let width;

const percentageCalc = (counter, staticCount) => {
  
  return (counter + 1) / staticCount.length * 100 / 1;
}

const progress = (percent, percentage) => {

  const frame = () => {

    if (Math.round(width) === Math.round(percent)) {
      return clearInterval(id);
    }

    width = percent > width ? width + 1 : width - 1;

    percentage.style.width = `${width}%`;
  };

  const id = setInterval(frame, 20);
}

const iteration = (counter, arraySrc, arrayHref, arrayText, staticCount, inner, image1, image2, imageFillLeft, imageFillRight, openRight, openLeft, percentage) => {

  inner.classList.add("opacity");
  openRight.disabled = true;
  openLeft.disabled = true;
  progress(percentageCalc(counter, staticCount), percentage);

  setTimeout(() => {

    imageFillLeft.classList.remove("leftcompact");
    imageFillRight.classList.remove("rightcompact");

    setTimeout(() => {

      image1.classList.remove("opacity");
      image2.classList.remove("opacity");
      inner.classList.remove("opacity");
      openRight.disabled = false;
      openLeft.disabled = false;
    }, 750);

    if (counter + 1 === staticCount.length) {

      image1.style.backgroundImage = `url(${arraySrc[counter]}`;
      image1.href = arrayHref[counter][0];
      image1.innerHTML = '<span class="hidden">' + arrayHref[counter][1] + '</span>';
      image2.style.backgroundImage = `url(${arraySrc[0]}`;
      image2.href = arrayHref[0][0];
      image2.innerHTML = '<span class="hidden">' + arrayHref[0][1] + '</span>';
      imageFillLeft.style.backgroundImage = `url(${arraySrc[0]}`;
      imageFillLeft.href = arrayHref[0][0];
      imageFillLeft.innerHTML = '<span class="hidden">' + arrayHref[0][1] + '</span>';
      imageFillRight.style.backgroundImage = `url(${arraySrc[counter]}`;
      imageFillRight.href = arrayHref[counter][0];
      imageFillRight.innerHTML = '<span class="hidden">' + arrayHref[counter][1] + '</span>';
      inner.innerHTML = arrayText[counter];

      return;
    }

    if (counter + 2 === staticCount.length) {

      image1.style.backgroundImage = `url(${arraySrc[counter]}`;
      image1.href = arrayHref[counter][0];
      image1.innerHTML = '<span class="hidden">' + arrayHref[counter][1] + '</span>';
      image2.style.backgroundImage = `url(${arraySrc[counter + 1]}`;
      image2.href = arrayHref[counter + 1][0];
      image2.innerHTML = '<span class="hidden">' + arrayHref[counter + 1][1] + '</span>';
      imageFillLeft.style.backgroundImage = `url(${arraySrc[counter + 1]}`;
      imageFillLeft.href = arrayHref[counter + 1][0];
      imageFillLeft.innerHTML = '<span class="hidden">' + arrayHref[counter + 1][1] + '</span>';
      imageFillRight.style.backgroundImage = `url(${arraySrc[counter]}`;
      imageFillRight.href = arrayHref[counter][0];
      imageFillRight.innerHTML = '<span class="hidden">' + arrayHref[counter][1] + '</span>';
      inner.innerHTML = arrayText[counter];

      return;
    }

    image1.style.backgroundImage = `url(${arraySrc[counter]}`;
    image1.href = arrayHref[counter][0];
    image1.innerHTML = '<span class="hidden">' + arrayHref[counter][1] + '</span>';
    image2.style.backgroundImage = `url(${arraySrc[counter + 1]}`;
    image2.href = arrayHref[counter + 1][0];
    image2.innerHTML = '<span class="hidden">' + arrayHref[counter + 1][1] + '</span>';
    imageFillLeft.href = arrayHref[counter + 1][0];
    imageFillLeft.innerHTML = '<span class="hidden">' + arrayHref[counter + 1][1] + '</span>';
    imageFillRight.style.backgroundImage = `url(${arraySrc[counter]}`;
    imageFillRight.href = arrayHref[counter][0];
    imageFillRight.innerHTML = '<span class="hidden">' + arrayHref[counter][1] + '</span>';
    inner.innerHTML = arrayText[counter];
  }, 750);
};

export const circleInit = () => {

  let counter = 0;
  let arraySrc = [];
  let arrayHref = [];
  let arrayText = [];
  const inner = document.querySelector(".inner");
  const image1 = document.querySelector(".image-1");
  const image2 = document.querySelector(".image-2");
  const imageFillLeft = document.querySelector(".image-fill-left");
  const imageFillRight = document.querySelector(".image-fill-right");
  const openRight = document.querySelector(".open-right");
  const openLeft = document.querySelector(".open-left");
  const percentage = document.querySelector(".percentage-change");
  const staticCount = document.querySelectorAll(".static-count");
  width = percentageCalc(counter, staticCount)

  for (const item of staticCount) {

    arraySrc.push(item.children[0].src);
    arrayHref.push([item.children[1].children[0].href, item.children[1].children[0].innerHTML]);
    arrayText.push(item.children[1].innerHTML);
  }

  eventListner(openLeft, "click", (event) => {

    event.preventDefault();
    counter--;

    if (counter === - 1) { counter = staticCount.length - 1; }

    iteration(counter, arraySrc, arrayHref, arrayText, staticCount, inner, image1, image2, imageFillLeft, imageFillRight, openRight, openLeft, percentage);

    image1.classList.add("opacity");
    imageFillRight.classList.add("rightcompact");
  }, null);

  eventListner(openRight, "click", (event) => {

    event.preventDefault();
    counter++;

    if (counter === staticCount.length) { counter = 0; }

    iteration(counter, arraySrc, arrayHref, arrayText, staticCount, inner, image1, image2, imageFillLeft, imageFillRight, openRight, openLeft, percentage);

    image2.classList.add("opacity");
    imageFillLeft.classList.add("leftcompact");
  }, null);

  image1.style.backgroundImage = `url(${arraySrc[0]}`;
  image1.href = arrayHref[0][0];
  image1.innerHTML = '<span class="hidden">' + arrayHref[0][1] + '</span>';
  image2.style.backgroundImage = `url(${arraySrc[1]}`;
  image2.href = arrayHref[1][0];
  image2.innerHTML = '<span class="hidden">' + arrayHref[1][1] + '</span>';
  imageFillLeft.style.backgroundImage = `url(${arraySrc[1]}`;
  imageFillLeft.href = arrayHref[1][0];
  imageFillLeft.innerHTML = '<span class="hidden">' + arrayHref[1][1] + '</span>';
  imageFillRight.style.backgroundImage = `url(${arraySrc[0]}`;
  imageFillRight.href = arrayHref[0][0];
  imageFillRight.innerHTML = '<span class="hidden">' + arrayHref[0][1] + '</span>';
  inner.innerHTML = arrayText[0];
  percentage.style.width = `${width}%`;
}
