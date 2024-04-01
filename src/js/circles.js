import { eventListner } from '../js/utilities.js';

export const circleInit = () => {

  const inner = document.querySelector(".inner");
  const image1 = document.querySelector(".image-1");
  const image2 = document.querySelector(".image-2");
  const imageFillLeft = document.querySelector(".image-fill-left");
  const imageFillRight = document.querySelector(".image-fill-right");
  const openRight = document.querySelector(".open-right");
  const openLeft = document.querySelector(".open-left");
  const percentage = document.querySelector(".percentage-change");
  const staticCount = document.querySelectorAll(".static-count");
  let counter = 0;
  let arraySrc = [];
  let arrayHref = [];
  let arrayText = [];
  let width;
  let percent;
  let intervalId;

  for (const item of staticCount) {

    arraySrc.push(item.children[0].src);
    arrayHref.push([item.children[1].children[0].href, item.children[1].children[0].innerHTML]);
    arrayText.push(item.children[1].innerHTML);
  }

  const percentClac = (counter) => {

    percent = Math.floor((counter + 1) / staticCount.length * 100 / 1);
  }

  percentClac(counter);

  const interval = () => {

    width = percent > width ? width + 1 : width - 1;
    percentage.style.width = `${width}%`;

    if (percent === width) {

      clearInterval(intervalId);
    } 
  }
  
  const iterationEnd = () => {
  
    openRight.disabled = false;
    openLeft.disabled = false;
  };
  
  const iterationStart = ()=> {
  
    image1.classList.remove("opacity");
    image2.classList.remove("opacity");
    inner.classList.remove("opacity");
    imageFillLeft.classList.remove("leftcompact");
    imageFillRight.classList.remove("rightcompact");
  
    if (counter + 1 === staticCount.length) {
  
      image1.style.backgroundImage = `url(${arraySrc[counter]}`;
      image2.style.backgroundImage = `url(${arraySrc[0]}`;
      imageFillLeft.style.backgroundImage = `url(${arraySrc[0]}`;
      imageFillRight.style.backgroundImage = `url(${arraySrc[counter]}`;
      image1.href = arrayHref[counter][0];
      image2.href = arrayHref[0][0];
      imageFillLeft.href = arrayHref[0][0];
      imageFillRight.href = arrayHref[counter][0];
      image1.innerHTML = '<span class="hidden">' + arrayHref[counter][1] + '</span>';
      image2.innerHTML = '<span class="hidden">' + arrayHref[0][1] + '</span>';
      imageFillLeft.innerHTML = '<span class="hidden">' + arrayHref[0][1] + '</span>';
      imageFillRight.innerHTML = '<span class="hidden">' + arrayHref[counter][1] + '</span>';
      inner.innerHTML = arrayText[counter];
  
      return;
    }
  
    if (counter + 2 === staticCount.length) {
  
      image1.style.backgroundImage = `url(${arraySrc[counter]}`;
      image2.style.backgroundImage = `url(${arraySrc[counter + 1]}`;
      imageFillLeft.style.backgroundImage = `url(${arraySrc[counter + 1]}`;
      imageFillRight.style.backgroundImage = `url(${arraySrc[counter]}`;
      image1.href = arrayHref[counter][0];
      image2.href = arrayHref[counter + 1][0];
      imageFillLeft.href = arrayHref[counter + 1][0];
      imageFillRight.href = arrayHref[counter][0];
      image1.innerHTML = '<span class="hidden">' + arrayHref[counter][1] + '</span>';
      image2.innerHTML = '<span class="hidden">' + arrayHref[counter + 1][1] + '</span>';
      imageFillLeft.innerHTML = '<span class="hidden">' + arrayHref[counter + 1][1] + '</span>';
      imageFillRight.innerHTML = '<span class="hidden">' + arrayHref[counter][1] + '</span>';
      inner.innerHTML = arrayText[counter];
  
      return;
    }
  
    image1.style.backgroundImage = `url(${arraySrc[counter]}`;
    image2.style.backgroundImage = `url(${arraySrc[counter + 1]}`;
    imageFillLeft.style.backgroundImage = `url(${arraySrc[counter + 1]}`;
    imageFillRight.style.backgroundImage = `url(${arraySrc[counter]}`;
    image1.href = arrayHref[counter][0];
    image2.href = arrayHref[counter + 1][0];
    imageFillLeft.href = arrayHref[counter + 1][0];
    imageFillRight.href = arrayHref[counter][0];
    image1.innerHTML = '<span class="hidden">' + arrayHref[counter][1] + '</span>';
    image2.innerHTML = '<span class="hidden">' + arrayHref[counter + 1][1] + '</span>';
    imageFillLeft.innerHTML = '<span class="hidden">' + arrayHref[counter + 1][1] + '</span>';
    imageFillRight.innerHTML = '<span class="hidden">' + arrayHref[counter][1] + '</span>';
    inner.innerHTML = arrayText[counter];
  };

  eventListner(openLeft, "click", (event) => {

    event.preventDefault();
    counter--;
    if (counter === - 1) { counter = staticCount.length - 1; };
    percentClac(counter);
    openRight.disabled = true;
    openLeft.disabled = true;
    inner.classList.add("opacity");
    image1.classList.add("opacity");
    imageFillRight.classList.add("rightcompact");
    setTimeout(iterationStart, 750,);
    setTimeout(iterationEnd, 1500);
    intervalId = setInterval(interval,20);
  }, null);

  eventListner(openRight, "click", (event) => {

    event.preventDefault();
    counter++;
    if (counter === staticCount.length) { counter = 0; };
    percentClac(counter);
    openRight.disabled = true;
    openLeft.disabled = true;
    inner.classList.add("opacity");
    image2.classList.add("opacity");
    imageFillLeft.classList.add("leftcompact");
    setTimeout(iterationStart, 750);
    setTimeout(iterationEnd, 1500);
    intervalId = setInterval(interval,20);
  }, null);

  image1.style.backgroundImage = `url(${arraySrc[0]}`;
  image2.style.backgroundImage = `url(${arraySrc[1]}`;
  imageFillLeft.style.backgroundImage = `url(${arraySrc[1]}`;
  imageFillRight.style.backgroundImage = `url(${arraySrc[0]}`;
  image1.href = arrayHref[0][0];
  image2.href = arrayHref[1][0];
  imageFillLeft.href = arrayHref[1][0];
  imageFillRight.href = arrayHref[0][0];
  image1.innerHTML = '<span class="hidden">' + arrayHref[0][1] + '</span>';
  image2.innerHTML = '<span class="hidden">' + arrayHref[1][1] + '</span>';
  imageFillLeft.innerHTML = '<span class="hidden">' + arrayHref[1][1] + '</span>';
  imageFillRight.innerHTML = '<span class="hidden">' + arrayHref[0][1] + '</span>';
  inner.innerHTML = arrayText[0];
  width = percent;
  percentage.style.width = `${width}%`;
}
