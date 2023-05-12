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
          <a href="#">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="#">
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
