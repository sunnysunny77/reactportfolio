
import Next from "../images/sites/next.png";
import { picture, sitesOverlay } from '../js/overlay.js';
import { useEffect } from 'react';
import global  from "../images/sites/global.png"; 
import furniture from "../images/sites/furniture.jpg";
import fasera from "../images/sites/fasera.jpg";
import access_robotics from "../images/sites/access-robotics.jpg";
import daves_blog from "../images/sites/daves-blog.jpg";
import business from  "../images/sites/business.jpg";
import candid_cleaning from  "../images/sites/candid-cleaning.jpg";
import sticky from "../images/sites/sticky.jpg";
import sliders from "../images/sites/sliders.jpg";
import login from "../images/sites/login.jpg";

const Sites = () => {

  useEffect(() => {

    picture();
    sitesOverlay();
  }, []);
  return (
    <>
      <section id="site">
        <h2>Sites</h2>
        <div id="site-img" className="template-img-cont">
          <div
            role="img"
            aria-label="light bulb icon"
            id="sites-template-img"
            className="template-img scale3">
          </div>
        </div>
        <div className="slider_5-list-container">
          <div className="slider_5-scroll scroll-listener">
            <ul className="slider_5-list fadeInBack">
              <li>
                Scroll preview
                <img alt="scroll down" width="100" height="100" src={Next} />
                <ol>
                  <li className="scroll-preview">
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
                  <li className="scroll-preview">
                    <h3><a target="fasera" href="https://www.fasera.com/">Fasera</a></h3>
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
                  <li className="scroll-preview">
                    <h3><a target="access_robotics" href="https://access.vm1.lateralaspect.com.au/">Access Robotics</a></h3>
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
                  <li className="scroll-preview">
                    <h3><a target="daves_blog" href="https://davesblog.sunnyhome.site/">Daves Blog</a></h3>
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
                  <li className="scroll-preview">
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
                  <li className="scroll-preview">
                    <h3><a target="candid_cleaning" href="https://candidcleaning.sunnyhome.site">Candid Cleaning</a></h3>
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
                  <li className="scroll-preview">
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
                  <li className="scroll-preview">
                    <h3><a target="sliders" href="https://sliders.sunnyhome.site/">Sliders Demo</a></h3>
                    Eight slider demo's
                    <br />
                    <br />
                    <br />
                    HTML5 - SCSS - JavaScript - PHP
                    <br />
                    <br />
                    Bootstrap
                    <br />
                    <br />
                    PWA service worker
                    <br />
                    <br />
                    https://observatory.mozilla.org/ A+
                    <br />
                    <br />
                    SSL A+
                    <br />
                    <br />
                    JavaScript SCSS minifier
                    <br />
                  </li>
                  <li className="scroll-preview">
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
        <div className="slider_5-site-container site-container">
          <div id="site-1" className="slider_5-site site-img d-has-display fadeInBack">
            <img src={global} alt="global"/>
          </div>
          <div id="site-2" className="slider_5-site site-img">
            <a target="furniture" href="https://furniture.sunnyhome.site/">
              furniture.sunnyhome
            </a>
            <img src={furniture} alt="furniture"/>
          </div>
          <div id="site-3" className="slider_5-site site-img">
            <a target="fasera" href="https://www.fasera.com/">
              fasera.com 
            </a>
            <img src={fasera} alt="fasera"/>
          </div>
          <div id="site-4" className="slider_5-site site-img">
            <a target="access_robotics" href="https://access.vm1.lateralaspect.com.au/">
              access robotics
            </a>
            <img src={access_robotics} alt="access_robotics"/>
          </div>
          <div id="site-5" className="slider_5-site site-img">
            <a target="daves_blog" href="https://davesblog.sunnyhome.site/">
              davesblog.sunnyhome
            </a>
            <img src={daves_blog} alt="daves_blog"/>
          </div>
          <div id="site-6" className="slider_5-site site-img">
            <a target="business" href="https://business.sunnyhome.site/">
              business.sunnyhome
            </a>
            <img src={business}  alt="business"/>
          </div>
          <div id="site-7" className="slider_5-site site-img">
            <a target="candid_cleaning" href="https://candidcleaning.sunnyhome.site">
            candidcleaning.sunnyhome
            </a>
            <img src={candid_cleaning} alt="candid_cleaning"/>
          </div>
          <div id="site-8" className="slider_5-site site-img">
            <a target="sticky" href="https://sticky.sunnyhome.site/">
            sticky.sunnyhome 
            </a>
            <img src={sticky} alt="sticky"/>
          </div>
          <div id="site-9" className="slider_5-site site-img">
            <a target="sliders" href="https://sliders.sunnyhome.site/">
              sliders.sunnyhome
            </a>
            <img src={sliders} alt="sliders"/>
          </div>
          <div id="site-10" className="slider_5-site site-img">
            <a target="login" href="https://login.sunnyhome.site/">
              login.sunnyhome
            </a>
            <img src={login} alt="login"/>
          </div>
          <button aria-label="close" className="slider_5-close slider-close">X</button>
        </div>
      </section>
      <div
        role="img"
        aria-label="divider"
        className="template-div">
      </div>
    </>
  );
}

export default Sites;
