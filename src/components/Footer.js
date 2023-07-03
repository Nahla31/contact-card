import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="footer--ul">
          <li>
            <a
              href="https://github.com/Nahla31?tab=repositories"
              target="_blank"
            >
              <img
                src="./images/icons8-github-24.png"
                className="github--icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nahla-gamal-5bb5a1105/"
              target="_blank"
            >
              <img
                src="./images/icons8-linkedin-24.png"
                className="linkedin--icon"
              />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
