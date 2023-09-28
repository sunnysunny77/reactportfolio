import { useEffect } from 'react';
import { vivus } from '../js/template.js';
import { init } from '../js/init.js';
import { pageScroll } from '../js/auto.js';

function About() {

  useEffect(() => {

    init();
    pageScroll(document.querySelector("#auto-about"));
    vivus();
  }, []);
  return (
    <>
      <section>
        <h2>About</h2>

        <div className="template-img-cont vis0">
          <div role="img" aria-label="information icon" id="about-template-img" className="template-img"></div>
        </div>

        <div className="template-p-cont">
          <div id="auto-about" className="template-p">
            <p className="vis0 cont">
              Sports
              <br />
              <i className="fas fa-sun"></i>
              <br />
              <br />
              &bull; Sailing Windsurfing Swimming Motorsport Fishing
              <br />
              <br />
              <br />
              <br />
              Hobbies
              <br />
              <i className="fas fa-dice-six"></i>
              <br />
              <br />
              &bull; Music Reading Games Pets Camping
              <br />
              Fitness Socializing Study
              <br />
              <br />
              <br />
              <br />
              Certifications
              <br />
              <i className="fas fa-star"></i>
              <br />
              <br />
              &bull; Certificate
              <br />
              Technical University of Munich
              <br />
              Make Your Own App 2020
              <br />
              <br />
              &bull; Certificate 4
              <br />
              ICT40315 Web Based Technologies
              <br />
              2021
              <br />
              <br />
              &bull; Diploma
              <br />
              ICT50220-AC26 Diploma of Information Technology (Front End Web Development)
              <br />
              2022
              <br />
              <br />
              <br />
              <br />
              Experience
              <br />
              <i className="fas fa-mountain"></i>
              <br />
              <br />
              &bull; Currently working as
              <br />
              an overflow front end developer.
              <br />
              Developing WordPress themes
              <br />
              and solutions.
              <br />
              <br />
              &bull; Eight years in an
              <br />
              Iron Ore Technician and
              <br />
              Storage role. Performing
              <br />
              sample prep, driving
              <br />
              forklifts and C class
              <br />
              vehicles and managing stores.
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>

      <div role="img" aria-label="divider" className="template-div-mobile"></div>

      <div role="img" aria-label="divider" className="template-div"></div>

      <div role="img" aria-label="coffe mug" id="about-template-img-0" className="template-img-0 vis0">
        <p>
          <span>
            Must have a coffe in the morning
          </span>
          <b>Coffe ..</b>
        </p>
      </div>
    </>
  );
}

export default About;
