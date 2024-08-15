import { useRef } from 'react';
import PageScroll from '../js/auto.js';
import { click } from '../js/animation.js';

const Skills = () => {

  let ref = useRef(null);

  return (
    <>
      <section>
        <h2 className="heading">Skills</h2>
        <div className="template-img-cont">
          <div
            role="img"
            aria-label="info icon"
            id="skills-template-img"
            className="template-img scale3">
          </div>
        </div>
        <div className="template-p-cont">
          <PageScroll>
            <div ref={ref} className="template-p fadeInBack">
              <p>
                &bull; HTML - JavaScript - CSS - SASS
                <br />
                <span
                  id="skills-sass"
                  className="img"
                  role="img"
                  aria-label="SASS">
                </span>
                <span
                  id="skills-htmlcssjs"
                  className="img"
                  role="img"
                  aria-label="HTML JS CSS">
                </span>
                <br />
                &bull; Bootstrap - Foundation
                <br />
                <span
                  id="skills-boot"
                  className="img"
                  role="img"
                  aria-label="Bootstrap">
                </span>
                <span
                  id="skills-foundation"
                  className="img"
                  role="img"
                  aria-label="Foundation">
                </span>
                <br />
                &bull; Create React App - Angular
                <br />
                <span
                  id="skills-react"
                  className="img"
                  role="img"
                  aria-label="Create React App">
                </span>
                <span
                  id="skills-angular"
                  className="img"
                  role="img"
                  aria-label="Angular">
                </span>
                <br />
                &bull; Ux - Photoshop - Xd
                <br />
                <span
                  id="skills-ux"
                  className="img"
                  role="img"
                  aria-label="Ux">
                </span>
                <span
                  id="skills-photoshop"
                  className="img"
                  role="img"
                  aria-label="Photoshop">
                </span>
                <span
                  id="skills-xd"
                  className="img "
                  role="img"
                  aria-label="Xd">
                </span>
                <br />
                &bull; OOP - MVC
                <br />
                <span
                  id="skills-oop"
                  className="img"
                  role="img"
                  aria-label="OOP">
                </span>
                <span
                  id="skills-mvc"
                  className="img"
                  role="img"
                  aria-label="MVC">
                </span>
                <br />
                &bull; NodeJs - PHP - XML
                <br />
                <span
                  id="skills-nodejs"
                  className="img"
                  role="img"
                  aria-label="NodeJs">
                </span>
                <span
                  id="skills-php"
                  className="img"
                  role="img"
                  aria-label="PHP">
                </span>
                <span
                  id="skills-xml"
                  className="img"
                  role="img"
                  aria-label="xml">
                </span>
                <br />
                &bull; Apache - Nginx - Ubuntu Linux
                <br />
                <span
                  id="skills-apache"
                  className="img"
                  role="img"
                  aria-label="Apache">
                </span>
                <span
                  id="skills-nginx"
                  className="img"
                  role="img"
                  aria-label="Nginx">
                </span>
                <span
                  id="skills-ubuntu"
                  className="img"
                  role="img"
                  aria-label="Ubuntu">
                </span>
                <br />
                &bull; SilverStripe - Wordpress - CakePHP
                <br />
                <span
                  id="skills-silverstripe"
                  className="img"
                  role="img"
                  aria-label="silverstripe">
                </span>
                <span
                  id="skills-wordpress"
                  className="img"
                  role="img"
                  aria-label="Wordpress">
                </span>
                <span
                  id="skills-cakephp"
                  className="img"
                  role="img"
                  aria-label="Cake PHP">
                </span>
                <br />
                &bull; Virtual Machine Cloud Hosting
                <br />
                <span
                  id="skills-cloud"
                  className="img"
                  role="img"
                  aria-label="Cloud Hosting">
                </span>
                <br />
                &bull; SQL - MongoDB
                <br />
                <span
                  id="skills-sql"
                  className="img"
                  role="img"
                  aria-label="MY SQL">
                </span>
                <span
                  id="skills-mongo"
                  className="img"
                  role="img"
                  aria-label="MongoDB">
                </span>
                <br />
                &bull; Github
                <br />
                <span
                  id="skills-git"
                  className="img"
                  role="img"
                  aria-label="Github">
                </span>
              </p>
            </div>
          </PageScroll>
        </div>
      </section>
      <div className="template-border-img">
        <div className="template-img">
          <div role="img" aria-label="glowing keyboard" id="skills-template-img-overlay" className="template-img-overlay">
            <p className="template-shrink">
              <a target="git" href="https://github.com/sunnysunny77">
              github.com <i className="far fa-heart"></i>
              </a>
              <a target="git" href="https://github.com/sunnysunny77/template">
              Ceckout my Rollup theme
              </a>
              <a target="git" href="https://github.com/sunnysunny77/bootstrapwordpresstemplate">
              Also Rollup for Wordpress
              </a>
              <a target="git" href="https://bsv3.sunnyhome.site/">
              Demo
              </a>
              <a target="git" href="https://github.com/sunnysunny77/wptheme">
              Theme link
              </a>
              <button className='template-b' onClick={click}>View code ..</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
