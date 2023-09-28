import { useEffect} from 'react';
import { vivus } from '../js/template.js';
import { init } from '../js/init.js';
import { pageScroll } from '../js/auto.js';

function Skills() {

  useEffect(() => {

    init();
    pageScroll(document.querySelector("#auto-skills"));
    vivus();
  }, []);
  return (
    <>
      <section >
        <h2>Skills</h2>

        <div className="template-img-cont vis0">
          <div role="img" aria-label="light bulb icon" id="skills-template-img" className="template-img"></div>
        </div>

        <div className="template-p-cont">
          <div id="auto-skills" className="template-p">
            <p className="vis0 cont">

              &bull; HTML - JavaScript - CSS - SASS
              <br />
              <span
                id="skills-sass"
                className="img"
                role="img"
                aria-label="SASS"></span>
              <span
                id="skills-htmlcssjs"
                className="img last-img"
                role="img"
                aria-label="HTML JS CSS"></span>

              <br />
              &bull; Bootstrap - Foundation
              <br />
              <span
                id="skills-boot"
                className="img"
                role="img"
                aria-label="Bootstrap"></span>
              <span
                id="skills-foundation"
                className="img last-img"
                role="img"
                aria-label="Foundation"></span>
              <br />
              &bull; Create React App - Angular
              <br />
              <span
                id="skills-react"
                className="img"
                role="img"
                aria-label="Create React App"></span>
              <span
                id="skills-angular"
                className="img last-img"
                role="img"
                aria-label="Angular"></span>
              <br />
              &bull; Ux - Photoshop - Xd
              <br />
              <span
                id="skills-ux"
                className="img"
                role="img"
                aria-label="Ux"></span>
              <span
                id="skills-photoshop"
                className="img"
                role="img"
                aria-label="Photoshop"></span>
              <span
                id="skills-xd"
                className="img  last-img"
                role="img"
                aria-label="Xd"></span>
              <br />
              &bull; OOP - MVC
              <br />
              <span
                id="skills-oop"
                className="img"
                role="img"
                aria-label="OOP"></span>
              <span
                id="skills-mvc"
                className="img last-img"
                role="img"
                aria-label="MVC"></span>
              <br />
              &bull; NodeJs - PHP - XML
              <br />
              <span
                id="skills-nodejs"
                className="img"
                role="img"
                aria-label="NodeJs"></span>
              <span
                id="skills-php"
                className="img"
                role="img"
                aria-label="PHP"></span>
              <span
                id="skills-xml"
                className="img last-img"
                role="img"
                aria-label="xml"></span>
              <br />
              &bull; Apache - Nginx - Ubuntu Linux
              <br />
              <span
                id="skills-apache"
                className="img"
                role="img"
                aria-label="Apache"></span>
              <span
                id="skills-nginx"
                className="img"
                role="img"
                aria-label="Nginx"></span>
              <span
                id="skills-ubuntu"
                className="img last-img"
                role="img"
                aria-label="Ubuntu"></span>
              <br />
              &bull; SilverStripe - Wordpress - Cake PHP
              <br />
              <span
                id="skills-silverstripe"
                className="img"
                role="img"
                aria-label="silverstripe"></span>
              <span
                id="skills-wordpress"
                className="img"
                role="img"
                aria-label="Wordpress"></span>
              <span
                id="skills-cakephp"
                className="img last-img"
                role="img"
                aria-label="Cake PHP"></span>
              <br />
              &bull; Virtual Machine Cloud Hosting
              <br />
              <span
                id="skills-cloud"
                className="img last-img"
                role="img"
                aria-label="Cloud Hosting"></span>

              <br />
              &bull; SQL - MongoDB
              <br />
              <span
                id="skills-sql"
                className="img"
                role="img"
                aria-label="MY SQL"></span>
              <span
                id="skills-mongo"
                className="img last-img"
                role="img"
                aria-label="MongoDB"></span>

              <br />
              &bull; Github
              <br />
              <span
                id="skills-git"
                className="img last-img"
                role="img"
                aria-label="Github">
              </span>
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>

      <div role="img" aria-label="divider" className="template-div-mobile"></div>

      <div role="img" aria-label="divider" className="template-div"></div>

      <div role="img" aria-label="glowing keyboard" id="skills-template-img-0" className="template-img-0 vis0">
        <p>
        
            <a target="git" href="https://github.com/sunnysunny77">
                Git <i className="far fa-heart"></i>
            </a>
      
          <b>GitHub ..</b>
        </p>
      </div>
    </>
  );
}

export default Skills;
