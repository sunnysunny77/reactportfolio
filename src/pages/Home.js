import { picture, sitesOverlay, init, vivus } from '../js/template.js';
import { pageScroll } from '../js/auto.js';
import React, { useEffect } from 'react';
import Next from "../images/home/next.png";

function Home() {

  
  useEffect(() => {

    init();
    pageScroll(document.querySelectorAll(".auto-home")[0]);
    picture();
    sitesOverlay();
    vivus();
  }, []);
  return (
    <>
      <section >
        <h2>Home</h2>

        <div className="template-img-cont vis0">
          <div
            role="img"
            aria-label="house icon"
            id="home-template-img"
            className="template-img"
          ></div>
        </div>

        <div className="template-p-cont">
          <div className="template-p auto-home">
            <p className="vis0 cont">
              As a web designer when writing code
              <br />
              I stick to core objective outcomes.
              <br />
              <i className="fas fa-bullseye"></i>
              <br />
              <br />
              <br />
              <br />
              <br />
              The code requirements are:
              <br />
              <br />
              &bull; Secure &amp; Bug Free
              <br />
              <i className="fas fa-lock"></i> &nbsp; <i className="fas fa-bug"></i>
              <br />
              <br />
              <br />
              &bull; Semantic &amp; Recyclable &amp; Responsive
              <br />
              <i className="fas fa-tasks"></i> &nbsp; <i className="fas fa-recycle"></i> &nbsp; <i className="fas fa-compress-alt"></i>
              <br />
              <br />
              <br />
              &bull; Balanced Composition
              <br />
              <i className="fas fa-divide"></i>
              <br />
              <br />
              <br />
              &bull; Try get it right... Try try again
              <br />
              <i className="fas fa-check-circle"></i>
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>

      <div role="img" aria-label="divider" className="template-div-mobile"></div>

      <div
        role="img"
        aria-label="divider"
        className="template-div"
      ></div>

      <section id="site">
        <h2>Sites</h2>

        <div id="s4" className="vis0">
          <div id="ob0">
            <ul id="ob0ul" className="vis0">
              <li>
                Scroll preview
                <img alt="scroll down" width="100" height="100" src={Next} />
                <ol>
                  <li className="scrollPreview">
                    <h3><a target="furniture" href="https://furniture.sunnyhome.site/">Furniture warehouse </a></h3>
                    Design copy
                    <br />
                    <br />
                    <br />
                    Bootstrap - SCSS - JavaScript
                    <br />
                    <br />
                    Responsive
                    <br />
                  </li>
                  <li className="scrollPreview">
                    <h3><a target="fas" href="https://www.fasera.com/">Fasera</a></h3>
                    Wordpress theme
                    <br />
                    <br />
                    <br />
                    &copy; Lateral Aspect
                    <br />
                    <br />
                    Design copy
                    <br />
                  </li>
                  <li className="scrollPreview">
                    <h3><a target="dave" href="https://davesblog.sunnyhome.site/">Daves Blog</a></h3>
                    Design copy
                    <br />
                    <br />
                    <br />
                    Bootstrap - SCSS - JavaScript
                    <br />
                    <br />
                    MVC - OOP - PHP template
                    <br />
                    <br />
                    SQL -  CMS
                    <br />
                    <br />
                    user:
                    <br />
                    demo
                    <br />
                    <br />
                    pass:
                    <br />
                    demo
                    <br />
                  </li>
                  <li className="scrollPreview">
                    <h3><a target="business" href="https://business.sunnyhome.site/">Business Site</a></h3>
                    Homepage
                    <br />
                    <br />
                    <br />
                    HTML5 - SCSS - JavaScript
                    <br />
                    <br />
                    Flex - Position
                    <br />
                  </li>
                  <li className="scrollPreview">
                    <h3><a target="candid" href="https://candidcleaning.sunnyhome.site">Candid Cleaning</a></h3>
                    MERN stack
                    <br />
                    <br />
                    <br />
                    React/JSX - NodeJS - Mongo
                    <br />
                    <br />
                    SASS
                    <br />
                    <br />
                    Material UI
                    <br />
                    <br />
                    Googleapis OAUTH email
                    <br />
                    <br />
                    Google drive used as CMS
                    <br />
                  </li>
                  <li className="scrollPreview">
                    <h3><a target="sticky" href="https://sticky.sunnyhome.site/">Sticky Weather</a></h3>
                    Weather App
                    <br />
                    <br />
                    <br />
                    HTML5 - CSS3 - JavaScript
                    <br />
                    <br />
                    PHP - XML
                    <br />
                    <br />
                    Position sticky - Flex
                    <br />
                  </li>
                  <li className="scrollPreview">
                    <h3><a target="login" href="https://login.sunnyhome.site/">Login App</a></h3>
                    Caputcha signup
                    <br />
                    <br />
                    <br />
                    React/JSX - PHP - Cookies
                    <br />
                    <br />
                    Bootstrap - SCSS - JavaScript
                    <br />
                    <br />
                    https://observatory.mozilla.org/ A+ CSP
                    <br />
                    <br />
                    PayPal smart button sandbox:
                    <br />
                    <br />
                    email:
                    <br />
                    sb-iyl4x21604127@personal.example.com
                    <br />
                    <br />
                    pass:
                    <br />
                    *]T0%Ae8
                    <br />
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>

        <div id="s5" className="vis0">
          <span id="s51" role="img" className="sitesImg" aria-label="site default"></span>
          <span role="img" className="sitesImg" aria-label="site 1" id="s52" style={{ display: "none" }}>
            <a target="furniture" href="https://furniture.sunnyhome.site/">
              furniture.sunnyhome
            </a>
          </span>
          <span role="img" className="sitesImg" aria-label="site 2" id="s53" style={{ display: "none" }}>
            <a target="fas" href="https://www.fasera.com/">
              Fasera.com
            </a>
          </span>
          <span role="img" className="sitesImg" aria-label="site 3" id="s54" style={{ display: "none" }}>
            <a target="dave" href="https://davesblog.sunnyhome.site/">
              davesblog.sunnyhome
            </a>
          </span>
          <span role="img" className="sitesImg" aria-label="site 4" id="s55" style={{ display: "none" }}>
            <a target="business" href="https://business.sunnyhome.site/">
              business.sunnyhome
            </a>
          </span>
          <span role="img" className="sitesImg" aria-label="site 5" id="s56" style={{ display: "none" }}>
            <a target="candid" href="https://candidcleaning.sunnyhome.site">
              candidcleaning.sunnyhome
            </a>
          </span>
          <span role="img" className="sitesImg" aria-label="site 6" id="s57" style={{ display: "none" }}>
            <a target="sticky" href="https://sticky.sunnyhome.site/">
              sticky.sunnyhome
            </a>
          </span>
          <span role="img" className="sitesImg" aria-label="site 7" id="s58" style={{ display: "none" }}>
            <a target="login" href="https://login.sunnyhome.site/">
              login.sunnyhome
            </a>
          </span>
          <button aria-label="close" id="close">X</button>
        </div>
      </section>
    </>
  );
}

export default Home;
