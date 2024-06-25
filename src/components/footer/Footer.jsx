import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <span className="copyright"> &copy; Isabel Acevedo</span>



        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="#about" class="nav-link px-2 text-muted">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a href="#experience" class="nav-link px-2 text-muted">
              Experience
            </a>
          </li>
          <li class="nav-item">
            <a href="#skills" class="nav-link px-2 text-muted">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a href="#projects" class="nav-link px-2 text-muted">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
