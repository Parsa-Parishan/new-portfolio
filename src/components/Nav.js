import React from "react";

export default function Nav({ landing }) {
  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          <a href="#">Parsa Parishan</a>
        </div>
        <div className="position">Web Developer</div>
      </div>
      <div className="right">
        <div className="resume">
          <a href="#resume">Resume</a>
        </div>
        <div className="about">
          <a href="#about">About</a>
        </div>
        <div className="contact">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
