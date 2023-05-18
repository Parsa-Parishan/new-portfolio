import React, { useEffect, useState } from "react";

export default function Header({ landing }) {
  return (
    <div className="header">
      <div className="intro">
        <div className="greet">
          <div className={`${landing && "something-transition"}`}>Hi, I'm</div>
        </div>
        <h1>
          <div className="name">
            <div className={`first ${landing && "name-transition"}`}>
              Parsa,{" "}
            </div>
            <div className={`${landing && "name-transition"}`}>I'm a</div>
          </div>
          <div className="occupation">
            <div className={`${landing && "name-transition"}`}>Web</div>
            <div className={`${landing && "name-transition"}`}>developer</div>
          </div>
        </h1>
      </div>
      <div className="about-me">
        <div>
          <p>I’m a Web Developer based in</p>
          <p> Canada and I love creating stunning websites.</p>
          <p>I work on the Front-End side of things to help</p>
          <p>create and maintain components. I love working on new</p>
          <p>ideas to hone and expand my skills. I’m</p>
          <p>currently learning Back-End development to</p>
          <p>gradually shift toward Full-stack.</p>
        </div>
      </div>
    </div>
  );
}
