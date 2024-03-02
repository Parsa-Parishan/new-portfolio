import React, { useEffect, useState } from "react";
import avatar from "../img/avatar.jpeg";
import arrow from "../img/icon/arrow.svg";
import resume_pdf from "../img/resume_pdf.png";
import Resume from "../resume/Parsa-parishan.docx";

export default function Profile() {
  const [show, setShow] = useState(false);
  const [header, setHeader] = useState(false);
  const [background, setBackground] = useState(false);
  const [caption, setCaption] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setHeader(() => true);
      }
      if (window.scrollY >= 360) {
        setBackground(() => true);
      }

      if (window.scrollY >= 700) {
        setCaption(() => true);
      }
    });
  }, []);

  return (
    <div className="profile">
      <div className="profile-header">
        <h1 className={`${header && "header-transition"}`} id="about">
          Hello. I am Parsa<span>Parishan</span>
        </h1>
      </div>
      <div className="background-avatar">
        <div className="background" id="background">
          <p className={`${background && "background-transition"}`}>
            I’m a Web Developer with two years of experience. I have worked with
            a small team at WebDev Canada. I helped with creating and
            maintaining components. I worked on the Front-End side of things. My
            daily stack consists of React.Js, React router, Redux.js, and Sass.
            <span id="resume"></span>I also work on my projects to hone and
            expand my skills. I’m currently learning Back-End development to
            gradually shift toward Full-stack.
          </p>
          <br />
          <div
            className="resume"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <a href={Resume} target="_blank">
              <span className="first">&nbsp;Resume</span>
              <span className="second">&nbsp;Resume</span>
            </a>
            {/* <span>Resume</span>
            <span>Resume</span>
            <span>Resume</span>
            <span>Resume</span>
            <span>Resume</span>
            <span>Resume</span> */}
          </div>
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <p className={`caption ${caption && "caption-transition"}`}>
            <span>He kinda looks like me</span>
            <svg width="136" height="90" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.791 49.777c-.154 4.195-.626 7.827.954 11.852C7.36 73.39 17.485 82.682 29.442 85.955c6.397 1.75 13.576 2.803 20.193 1.89C62.927 86.012 76.9 76.609 87.222 68.784c20.494-15.536 36.094-38.7 35.837-65.222-.256 2.407 2.277 5.37 3.358 7.347 3.17 5.796 5.405 12.093 8.129 18.101.294-2.43-1.167-8.517-1.441-9.82a58.697 58.697 0 0 0-4.824-15.298 6.762 6.762 0 0 1-1.419-2.863c-3.007-.098-5.698.975-8.074 3.217-7.107 4.072-13.72 9.399-19.817 14.854"
                stroke="#FFF"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              ></path>
            </svg>
          </p>
        </div>
      </div>
      <div className={`resume-pdf ${show ? "show-resume" : undefined}`}>
        <img src={resume_pdf} alt="resume" />
      </div>
    </div>
  );
}
