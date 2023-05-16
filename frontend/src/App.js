import react, { useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Extra from "./components/Extra";
import { useState } from "react";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  const [transoform, setTransoform] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const [landing, setLanding] = useState(false);
  const [hidden, setHidden] = useState(true);

  window.addEventListener("scroll", () => {
    // if (window.scrollY > 450) {
      setOpacity(window.scrollY / 1500);
    // }
  });

  const body = document.body;
  body.classList = hidden && "hidden-overflow";

  useEffect(() => {
    const intro = setTimeout(() => {
      setTransoform(() => false);
    }, 1000);

    const nav = setTimeout(() => {
      setLanding(() => true);
    }, 1500);

    const hide = setTimeout(() => {
      setHidden(() => false);
    }, 2500);

    return () => {
      clearTimeout(intro);
      clearTimeout(nav);
      clearTimeout(hide);
    };
  }, []);

  const style = {
    opacity: opacity,
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: 3,
    inset: 0,
    margin: "auto",
    background: "#1a1a1d",
  };

  return (
    <>
      <div className="App">
        <div className="cover">
          <div className={`hole ${transoform && "transform-hole"}`}></div>
        </div>
        <div className="dark" style={style}></div>
        <nav className={`${landing && "nav-transition"}`}>
          <Nav />
        </nav>
        <header>
          <Extra setTransoform={setTransoform} landing={landing} />
          <Header landing={landing} />
        </header>
        <main>
          <Profile />
          {/* <Skills /> */}
          <Projects />
        </main>
        <Socials />
        <Connect />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
