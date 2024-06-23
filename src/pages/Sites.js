
import Next from "../images/home/next.png";
import { picture, sitesOverlay } from '../js/overlay.js';
import { useEffect } from 'react';
import global  from "../images/sites/global.png"; 
import furniture from "../images/sites/furniture.jpg";
import fas from "../images/sites/fas.jpg";
import access from "../images/sites/access.jpg";
import dave from "../images/sites/dave.jpg";
import bus from  "../images/sites/bus.jpg";
import candid from  "../images/sites/candid.jpg";
import stick from "../images/sites/stick.jpg";
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
            <ul className="slider_5-list">
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
                  <li className="scroll-preview">
                    <h3><a target="access" href="https://access.vm1.lateralaspect.com.au/">Access Robotics</a></h3>
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
                    Five slider demo's
                    <br />
                    <br />
                    <br />
                    HTML5 - SCSS - JavaScript - PHP
                    <br />
                    <br />
                    Bootstrap 
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
        <div className="slider_5-site-container site-container d-flex align-items-start">
          <div id="site-1" className="slider_5-site site-img d-has-display">
            <img src={ global } alt="Global"/>
          </div>
          <div id="site-2" className="slider_5-site site-img">
            <img src={ furniture } alt="Furniture"/>
            <a target="Furniture" href="https://furniture.sunnyhome.site/">
              furniture.sunnyhome
            </a>
          </div>
          <div id="site-3" className="slider_5-site site-img">
            <img src={ fas } alt="Fasera"/>
            <a target="Fasera" href="https://www.fasera.com/">
              fasera.com 
            </a>
          </div>
          <div id="site-4" className="slider_5-site site-img">
            <img src={ access } alt="Access-Robotics"/>
            <a target="Access-Robotics" href="https://access.vm1.lateralaspect.com.au/">
              access robotics
            </a>
          </div>
          <div id="site-5" className="slider_5-site site-img">
            <img src={ dave } alt="Blog"/>
            <a target="Blog" href="https://davesblog.sunnyhome.site/">
              davesblog.sunnyhome
            </a>
          </div>
          <div id="site-6" className="slider_5-site site-img">
            <img src="../images/sites/bus.jpg" alt="Business"/>
            <a target={ bus } href="https://business.sunnyhome.site/">
              business.sunnyhome
            </a>
          </div>
          <div id="site-7" className="slider_5-site site-img">
            <img src={ candid } alt="Candid"/>
            <a target="Candid" href="https://candidcleaning.sunnyhome.site">
            candidcleaning.sunnyhome
            </a>
          </div>
          <div id="site-8" className="slider_5-site site-img">
            <img src={ stick } alt="Sticky"/>
            <a target="Sticky" href="https://sticky.sunnyhome.site/">
            sticky.sunnyhome 
            </a>
          </div>
          <div id="site-9" className="slider_5-site site-img">
            <img src={ sliders } alt="Sliders"/>
            <a target="Sliders" href="https://sliders.sunnyhome.site/">
              sliders.sunnyhome
            </a>
          </div>
          <div id="site-10" className="slider_5-site site-img">
            <img src={ login } alt="Login"/>
            <a target="Login" href="https://login.sunnyhome.site/">
              login.sunnyhome
            </a>
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
