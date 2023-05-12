import React, { useEffect, useState } from "react";
import ecom from "../img/screenshots/ecom.png";
import weather from "../img/screenshots/weather.png";
import note from "../img/screenshots/note.png";

export default function Projects() {
  const [commerse, setCommerse] = useState(false);
  const [header, setHeader] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {

      if (window.scrollY >= 1036) {
        setHeader(() => true);
      }
      if (window.scrollY >= 1170) {
        setFirst(() => true);
      }
      if (window.scrollY >= 1430) {
        setSecond(() => true);
      }
      if (window.scrollY >= 1710) {
        setThird(() => true);
      }
    });
  }, []);

  return (
    <div className="projects">
      <div className="header">
        <h2 className={`${header && "project-header "}`}>
          Part of my portfolio
        </h2>
      </div>
      <div className="show-case">
        <div className={`project ecommerce`}>
          <div className={`image-wrapper ${first && "project-transition"}`}>
            <div className="image">
              <div className="filter"></div>
              <img src={ecom} alt="ecommerce" />
            </div>
          </div>
          <div className={`caption ${first && "name-transition"}`}>
            <div className="caption-header">
              <h2>Ecommerce website</h2>
            </div>
          </div>
        </div>
        <div className="project api">
          <div className={`image-wrapper ${second && "project-transition"}`}>
            <div className="image">
              <div className="filter"></div>
              <img src={weather} alt="weather api" />
            </div>
          </div>
          <div className={`caption ${second && "name-transition"}`}>
            <div className="caption-header">
              <h2>Current weather/forecast app</h2>
            </div>
          </div>
        </div>
        <div className="project filler">
          <div className={`image-wrapper ${third && "project-transition"}`}>
            <div className="image">
              <div className="filter"></div>
              <img src={note} alt="note" />
            </div>
          </div>
          <div className={`caption ${third && "name-transition"}`}>
            <div className="caption-header">
              <h2>Note App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
