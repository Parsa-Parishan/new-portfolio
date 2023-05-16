import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="https://github.com/Parsa-Parishan" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/parsa-parishan-419117252/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/parsa_parishan/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="mailto:parsa.parishan2017@gmail.com">
            <FaRegEnvelope />
          </a>
        </li>
      </ul>
      <div className="credit">
        <a href="#">Designed & Built by Parsa Parishan</a>
      </div>
    </div>
  );
}
