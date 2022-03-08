let cached = null;

function getPosition(element) {
    let yPosition = 0;

    while (element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return yPosition;
}

function cache(event) {
    if (!cached) {
        setTimeout(function () {
            if (event.target.nodeName === "#document") {
                scrollAnimation();
            }
            if (event.target.nodeName === "DIV") {
                range(event.target);
            }
            cached = null;
        }, 300);
    }
    cached = event;
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function eventListner(obj, type, callback, opt) {
    if (obj) {
        obj.addEventListener(type, callback, opt);
    }
}