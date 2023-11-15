import React, { useEffect, useState } from "react";
import ecom from "../img/screenshots/ecom.png";
import weather from "../img/screenshots/weather.png";
import note from "../img/screenshots/note.png";
import oldPortfolio from "../img/screenshots/oldPortfolio.png";
import kanban from "../img/screenshots/kanban.png";
import form from "../img/screenshots/form.jpg";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    name: "Ecommerce website",
    image: ecom,
    description:
      "E-commerce website for vintage clothes. Integrated shopping cart to the web app, cart summary, and preview. A list of products and utilized React Router for each page such as login, creating an account, and a page for each product.",
    techStack: [
      "HTML/CSS",
      "JavaScript",
      "React JS",
      "React Router",
      "Framer Motion",
    ],
    githubLink: "https://github.com/Parsa-Parishan/my-shop",
    liveLink: "https://parsa-parishan.github.io/my-shop/",
  },
  {
    id: 2,
    name: "Multi-step Form",
    image: form,
    description:
      "A multi-step form, each component is a step of a sequence to select the type of a plan an extra add-ons with the plan, a summary of plan and add-ons.",
    techStack: ["HTML/CSS", "JavaScript", "React JS", "SASS"],
    githubLink: "https://github.com/Parsa-Parishan/form",
    liveLink: "http://parsa-parishan.github.io/form/",
  },
  {
    id: 3,
    name: "Link Sharing",
    image: form,
    description: "A fully functioanl link sharing app created with ReactJS.",
    techStack: ["HTML/CSS", "JavaScript", "React JS", "SASS"],
    githubLink: "https://github.com/Parsa-Parishan/link_sharing",
    liveLink: "https://parsa-parishan.github.io/link_sharing/",
  },
  {
    id: 4,
    name: "Old Portfolio",
    image: oldPortfolio,
    description: "A fully functioanl link sharing app created with ReactJS.",
    techStack: ["HTML/CSS", "JavaScript", "React JS", "SASS"],
    githubLink: "https://github.com/Parsa-Parishan/My-Portfolio",
    liveLink: "https://parsa-parishan.github.io/My-Portfolio/",
  },
  {
    id: 5,
    name: "Current weather/forecast app",
    image: weather,
    description:
      "A weather forecast app, showing current weather and the next five days. The app utilizes Weather API and GEO API for the cities data. With implemented async pagination for a better user experience with city suggestions.",
    techStack: [
      "HTML/CSS",
      "JavaScript",
      "React JS",
      "SASS",
      "GEO API",
      "WEATHER API",
    ],
    githubLink: "https://github.com/Parsa-Parishan/My-Weather-App",
    liveLink: "https://parsa-parishan.github.io/My-Weather-App/",
  },
  {
    id: 6,
    name: "kanban",
    image: kanban,
    description:
      "Organize the daily task with the ability to drag and drop from one column to another.",
    techStack: ["HTML/CSS", "JavaScript"],
    githubLink: "https://github.com/Parsa-Parishan/kanban-board",
    liveLink: "https://parsa-parishan.github.io/kanban-board/",
  },
];

export default function Projects() {
  const [header, setHeader] = useState(false);

  const [scrollPositions, setScrollPositions] = useState(Array(6).fill(false));
  const [modalOpen, setModalOpen] = useState(Array(6).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const positions = [
        1036, // Adjust these values based on your layout
        1170,
        1430,
        1710,
        1980,
        2190,
        2280,
      ];
      const updatedScrollPositions = positions.map(
        (pos) => window.scrollY >= pos
      );
      setScrollPositions(updatedScrollPositions);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleModalClose = () => {
    setModalOpen(Array(6).fill(false));
  };

  const handleModalOpen = (index) => {
    setModalOpen((prevState) => prevState.map((value, i) => i === index));
  };

  const body = document.body;
  if (modalOpen.some((open) => open)) {
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
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`project ${project.name
              .toLowerCase()
              .replace(/\s/g, "-")} ${modalOpen[index] && "modal"}`}
            onClick={() => handleModalOpen(index)}
          >
            <div
              className={`image-wrapper ${
                scrollPositions[index] && "project-transition"
              }`}
            >
              <div className="image">
                <div className="filter"></div>
                <img src={project.image} alt={project.name} />
              </div>
            </div>
            <div
              className={`caption ${
                scrollPositions[index] && "name-transition"
              }`}
            >
              <div className="caption-header">
                <h2>{project.name}</h2>
              </div>
              <div className="caption-paragraph">
                <p>{project.description}</p>
              </div>
              <div className="caption-tech">
                <ul>
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="links">
                <a href={project.githubLink} target="_blank">
                  <FaGithub />
                </a>
                <a href={project.liveLink} target="_blank">
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
