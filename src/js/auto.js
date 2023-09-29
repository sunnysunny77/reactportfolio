const sleep = (milliseconds) => {

    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export const pageScroll = async (obj, x, y) => {

    let bool = y ?? null;
    let count = x ?? 0;
    await sleep(45);
    obj.scrollTo(0, count);

    if (count === 0 || count === obj.scrollHeight - obj.clientHeight) {
        bool = !bool;
        await sleep(4955);
    }
    if (bool === false) {
        count--;
        return pageScroll(obj, count, bool)
    }
    count++;
    return pageScroll(obj, count, bool)
}
