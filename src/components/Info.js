import React from "react";
import Button from "react-bootstrap/Button";
function Info() {
  return (
    <>
      <img src="./images/Selfie.jpg" className="img--contact" />
      <h3 className="contact--name">Nahla Gamal</h3>
      <p className="contact--job">Frontend Developer</p>
      <div className="button--container">
        <a
          href="mailto:nahlagamal3125@gmail.com"
          target="_blank"
          id="email--button"
          className="buttons"
        >
          <img src="./images/email.png" /> &nbsp; Email
        </a>
        <a
          href="https://www.linkedin.com/in/nahla-gamal-5bb5a1105/"
          target="_blank"
          id="linkedin--button"
          className="buttons"
        >
          <img src="./images/linkedin-2-16.png" /> &nbsp; LinkedIn
        </a>
      </div>
    </>
  );
}

export default Info;
