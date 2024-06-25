import React from "react";
import "./index.css";
import Nav from "./components/navigation/Nav";
import Home from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Nav />
      <main className="main">
        <section className="bg">
          <Home />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
