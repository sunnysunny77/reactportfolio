
import { useRef } from 'react';
import PageScroll from '../js/auto.js';

const Home = () => {

  const ref = useRef(null);

  return (
    <>
      <section id="home">
        <h2>Home</h2>
        <div className="template-img-cont">
          <div
            role="img"
            aria-label="house icon"
            id="home-template-img"
            className="template-img ani3">
          </div>
        </div>
        <div className="template-p-cont">
          <PageScroll>
            <div ref={ref} className="template-p ani2">
              <p>
                <br />
                <br />
                Objective outcomes.
                <br />
                <i className="fas fa-bullseye"></i>
                <br />
                <br />
                <br />
                &bull; Secure &amp; Bug Free
                <br />
                <i className="fas fa-lock"></i> &nbsp; <i className="fas fa-bug"></i>
                <br />
                <br />
                &bull; Semantic &amp; Recyclable &amp; Responsive
                <br />
                <i className="fas fa-tasks"></i> &nbsp; <i className="fas fa-recycle"></i> &nbsp; <i className="fas fa-compress-alt"></i>
                <br />
                <br />
                &bull; Balanced Composition
                <br />
                <i className="fas fa-divide"></i>
                <br />
                <br />
                &bull; Try get it right... Try try again
                <br />
                <i className="fas fa-check-circle"></i>
                <br />
                <br />
                <br />
                Sports
                <br />
                <i className="fas fa-sun"></i>
                <br />
                <br />
                <br />
                &bull; Sailing Windsurfing Swimming Motorsport Fishing
                <br />
                <br />
                <br />
                Hobbies
                <br />
                <i className="fas fa-dice-six"></i>
                <br />
                <br />
                <br />
                &bull; Music Reading Games Pets Camping
                <br />
                Fitness Socializing Study
                <br />
                <br />
                <br />
                Certifications
                <br />
                <i className="fas fa-star"></i>
                <br />
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
                Experience
                <br />
                <i className="fas fa-mountain"></i>
                <br />
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
              </p>
            </div>
          </PageScroll>
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

export default Home;
