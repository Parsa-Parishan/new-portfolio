import React, { useEffect, useState } from "react";
import ecom from "../img/screenshots/ecom.png";
import weather from "../img/screenshots/weather.png";
import note from "../img/screenshots/note.png";
import oldPortfolio from "../img/screenshots/oldPortfolio.png";
import kanban from "../img/screenshots/kanban.png";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [commerse, setCommerse] = useState(false);
  const [header, setHeader] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);
  const [modalFour, setModalFour] = useState(false);
  const [modalFive, setModalFive] = useState(false);

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
      if (window.scrollY >= 1980) {
        setFourth(() => true);
      }
      if (window.scrollY >= 2190) {
        setFifth(() => true);
      }
    });
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("project")) {
        setModalOne(() => false);
        setModalTwo(() => false);
        setModalThree(() => false);
        setModalFour(() => false);
      }
    });
  }, []);

  const body = document.body;
  if (modalOne || modalTwo || modalThree) {
    body.classList = "hidden-overflow";
  } else {
    body.classList = "";
  }

  return (
    <div className="projects">
      <div className="header">
        <h2 className={`${header && "project-header "}`}>
          Part of my portfolio
        </h2>
      </div>
      <div className="show-case">
        <div
          className={`project ecommerce ${modalOne && "modal"}`}
          onClick={() => setModalOne(() => true)}
        >
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
            <div className="caption-paragraph">
              <p>
                E-commerce website for vintage clothes. Integrated shopping cart
                to the web app, cart summary, and preview. A list of products
                and utilized React Router for each page such as login, creating
                An account, and a page for each product.
              </p>
            </div>
            <div className="caption-tech">
              <ul>
                <li>HTML.CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT JS</li>
                <li>REACT ROUTER</li>
                <li>FRAMER-MOTION</li>
              </ul>
            </div>
            <div className="links">
              <a
                href="https://github.com/Parsa-Parishan/my-shop"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://parsa-parishan.github.io/my-shop/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div
          className={`project oldPortfolio ${modalTwo && "modal"}`}
          onClick={() => setModalTwo(() => true)}
        >
          <div className={`image-wrapper ${second && "project-transition"}`}>
            <div className="image">
              <div className="filter"></div>
              <img src={oldPortfolio} alt="old portfolio" />
            </div>
          </div>
          <div className={`caption ${second && "name-transition"}`}>
            <div className="caption-header">
              <h2>Old Portfolio</h2>
            </div>
            <div className="caption-paragraph"></div>
            <div className="caption-tech">
              <ul>
                <li>HTML.CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT JS</li>
                <li>FRAMER-MOTION</li>
              </ul>
            </div>
            <div className="links">
              <a
                href="https://github.com/Parsa-Parishan/My-Portfolio"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://parsa-parishan.github.io/My-Portfolio/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div
          className={`project api ${modalThree && "modal"}`}
          onClick={() => setModalThree(() => true)}
        >
          <div className={`image-wrapper ${third && "project-transition"}`}>
            <div className="image">
              <div className="filter"></div>
              <img src={weather} alt="weather api" />
            </div>
          </div>
          <div className={`caption ${third && "name-transition"}`}>
            <div className="caption-header">
              <h2>Current weather/forecast app</h2>
            </div>
            <div className="caption-paragraph">
              <p>
                A weather forecast app, showing current weather and the next
                five days. The app utilizes Weather API and GEO API for the
                cities data. With implemented async pagination for a better user
                experience with city suggestions.
              </p>
            </div>
            <div className="caption-tech">
              <ul>
                <li>HTML/CSS</li>
                <li>JAVASCIRPT</li>
                <li>REACT JS</li>
                <li>WEATHER API</li>
                <li>GEO API</li>
                <li>SASS</li>
              </ul>
            </div>
            <div className="links">
              <a
                href="https://github.com/Parsa-Parishan/My-Weather-App"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://parsa-parishan.github.io/My-Weather-App/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div
          className={`project kanban ${modalFour && "modal"}`}
          onClick={() => setModalFour(() => true)}
        >
          <div className={`image-wrapper ${fourth && "project-transition"}`}>
            <div className="image">
              <div className="filter"></div>
              <img src={kanban} alt="kanban board" />
            </div>
          </div>
          <div className={`caption ${fourth && "name-transition"}`}>
            <div className="caption-header">
              <h2>Kanban Board</h2>
            </div>
            <div className="caption-paragraph">
              <p>
                Organize the daily task with the ability to drag and drop from
                one column to another.
              </p>
            </div>
            <div className="caption-tech">
              <ul>
                <li>HTML/CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT JS</li>
              </ul>
            </div>
            <div className="links">
              <a
                href="https://github.com/Parsa-Parishan/Note-App"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://parsa-parishan.github.io/Note-App/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div
          className={`project filler ${modalFive && "modal"}`}
          onClick={() => setModalFive(() => true)}
        >
          <div className={`image-wrapper ${fifth && "project-transition"}`}>
            <div className="image">
              <div className="filter"></div>
              <img src={note} alt="note" />
            </div>
          </div>
          <div className={`caption ${fifth && "name-transition"}`}>
            <div className="caption-header">
              <h2>Note App</h2>
            </div>
            <div className="caption-paragraph">
              <p>
                Note Taking app is built in React JS. The main function of this
                app is creating notes, editing notes and deleting notes.
              </p>
            </div>
            <div className="caption-tech">
              <ul>
                <li>HTML/CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT JS</li>
                <li>REACT RESPONSIVE MODAL</li>
              </ul>
            </div>
            <div className="links">
              <a
                href="https://github.com/Parsa-Parishan/Note-App"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://parsa-parishan.github.io/Note-App/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
