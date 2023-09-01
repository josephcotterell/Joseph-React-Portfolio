import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/josephcotterell">
          <AiFillGithub />
        </a>

        <a href="https://www.linkedin.com/in/joseph-cotterell-3b1562254/">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
