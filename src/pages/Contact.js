import { useEffect, useState } from 'react';
import { fromOverlay } from '../js/overlay.js';
import { circleInit } from '../js/circles.js';
import { reply, send } from '../js/forms.js';
import linkedin from '../images/contact/linkedin.png';
import telephone from '../images/contact/telephone.png';
import mail from '../images/contact/mail.png';

const Contact = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validation = (event) => {

    let error;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("message", message);

    const nameObj = event.target.name;
    const phoneObj = event.target.phone;
    const emailObj = event.target.email;
    const messageObj = event.target.children[0].children[1].children[3].children[1];
    const sub = event.target.children[2];

    if (/^[ '.a-z-]{2,40}$/i.test(name)) {

      reply(false, nameObj, null);
    } else {

      reply(true, nameObj, "Enter your name");
      error = true;
    }
    if (/^\+?\d{3,15}$/.test(phone)) {

      reply(false, phoneObj, null);
    } else {

      reply(true, phoneObj, "+###############");
      error = true;
    }
    if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email)) {

      reply(false, emailObj, null);
    } else {

      reply(true, emailObj, "Enter your email");
      error = true;
    }
    if (/[\dA-Za-z]/.test(message)) {

      reply(false, messageObj, null);
    } else {

      reply(true, messageObj, "Enter your message");
      error = true;
    }
    if (error) {

      sub.classList.add("red");
      sub.value = "Validation Error ⇡";
      setTimeout(() => {
        sub.value = "Send";
        sub.classList.remove("red");
      }, 5000);
    } else {

      send(formData, event.target.children[1], sub);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    }
    event.preventDefault();
  }

  useEffect(() => {

    fromOverlay();
    circleInit();
  }, []);
  return (
    <>
      <section >
        <h2 className="full">Contact</h2>
        <div className="template-img-cont">
          <div
            role="img"
            aria-label="phone icon"
            id="contact-template-img"
            className="template-img">
          </div>
        </div>
        <div id="port" className="template-p-cont">
          <div id="overlay" className="template-p">
            <form onSubmit={validation} id="contact-form" className="cont">
              <fieldset>
                <legend>Email Us:</legend>
                <ul>
                  <li>
                    <label htmlFor="name">Names:</label>
                    <input
                      onChange={(e) => { setName(e.target.value) }}
                      value={name}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="&nbsp;First Last"
                    />
                  </li>
                  <li>
                    <label htmlFor="phone">Phone:</label>
                    <input
                      onChange={(e) => { setPhone(e.target.value) }}
                      value={phone}
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="&nbsp;#"
                    />
                  </li>
                  <li>
                    <label htmlFor="email">Email:</label>
                    <input
                      onChange={(e) => { setEmail(e.target.value) }}
                      value={email}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="&nbsp;eg@example.com"
                    />
                  </li>
                  <li>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      onChange={(e) => { setMessage(e.target.value) }}
                      value={message}
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
    </>
  );
}

export default Contact;
