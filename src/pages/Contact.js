import { useEffect, useState } from 'react';
import { fromOverlay } from '../js/overlay.js';
import { circleInit } from '../js/circles.js';
import { click } from '../js/animation.js';
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
    const messageObj = document.querySelector(".os-host-textarea");
    const sub = event.target.children[7];

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
      sub.value = "Validation Error";
      setTimeout(() => {
        sub.value = "Send";
        sub.classList.remove("red");
      }, 5000);
    } else {

      send(formData, event.target.children[6], sub);
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
      <section>
        <h2 className="heading">Contact</h2>
        <div className="template-img-cont-form">
          <div
            role="img"
            aria-label="phone icon"
            id="contact-template-img"
            className="scale3">
          </div>
        </div>
        <div className="template-p-form">
          <form onSubmit={validation} id="contact-form"  className="fadeInBack">
            <h3>Email Us:</h3>
            <label htmlFor="name">Names:
              <input
                onChange={(e) => { setName(e.target.value) }}
                value={name}
                type="text"
                name="name"
                id="name"
                placeholder="&nbsp;First Last"
              />
            </label>
            <label htmlFor="phone">Phone:
              <input
                onChange={(e) => { setPhone(e.target.value) }}
                value={phone}
                type="tel"
                name="phone"
                id="phone"
                placeholder="&nbsp;#"
              />
            </label>
            <label htmlFor="email">Email:
              <input
                onChange={(e) => { setEmail(e.target.value) }}
                value={email}
                type="email"
                name="email"
                id="email"
                placeholder="&nbsp;eg@example.com"
              />
            </label>
            <div
              role="img"
              aria-label="phone icon"
              id="contact-template-img"
              className="template-img-form scale3">
            </div>
            <label htmlFor="message">Message:
              <textarea
                onChange={(e) => { setMessage(e.target.value) }}
                value={message}
                name="message"
                id="message"
                maxLength="1000"
              >
              </textarea>
            </label>
            <p id="sent"></p>
            <input type="submit" value="Send" id="sub" />
            <br />
          </form>
        </div>
      </section>
      <div className="template-border-img">
        <div className="template-img">
          <div role="img" aria-label="email notifications" id="contact-template-img-overlay" className="template-img-overlay">
            <div className="circle-progress template-shrink">
              <div className="button-container">
                <button aria-label="open-left" className="fas fa-arrow-alt-circle-left button-next open-left"></button>
                <button aria-label="open-right" className="fas fa-arrow-alt-circle-right button-next open-right"></button>
              </div>
              <div className="slider slider-count">
                <a href="mailto:shlooby07@gmail.com" rel="noreferrer" target="_blank" className="a image-1"></a>
                <a href="mailto:shlooby07@gmail.com" rel="noreferrer" target="_blank" className="a image-fill-right"></a>
                <div className="inner"></div>
                <a href="tel:0434-984-983" rel="noreferrer" target="_blank" className="a image-2"></a>
                <a href="tel:0434-984-983" rel="noreferrer" target="_blank" className="a image-fill-left"></a>
                <div className="static-count">
                  <img src={mail} alt="mail" />
                  <div>
                    <a href="mailto:shlooby07@gmail.com" rel="noreferrer" target="_blank">Mail me</a>
                  </div>
                </div>
                <div className="static-count">
                  <img src={telephone} alt="telephone" />
                  <div>
                    <a href="tel:0434-984-983" rel="noreferrer" target="_blank">Phone me</a>
                  </div>
                </div>
                <div className="static-count">
                  <img src={linkedin} alt="LinkedIn" />
                  <div>
                    <a href="https://www.linkedin.com/in/daniel-costello-579b10259/" rel="noreferrer" target="_blank">LinkedIn</a>
                  </div>
                </div>
              </div>
              <div className="percentage"><div className="percentage-change"></div></div>
              <button onClick={click} className='template-b'>Get in touch ..</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
