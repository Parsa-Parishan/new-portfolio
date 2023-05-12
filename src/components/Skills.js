import React from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoSass,
  IoLogoGithub,
  IoLogoReact,
} from "react-icons/io5";
import { SiJquery, SiRedux } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";

export default function Skills() {
  return (
    <div className="skills">
      <ul>
        <li>
          <IoLogoHtml5 />
        </li>
        <li>
          <IoLogoCss3 />
        </li>
        <li>
          <IoLogoJavascript />
        </li>
        <li>
          <IoLogoSass />
        </li>
        <li>
          <IoLogoGithub />
        </li>
        <li>
          <IoLogoReact />
        </li>
        <li>
          <SiJquery />
        </li>
        <li>
          <SiRedux />
        </li>
        <li>
          <BsFillBootstrapFill />
        </li>
      </ul>
    </div>
  );
}
