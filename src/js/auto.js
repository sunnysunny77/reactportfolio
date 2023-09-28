const sleep = (milliseconds) => {

    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export const pageScroll = async (start, a, b, c) => {

    let count = start ? 0 : a;
    let bool = start ? null : b;
    let page = start ? start : c;

    const line = page.scrollHeight - page.clientHeight;

    await sleep(45);
    page.scrollTo(0, count);

    if (count === 0) {
        bool = null;
        await sleep(4955);
    }
    if (count === line) {
        bool = false;
        await sleep(4955);
    }
    if (bool === false) {
        count--;
        return pageScroll(false, count, bool, page)
    }
    count++;
    return pageScroll(false, count, bool, page)
}
