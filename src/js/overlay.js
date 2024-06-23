import OverlayScrollbars from "overlayscrollbars";
import { eventListner } from '../js/utilities.js';

let picture_id = [];

export const picture = () => {

    const site_img = document.querySelectorAll(".site-img");
    for (let index = 1; index <= site_img.length; index++) {
        picture_id.push(`site-${index}`);
      }
    
}

const picture_display = (item) => {
    for (const index of picture_id) {
        const obj = document.querySelector(`#${index}`);
        const bool = obj.id === item;
        const contains = obj.classList.contains("d-has-display");
        if (bool && !contains) {
          obj.classList.add("d-has-display");
        } else if (!bool && contains) {
          obj.classList.remove("d-has-display");
        }
      }
  };

export const fromOverlay = (event) => {

    OverlayScrollbars(document.querySelector("#overlay"), {
        className: "os-theme-dark os-theme-dark-edgy"
    });

    OverlayScrollbars(document.querySelector("#message"), {
        className: "os-theme-dark os-theme-dark-edgy"
    });
}

export const sitesOverlay = (event) => {

    let cached = null;
    let instance = OverlayScrollbars(document.querySelector(".scroll-listener"), {
        className: "os-theme-dark os-theme-dark-edgy",
        callbacks: {
            onScroll: (event) => {

                if (!cached) {
                    setTimeout(() => {
                     
                        const scroll_preview = document.querySelectorAll(".scroll-preview");
                        const ranges = [...scroll_preview].map((item) => item.offsetTop);
                        const scroll_pos = event.target.scrollTop;

                        if (scroll_pos < ranges[0]) {
                          picture_display(picture_id[0]);
                        }
                        for (const [i, index] of ranges.entries()) {
                          if (
                            i !== ranges.length &&
                            scroll_pos > index &&
                            scroll_pos < ranges[i + 1]
                          ) {
                            picture_display(picture_id[i + 1]);
                          }
                        }
                        if (scroll_pos > ranges.at(-1)) {
                          picture_display(picture_id.at(-1));
                        }
                        
                        cached = null;
                    }, 300);
                }
                cached = true;
            },
            onInitialized: eventListner(document.querySelector(".slider-close"), "click", () => {
                instance.scroll({ y: "0%" }, 2500);
            }, false)
        }
    });
}
