const tempImg0 = document.querySelector(".template-img-0");

function handleTouch() {

    tempImg0.focus();
}

function handleMove() {

    document.focus();
}

eventListner(tempImg0, "touchstart", handleTouch, null);

document.addEventListener("touchmove", handleMove);