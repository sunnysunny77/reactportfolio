export const getPosition = (element) => {
  let yPosition = 0;
  while (element) {
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }
  return yPosition;
}

export const eventListner = (obj, type, callback, opt) => {
  if (obj) {
    obj.addEventListener(type, callback, opt);
  }
}
