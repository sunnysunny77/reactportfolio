let cached = null;

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
