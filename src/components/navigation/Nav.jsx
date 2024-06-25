import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse m-3" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experience">
              Experience
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link contact-link" href="#contact">
              Contact
            </a>
          </li>
          <li class="nav-item pdf-btn">
            <button class="btn btn-primary">
              <a
                href="/documents/resume.pdf"
                class="no-link-style"
                target="_blank"
              >
                Resume (PDF)
              </a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
