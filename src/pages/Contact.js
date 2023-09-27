import React, { useEffect } from 'react';
import { fromOverlay, init, vivus } from '../js/template.js';
import { validation } from '../js/forms.js';
import { circleInit } from '../js/circles.js';
import linkedin from '../images/contact/linkedin.png';
import telephone from '../images/contact/telephone.png';
import mail from '../images/contact/mail.png';

function Contact() {

  useEffect(() => {

    init();
    fromOverlay();
    vivus();
    circleInit()
  });
  return (
    <main>
      <section >
        <h2>Contact</h2>

        <div className="template-img-cont vis0">
          <div
            role="img"
            aria-label="phone icon"
            id="contact-template-img"
            className="template-img"
          ></div>
        </div>

        <div className="template-p-cont">
          <div id="overlay" className="template-p">
            <form onSubmit={validation} id="contact-form" className="vis0 cont">
              <fieldset>
                <legend>Email Us:</legend>

                <ul>
                  <li>
                    <label htmlFor="name">Names:</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="&nbsp;First Last"
                    />
                  </li>
                  <li>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" name="phone" id="phone" placeholder="&nbsp;#" />
                  </li>
                  <li>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="&nbsp;eg@example.com"
                    />
                  </li>
                  <li>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      name="message"
                      id="message"
                      maxLength="1000"
                      rows="3"
                    >
                    </textarea>
                  </li>
                </ul>
              </fieldset>

              <p id="sent"></p>

              <input type="submit" value="Send" id="sub" />

              <br />
            </form>
          </div>
        </div>
      </section>

      <div role="img" aria-label="divider" className="template-div-mobile"></div>

      <div role="img" aria-label="divider" className="template-div"></div>

      <div role="img" aria-label="email notifications" id="contact-template-img-0" className="template-img-0 vis0">
        <div className="circle-progress">
          <div className="slider slider-count">

            <button aria-label="open-left" className="button-next open-left"></button>
            <a href="mailto:shlooby07@gmail.com" rel="noreferrer" target="_blank" className="a image-1"><span className='hidden'>Mail me</span></a>
            <a href="mailto:shlooby07@gmail.com" rel="noreferrer" target="_blank" className="a image-fill-right"><span className='hidden'>Mail me</span></a>
            <div className="inner"></div>
            <a href="tel:0434-984-983" rel="noreferrer" target="_blank" className="a image-2"><span className='hidden'>Phone me</span></a>
            <a href="tel:0434-984-983" rel="noreferrer" target="_blank" className="a image-fill-left"><span className='hidden'>Phone me</span></a>
            <button aria-label="open-right" className="button-next open-right"></button>

            <div className="static-count">
              <img src={mail} alt="mail" />
              <div>
                <a href="mailto:shlooby07@gmail.com">Mail me</a>
              </div>
            </div>
            <div className="static-count">
              <img src={telephone} alt="telephone" />
              <div>
                <a href="tel:0434-984-983">Phone me</a>
              </div>
            </div>
            <div className="static-count">
              <img src={linkedin} alt="LinkedIn" />
              <div>
                <a href="https://www.linkedin.com/in/daniel-costello-579b10259/">LinkedIn</a>
              </div>
            </div>

          </div>
          <div className="percentage"><div className="percentage-change"></div></div>
          <b>Get in touch ..</b>
        </div>
      </div>
    </main>
  );
}

export default Contact;
