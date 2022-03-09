function preloadImage(url) {
    var img=new Image();
    img.src=url;
}

function getPosition(element) {
    let yPosition = 0;

    while (element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return yPosition;
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function eventListner(obj, type, callback, opt) {
    if (obj) {
        obj.addEventListener(type, callback, opt);
    }
}