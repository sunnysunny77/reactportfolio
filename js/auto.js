let count = 0;
let bool = true;

function pageScroll () {

    const page = document.getElementsByClassName("template-p")[0];
    const line = page.scrollHeight - page.clientHeight;
  
    if (count === line) {
        bool = !bool;
    } 
    if (count === 0 && !bool) {
        bool = !bool;
    }
    if (bool) {
        count++;
        page.scrollBy(0,1); 
        return setTimeout(pageScroll,45);    
    }
    count--;
    page.scrollBy(0,-1);
    return setTimeout(pageScroll,45); 
}

window.onload = setTimeout(() => {
    pageScroll()
  }, "3000")
  
